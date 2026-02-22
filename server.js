import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import OpenAI from "openai";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

// ===== Serve index.html from root =====
app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

mongoose.connect(process.env.MONGO_URI);

// ===== MODELS =====
const User = mongoose.model("User", new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
}));

const Conversation = mongoose.model("Conversation", new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  messages: [{ role: String, content: String }]
}, { timestamps: true }));

// ===== AUTH MIDDLEWARE =====
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
};

// ===== RATE LIMIT =====
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

// ===== OPENAI =====
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ===== AUTH ROUTES =====
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });
  res.json({ message: "Registered" });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

// ===== STREAMING GPT =====
app.post("/api/chat", auth, limiter, async (req, res) => {
  const { message, conversationId, model } = req.body;

  let conversation;

  if (conversationId) {
    conversation = await Conversation.findById(conversationId);
  } else {
    conversation = await Conversation.create({
      userId: req.user.id,
      messages: []
    });
  }

  conversation.messages.push({ role: "user", content: message });
  await conversation.save();

  const stream = await openai.chat.completions.create({
    model: model || "gpt-4o-mini",
    messages: conversation.messages,
    stream: true
  });

  res.setHeader("Content-Type", "text/event-stream");

  let fullReply = "";

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || "";
    fullReply += content;
    res.write(content);
  }

  conversation.messages.push({ role: "assistant", content: fullReply });
  await conversation.save();

  res.end();
});

app.listen(3000, () => console.log("Running on 3000"));
const chat = document.getElementById("chat");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");
const typing = document.getElementById("typing");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "message " + type;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  typing.style.display = "block";

  setTimeout(async () => {
    let response;

    if (text.toLowerCase().includes("who is shaurya")) {
      response = "Shaurya Chauhan is the founder and CEO of Shaurya AI.";
    } else {
      response = await fetchWiki(text);
    }

    typing.style.display = "none";
    addMessage(response, "ai");
  }, 600);
}

async function fetchWiki(query) {
  try {
    const res = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      encodeURIComponent(query)
    );
    const data = await res.json();
    return data.extract || "No reliable information found.";
  } catch {
    return "Error fetching information.";
  }
}
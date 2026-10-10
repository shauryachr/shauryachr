<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shaurya Chauhan — Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #f4f1ea; --bg-soft: #ebe7de; --text: #1a2332; --text-muted: #5a6577;
      --teal: #0d7377; --navy: #1e2a3a; --coral: #e07a5f; --amber: #d4a017;
      --indigo: #4a5568; --violet: #6b5b95; --orange: #e85d04; --white: #ffffff;
      --radius: 12px;
      --font-display: "Space Grotesk", system-ui, sans-serif;
      --font-body: "Manrope", system-ui, sans-serif;
      --font-mono: "DM Mono", monospace;
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font-body); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }
    .header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.25rem 3rem; background: rgba(244,241,234,0.85);
      backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.04);
    }
    .logo { font-family: var(--font-display); font-weight: 700; font-size: 1.15rem; letter-spacing: -0.02em; }
    .nav { display: flex; gap: 2.5rem; }
    .nav a { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em; color: var(--text-muted); transition: color 0.2s; }
    .nav a:hover { color: var(--text); }
    .hero {
      min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; align-items: center;
      gap: 4rem; padding: 8rem 3rem 4rem; max-width: 1400px; margin: 0 auto;
    }
    .hero-tag {
      display: flex; align-items: center; gap: 0.5rem; font-size: 0.7rem; font-weight: 600;
      letter-spacing: 0.1em; color: var(--teal); margin-bottom: 1.5rem; text-transform: uppercase;
    }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--teal); display: inline-block; }
    .hero-name {
      font-family: var(--font-display); font-weight: 700; font-size: clamp(3.5rem, 7vw, 5.5rem);
      line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 1.75rem;
    }
    .name-dark { color: var(--navy); }
    .name-teal { color: var(--teal); }
    .hero-bio { max-width: 420px; font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2.5rem; line-height: 1.7; }
    .hero-actions { display: flex; align-items: center; gap: 1.5rem; }
    .btn-primary {
      display: inline-flex; align-items: center; gap: 0.5rem; background: var(--navy); color: var(--white);
      padding: 0.85rem 1.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em;
      border-radius: 6px; transition: background 0.2s, transform 0.15s;
    }
    .btn-primary:hover { background: #2a3a4e; transform: translateY(-1px); }
    .btn-ghost { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; color: var(--text-muted); transition: color 0.2s; }
    .btn-ghost:hover { color: var(--text); }
    .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
    .photo-frame {
      position: relative; width: min(420px, 90%); aspect-ratio: 1; border-radius: 8px; overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05); background: #ddd;
    }
    .portrait { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
    .photo-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35)),
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.03) 19px, rgba(255,255,255,0.03) 20px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255,255,255,0.03) 19px, rgba(255,255,255,0.03) 20px);
      pointer-events: none; z-index: 2;
    }
    .circle-guide {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: 72%; height: 72%; border: 1.5px solid rgba(232, 93, 4, 0.55); border-radius: 50%; z-index: 3; pointer-events: none;
    }
    .circle-guide::before {
      content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: 100%; height: 100%; border: 1px solid rgba(232, 93, 4, 0.25); border-radius: 50%; scale: 1.15;
    }
    .photo-label {
      position: absolute; bottom: 14px; left: 16px; font-family: var(--font-mono); font-size: 0.6rem;
      letter-spacing: 0.08em; color: rgba(255,255,255,0.85); z-index: 4;
    }
    .photo-angle {
      position: absolute; top: 14px; right: 16px; font-family: var(--font-mono); font-size: 0.6rem;
      letter-spacing: 0.06em; color: rgba(255,255,255,0.7); z-index: 4;
    }
    .hero-visual::before, .hero-visual::after {
      content: ""; position: absolute; border-radius: 50%; border: 1px solid rgba(13,115,119,0.12); pointer-events: none;
    }
    .hero-visual::before { width: 520px; height: 520px; top: 50%; left: 50%; transform: translate(-48%, -52%); }
    .hero-visual::after { width: 380px; height: 380px; top: 50%; left: 50%; transform: translate(-45%, -48%); border-color: rgba(13,115,119,0.08); }
    .projects { padding: 6rem 3rem 4rem; max-width: 1400px; margin: 0 auto; }
    .section-header { margin-bottom: 3.5rem; max-width: 700px; }
    .section-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; color: var(--coral); margin-bottom: 1rem; }
    .section-title {
      font-family: var(--font-display); font-weight: 700; font-size: clamp(2.8rem, 5vw, 4rem);
      line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 1.25rem;
    }
    .title-dark { color: var(--navy); }
    .title-teal { color: var(--teal); }
    .section-desc { font-size: 1rem; color: var(--text-muted); max-width: 380px; margin-left: auto; margin-top: -4rem; text-align: right; }
    .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .project-card {
      background: var(--white); border-radius: var(--radius); overflow: hidden; display: grid;
      grid-template-columns: 180px 1fr; border: 1px solid rgba(0,0,0,0.04);
      transition: transform 0.25s, box-shadow 0.25s;
    }
    .project-card:hover { transform: translateY(-3px); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1); }
    .card-visual { position: relative; min-height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .card-visual.teal { background: linear-gradient(145deg, #0d7377, #14919b); }
    .card-visual.coral { background: linear-gradient(145deg, #c45c45, #e07a5f); }
    .card-visual.indigo { background: linear-gradient(145deg, #3d4a5c, #5a6a80); }
    .card-visual.amber { background: linear-gradient(145deg, #b8860b, #d4a017); }
    .card-visual.violet { background: linear-gradient(145deg, #5a4a7a, #6b5b95); }
    .blob {
      width: 90px; height: 120px; background: rgba(255,255,255,0.18); border-radius: 50% / 40%;
      filter: blur(1px); box-shadow: 0 0 40px rgba(255,255,255,0.15);
    }
    .card-num { position: absolute; top: 12px; left: 14px; font-family: var(--font-mono); font-size: 0.7rem; color: rgba(255,255,255,0.7); }
    .signal { position: absolute; bottom: 12px; left: 14px; font-size: 0.55rem; font-weight: 600; letter-spacing: 0.1em; color: rgba(255,255,255,0.65); }
    .card-body { padding: 1.5rem 1.5rem 1.25rem; display: flex; flex-direction: column; gap: 0.6rem; }
    .card-meta { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; }
    .tag { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.1em; color: var(--text-muted); }
    .status { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.06em; }
    .status.active { color: var(--teal); }
    .status.shipped { color: var(--text-muted); }
    .status.live { color: var(--coral); }
    .card-body h3 { font-family: var(--font-display); font-weight: 600; font-size: 1.25rem; letter-spacing: -0.02em; color: var(--navy); }
    .card-body p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.55; flex: 1; }
    .tech-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.4rem; }
    .tech-pills span { font-size: 0.6rem; font-weight: 500; padding: 0.25rem 0.55rem; background: var(--bg-soft); border-radius: 4px; color: var(--text-muted); }
    .card-link { font-size: 0.7rem; font-weight: 500; color: var(--teal); margin-top: 0.3rem; transition: opacity 0.2s; }
    .card-link:hover { opacity: 0.75; }
    .projects-footer {
      display: flex; justify-content: space-between; align-items: center; margin-top: 3rem; padding-top: 1.5rem;
      border-top: 1px solid rgba(0,0,0,0.06); font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em; color: var(--text-muted);
    }
    .github-link:hover { color: var(--text); }
    .patent { background: #1a2332; color: #e8e4db; padding: 5rem 3rem 0; margin-top: 4rem; }
    .patent-inner { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding-bottom: 3rem; }
    .patent-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em; color: var(--orange); margin-bottom: 0.75rem; }
    .dot-orange { width: 7px; height: 7px; border-radius: 50%; background: var(--orange); }
    .patent-sub { font-size: 0.7rem; letter-spacing: 0.1em; color: rgba(255,255,255,0.45); margin-bottom: 1.5rem; }
    .patent-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(3rem, 6vw, 4.5rem); line-height: 1.0; letter-spacing: -0.03em; color: #f0ebe3; }
    .patent-title .orange { color: var(--orange); }
    .patent-right { display: flex; flex-direction: column; justify-content: center; gap: 1rem; padding-top: 2rem; }
    .patent-intro { font-size: 1rem; color: rgba(255,255,255,0.6); max-width: 380px; }
    .patent-name { font-family: var(--font-display); font-weight: 600; font-size: 1.35rem; color: var(--orange); letter-spacing: -0.01em; }
    .patent-desc { font-size: 0.95rem; color: rgba(255,255,255,0.55); line-height: 1.65; max-width: 420px; }
    .patent-note { font-size: 0.8rem; color: rgba(255,255,255,0.4); margin-top: 0.5rem; }
    .patent-meta { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(255,255,255,0.08); padding: 1.75rem 0; }
    .meta-item { display: flex; flex-direction: column; gap: 0.4rem; }
    .meta-label { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.12em; color: rgba(255,255,255,0.4); }
    .meta-value { font-family: var(--font-display); font-size: 1.5rem; font-weight: 600; letter-spacing: -0.02em; }
    .patent-cta { background: var(--orange); padding: 2.5rem 3rem; display: flex; align-items: center; justify-content: space-between; }
    .cta-label { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; color: rgba(0,0,0,0.45); }
    .cta-link { font-family: var(--font-display); font-weight: 700; font-size: 2rem; letter-spacing: -0.02em; color: var(--navy); display: flex; align-items: center; gap: 0.5rem; transition: opacity 0.2s; }
    .cta-link:hover { opacity: 0.8; }
    .contact { padding: 6rem 3rem; max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
    .contact-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(2.8rem, 5vw, 4rem); line-height: 1.05; letter-spacing: -0.03em; margin-top: 0.75rem; }
    .contact-intro { font-size: 1rem; color: var(--text-muted); margin-bottom: 1.75rem; }
    .contact-links { display: flex; flex-direction: column; gap: 0.75rem; }
    .contact-btn {
      display: inline-flex; align-items: center; justify-content: space-between; padding: 0.9rem 1.25rem;
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; border-radius: 6px;
      border: 1px solid rgba(0,0,0,0.1); background: transparent; transition: background 0.2s, border-color 0.2s, color 0.2s; max-width: 380px;
    }
    .contact-btn.primary { background: var(--navy); color: var(--white); border-color: var(--navy); }
    .contact-btn.primary:hover { background: #2a3a4e; }
    .contact-btn:not(.primary):hover { border-color: var(--navy); color: var(--navy); }
    .contact-btn.outline { border-style: dashed; }
    .footer { padding: 2rem 3rem 2.5rem; max-width: 1400px; margin: 0 auto; border-top: 1px solid rgba(0,0,0,0.06); }
    .footer-links { display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 2rem; }
    .footer-links a:hover { color: var(--text); }
    .footer-bottom { display: flex; justify-content: space-between; align-items: center; font-size: 0.65rem; font-weight: 500; letter-spacing: 0.06em; color: var(--text-muted); }
    .back-top:hover { color: var(--text); }
    @media (max-width: 980px) {
      .hero { grid-template-columns: 1fr; padding-top: 7rem; gap: 3rem; }
      .hero-visual { order: -1; }
      .photo-frame { width: min(340px, 80%); }
      .section-desc { margin-top: 1rem; margin-left: 0; text-align: left; }
      .projects-grid { grid-template-columns: 1fr; }
      .project-card { grid-template-columns: 140px 1fr; }
      .patent-inner { grid-template-columns: 1fr; }
      .patent-meta { grid-template-columns: 1fr; gap: 1.25rem; }
      .contact { grid-template-columns: 1fr; }
      .header { padding: 1rem 1.5rem; }
      .nav { gap: 1.25rem; }
      .hero, .projects, .contact, .footer { padding-left: 1.5rem; padding-right: 1.5rem; }
      .patent { padding-left: 1.5rem; padding-right: 1.5rem; }
      .patent-cta { padding-left: 1.5rem; padding-right: 1.5rem; flex-direction: column; align-items: flex-start; gap: 1rem; }
      .cta-link { font-size: 1.5rem; }
    }
    @media (max-width: 600px) {
      .project-card { grid-template-columns: 1fr; }
      .card-visual { min-height: 140px; }
      .nav a { font-size: 0.65rem; }
      .hero-actions { flex-direction: column; align-items: flex-start; }
    }
  </style>
</head>
<body>
  <header class="header">
    <a href="#" class="logo">SC.</a>
    <nav class="nav">
      <a href="#work">WORK</a>
      <a href="#patent">PATENT</a>
      <a href="#contact">CONTACT</a>
    </nav>
  </header>
  <section class="hero">
    <div class="hero-content">
      <p class="hero-tag">
        <span class="dot"></span>
        DEVELOPER &nbsp;·&nbsp; INVENTOR &nbsp;·&nbsp; BUILDER &nbsp;—&nbsp; A.K.A. @SHAURYACHR
      </p>
      <h1 class="hero-name">
        <span class="name-dark">Shaurya</span><br />
        <span class="name-teal">Chauhan</span>
      </h1>
      <p class="hero-bio">
        I design and ship end-to-end web products — from AI-powered apps to academic platforms — and I hold a granted Indian patent for a cricket-ground cleaning drone. I build things that work, and I sweat the details until they look like it too.
      </p>
      <div class="hero-actions">
        <a href="#work" class="btn-primary">VIEW PROJECTS <span>↓</span></a>
        <a href="#patent" class="btn-ghost">SEE THE PATENT</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="photo-frame">
        <div class="photo-overlay"></div>
        <img src="https://strong-neglected-websites--shauryachr.replit.app/assets/shaurya_(1)_1788520580506-BgVWvDqM.jpg" alt="Portrait of Shaurya Chauhan" class="portrait" />
        <div class="circle-guide"></div>
        <span class="photo-label">PORTRAIT OF SHAURYA CHAUHAN</span>
        <span class="photo-angle">28° · 35mm</span>
      </div>
    </div>
  </section>
  <section id="work" class="projects">
    <div class="section-header">
      <p class="section-label">SELECTED WORK</p>
      <h2 class="section-title">
        <span class="title-dark">Projects I’ve</span><br />
        <span class="title-teal">built.</span>
      </h2>
      <p class="section-desc">
        A running log of the products I’ve designed and shipped — real, working, and iterated on over time.
      </p>
    </div>
    <div class="projects-grid">
      <article class="project-card">
        <div class="card-visual teal">
          <div class="blob"></div>
          <span class="card-num">01</span>
          <span class="signal">SIGNAL / TEAL</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">AI-POWERED WEB APP</span>
            <span class="status active">IN ACTIVE DEV ↗</span>
          </div>
          <h3>Virtual Wardrobe AI</h3>
          <p>An AI-powered wardrobe and outfit-scoring web app with an ink/cream/gold luxury aesthetic. Features Firebase Auth (email/password, Google OAuth, phone OTP), Cloudinary-backed image storage, Groq-powered outfit scoring, animated preloaders, Lenis smooth scroll, and a full onboarding flow.</p>
          <div class="tech-pills">
            <span>Firebase</span><span>Cloudinary</span><span>Groq API</span><span>Vercel / Cloudflare Workers</span><span>cPanel Pages</span>
          </div>
          <a href="https://vw.rksworld.org" class="card-link" target="_blank" rel="noopener">vw.rksworld.org ↗</a>
        </div>
      </article>
      <article class="project-card">
        <div class="card-visual coral">
          <div class="blob"></div>
          <span class="card-num">02</span>
          <span class="signal">SIGNAL / CORAL</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">SOCIAL PLATFORM</span>
            <span class="status shipped">SHIPPED ↗</span>
          </div>
          <h3>Vibe — Social Media App</h3>
          <p>A full social platform built on a Vasuki DB backend, with a live feed, real-time chat, and user profiles. Includes database-backed authentication, hashtag and mention parsing, and an age-gate flow.</p>
          <div class="tech-pills"><span>Vasuki DB</span><span>Auth</span><span>Real-time chat</span></div>
          <a href="https://vasuki.cloud/social" class="card-link" target="_blank" rel="noopener">vasuki.cloud/social ↗</a>
        </div>
      </article>
      <article class="project-card">
        <div class="card-visual indigo">
          <div class="blob"></div>
          <span class="card-num">03</span>
          <span class="signal">SIGNAL / INDIGO</span>
        </div>
        <div class="card-body">
          <div class="card-meta"><span class="tag">PERSONAL SITE</span></div>
          <h3>Personal Digital Business Card</h3>
          <p>A lightweight personal site serving as a live digital business card, linking through to my active work and social presence.</p>
          <div class="tech-pills"><span>cPanel Pages</span></div>
          <a href="https://rksworld.org/shaurya/card.html" class="card-link" target="_blank" rel="noopener">rksworld.org/shaurya/card.html ↗</a>
        </div>
      </article>
      <article class="project-card">
        <div class="card-visual amber">
          <div class="blob"></div>
          <span class="card-num">04</span>
          <span class="signal">SIGNAL / AMBER</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">DESKTOP AI ASSISTANT</span>
            <span class="status shipped">SHIPPED</span>
          </div>
          <h3>Jarvis — Python Voice Assistant</h3>
          <p>A Python-based desktop AI assistant inspired by Jarvis, handling voice commands, task automation, and conversational queries through speech recognition and text-to-speech.</p>
          <div class="tech-pills"><span>Python</span><span>Speech Recognition</span><span>Automation</span></div>
        </div>
      </article>
      <article class="project-card">
        <div class="card-visual violet">
          <div class="blob"></div>
          <span class="card-num">05</span>
          <span class="signal">SIGNAL / VIOLET</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">KNOWLEDGE TOOL</span>
            <span class="status shipped">SHIPPED ↗</span>
          </div>
          <h3>Wiki Knowledge Extractor</h3>
          <p>A tool that pulls and structures knowledge directly from Wikipedia, extracting clean, usable content for downstream use in other apps and research workflows.</p>
          <div class="tech-pills"><span>Python</span><span>Web Scraping</span><span>Data Extraction</span></div>
          <a href="https://shauryachr.github.io/wiki/" class="card-link" target="_blank" rel="noopener">shauryachr.github.io/wiki/ ↗</a>
        </div>
      </article>
      <article class="project-card">
        <div class="card-visual teal">
          <div class="blob"></div>
          <span class="card-num">06</span>
          <span class="signal">SIGNAL / TEAL</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">FORMS PLATFORM</span>
            <span class="status live">LIVE ↗</span>
          </div>
          <h3>Celton Forms</h3>
          <p>forms.celtonsolutions.com</p>
          <div class="tech-pills"><span>forms.celtonsolutions.com</span></div>
          <a href="https://forms.celtonsolutions.com" class="card-link" target="_blank" rel="noopener">forms.celtonsolutions.com ↗</a>
        </div>
      </article>
      <article class="project-card">
        <div class="card-visual coral">
          <div class="blob"></div>
          <span class="card-num">07</span>
          <span class="signal">SIGNAL / CORAL</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">AWARENESS PROJECT</span>
            <span class="status live">LIVE ↗</span>
          </div>
          <h3>Phishing awareness</h3>
          <p>https://celtonsolutions.com/projects/phishing-awareness/</p>
          <a href="https://celtonsolutions.com/projects/phishing-awareness/" class="card-link" target="_blank" rel="noopener">celtonsolutions.com/projects/phishing-awareness/ ↗</a>
        </div>
      </article>
      <article class="project-card">
        <div class="card-visual violet">
          <div class="blob"></div>
          <span class="card-num">08</span>
          <span class="signal">SIGNAL / VIOLET</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">Social Media</span>
            <span class="status live">Live ↗</span>
          </div>
          <h3>Civic Sence App</h3>
          <p>A profile, deed log, and social feed in one place. Share your latest acts of kindness, behind-the-scenes moments, and the ideas taking shape in your community.</p>
          <div class="tech-pills"><span>HTML</span><span>JS</span><span>CSS</span></div>
          <a href="https://civic-sence.github.io/" class="card-link" target="_blank" rel="noopener">civic-sence.github.io/ ↗</a>
        </div>
        </article>
      <article class="project-card">
        <div class="card-visual violet">
          <div class="blob"></div>
          <span class="card-num">09</span>
          <span class="signal">SIGNAL / VIOLET</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">Social Media</span>
            <span class="status live">Live ↗</span>
          </div>
          <h3>Civic Sence App</h3>
          <p>A profile, deed log, and social feed in one place. Share your latest acts of kindness, behind-the-scenes moments, and the ideas taking shape in your community.</p>
          <div class="tech-pills"><span>HTML</span><span>JS</span><span>CSS</span></div>
          <a href="https://civic-sence.github.io/" class="card-link" target="_blank" rel="noopener">civic-sence.github.io/ ↗</a>
        </div>
      </article>
    </div>
    <div class="projects-footer">
      <span>PROJECTS I’VE BUILT</span>
      <a href="https://github.com/shauryachr" target="_blank" rel="noopener" class="github-link">GITHUB ↗</a>
    </div>
  </section>
  <section id="patent" class="patent">
    <div class="patent-inner">
      <div>
        <p class="patent-label"><span class="dot-orange"></span> GRANTED INVENTION</p>
        <p class="patent-sub">INDIAN PATENT, GRANTED</p>
        <h2 class="patent-title">Indian<br />Patent,<br /><span class="orange">Granted</span></h2>
      </div>
      <div class="patent-right">
        <p class="patent-intro">Beyond code — a physical invention, examined and granted by the Indian Patent Office.</p>
        <h3 class="patent-name">Blower Drone for Cleaning of the Cricket Grounds</h3>
        <p class="patent-desc">A drone-based blower system engineered to clear debris, dust, and loose surface material from cricket grounds — replacing manual ground-clearing with an aerial, automated approach.</p>
        <p class="patent-note">Officially examined and granted by the Indian Patent Office</p>
      </div>
    </div>
    <div class="patent-meta">
      <div class="meta-item">
        <span class="meta-label">PATENT NO.</span>
        <span class="meta-value">592118</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">APPLICATION NO.</span>
        <span class="meta-value">202511011827</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">STATUS / JURISDICTION</span>
        <span class="meta-value">Granted, India</span>
      </div>
    </div>
    <div class="patent-cta">
      <span class="cta-label">CITATION</span>
      <a href="https://scholar.google.com/citations?user=l7Z5tmYAAAAJ&hl=en" target="_blank" rel="noopener" class="cta-link">Google Scholar <span>↗</span></a>
    </div>
  </section>
  <section id="contact" class="contact">
    <div class="contact-left">
      <p class="section-label">GET IN TOUCH</p>
      <h2 class="contact-title">
        <span class="title-dark">Let’s build</span><br />
        <span class="title-teal">something.</span>
      </h2>
    </div>
    <div class="contact-right">
      <p class="contact-intro">Reach out through any of these channels.</p>
      <div class="contact-links">
        <a href="mailto:shauryachr@gmail.com" class="contact-btn primary">SHAURYACHR@GMAIL.COM <span>↗</span></a>
        <a href="https://www.linkedin.com/in/shaurya-chauhan-1307742bb/" target="_blank" rel="noopener" class="contact-btn">LINKEDIN — @SHAURYACHR <span>↗</span></a>
        <a href="https://rksworld.org/shaurya/card.html" target="_blank" rel="noopener" class="contact-btn outline">RKSWORLD.ORG/SHAURYA/CARD.HTML <span>↗</span></a>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="footer-links">
      <span>CONTACT</span>
      <a href="mailto:shauryachr@gmail.com">EMAIL — SHAURYACHR@GMAIL.COM</a>
      <a href="https://github.com/shauryachr" target="_blank" rel="noopener">GITHUB — SHAURYACHR</a>
      <a href="https://linkedin.com/in/shauryachr" target="_blank" rel="noopener">LINKEDIN — @SHAURYACHR</a>
      <a href="https://rksworld.org/shaurya/card.html" target="_blank" rel="noopener">DIGITAL CARD ↗</a>
    </div>
    <div class="footer-bottom">
      <span>SC. © 2026 SHAURYA CHAUHAN · PATENT NO. 592118 · GRANTED, INDIA</span>
      <a href="#" class="back-top">BACK TO TOP ↑</a>
    </div>
  </footer>
  <script>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 40 ? '0 1px 0 rgba(0,0,0,0.06)' : 'none';
    });
    document.querySelector('.back-top')?.addEventListener('click', (e) => {
      e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  </script>
</body>
</html>

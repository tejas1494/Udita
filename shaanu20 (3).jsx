<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Happy 20th Birthday Shaanu ❤️</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Dancing+Script:wght@600;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --pink:#FFD6E7;--rose:#F7B5C8;--cream:#FFF8FA;--red:#D7263D;--green:#8FA38B;--dark:#3a1a22;
}
html{scroll-behavior:smooth}
body{
  font-family:'Poppins',sans-serif;
  background:linear-gradient(160deg,#FFF8FA 0%,#FFD6E7 50%,#FFF8FA 100%);
  min-height:100vh;color:var(--dark);overflow-x:hidden;cursor:none;
}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:var(--pink)}
::-webkit-scrollbar-thumb{background:var(--red);border-radius:2px}

/* ANIMATIONS */
@keyframes filmscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes fadeup{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}
@keyframes heartbeat{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
@keyframes fadein{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes confettiFall{to{transform:translateY(110vh) rotate(720deg);opacity:0}}

/* CANVAS overlays */
#petalCanvas,#cursorCanvas{position:fixed;top:0;left:0;pointer-events:none;z-index:0}
#cursorCanvas{z-index:9999}

/* EDIT BUTTON */
#editBtn{
  position:fixed;top:24px;right:24px;z-index:500;
  background:var(--red);color:#fff;border:none;border-radius:50px;
  padding:10px 20px;font-size:13px;font-weight:500;cursor:pointer;
  box-shadow:0 4px 20px rgba(215,38,61,0.3);font-family:'Poppins',sans-serif;
  transition:all 0.3s ease;display:flex;align-items:center;gap:6px;
}
#musicBtn{
  position:fixed;bottom:24px;right:24px;z-index:100;
  background:#fff8fa;color:var(--red);border:2px solid var(--red);
  border-radius:50%;width:52px;height:52px;font-size:22px;cursor:pointer;
  box-shadow:0 4px 20px rgba(215,38,61,0.25);transition:all 0.3s ease;
}
#musicBtn.playing{background:var(--red);color:#fff;animation:heartbeat 1.2s ease infinite}

/* HERO */
#hero{
  min-height:100vh;display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  text-align:center;padding:40px 24px;position:relative;z-index:1;
}
#hero .watermark{
  position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  font-size:200px;opacity:0.04;pointer-events:none;user-select:none;
}
.hero-sub{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(14px,3vw,20px);color:var(--green);
  letter-spacing:0.15em;text-transform:uppercase;
  margin-bottom:16px;font-style:italic;
  animation:float 5s ease-in-out infinite;
}
.hero-h1{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(42px,10vw,100px);font-weight:300;line-height:1.1;
  margin:0 0 8px;
  background:linear-gradient(135deg,#D7263D,#F7B5C8,#D7263D);
  background-size:200%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  animation:shimmer 3s linear infinite;
}
.hero-name{
  font-family:'Dancing Script',cursive;
  font-size:clamp(40px,8vw,80px);color:var(--red);
  margin:0 0 48px;font-weight:700;
}
.countdown{display:flex;gap:clamp(12px,3vw,32px);margin-bottom:48px;flex-wrap:wrap;justify-content:center}
.cd-box{
  background:rgba(255,255,255,0.7);backdrop-filter:blur(10px);
  border:1px solid var(--rose);border-radius:16px;
  padding:20px 28px;min-width:90px;
  box-shadow:0 4px 24px rgba(215,38,61,0.08);
}
.cd-num{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(32px,5vw,52px);font-weight:600;color:var(--red);line-height:1;
}
.cd-label{font-size:11px;letter-spacing:0.12em;color:var(--green);text-transform:uppercase;margin-top:4px}
.cta-btn{
  background:linear-gradient(135deg,#D7263D,#F7B5C8);
  color:#fff;border:none;border-radius:50px;
  padding:16px 44px;font-size:16px;font-weight:500;
  letter-spacing:0.05em;cursor:pointer;
  box-shadow:0 8px 32px rgba(215,38,61,0.3);
  transition:all 0.3s ease;font-family:'Poppins',sans-serif;
}
.cta-btn:hover{transform:scale(1.05);box-shadow:0 12px 40px rgba(215,38,61,0.4)}
.scroll-line{
  position:absolute;bottom:32px;left:50%;transform:translateX(-50%);
  animation:float 2s ease-in-out infinite;
}
.scroll-line div{width:1px;height:48px;background:linear-gradient(to bottom,transparent,var(--red));margin:0 auto}

/* SECTIONS */
.section{max-width:900px;margin:0 auto;padding:80px 24px}
.chapter-label{
  font-family:'Cormorant Garamond',serif;font-size:13px;
  letter-spacing:0.2em;color:var(--green);text-transform:uppercase;margin-bottom:12px;
}
.section-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(32px,5vw,64px);font-weight:300;color:var(--red);
}
.fade-section{opacity:0;transform:translateY(40px);transition:opacity 0.9s ease,transform 0.9s ease}
.fade-section.visible{opacity:1;transform:translateY(0)}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr clamp(120px,30%,260px);gap:48px;align-items:center;margin-top:48px}
.about-para{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(18px,2.5vw,22px);font-weight:300;line-height:1.9;
  color:var(--dark);margin-bottom:24px;
}
.about-para:last-child{font-style:italic}
.about-img{
  width:100%;aspect-ratio:3/4;
  background:linear-gradient(135deg,#FFD6E7,#F7B5C8,#e8a0b4);
  border-radius:8px;display:flex;align-items:center;justify-content:center;
  font-size:80px;box-shadow:8px 8px 32px rgba(215,38,61,0.12);
  transform:rotate(2deg);border:6px solid #fff8fa;
}

/* FILM */
#film-section{padding:60px 0;background:rgba(247,181,200,0.15)}
.film-strip{overflow:hidden;padding:20px 0}
.film-holes{display:flex;gap:8px;padding:0 20px;margin:8px 0}
.film-hole{width:24px;height:12px;border-radius:3px;background:#c9a0aa;flex-shrink:0}
.film-track{display:flex;gap:16px;animation:filmscroll 28s linear infinite;width:max-content}
.film-card{
  width:200px;flex-shrink:0;background:#fff8fa;
  border:3px solid var(--rose);border-radius:4px;
  padding:12px 12px 20px;
  box-shadow:4px 4px 16px rgba(215,38,61,0.1);
  transition:transform 0.3s ease;cursor:pointer;
}
.film-card:nth-child(odd){transform:rotate(-1.5deg)}
.film-card:nth-child(even){transform:rotate(1.5deg)}
.film-card:hover{transform:rotate(0deg) scale(1.06)!important}
.film-img{
  height:160px;border-radius:2px;display:flex;align-items:center;
  justify-content:center;margin-bottom:10px;overflow:hidden;
  background:linear-gradient(135deg,#FFD6E7,#F7B5C8,#e8a0b4);
  font-size:48px;
}
.film-img img{width:100%;height:100%;object-fit:cover}
.film-caption{font-family:'Dancing Script',cursive;font-size:13px;color:var(--red);text-align:center}

/* REASONS */
#reasons-section{max-width:800px;margin:0 auto;padding:80px 24px}
.reason-card{
  display:flex;align-items:flex-start;gap:20px;
  background:rgba(255,255,255,0.6);backdrop-filter:blur(8px);
  border:1px solid rgba(247,181,200,0.6);border-radius:12px;
  padding:20px 24px;margin-bottom:16px;
  opacity:0;transform:translateY(30px);
  transition:opacity 0.7s ease,transform 0.7s ease,box-shadow 0.3s ease;
  box-shadow:0 2px 12px rgba(215,38,61,0.06);
}
.reason-card.visible{opacity:1;transform:translateY(0)}
.reason-card:hover{transform:translateY(-4px) scale(1.02)!important;box-shadow:0 8px 24px rgba(215,38,61,0.12)!important}
.reason-num{
  min-width:36px;height:36px;border-radius:50%;
  background:linear-gradient(135deg,#D7263D,#F7B5C8);
  display:flex;align-items:center;justify-content:center;
  color:#fff;font-size:14px;font-weight:600;flex-shrink:0;
}
.reason-text{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(16px,2.5vw,20px);line-height:1.6;color:var(--dark);
}

/* LETTER */
#letter-section{max-width:720px;margin:0 auto;padding:60px 24px}
.letter-paper{
  background:linear-gradient(160deg,#fffcfd,#FFF8FA);
  border:1px solid var(--rose);border-radius:4px;
  padding:48px clamp(24px,5vw,80px);
  box-shadow:0 12px 48px rgba(215,38,61,0.1);
  position:relative;
  background-image:repeating-linear-gradient(transparent,transparent 27px,rgba(247,181,200,0.3) 27px,rgba(247,181,200,0.3) 28px);
  background-position-y:48px;
}
.letter-margin{position:absolute;left:72px;top:0;bottom:0;width:1px;background:rgba(215,38,61,0.15)}
.letter-text{
  font-family:'Dancing Script',cursive;
  font-size:clamp(16px,2.5vw,20px);line-height:1.9;
  color:var(--dark);white-space:pre-wrap;
  padding-left:16px;
}

/* SECRET */
#secret-section{max-width:600px;margin:0 auto;padding:40px 24px;text-align:center}
.secret-hint{font-family:'Cormorant Garamond',serif;color:var(--green);font-size:15px;margin-bottom:12px}
#secretInput{
  border:1px solid var(--rose);border-radius:30px;padding:10px 20px;
  font-family:'Dancing Script',cursive;font-size:18px;
  background:#fff8fa;color:var(--red);outline:none;text-align:center;width:200px;
}
#secretReveal{
  display:none;
  background:linear-gradient(135deg,#fff8fa,#FFD6E7);
  border:1px solid var(--rose);border-radius:16px;
  padding:24px 32px;max-width:400px;margin:0 auto;
  box-shadow:0 8px 32px rgba(215,38,61,0.12);
  animation:fadeup 0.8s ease forwards;
}
#secretReveal p{font-family:'Dancing Script',cursive;font-size:22px;color:var(--red);line-height:1.6}

/* ENDING */
#ending{
  min-height:100vh;display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  text-align:center;padding:80px 24px;
  background:linear-gradient(160deg,#FFD6E7 0%,#FFF8FA 50%,#FFD6E7 100%);
  position:relative;
}
#ending .watermark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:300px;opacity:0.03;pointer-events:none}
.ending-quote{font-family:'Cormorant Garamond',serif;font-size:clamp(20px,3.5vw,32px);font-style:italic;font-weight:300;color:#6a3a44;line-height:1.6;margin-bottom:12px}
.ending-h2{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(40px,8vw,88px);font-weight:300;line-height:1.1;
  background:linear-gradient(135deg,#D7263D,#F7B5C8,#D7263D);
  background-size:200%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  animation:shimmer 3s linear infinite;margin:48px 0 16px;
}
.ending-name{
  font-family:'Dancing Script',cursive;
  font-size:clamp(56px,12vw,120px);color:var(--red);
  font-weight:700;margin:0 0 48px;
  text-shadow:0 4px 32px rgba(215,38,61,0.2);
}
.celebrate-btn{
  background:transparent;border:2px solid var(--red);color:var(--red);
  border-radius:50px;padding:14px 40px;font-size:15px;font-weight:500;
  cursor:pointer;font-family:'Poppins',sans-serif;
  letter-spacing:0.05em;transition:all 0.3s ease;
}
.celebrate-btn:hover{background:var(--red);color:#fff}
.ending-footer{position:absolute;bottom:32px;font-family:'Dancing Script',cursive;font-size:16px;color:#c9a0aa}

/* EDITOR PANEL */
#editorPanel{
  position:fixed;right:0;top:0;bottom:0;width:min(380px,95vw);
  background:#fff8fa;border-left:1px solid var(--rose);
  box-shadow:-8px 0 32px rgba(215,38,61,0.08);
  z-index:1000;display:none;flex-direction:column;
  font-family:'Poppins',sans-serif;
}
#editorPanel.open{display:flex}
.ep-header{
  padding:16px 20px;border-bottom:1px solid var(--rose);
  display:flex;align-items:center;justify-content:space-between;
  background:#fff;flex-shrink:0;
}
.ep-title{font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--red);font-weight:600}
.ep-sub{font-size:11px;color:var(--green)}
.ep-close{
  background:none;border:1px solid var(--rose);border-radius:8px;
  width:32px;height:32px;cursor:pointer;font-size:18px;color:var(--red);
  display:flex;align-items:center;justify-content:center;
}
.ep-tabs{display:flex;gap:6px;padding:12px 16px;border-bottom:1px solid var(--rose);flex-wrap:wrap;background:#fff;flex-shrink:0}
.ep-tab{
  padding:6px 12px;border-radius:20px;font-size:12px;cursor:pointer;
  border:1px solid var(--rose);background:#fff8fa;color:var(--red);
  font-family:'Poppins',sans-serif;white-space:nowrap;transition:all 0.2s;
}
.ep-tab.active{background:var(--red);color:#fff;border-color:var(--red)}
.ep-body{flex:1;overflow-y:auto;padding:20px}
.ep-label{font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--green);margin-bottom:4px;display:block}
.ep-input,.ep-textarea{
  width:100%;padding:8px 12px;border-radius:8px;
  border:1px solid var(--rose);background:#fff8fa;
  font-family:'Poppins',sans-serif;font-size:13px;color:var(--dark);
  outline:none;margin-bottom:10px;box-sizing:border-box;
}
.ep-textarea{resize:vertical;line-height:1.7}
.ep-group{margin-bottom:20px}
.ep-row{display:flex;gap:8px;align-items:flex-start;margin-bottom:8px;position:relative}
.ep-add-btn{
  width:100%;padding:9px;border-radius:8px;
  border:1px solid var(--rose);background:#fff8fa;
  color:var(--red);font-family:'Poppins',sans-serif;
  font-size:12px;cursor:pointer;margin-top:4px;
}
.ep-del{
  background:none;border:none;color:var(--red);cursor:pointer;
  font-size:20px;padding:4px;line-height:1;flex-shrink:0;margin-top:6px;
}
.photo-preview{
  width:52px;height:52px;border-radius:6px;overflow:hidden;
  background:#FFD6E7;display:flex;align-items:center;justify-content:center;flex-shrink:0;
}
.photo-preview img{width:100%;height:100%;object-fit:cover}
.upload-label{
  display:flex;align-items:center;justify-content:center;gap:6px;
  border:1px dashed var(--rose);border-radius:8px;padding:8px;
  cursor:pointer;font-size:12px;color:var(--red);background:#fff8fa;margin-top:6px;
}
.photo-item{background:#fff;border:1px solid var(--rose);border-radius:10px;padding:12px;margin-bottom:10px}
.ep-hint{background:var(--pink);border-radius:10px;padding:12px;margin-bottom:16px;font-size:12px;color:#6a3a44;line-height:1.6}
.ep-footer{padding:12px 20px;border-top:1px solid var(--rose);background:#fff;font-size:11px;color:var(--green);text-align:center;flex-shrink:0}

/* CONFETTI */
.confetti-piece{
  position:fixed;top:-20px;z-index:9998;pointer-events:none;
  width:10px;height:10px;
  animation:confettiFall 3s ease-in forwards;
}

/* RESPONSIVE */
@media(max-width:600px){
  .about-grid{grid-template-columns:1fr}
  .about-img{display:none}
  .letter-margin{display:none}
  .letter-paper{padding:32px 20px}
}
</style>
</head>
<body>

<canvas id="petalCanvas"></canvas>
<canvas id="cursorCanvas"></canvas>

<button id="editBtn">✏️ Edit Content</button>
<button id="musicBtn">🎵</button>

<!-- EDITOR PANEL -->
<div id="editorPanel">
  <div class="ep-header">
    <div><div class="ep-title">Edit Content</div><div class="ep-sub">All changes are live ✨</div></div>
    <button class="ep-close" onclick="closeEditor()">×</button>
  </div>
  <div class="ep-tabs">
    <button class="ep-tab active" onclick="switchTab('hero')">🏠 Hero</button>
    <button class="ep-tab" onclick="switchTab('about')">💫 About</button>
    <button class="ep-tab" onclick="switchTab('photos')">📸 Photos</button>
    <button class="ep-tab" onclick="switchTab('reasons')">❤️ Reasons</button>
    <button class="ep-tab" onclick="switchTab('letter')">💌 Letter</button>
    <button class="ep-tab" onclick="switchTab('ending')">✨ Ending</button>
  </div>
  <div class="ep-body" id="epBody"></div>
  <div class="ep-footer">Close the panel to see the full site.</div>
</div>

<!-- HERO -->
<section id="hero">
  <div class="watermark">🌷</div>
  <div class="hero-sub" id="heroSub">for the girl who made life feel softer…</div>
  <div class="hero-h1">Happy 20th Birthday</div>
  <div class="hero-name" id="heroName">Shaanu ❤️</div>
  <div class="countdown" id="countdown"></div>
  <button class="cta-btn" id="ctaBtn" onclick="document.getElementById('about-section').scrollIntoView({behavior:'smooth'})">Open Your Surprise 🌷</button>
  <div class="scroll-line"><div></div></div>
</section>

<!-- ABOUT -->
<section id="about-section" style="padding:80px 24px">
  <div class="fade-section" id="aboutBlock" style="max-width:900px;margin:0 auto">
    <div style="text-align:center;margin-bottom:60px">
      <p class="chapter-label">Chapter I</p>
      <h2 class="section-title" id="aboutTitle">My Shaanu</h2>
    </div>
    <div class="about-grid">
      <div id="aboutParas"></div>
      <div class="about-img">🌷</div>
    </div>
  </div>
</section>

<!-- FILM REEL -->
<section id="film-section">
  <div class="fade-section" id="filmBlock" style="text-align:center;margin-bottom:40px;padding:0 24px">
    <p class="chapter-label">Chapter II</p>
    <h2 class="section-title">Memory Film Reel 🎞️</h2>
    <p style="font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--green);margin-top:8px">Click "Edit Content → Photos" to upload real photos.</p>
  </div>
  <div class="film-strip">
    <div class="film-holes" id="holes-top"></div>
    <div class="film-track" id="filmTrack"></div>
    <div class="film-holes" id="holes-bot"></div>
  </div>
</section>

<!-- REASONS -->
<section id="reasons-section">
  <div class="fade-section" id="reasonsBlock" style="text-align:center;margin-bottom:60px">
    <p class="chapter-label">Chapter III</p>
    <h2 class="section-title" id="reasonsTitle">20 Reasons I Love You</h2>
  </div>
  <div id="reasonsList"></div>
</section>

<!-- LETTER -->
<section id="letter-section">
  <div class="fade-section" id="letterBlock" style="text-align:center;margin-bottom:40px">
    <p class="chapter-label">Chapter IV</p>
    <h2 class="section-title">A Letter 💌</h2>
  </div>
  <div class="fade-section letter-paper" id="letterPaper">
    <div class="letter-margin"></div>
    <div class="letter-text" id="letterText"></div>
  </div>
</section>

<!-- SECRET -->
<section id="secret-section">
  <div class="fade-section" id="secretBlock">
    <p class="secret-hint">🔐 Type her nickname to unlock a secret…</p>
    <input id="secretInput" placeholder="Type here…" oninput="checkSecret(this.value)"/>
    <div id="secretReveal"><div style="font-size:32px;margin-bottom:12px">🌷</div><p id="secretMsg"></p></div>
  </div>
</section>

<!-- ENDING -->
<section id="ending">
  <div class="watermark">❤️</div>
  <div class="fade-section" id="endingBlock">
    <p class="ending-quote" id="endingQ1">"And if I had every lifetime again…"</p>
    <p class="ending-quote" id="endingQ2">"I'd still choose you."</p>
    <h2 class="ending-h2">Happy 20th Birthday</h2>
    <div class="ending-name" id="endingName">Shaanu ❤️</div>
    <button class="celebrate-btn" onclick="celebrate()">🎉 Celebrate!</button>
  </div>
  <div class="ending-footer" id="endingFooter">made with love, for you. always. 🌷</div>
</section>

<script>
// ── DATA ─────────────────────────────────────────────────────────────────────
const DATA = {
  hero:{
    subtitle:"for the girl who made life feel softer…",
    name:"Shaanu",
    ctaText:"Open Your Surprise 🌷",
    birthdayDate:"2025-05-13T00:00:00+05:30"
  },
  about:{
    title:"My Shaanu",
    paragraphs:[
      "You are the calm in all my chaos. The one name my heart spells out before my mind catches up.",
      "There's something about the way you exist in this world — softly, warmly, brilliantly — that makes everything around you feel a little more alive.",
      "Twenty years of you. And still, somehow, it feels like we're only just beginning."
    ]
  },
  photos:[
    {caption:"Every frame of you is my favourite",emoji:"🌷",src:null},
    {caption:"The soft hour",emoji:"🌸",src:null},
    {caption:"This one, always",emoji:"💕",src:null},
    {caption:"Our kind of magic",emoji:"✨",src:null},
    {caption:"Somewhere in time",emoji:"🎞️",src:null},
    {caption:"Golden",emoji:"🌼",src:null},
    {caption:"Just you",emoji:"❤️",src:null},
    {caption:"My favourite view",emoji:"🌹",src:null}
  ],
  reasons:[
    "You make ordinary Tuesday evenings feel like the best part of the week.",
    "Your laugh — the real one — is the sound I want to hear every single day.",
    "You love fiercely and quietly at the same time. That is so rare.",
    "The way you care about small things tells me everything about your heart.",
    "You find beauty in places most people walk right past.",
    "You're braver than you think, and softer than you let on.",
    "You've made me better without even trying to.",
    "Your mind works in ways that genuinely astonish me.",
    "You remember little things — and that is the most loving thing a person can do.",
    "You are home. In the most impossible, truest way.",
    "The world is genuinely a softer place because you're in it.",
    "You turn difficult days into something survivable just by existing.",
    "Your taste in everything — music, words, people — is impeccable.",
    "You are honest even when it's hard. That takes courage most people don't have.",
    "You make me want to be someone worth choosing.",
    "There is no version of my favourite days that doesn't have you in them.",
    "You hold space for people in a way that makes them feel seen.",
    "Your presence is the kind that stays long after you've left the room.",
    "You are equal parts chaos and grace. It is endlessly beautiful.",
    "Because even in twenty more lifetimes, I would still find you first."
  ],
  letter:`Shaanu,

I've been trying to write this for weeks. Every time I start, the words feel too small for what I actually mean.

So here it is, plainly:

You are one of the most remarkable people I have ever had the privilege of knowing. Not because you're perfect — but because you are entirely, unapologetically yourself. And that self? It's extraordinary.

Twenty years. The world got twenty years of you, and still somehow, it doesn't seem to fully understand what it has.

I do.

I see the way you move through life — the care you give, the love you hold, the quiet strength you carry without ever making a show of it.

You deserve every beautiful thing. Every soft morning, every long laugh, every moment that makes you feel alive.

Happy birthday, my Shaanu.

Here's to twenty more years of you — and me, somewhere in the frame, lucky enough to watch.

With everything,
Always.`,
  ending:{
    quote1:"And if I had every lifetime again…",
    quote2:"I'd still choose you.",
    footer:"made with love, for you. always. 🌷"
  }
};

// ── RENDER ────────────────────────────────────────────────────────────────────
function render(){
  // Hero
  document.getElementById('heroSub').textContent = DATA.hero.subtitle;
  document.getElementById('heroName').textContent = DATA.hero.name + ' ❤️';
  document.getElementById('ctaBtn').textContent = DATA.hero.ctaText;
  document.getElementById('endingName').textContent = DATA.hero.name + ' ❤️';
  document.getElementById('secretMsg').textContent = `You found it, ${DATA.hero.name}.\nSome things are just meant for you. ❤️`;

  // About
  document.getElementById('aboutTitle').textContent = DATA.about.title;
  const ap = document.getElementById('aboutParas'); ap.innerHTML='';
  DATA.about.paragraphs.forEach((p,i)=>{
    const el=document.createElement('p'); el.className='about-para';
    if(i===DATA.about.paragraphs.length-1) el.style.fontStyle='italic';
    el.textContent=p; ap.appendChild(el);
  });

  // Film reel
  const ht=document.getElementById('holes-top'), hb=document.getElementById('holes-bot');
  ht.innerHTML=hb.innerHTML=Array.from({length:20}).map(()=>'<div class="film-hole"></div>').join('');
  const ft=document.getElementById('filmTrack'); ft.innerHTML='';
  const doubled=[...DATA.photos,...DATA.photos];
  doubled.forEach(p=>{
    const card=document.createElement('div'); card.className='film-card';
    const imgDiv=document.createElement('div'); imgDiv.className='film-img';
    if(p.src){const img=document.createElement('img');img.src=p.src;imgDiv.appendChild(img);}
    else{imgDiv.textContent=p.emoji||'🌷';}
    const cap=document.createElement('div'); cap.className='film-caption'; cap.textContent=p.caption;
    card.appendChild(imgDiv); card.appendChild(cap); ft.appendChild(card);
  });

  // Reasons
  document.getElementById('reasonsTitle').textContent = `${DATA.reasons.length} Reasons I Love You`;
  const rl=document.getElementById('reasonsList'); rl.innerHTML='';
  DATA.reasons.forEach((r,i)=>{
    const card=document.createElement('div'); card.className='reason-card';
    card.style.transitionDelay=`${i*0.04}s`;
    card.innerHTML=`<div class="reason-num">${i+1}</div><div class="reason-text">${r}</div>`;
    rl.appendChild(card);
  });
  observeReasons();

  // Letter typewriter (reset)
  letterStarted=false;
  document.getElementById('letterText').textContent='';

  // Ending
  document.getElementById('endingQ1').textContent=`"${DATA.ending.quote1}"`;
  document.getElementById('endingQ2').textContent=`"${DATA.ending.quote2}"`;
  document.getElementById('endingFooter').textContent=DATA.ending.footer;
}

// ── COUNTDOWN ─────────────────────────────────────────────────────────────────
function updateCountdown(){
  const now=new Date(), bday=new Date(DATA.hero.birthdayDate), diff=bday-now;
  const el=document.getElementById('countdown');
  if(diff<=0){el.innerHTML='<p style="font-family:\'Dancing Script\',cursive;font-size:28px;color:var(--red)">🎉 The day is finally here! 🎉</p>';return;}
  const d=Math.floor(diff/86400000), h=Math.floor((diff%86400000)/3600000),
        m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
  el.innerHTML=[['Days',d],['Hours',h],['Minutes',m],['Seconds',s]].map(([l,v])=>
    `<div class="cd-box"><div class="cd-num">${String(v).padStart(2,'0')}</div><div class="cd-label">${l}</div></div>`
  ).join('');
}
setInterval(updateCountdown,1000); updateCountdown();

// ── FADE SECTIONS ─────────────────────────────────────────────────────────────
const fobs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:0.1});
document.querySelectorAll('.fade-section').forEach(el=>fobs.observe(el));

// ── REASONS OBSERVER ──────────────────────────────────────────────────────────
function observeReasons(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
  },{threshold:0.1});
  document.querySelectorAll('.reason-card').forEach(el=>obs.observe(el));
}

// ── LETTER TYPEWRITER ─────────────────────────────────────────────────────────
let letterStarted=false;
const letterObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting&&!letterStarted){
      letterStarted=true;
      const el=document.getElementById('letterText'); el.textContent='';
      let i=0;
      const id=setInterval(()=>{
        i++; el.textContent=DATA.letter.slice(0,i)+'|';
        if(i>=DATA.letter.length){clearInterval(id);el.textContent=DATA.letter;}
      },18);
    }
  });
},{threshold:0.1});
letterObs.observe(document.getElementById('letterPaper'));

// ── SECRET ────────────────────────────────────────────────────────────────────
function checkSecret(val){
  if(val.trim().toLowerCase()===DATA.hero.name.toLowerCase()){
    document.getElementById('secretInput').style.display='none';
    document.querySelector('.secret-hint').style.display='none';
    document.getElementById('secretReveal').style.display='block';
  }
}

// ── CONFETTI ──────────────────────────────────────────────────────────────────
function celebrate(){
  const colors=['#D7263D','#FFB7C5','#F7B5C8','#fff','#FFD6E7','#8FA38B'];
  for(let i=0;i<80;i++){
    const el=document.createElement('div'); el.className='confetti-piece';
    el.style.cssText=`left:${Math.random()*100}vw;background:${colors[Math.floor(Math.random()*colors.length)]};width:${4+Math.random()*8}px;height:${4+Math.random()*8}px;border-radius:${Math.random()>0.5?'50%':'2px'};animation-duration:${2+Math.random()*2}s;animation-delay:${Math.random()*0.5}s;transform:rotate(${Math.random()*360}deg)`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),4000);
  }
}

// ── PETALS ────────────────────────────────────────────────────────────────────
(function(){
  const canvas=document.getElementById('petalCanvas');
  const ctx=canvas.getContext('2d');
  let W=canvas.width=window.innerWidth, H=canvas.height=window.innerHeight;
  const petals=Array.from({length:24},()=>({x:Math.random()*W,y:Math.random()*H-H,r:6+Math.random()*10,vx:-0.4+Math.random()*0.8,vy:0.5+Math.random()*1.2,opacity:0.3+Math.random()*0.5,angle:Math.random()*Math.PI*2,spin:-0.01+Math.random()*0.02}));
  const colors=['#FFB7C5','#F7B5C8','#FFD6E7','#e8a0b4'];
  function draw(){
    ctx.clearRect(0,0,W,H);
    petals.forEach((p,i)=>{
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.angle);ctx.globalAlpha=p.opacity;
      ctx.fillStyle=colors[i%colors.length];ctx.beginPath();ctx.ellipse(0,0,p.r,p.r*0.55,0,0,Math.PI*2);ctx.fill();ctx.restore();
      p.x+=p.vx;p.y+=p.vy;p.angle+=p.spin;
      if(p.y>H+20){p.y=-20;p.x=Math.random()*W;}
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize',()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;});
})();

// ── CURSOR TRAIL ──────────────────────────────────────────────────────────────
(function(){
  const canvas=document.getElementById('cursorCanvas');
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  const dots=[];
  window.addEventListener('mousemove',e=>{dots.push({x:e.clientX,y:e.clientY,life:1});if(dots.length>30)dots.shift();});
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dots.forEach(d=>{ctx.beginPath();ctx.arc(d.x,d.y,3*d.life,0,Math.PI*2);ctx.fillStyle=`rgba(215,38,61,${d.life*0.4})`;ctx.fill();d.life-=0.04;});
    for(let i=dots.length-1;i>=0;i--){if(dots[i].life<=0)dots.splice(i,1);}
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
})();

// ── MUSIC ─────────────────────────────────────────────────────────────────────
const audio=new Audio();audio.loop=true;
// To add music: audio.src = 'your-song.mp3';  (put mp3 in same folder)
document.getElementById('musicBtn').onclick=function(){
  if(audio.paused){audio.play().catch(()=>{});this.classList.add('playing');}
  else{audio.pause();this.classList.remove('playing');}
};

// ── EDITOR ────────────────────────────────────────────────────────────────────
let currentTab='hero';
document.getElementById('editBtn').onclick=()=>{
  document.getElementById('editorPanel').classList.add('open');
  document.body.style.cursor='auto';
  renderEditor();
};
function closeEditor(){
  document.getElementById('editorPanel').classList.remove('open');
  document.body.style.cursor='none';
}
function switchTab(t){
  currentTab=t;
  document.querySelectorAll('.ep-tab').forEach(btn=>{
    btn.classList.toggle('active',btn.textContent.toLowerCase().includes(t)||btn.onclick.toString().includes(`'${t}'`));
  });
  renderEditor();
}

function renderEditor(){
  const body=document.getElementById('epBody');
  if(currentTab==='hero'){
    body.innerHTML=`
      <div class="ep-group"><label class="ep-label">Subtitle / tagline</label><input class="ep-input" value="${esc(DATA.hero.subtitle)}" oninput="DATA.hero.subtitle=this.value;render()"/></div>
      <div class="ep-group"><label class="ep-label">Her name</label><input class="ep-input" value="${esc(DATA.hero.name)}" oninput="DATA.hero.name=this.value;render()"/></div>
      <div class="ep-group"><label class="ep-label">CTA button text</label><input class="ep-input" value="${esc(DATA.hero.ctaText)}" oninput="DATA.hero.ctaText=this.value;render()"/></div>
      <div class="ep-group"><label class="ep-label">Birthday date (ISO)</label><input class="ep-input" value="${esc(DATA.hero.birthdayDate)}" oninput="DATA.hero.birthdayDate=this.value;updateCountdown()"/><span style="font-size:11px;color:var(--green)">e.g. 2025-05-13T00:00:00+05:30</span></div>
    `;
  } else if(currentTab==='about'){
    const rows=DATA.about.paragraphs.map((p,i)=>`
      <div class="ep-row">
        <textarea class="ep-textarea" style="height:72px;flex:1" oninput="DATA.about.paragraphs[${i}]=this.value;render()">${esc(p)}</textarea>
        <button class="ep-del" onclick="DATA.about.paragraphs.splice(${i},1);render();renderEditor()">×</button>
      </div>`).join('');
    body.innerHTML=`
      <div class="ep-group"><label class="ep-label">Section title</label><input class="ep-input" value="${esc(DATA.about.title)}" oninput="DATA.about.title=this.value;render()"/></div>
      <label class="ep-label">Paragraphs</label>${rows}
      <button class="ep-add-btn" onclick="DATA.about.paragraphs.push('');render();renderEditor()">+ Add paragraph</button>
    `;
  } else if(currentTab==='photos'){
    const rows=DATA.photos.map((p,i)=>`
      <div class="photo-item">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
          <div class="photo-preview">${p.src?`<img src="${p.src}"/>`:`<span style="font-size:24px">${p.emoji||'🌷'}</span>`}</div>
          <div style="flex:1">
            <label class="ep-label" style="margin-bottom:2px">Caption</label>
            <input class="ep-input" style="margin-bottom:0;font-size:12px" value="${esc(p.caption)}" oninput="DATA.photos[${i}].caption=this.value;render()"/>
          </div>
          <button class="ep-del" onclick="DATA.photos.splice(${i},1);render();renderEditor()">×</button>
        </div>
        <label class="upload-label">📤 ${p.src?'Replace photo':'Upload photo'}
          <input type="file" accept="image/*" style="display:none" onchange="uploadPhoto(${i},this)"/>
        </label>
      </div>`).join('');
    body.innerHTML=`
      <div class="ep-hint">📸 Upload real photos — they replace the emoji placeholders in the film reel instantly.</div>
      ${rows}
      <button class="ep-add-btn" style="background:var(--red);color:#fff;border-color:var(--red)" onclick="DATA.photos.push({caption:'New memory',emoji:'🌷',src:null});render();renderEditor()">+ Add photo slot</button>
    `;
  } else if(currentTab==='reasons'){
    const rows=DATA.reasons.map((r,i)=>`
      <div class="ep-row">
        <span style="min-width:22px;height:22px;border-radius:50%;background:var(--red);color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:10px">${i+1}</span>
        <textarea class="ep-textarea" style="height:58px;flex:1" oninput="DATA.reasons[${i}]=this.value;render()">${esc(r)}</textarea>
        <button class="ep-del" onclick="DATA.reasons.splice(${i},1);render();renderEditor()">×</button>
      </div>`).join('');
    body.innerHTML=`
      <div style="font-size:12px;color:var(--green);margin-bottom:12px">Currently ${DATA.reasons.length} reasons. Heading updates automatically.</div>
      ${rows}
      <button class="ep-add-btn" onclick="DATA.reasons.push('');render();renderEditor()">+ Add reason</button>
    `;
  } else if(currentTab==='letter'){
    body.innerHTML=`
      <label class="ep-label">Letter content (typewriter effect)</label>
      <textarea class="ep-textarea" style="height:420px" oninput="DATA.letter=this.value;letterStarted=false;render()">${esc(DATA.letter)}</textarea>
    `;
  } else if(currentTab==='ending'){
    body.innerHTML=`
      <div class="ep-group"><label class="ep-label">Quote line 1</label><input class="ep-input" value="${esc(DATA.ending.quote1)}" oninput="DATA.ending.quote1=this.value;render()"/></div>
      <div class="ep-group"><label class="ep-label">Quote line 2</label><input class="ep-input" value="${esc(DATA.ending.quote2)}" oninput="DATA.ending.quote2=this.value;render()"/></div>
      <div class="ep-group"><label class="ep-label">Footer text</label><input class="ep-input" value="${esc(DATA.ending.footer)}" oninput="DATA.ending.footer=this.value;render()"/></div>
    `;
  }
}

function uploadPhoto(i,input){
  const file=input.files[0]; if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{DATA.photos[i].src=e.target.result;render();renderEditor();};
  reader.readAsDataURL(file);
}

function esc(str){return String(str||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

// ── INIT ──────────────────────────────────────────────────────────────────────
render();
</script>
</body>
</html>

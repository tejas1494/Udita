import { useState, useEffect, useRef } from "react";

const DEFAULT_CONTENT = {
  about: {
    title: "My Shaanu",
    paragraphs: [
      "You are the calm in all my chaos. The one name my heart spells out before my mind catches up.",
      "There's something about the way you exist in this world — softly, warmly, brilliantly — that makes everything around you feel a little more alive.",
      "Twenty years of you. And still, somehow, it feels like we're only just beginning.",
    ],
  },
  reasons: [
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
    "Because even in twenty more lifetimes, I would still find you first.",
  ],
  letter: `Shaanu,

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
  photos: [
    { caption: "Every frame of you is my favourite", emoji: "🌷", src: null },
    { caption: "The soft hour", emoji: "🌸", src: null },
    { caption: "This one, always", emoji: "💕", src: null },
    { caption: "Our kind of magic", emoji: "✨", src: null },
    { caption: "Somewhere in time", emoji: "🎞️", src: null },
    { caption: "Golden", emoji: "🌼", src: null },
    { caption: "Just you", emoji: "❤️", src: null },
    { caption: "My favourite view", emoji: "🌹", src: null },
  ],
  hero: {
    subtitle: "for the girl who made life feel softer…",
    name: "Shaanu",
    ctaText: "Open Your Surprise 🌷",
    birthdayDate: "2025-05-13T00:00:00+05:30",
  },
  ending: {
    quote1: "And if I had every lifetime again…",
    quote2: "I'd still choose you.",
    footer: "made with love, for you. always. 🌷",
  },
};

function useBirthday(dateStr) {
  const [time, setTime] = useState({});
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const bday = new Date(dateStr);
      const diff = bday - now;
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, past: true }); return; }
      setTime({ days: Math.floor(diff / 86400000), hours: Math.floor((diff % 86400000) / 3600000), minutes: Math.floor((diff % 3600000) / 60000), seconds: Math.floor((diff % 60000) / 1000), past: false });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [dateStr]);
  return time;
}

function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function pad(n) { return String(n ?? 0).padStart(2, "0"); }

function PetalCanvas() {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
    const petals = Array.from({ length: 24 }, () => ({ x: Math.random() * W, y: Math.random() * H - H, r: 6 + Math.random() * 10, vx: -0.4 + Math.random() * 0.8, vy: 0.5 + Math.random() * 1.2, opacity: 0.3 + Math.random() * 0.5, angle: Math.random() * Math.PI * 2, spin: -0.01 + Math.random() * 0.02 }));
    const colors = ["#FFB7C5", "#F7B5C8", "#FFD6E7", "#e8a0b4"];
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      petals.forEach((p, i) => {
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.angle); ctx.globalAlpha = p.opacity; ctx.fillStyle = colors[i % colors.length]; ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 0 }} />;
}

function CursorTrail() {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const dots = [];
    const onMove = (e) => { dots.push({ x: e.clientX, y: e.clientY, life: 1 }); if (dots.length > 30) dots.shift(); };
    window.addEventListener("mousemove", onMove);
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => { ctx.beginPath(); ctx.arc(d.x, d.y, 3 * d.life, 0, Math.PI * 2); ctx.fillStyle = `rgba(215,38,61,${d.life * 0.4})`; ctx.fill(); d.life -= 0.04; });
      for (let i = dots.length - 1; i >= 0; i--) { if (dots[i].life <= 0) dots.splice(i, 1); }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999 }} />;
}

function Confetti({ active }) {
  const ref = useRef();
  useEffect(() => {
    if (!active) return;
    const canvas = ref.current; const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const pieces = Array.from({ length: 80 }, () => ({ x: Math.random() * canvas.width, y: -20, r: 4 + Math.random() * 7, vx: -1.5 + Math.random() * 3, vy: 2 + Math.random() * 4, color: ["#D7263D","#FFB7C5","#F7B5C8","#fff","#FFD6E7","#8FA38B"][Math.floor(Math.random()*6)], angle: Math.random()*Math.PI*2, spin: -0.05+Math.random()*0.1 }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.angle); ctx.fillStyle = p.color; ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*0.6); ctx.restore(); p.x+=p.vx; p.y+=p.vy; p.angle+=p.spin; });
      if (pieces.some(p => p.y < canvas.height+40)) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [active]);
  return <canvas ref={ref} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 200 }} />;
}

function Typewriter({ text, speed = 18 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed(""); let i = 0;
    const id = setInterval(() => { i++; setDisplayed(text.slice(0, i)); if (i >= text.length) clearInterval(id); }, speed);
    return () => clearInterval(id);
  }, [text]);
  return <span>{displayed}<span style={{ opacity: 0.5 }}>|</span></span>;
}

function FadeSection({ children, style = {} }) {
  const ref = useRef(); const visible = useInView(ref);
  return <div ref={ref} style={{ opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(40px)", transition: "opacity 0.9s ease, transform 0.9s ease", ...style }}>{children}</div>;
}

function FilmReel({ photos }) {
  const doubled = [...photos, ...photos];
  return (
    <div style={{ overflow: "hidden", padding: "20px 0" }}>
      <div style={{ display:"flex", gap:"8px", marginBottom:"8px", padding:"0 20px" }}>
        {Array.from({length:20}).map((_,i)=><div key={i} style={{width:24,height:12,borderRadius:3,background:"#c9a0aa",flexShrink:0}}/>)}
      </div>
      <div style={{ display:"flex", gap:"16px", animation:"filmscroll 28s linear infinite", width:"max-content" }}>
        {doubled.map((p,i)=>(
          <div key={i} style={{ width:200, flexShrink:0, background:"#fff8fa", border:"3px solid #F7B5C8", borderRadius:4, padding:"12px 12px 20px", boxShadow:"4px 4px 16px rgba(215,38,61,0.1)", transform:`rotate(${i%2===0?"-1.5deg":"1.5deg"})`, transition:"transform 0.3s ease", cursor:"pointer" }}
            onMouseEnter={e=>e.currentTarget.style.transform="rotate(0deg) scale(1.06)"}
            onMouseLeave={e=>e.currentTarget.style.transform=`rotate(${i%2===0?"-1.5deg":"1.5deg"})`}
          >
            <div style={{ height:160, borderRadius:2, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:10, overflow:"hidden", background:p.src?"transparent":"linear-gradient(135deg,#FFD6E7,#F7B5C8,#e8a0b4)" }}>
              {p.src ? <img src={p.src} alt={p.caption} style={{width:"100%",height:"100%",objectFit:"cover"}}/> : <span style={{fontSize:48}}>{p.emoji||"🌷"}</span>}
            </div>
            <p style={{ fontFamily:"'Dancing Script',cursive", fontSize:13, color:"#D7263D", textAlign:"center", margin:0 }}>{p.caption}</p>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", gap:"8px", marginTop:"8px", padding:"0 20px" }}>
        {Array.from({length:20}).map((_,i)=><div key={i} style={{width:24,height:12,borderRadius:3,background:"#c9a0aa",flexShrink:0}}/>)}
      </div>
    </div>
  );
}

function SecretUnlock({ name }) {
  const [val, setVal] = useState(""); const [unlocked, setUnlocked] = useState(false);
  const keyword = (name||"Shaanu").toLowerCase();
  return (
    <div style={{textAlign:"center"}}>
      {!unlocked ? (
        <>
          <p style={{fontFamily:"'Cormorant Garamond',serif",color:"#8FA38B",fontSize:15,marginBottom:12}}>🔐 Type her nickname to unlock a secret…</p>
          <input value={val} onChange={e=>{setVal(e.target.value);if(e.target.value.trim().toLowerCase()===keyword)setUnlocked(true);}} placeholder="Type here…" style={{border:"1px solid #F7B5C8",borderRadius:30,padding:"10px 20px",fontFamily:"'Dancing Script',cursive",fontSize:18,background:"#fff8fa",color:"#D7263D",outline:"none",textAlign:"center",width:200}}/>
        </>
      ) : (
        <div style={{animation:"fadeup 0.8s ease forwards",background:"linear-gradient(135deg,#fff8fa,#FFD6E7)",border:"1px solid #F7B5C8",borderRadius:16,padding:"24px 32px",maxWidth:400,margin:"0 auto",boxShadow:"0 8px 32px rgba(215,38,61,0.12)"}}>
          <div style={{fontSize:32,marginBottom:12}}>🌷</div>
          <p style={{fontFamily:"'Dancing Script',cursive",fontSize:22,color:"#D7263D",lineHeight:1.6}}>You found it, {name||"Shaanu"}.<br/>Some things are just meant for you. ❤️</p>
        </div>
      )}
    </div>
  );
}

// ── EDITOR ────────────────────────────────────────────────────────────────────
function EditorPanel({ content, onChange, onClose }) {
  const [tab, setTab] = useState("hero");

  const inp = { width:"100%", padding:"8px 12px", borderRadius:8, border:"1px solid #F7B5C8", background:"#fff8fa", fontFamily:"'Poppins',sans-serif", fontSize:13, color:"#3a1a22", outline:"none", marginBottom:10, boxSizing:"border-box" };
  const lbl = { fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", color:"#8FA38B", marginBottom:4, display:"block" };
  const tabBtn = (id) => ({ padding:"6px 12px", borderRadius:20, fontSize:12, cursor:"pointer", border: tab===id ? "1px solid #D7263D" : "1px solid #F7B5C8", background: tab===id ? "#D7263D" : "#fff8fa", color: tab===id ? "#fff" : "#D7263D", fontFamily:"'Poppins',sans-serif", whiteSpace:"nowrap" });

  const set = (path, val) => {
    const c = JSON.parse(JSON.stringify(content));
    const keys = path.split(".");
    let obj = c;
    for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
    obj[keys[keys.length-1]] = val;
    onChange(c);
  };

  const updateArr = (key, i, val) => { const a = [...content[key]]; a[i] = val; onChange({...content,[key]:a}); };
  const addArr = (key, item) => onChange({...content,[key]:[...content[key],item]});
  const removeArr = (key, i) => onChange({...content,[key]:content[key].filter((_,idx)=>idx!==i)});

  const updateReason = (i,v) => { const a=[...content.reasons]; a[i]=v; onChange({...content,reasons:a}); };
  const updateParas = (i,v) => { const a=[...content.about.paragraphs]; a[i]=v; onChange({...content,about:{...content.about,paragraphs:a}}); };

  const updatePhoto = (i, key, val) => { const p=[...content.photos]; p[i]={...p[i],[key]:val}; onChange({...content,photos:p}); };
  const handlePhotoUpload = (i, file) => {
    const reader = new FileReader();
    reader.onload = e => updatePhoto(i,"src",e.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ position:"fixed", right:0, top:0, bottom:0, width:"clamp(300px,380px,95vw)", background:"#fff8fa", borderLeft:"1px solid #F7B5C8", boxShadow:"-8px 0 32px rgba(215,38,61,0.08)", zIndex:1000, display:"flex", flexDirection:"column", fontFamily:"'Poppins',sans-serif" }}>
      {/* Header */}
      <div style={{ padding:"16px 20px", borderBottom:"1px solid #F7B5C8", display:"flex", alignItems:"center", justifyContent:"space-between", background:"#fff", flexShrink:0 }}>
        <div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:"#D7263D",fontWeight:600}}>Edit Content</div>
          <div style={{fontSize:11,color:"#8FA38B"}}>All changes are live ✨</div>
        </div>
        <button onClick={onClose} style={{background:"none",border:"1px solid #F7B5C8",borderRadius:8,width:32,height:32,cursor:"pointer",fontSize:18,color:"#D7263D",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:300}}>×</button>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:6,padding:"12px 16px",borderBottom:"1px solid #F7B5C8",flexWrap:"wrap",background:"#fff",flexShrink:0}}>
        {[["hero","🏠 Hero"],["about","💫 About"],["photos","📸 Photos"],["reasons","❤️ Reasons"],["letter","💌 Letter"],["ending","✨ Ending"]].map(([id,label])=>(
          <button key={id} style={tabBtn(id)} onClick={()=>setTab(id)}>{label}</button>
        ))}
      </div>

      {/* Body */}
      <div style={{flex:1,overflowY:"auto",padding:"20px"}}>

        {tab==="hero" && <>
          <label style={lbl}>Subtitle / tagline</label>
          <input style={inp} value={content.hero.subtitle} onChange={e=>set("hero.subtitle",e.target.value)}/>
          <label style={lbl}>Her name</label>
          <input style={inp} value={content.hero.name} onChange={e=>set("hero.name",e.target.value)}/>
          <label style={lbl}>CTA button text</label>
          <input style={inp} value={content.hero.ctaText} onChange={e=>set("hero.ctaText",e.target.value)}/>
          <label style={lbl}>Birthday date (ISO format)</label>
          <input style={inp} value={content.hero.birthdayDate} onChange={e=>set("hero.birthdayDate",e.target.value)}/>
          <span style={{fontSize:11,color:"#8FA38B"}}>Format: 2025-05-13T00:00:00+05:30</span>
        </>}

        {tab==="about" && <>
          <label style={lbl}>Section title</label>
          <input style={inp} value={content.about.title} onChange={e=>set("about.title",e.target.value)}/>
          <label style={lbl}>Paragraphs</label>
          {content.about.paragraphs.map((p,i)=>(
            <div key={i} style={{position:"relative",marginBottom:8}}>
              <textarea style={{...inp,height:80,resize:"vertical",marginBottom:0,paddingRight:28}} value={p} onChange={e=>updateParas(i,e.target.value)}/>
              <button onClick={()=>{const ps=content.about.paragraphs.filter((_,idx)=>idx!==i);onChange({...content,about:{...content.about,paragraphs:ps}});}} style={{position:"absolute",top:6,right:6,background:"#FFD6E7",border:"none",borderRadius:4,width:20,height:20,cursor:"pointer",fontSize:12,color:"#D7263D",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>
            </div>
          ))}
          <button onClick={()=>{onChange({...content,about:{...content.about,paragraphs:[...content.about.paragraphs,""]}});}} style={{...tabBtn(false),width:"100%",padding:"8px",marginTop:4}}>+ Add paragraph</button>
        </>}

        {tab==="photos" && <>
          <div style={{background:"#FFD6E7",borderRadius:10,padding:"12px",marginBottom:16,fontSize:12,color:"#6a3a44",lineHeight:1.6}}>
            📸 Upload real photos. They'll replace the emoji placeholders in the film reel.
          </div>
          {content.photos.map((p,i)=>(
            <div key={i} style={{background:"#fff",border:"1px solid #F7B5C8",borderRadius:10,padding:"12px",marginBottom:10}}>
              <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:8}}>
                <div style={{width:52,height:52,borderRadius:6,overflow:"hidden",background:"#FFD6E7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {p.src ? <img src={p.src} style={{width:"100%",height:"100%",objectFit:"cover"}}/> : <span style={{fontSize:24}}>{p.emoji||"🌷"}</span>}
                </div>
                <div style={{flex:1}}>
                  <label style={{...lbl,marginBottom:2}}>Caption</label>
                  <input style={{...inp,marginBottom:0,fontSize:12}} value={p.caption} onChange={e=>updatePhoto(i,"caption",e.target.value)}/>
                </div>
                <button onClick={()=>removeArr("photos",i)} style={{background:"none",border:"none",cursor:"pointer",color:"#D7263D",fontSize:20,padding:"4px",flexShrink:0,lineHeight:1}}>×</button>
              </div>
              <label style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px dashed #F7B5C8",borderRadius:8,padding:"8px",cursor:"pointer",fontSize:12,color:"#D7263D",background:"#fff8fa"}}>
                📤 {p.src?"Replace photo":"Upload photo"}
                <input type="file" accept="image/*" style={{display:"none"}} onChange={e=>e.target.files[0]&&handlePhotoUpload(i,e.target.files[0])}/>
              </label>
            </div>
          ))}
          <button onClick={()=>addArr("photos",{caption:"New memory",emoji:"🌷",src:null})} style={{...tabBtn(true),width:"100%",padding:"10px",marginTop:4}}>+ Add photo slot</button>
        </>}

        {tab==="reasons" && <>
          <div style={{fontSize:12,color:"#8FA38B",marginBottom:12}}>Currently {content.reasons.length} reasons. The heading updates automatically.</div>
          {content.reasons.map((r,i)=>(
            <div key={i} style={{display:"flex",gap:8,marginBottom:8,alignItems:"flex-start"}}>
              <span style={{minWidth:22,height:22,borderRadius:"50%",background:"#D7263D",color:"#fff",fontSize:11,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:9}}>{i+1}</span>
              <textarea style={{...inp,height:60,resize:"vertical",marginBottom:0,flex:1}} value={r} onChange={e=>updateReason(i,e.target.value)}/>
              <button onClick={()=>removeArr("reasons",i)} style={{background:"none",border:"none",cursor:"pointer",color:"#D7263D",fontSize:20,padding:"6px 4px",flexShrink:0,lineHeight:1}}>×</button>
            </div>
          ))}
          <button onClick={()=>addArr("reasons","")} style={{...tabBtn(false),width:"100%",padding:"8px",marginTop:4}}>+ Add reason</button>
        </>}

        {tab==="letter" && <>
          <label style={lbl}>Letter (typewriter effect, plain text)</label>
          <textarea style={{...inp,height:420,resize:"vertical",lineHeight:1.8}} value={content.letter} onChange={e=>onChange({...content,letter:e.target.value})}/>
        </>}

        {tab==="ending" && <>
          <label style={lbl}>Quote line 1</label>
          <input style={inp} value={content.ending.quote1} onChange={e=>set("ending.quote1",e.target.value)}/>
          <label style={lbl}>Quote line 2</label>
          <input style={inp} value={content.ending.quote2} onChange={e=>set("ending.quote2",e.target.value)}/>
          <label style={lbl}>Footer text</label>
          <input style={inp} value={content.ending.footer} onChange={e=>set("ending.footer",e.target.value)}/>
        </>}
      </div>

      <div style={{padding:"12px 20px",borderTop:"1px solid #F7B5C8",background:"#fff",fontSize:11,color:"#8FA38B",textAlign:"center",flexShrink:0}}>
        Close the panel to see the full site.
      </div>
    </div>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function Shaanu20() {
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [editorOpen, setEditorOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const audioRef = useRef();
  const letterRef = useRef();
  const letterVisible = useInView(letterRef);
  const countdown = useBirthday(content.hero.birthdayDate);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicPlaying) { audioRef.current.pause(); setMusicPlaying(false); }
    else { audioRef.current.play(); setMusicPlaying(true); }
  };

  const handleSurprise = () => setTimeout(()=>document.getElementById("about-section")?.scrollIntoView({behavior:"smooth"}),200);
  const triggerConfetti = () => { setConfetti(true); setTimeout(()=>setConfetti(false),4000); };

  const RW = editorOpen ? "calc(min(380px, 95vw) + 24px)" : "24px";

  return (
    <div style={{ fontFamily:"'Poppins',sans-serif", background:"linear-gradient(160deg,#FFF8FA 0%,#FFD6E7 50%,#FFF8FA 100%)", minHeight:"100vh", color:"#3a1a22", cursor: editorOpen?"auto":"none", overflowX:"hidden", transition:"padding-right 0.3s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Dancing+Script:wght@600;700&family=Poppins:wght@300;400;500&display=swap');
        @keyframes filmscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes fadeup{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes shimmer{0%{background-position:0% 50%}100%{background-position:100% 50%}}
        @keyframes heartbeat{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#FFD6E7}::-webkit-scrollbar-thumb{background:#D7263D;border-radius:2px}
        .rcard:hover{transform:translateY(-4px) scale(1.02)!important}
      `}</style>

      <PetalCanvas/>
      {!editorOpen && <CursorTrail/>}
      <Confetti active={confetti}/>
      <audio ref={audioRef} loop style={{display:"none"}}><source src="" type="audio/mpeg"/></audio>

      {/* Edit button */}
      <button onClick={()=>setEditorOpen(true)} style={{ position:"fixed", top:24, right:RW, zIndex:500, background:"#D7263D", color:"#fff", border:"none", borderRadius:50, padding:"10px 20px", fontSize:13, fontWeight:500, cursor:"pointer", boxShadow:"0 4px 20px rgba(215,38,61,0.3)", display:"flex", alignItems:"center", gap:6, transition:"right 0.3s ease", fontFamily:"'Poppins',sans-serif" }}>
        ✏️ Edit Content
      </button>

      {/* Music button */}
      <button onClick={toggleMusic} style={{ position:"fixed", bottom:24, right:RW, zIndex:100, background:musicPlaying?"#D7263D":"#fff8fa", color:musicPlaying?"#fff":"#D7263D", border:"2px solid #D7263D", borderRadius:50, width:52, height:52, fontSize:22, cursor:"pointer", boxShadow:"0 4px 20px rgba(215,38,61,0.25)", transition:"all 0.3s ease", animation:musicPlaying?"heartbeat 1.2s ease infinite":"none" }}>🎵</button>

      {editorOpen && <EditorPanel content={content} onChange={setContent} onClose={()=>setEditorOpen(false)}/>}

      {/* ── HERO ── */}
      <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"40px 24px",position:"relative",zIndex:1}}>
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:200,opacity:0.04,pointerEvents:"none",userSelect:"none"}}>🌷</div>
        <div style={{animation:"float 5s ease-in-out infinite"}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(15px,3vw,20px)",color:"#8FA38B",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:16,fontStyle:"italic"}}>{content.hero.subtitle}</p>
        </div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(48px,10vw,100px)",fontWeight:300,lineHeight:1.1,margin:"0 0 8px",background:"linear-gradient(135deg,#D7263D,#F7B5C8,#D7263D)",backgroundSize:"200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"shimmer 3s linear infinite"}}>Happy 20th Birthday</h1>
        <h2 style={{fontFamily:"'Dancing Script',cursive",fontSize:"clamp(40px,8vw,80px)",color:"#D7263D",margin:"0 0 48px",fontWeight:700}}>{content.hero.name} ❤️</h2>

        {!countdown.past ? (
          <div style={{display:"flex",gap:"clamp(12px,3vw,32px)",marginBottom:48,flexWrap:"wrap",justifyContent:"center"}}>
            {[["Days",countdown.days],["Hours",countdown.hours],["Minutes",countdown.minutes],["Seconds",countdown.seconds]].map(([label,val])=>(
              <div key={label} style={{background:"rgba(255,255,255,0.7)",backdropFilter:"blur(10px)",border:"1px solid #F7B5C8",borderRadius:16,padding:"20px 28px",minWidth:90,boxShadow:"0 4px 24px rgba(215,38,61,0.08)"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,5vw,52px)",fontWeight:600,color:"#D7263D",lineHeight:1}}>{pad(val)}</div>
                <div style={{fontSize:11,letterSpacing:"0.12em",color:"#8FA38B",textTransform:"uppercase",marginTop:4}}>{label}</div>
              </div>
            ))}
          </div>
        ) : <p style={{fontFamily:"'Dancing Script',cursive",fontSize:28,color:"#D7263D",marginBottom:48}}>🎉 The day is finally here! 🎉</p>}

        <button onClick={handleSurprise} style={{background:"linear-gradient(135deg,#D7263D,#F7B5C8)",color:"#fff",border:"none",borderRadius:50,padding:"16px 44px",fontSize:16,fontWeight:500,letterSpacing:"0.05em",cursor:"pointer",boxShadow:"0 8px 32px rgba(215,38,61,0.3)",transition:"all 0.3s ease",fontFamily:"'Poppins',sans-serif"}}
          onMouseEnter={e=>{e.target.style.transform="scale(1.05)";e.target.style.boxShadow="0 12px 40px rgba(215,38,61,0.4)"}}
          onMouseLeave={e=>{e.target.style.transform="scale(1)";e.target.style.boxShadow="0 8px 32px rgba(215,38,61,0.3)"}}>
          {content.hero.ctaText}
        </button>
        <div style={{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",animation:"float 2s ease-in-out infinite"}}>
          <div style={{width:1,height:48,background:"linear-gradient(to bottom,transparent,#D7263D)",margin:"0 auto"}}/>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about-section" style={{maxWidth:900,margin:"0 auto",padding:"80px 24px"}}>
        <FadeSection>
          <div style={{textAlign:"center",marginBottom:60}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:"0.2em",color:"#8FA38B",textTransform:"uppercase",marginBottom:12}}>Chapter I</p>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(36px,6vw,64px)",fontWeight:300,color:"#D7263D",margin:0}}>{content.about.title}</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr clamp(120px,30%,260px)",gap:48,alignItems:"center"}}>
            <div>
              {content.about.paragraphs.map((p,i)=>(
                <p key={i} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(18px,2.5vw,22px)",fontWeight:300,lineHeight:1.9,color:"#3a1a22",marginBottom:24,fontStyle:i===content.about.paragraphs.length-1?"italic":"normal"}}>{p}</p>
              ))}
            </div>
            <div style={{width:"100%",aspectRatio:"3/4",background:"linear-gradient(135deg,#FFD6E7,#F7B5C8,#e8a0b4)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:80,boxShadow:"8px 8px 32px rgba(215,38,61,0.12)",transform:"rotate(2deg)",border:"6px solid #fff8fa"}}>🌷</div>
          </div>
        </FadeSection>
      </section>

      {/* ── FILM REEL ── */}
      <section style={{padding:"60px 0",background:"rgba(247,181,200,0.15)"}}>
        <FadeSection style={{textAlign:"center",marginBottom:40}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:"0.2em",color:"#8FA38B",textTransform:"uppercase",marginBottom:12}}>Chapter II</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,5vw,56px)",fontWeight:300,color:"#D7263D",margin:0}}>Memory Film Reel 🎞️</h2>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",color:"#8FA38B",marginTop:8}}>Click "Edit Content → Photos" to upload real photos.</p>
        </FadeSection>
        <FilmReel photos={content.photos}/>
      </section>

      {/* ── REASONS ── */}
      <section style={{maxWidth:800,margin:"0 auto",padding:"80px 24px"}}>
        <FadeSection style={{textAlign:"center",marginBottom:60}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:"0.2em",color:"#8FA38B",textTransform:"uppercase",marginBottom:12}}>Chapter III</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,5vw,56px)",fontWeight:300,color:"#D7263D",margin:0}}>{content.reasons.length} Reasons I Love You</h2>
        </FadeSection>
        <div style={{display:"grid",gap:16}}>
          {content.reasons.map((r,i)=>{
            const ref=useRef(); const visible=useInView(ref,0.1);
            return (
              <div key={i} ref={ref} className="rcard" style={{display:"flex",alignItems:"flex-start",gap:20,background:"rgba(255,255,255,0.6)",backdropFilter:"blur(8px)",border:"1px solid rgba(247,181,200,0.6)",borderRadius:12,padding:"20px 24px",opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(30px)",transition:`opacity 0.7s ease ${i*0.04}s,transform 0.7s ease ${i*0.04}s`,boxShadow:"0 2px 12px rgba(215,38,61,0.06)"}}>
                <span style={{minWidth:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#D7263D,#F7B5C8)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:600,flexShrink:0}}>{i+1}</span>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(16px,2.5vw,20px)",margin:0,lineHeight:1.6,color:"#3a1a22"}}>{r}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── LETTER ── */}
      <section style={{maxWidth:720,margin:"0 auto",padding:"60px 24px"}}>
        <FadeSection style={{textAlign:"center",marginBottom:40}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:"0.2em",color:"#8FA38B",textTransform:"uppercase",marginBottom:12}}>Chapter IV</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,5vw,56px)",fontWeight:300,color:"#D7263D",margin:0}}>A Letter 💌</h2>
        </FadeSection>
        <div ref={letterRef} style={{background:"linear-gradient(160deg,#fffcfd,#FFF8FA)",border:"1px solid #F7B5C8",borderRadius:4,padding:"48px clamp(24px,5vw,64px)",boxShadow:"0 12px 48px rgba(215,38,61,0.1)",position:"relative",backgroundImage:"repeating-linear-gradient(transparent,transparent 27px,rgba(247,181,200,0.3) 27px,rgba(247,181,200,0.3) 28px)",backgroundPositionY:"48px"}}>
          <div style={{position:"absolute",left:72,top:0,bottom:0,width:1,background:"rgba(215,38,61,0.15)"}}/>
          {letterVisible && <pre style={{fontFamily:"'Dancing Script',cursive",fontSize:"clamp(16px,2.5vw,20px)",lineHeight:1.9,color:"#3a1a22",whiteSpace:"pre-wrap",margin:0,paddingLeft:16}}><Typewriter text={content.letter} speed={18}/></pre>}
        </div>
      </section>

      {/* ── SECRET ── */}
      <section style={{maxWidth:600,margin:"0 auto",padding:"40px 24px"}}>
        <FadeSection><SecretUnlock name={content.hero.name}/></FadeSection>
      </section>

      {/* ── ENDING ── */}
      <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"80px 24px",background:"linear-gradient(160deg,#FFD6E7 0%,#FFF8FA 50%,#FFD6E7 100%)",position:"relative"}}>
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:300,opacity:0.03,pointerEvents:"none"}}>❤️</div>
        <FadeSection style={{zIndex:1}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(20px,3.5vw,32px)",fontStyle:"italic",fontWeight:300,color:"#6a3a44",marginBottom:12,lineHeight:1.6}}>"{content.ending.quote1}"</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(20px,3.5vw,32px)",fontStyle:"italic",fontWeight:300,color:"#6a3a44",marginBottom:64,lineHeight:1.6}}>"{content.ending.quote2}"</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(40px,8vw,88px)",fontWeight:300,lineHeight:1.1,background:"linear-gradient(135deg,#D7263D,#F7B5C8,#D7263D)",backgroundSize:"200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"shimmer 3s linear infinite",margin:"0 0 16px"}}>Happy 20th Birthday</h2>
          <h1 style={{fontFamily:"'Dancing Script',cursive",fontSize:"clamp(56px,12vw,120px)",color:"#D7263D",margin:"0 0 48px",fontWeight:700,textShadow:"0 4px 32px rgba(215,38,61,0.2)"}}>{content.hero.name} ❤️</h1>
          <button onClick={triggerConfetti} style={{background:"transparent",border:"2px solid #D7263D",color:"#D7263D",borderRadius:50,padding:"14px 40px",fontSize:15,fontWeight:500,cursor:"pointer",fontFamily:"'Poppins',sans-serif",letterSpacing:"0.05em",transition:"all 0.3s ease"}}
            onMouseEnter={e=>{e.target.style.background="#D7263D";e.target.style.color="#fff"}}
            onMouseLeave={e=>{e.target.style.background="transparent";e.target.style.color="#D7263D"}}>
            🎉 Celebrate!
          </button>
        </FadeSection>
        <p style={{position:"absolute",bottom:32,fontFamily:"'Dancing Script',cursive",fontSize:16,color:"#c9a0aa"}}>{content.ending.footer}</p>
      </section>
    </div>
  );
}

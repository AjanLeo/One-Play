"use client";

import { useState } from "react";
import { AudioLines, Bell, ChevronRight, Crown, Gamepad2, Gift, Headphones, Home, Menu, Mic2, Plus, Search, Settings2, ShieldCheck, Sparkles, Users, X } from "lucide-react";

const rooms = [
  { id: 1, name: "Gece Tayfası", host: "Luna", people: 8, tag: "SOHBET", color: "violet", avatars: ["L","M","A","S"] },
  { id: 2, name: "Müzik & Muhabbet", host: "Mert", people: 5, tag: "MÜZİK", color: "gold", avatars: ["M","E","D"] },
  { id: 3, name: "Yeni Arkadaşlar", host: "Nora", people: 11, tag: "SOSYAL", color: "blue", avatars: ["N","K","R","B"] }
];
const games = [
  { name: "ONE CARDS", sub: "Renkler değişir, rekabet kızışır.", players: "2–4 oyuncu", icon: "🃏", tone: "cards", status: "ÇOK YAKINDA" },
  { name: "LUDO CLUB", sub: "Arkadaşlarınla zarın şansını dene.", players: "2–4 oyuncu", icon: "🎲", tone: "ludo", status: "ÇOK YAKINDA" }
];

export default function HomePage() {
  const [tab, setTab] = useState("Keşfet");
  const [modal, setModal] = useState("");
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [joined, setJoined] = useState<number[]>([]);
  const nav = [{name:"Keşfet",icon:Home},{name:"Sesli Odalar",icon:Headphones},{name:"Oyunlar",icon:Gamepad2},{name:"Arkadaşlar",icon:Users}];
  const filtered = rooms.filter(r => r.name.toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr")));
  const toast = (s:string) => { setNotice(s); window.setTimeout(()=>setNotice(""),2600); };
  const selectTab = (s:string) => { setTab(s); setMobileMenu(false); if(s==="Oyunlar") document.getElementById("games")?.scrollIntoView({behavior:"smooth"}); else if(s==="Sesli Odalar") document.getElementById("rooms")?.scrollIntoView({behavior:"smooth"}); else window.scrollTo({top:0,behavior:"smooth"}); };

  return <main className="shell">
    <aside className={mobileMenu ? "sidebar open" : "sidebar"}>
      <div className="brand"><div className="brand-mark">O<span>.</span></div><div><b>ONE PLAY</b><small>THE SOCIAL CLUB</small></div><button className="mobile-close" onClick={()=>setMobileMenu(false)} aria-label="Menüyü kapat"><X size={19}/></button></div>
      <div className="side-label">MENÜ</div>
      <nav>{nav.map(n=><button key={n.name} onClick={()=>selectTab(n.name)} className={tab===n.name?"nav-item active":"nav-item"}><n.icon size={18}/><span>{n.name}</span>{n.name==="Sesli Odalar"&&<i className="live-dot"/>}</button>)}</nav>
      <div className="side-label space-top">KİŞİSEL</div>
      <button className="nav-item" onClick={()=>setModal("Mesajlar")}><AudioLines size={18}/> Mesajlar</button>
      <button className="nav-item" onClick={()=>setModal("Hediye mağazası")}><Gift size={18}/> Hediye mağazası</button>
      <button className="nav-item" onClick={()=>setModal("Profilim")}><Crown size={18}/> Profilim</button>
      <div className="sidebar-bottom"><div className="upgrade-card"><div className="upgrade-icon"><Crown size={17}/></div><b>ONE VIP</b><p>Özel ayrıcalıkların kilidini aç.</p><button onClick={()=>toast("ONE VIP yakında burada.")}>Keşfet <ChevronRight size={14}/></button></div><button className="nav-item" onClick={()=>setModal("Ayarlar")}><Settings2 size={18}/> Ayarlar</button><div className="version">ONE PLAY · WEB EXPERIENCE</div></div>
    </aside>

    <section className="main-area">
      <header className="topbar"><button className="hamburger" onClick={()=>setMobileMenu(true)} aria-label="Menüyü aç"><Menu/></button><div className="crumb">ONE PLAY <span>/</span> <b>{tab.toLocaleUpperCase("tr")}</b></div><div className="top-actions"><div className="coin-pill"><span>✦</span> 0 <small>COIN</small></div><button className="icon-btn" onClick={()=>toast("Bildirimlerin burada görünecek.")} aria-label="Bildirimler"><Bell size={18}/><i/></button><button className="profile-mini" onClick={()=>setModal("Giriş yap")}>?</button></div></header>

      <div className="content">
        <section className="hero">
          <div className="hero-copy"><div className="eyebrow"><span/> YOUR WORLD. YOUR PEOPLE. YOUR PLAY.</div><h1>Bir araya gel.<br/><em>Oyunun parçası ol.</em></h1><p>Yeni insanlarla tanış, sesli odalarda sohbet et ve rekabetin keyfini arkadaşlarınla çıkar.</p><div className="hero-actions"><button className="primary-btn" onClick={()=>setModal("Hesap oluştur")}>Hemen katıl <ChevronRight size={17}/></button><button className="text-btn" onClick={()=>selectTab("Oyunlar")}>Oyunları keşfet <span>↗</span></button></div></div>
          <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-orb"><span>O</span><i>✦</i></div><div className="float-card card-top"><AudioLines size={16}/><span><b>Canlı sohbet</b><small>Birlikte daha güzel</small></span><i className="live-dot"/></div><div className="float-card card-bottom"><Crown size={17}/><span><b>ONE COMMUNITY</b><small>Sen de aramıza katıl</small></span></div></div>
          <div className="hero-grain"/>
        </section>

        <div className="stats-row"><div><span className="stat-icon"><Users size={17}/></span><b>Topluluk</b><small>Yeni insanlarla tanış</small></div><div><span className="stat-icon"><Mic2 size={17}/></span><b>Sesli odalar</b><small>Canlı sohbete katıl</small></div><div><span className="stat-icon"><Gamepad2 size={17}/></span><b>Çok oyunculu</b><small>Birlikte oyun oyna</small></div><div><span className="stat-icon"><Gift size={17}/></span><b>Sanal hediyeler</b><small>Sevdiklerini mutlu et</small></div></div>

        <section className="section" id="rooms"><div className="section-head"><div><div className="eyebrow muted">TOPLULUĞA KATIL</div><h2>Canlı <em>odalar</em></h2><p>Şu an keşfedebileceğin sohbet alanları.</p></div><button className="outline-btn" onClick={()=>setModal("Oda oluştur")}><Plus size={16}/> Oda oluştur</button></div>
          <div className="room-tools"><div className="search-box"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Oda ara..."/></div><span className="live-count"><i className="live-dot"/> KEŞFEDİLECEK ODALAR</span></div>
          <div className="room-grid">{filtered.map(r=><article className="room-card" key={r.id}><div className={"room-cover "+r.color}><span className="room-symbol"><AudioLines size={29}/></span><span className="room-tag"><i/> {r.tag}</span><span className="room-count"><Users size={13}/> {r.people}/12</span></div><div className="room-info"><div><h3>{r.name}</h3><p>Oda sahibi <b>{r.host}</b></p></div><div className="avatar-stack">{r.avatars.map((a,i)=><span key={i}>{a}</span>)}</div></div><button className="join-btn" onClick={()=>{setJoined(v=>v.includes(r.id)?v:[...v,r.id]);toast("Demo önizleme: sesli oda altyapısı sonraki aşamada bağlanacak.")}}>{joined.includes(r.id)?"Katılma isteği gönderildi":"Odaya göz at"} <ChevronRight size={15}/></button></article>)}</div>
          {filtered.length===0&&<div className="empty">Bu aramayla eşleşen oda bulunamadı.</div>}
        </section>

        <section className="section games-section" id="games"><div className="section-head"><div><div className="eyebrow muted">OYUN ALANI</div><h2>Bir oyun seç, <em>meydan oku.</em></h2><p>Arkadaşlarınla aynı masada buluş.</p></div><span className="coming-pill"><Sparkles size={14}/> YENİ OYUNLAR YOLDA</span></div><div className="game-grid">{games.map(g=><article className={"game-card "+g.tone} key={g.name}><div className="game-art"><span>{g.icon}</span><i>{g.status}</i></div><div className="game-info"><div><h3>{g.name}</h3><p>{g.sub}</p></div><div className="game-foot"><span><Users size={14}/> {g.players}</span><button onClick={()=>toast(g.name+" çok oyunculu oyun modu geliştirme aşamasında.")}>Yakında <ChevronRight size={14}/></button></div></div></article>)}</div></section>

        <section className="gift-banner"><div className="gift-emblem"><Gift size={27}/><span>✦</span></div><div><div className="eyebrow">PAYLAŞMANIN GÜZELLİĞİ</div><h2>Bir tebessüm <em>gönder.</em></h2><p>Hediyelerle anlara renk kat. ONE PLAY mağazası çok yakında.</p></div><button className="outline-btn" onClick={()=>setModal("Hediye mağazası")}>Mağazayı keşfet <ChevronRight size={16}/></button></section>
        <footer><div className="footer-brand">ONE PLAY <span>© 2026</span></div><span>Birlikte daha fazlası.</span><button onClick={()=>setModal("Güvenlik ve topluluk") }><ShieldCheck size={14}/> Güvenli topluluk</button></footer>
      </div>
    </section>

    {mobileMenu&&<button className="scrim" onClick={()=>setMobileMenu(false)} aria-label="Menüyü kapat"/>}
    {notice&&<div className="toast"><Sparkles size={16}/>{notice}</div>}
    {modal&&<div className="modal-backdrop" onClick={()=>setModal("")}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-x" onClick={()=>setModal("")}><X size={18}/></button><div className="modal-mark">O<span>.</span></div><div className="eyebrow muted">ONE PLAY COMMUNITY</div><h2>{modal}</h2><p>Bu özellik ONE PLAY&apos;in sonraki geliştirme aşamasında gerçek hesap ve sunucu altyapısıyla etkinleştirilecek.</p><button className="primary-btn full" onClick={()=>setModal("")}>Anladım</button></div></div>}
  </main>;
}
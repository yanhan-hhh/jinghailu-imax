// 经海路 iMax 影厅 — 交互逻辑

const HALLS = [
  { key: "main",    num: "壹", name: "正片厅", desc: "热播与上映中 · 此刻就能看的好戏" },
  { key: "chase",   num: "贰", name: "追更厅", desc: "连载更新中 · 即将开播 · 追着等更新" },
  { key: "classic", num: "叁", name: "经典厅", desc: "已完结可回看 · 短剧漫剧速看" }
];

// 媒介对应海报底色调（用渐变区分）
const MEDIA_HUE = {
  "国产剧": "linear-gradient(135deg,#2a1d12,#100d14)",
  "海外剧": "linear-gradient(135deg,#102028,#0d0f14)",
  "院线电影": "linear-gradient(135deg,#281020,#120d14)",
  "国漫番剧": "linear-gradient(135deg,#1a2410,#0d0f0e)",
  "短剧漫剧": "linear-gradient(135deg,#241016,#130d10)"
};

// ===== 风格化海报系统 =====
// 按题材决定一套视觉语言：主色、辅色、图形母题。找不到真实海报时用它，永不裂图。
const POSTER_THEMES = {
  "民国奇幻":   { c1:"#3a2415", c2:"#0d0a0f", glow:"#d89b4a", motif:"deco",   sym:"档" },
  "悬疑探案":   { c1:"#1a1f2b", c2:"#0a0b10", glow:"#5a8fb5", motif:"noir",   sym:"探" },
  "悬疑":       { c1:"#1a1f2b", c2:"#0a0b10", glow:"#5a8fb5", motif:"noir",   sym:"疑" },
  "民国探案":   { c1:"#2b2015", c2:"#0c0a0e", glow:"#c79350", motif:"deco",   sym:"案" },
  "古装":       { c1:"#2d1a1f", c2:"#100a10", glow:"#d4a35a", motif:"floral", sym:"卷" },
  "奇幻史诗":   { c1:"#2a0f12", c2:"#0c0709", glow:"#e0563c", motif:"dragon", sym:"龙" },
  "奇幻":       { c1:"#1c1430", c2:"#0a0810", glow:"#9b6cd4", motif:"dragon", sym:"幻" },
  "战争":       { c1:"#26200f", c2:"#0b0a07", glow:"#b09040", motif:"war",    sym:"战" },
  "校园动作":   { c1:"#241a10", c2:"#0c0a0d", glow:"#e08a2c", motif:"impact", sym:"拳" },
  "动作":       { c1:"#231510", c2:"#0c0809", glow:"#d77033", motif:"impact", sym:"action" },
  "医疗":       { c1:"#0f2424", c2:"#08100f", glow:"#4ec0b0", motif:"calm",   sym:"医" },
  "剧情":       { c1:"#1f1a24", c2:"#0c0a0f", glow:"#8a7fb0", motif:"calm",   sym:"剧" },
  "职场喜剧":   { c1:"#26220f", c2:"#0d0c07", glow:"#d4b840", motif:"pop",    sym:"职" },
  "都市":       { c1:"#152028", c2:"#0a0d10", glow:"#5aa0c0", motif:"city",   sym:"都" },
  "都市情感":   { c1:"#251820", c2:"#0e0a0e", glow:"#c06a90", motif:"city",   sym:"情" },
  "轻喜爱情":   { c1:"#2b1820", c2:"#100a0e", glow:"#e08aa0", motif:"heart",  sym:"爱" },
  "爱情":       { c1:"#2b1820", c2:"#100a0e", glow:"#e08aa0", motif:"heart",  sym:"恋" },
  "喜剧":       { c1:"#2a2410", c2:"#0e0c07", glow:"#e0c040", motif:"pop",    sym:"喜" },
  "甜宠":       { c1:"#2d1822", c2:"#110a0f", glow:"#ff9ab8", motif:"heart",  sym:"甜" },
  "先婚后爱":   { c1:"#2a1620", c2:"#100a0e", glow:"#e87a9c", motif:"heart",  sym:"婚" },
  "重生复仇":   { c1:"#280f14", c2:"#0d0708", glow:"#d6443c", motif:"blade",  sym:"刃" },
  "复仇":       { c1:"#240e12", c2:"#0c0708", glow:"#d6443c", motif:"blade",  sym:"仇" },
  "热血战斗":   { c1:"#2a1410", c2:"#0d0808", glow:"#ff6a3c", motif:"impact", sym:"战" },
  "废土修仙":   { c1:"#1f1a14", c2:"#0b0a08", glow:"#c0a060", motif:"myth",   sym:"仙" },
  "玄幻":       { c1:"#161a2c", c2:"#080a10", glow:"#7a8fd4", motif:"myth",   sym:"玄" },
  "国漫":       { c1:"#162410", c2:"#080d07", glow:"#7ac050", motif:"myth",   sym:"漫" },
  "恐怖":       { c1:"#1a1418", c2:"#08070a", glow:"#9b5a7a", motif:"noir",   sym:"惧" },
  "惊悚":       { c1:"#181420", c2:"#08070c", glow:"#8a5ab0", motif:"noir",   sym:"悚" },
  "儿童动画":   { c1:"#152428", c2:"#0a0e10", glow:"#4ec0d4", motif:"pop",    sym:"童" },
  "体育竞技":   { c1:"#16241c", c2:"#080f0c", glow:"#4ec078", motif:"impact", sym:"球" },
  "谍战":       { c1:"#1c1c24", c2:"#0a0a0f", glow:"#7a8aa0", motif:"noir",   sym:"谍" },
  "动画电影":   { c1:"#1a2228", c2:"#0a0e10", glow:"#5ab0d4", motif:"pop",    sym:"影" }
};
function posterTheme(m){
  for(const g of (m.genre||[])){ if(POSTER_THEMES[g]) return POSTER_THEMES[g]; }
  // 媒介兜底
  const fb = { "国产剧":"剧情","海外剧":"剧情","院线电影":"动画电影","国漫番剧":"国漫","短剧漫剧":"先婚后爱" };
  return POSTER_THEMES[fb[m.media]] || POSTER_THEMES["剧情"];
}
// 取片名首字做大字章
function posterGlyph(m){
  const t = posterTheme(m);
  return (t.sym && t.sym.length<=1) ? t.sym : (m.title||"").slice(0,1);
}
// 生成 SVG 母题图层（根据 motif）
function motifSVG(motif, glow){
  const g = glow;
  switch(motif){
    case "deco": // 装饰艺术线条（民国）
      return `<g stroke="${g}" stroke-width="1.2" fill="none" opacity="0.5">
        <path d="M30 30 H170 M30 30 V70 M170 30 V70"/><path d="M30 270 H170 M30 270 V230 M170 270 V230"/>
        <circle cx="100" cy="150" r="46" opacity="0.4"/><path d="M100 96 V204 M46 150 H154" opacity="0.3"/></g>`;
    case "noir": // 黑色电影百叶光
      return `<g opacity="0.16">${[...Array(9)].map((_,i)=>`<rect x="0" y="${i*34+6}" width="200" height="9" fill="${g}"/>`).join("")}</g>
        <circle cx="150" cy="60" r="55" fill="${g}" opacity="0.1"/>`;
    case "floral": // 古装花纹
      return `<g stroke="${g}" fill="none" opacity="0.4" stroke-width="1.3">
        ${[...Array(5)].map((_,i)=>`<path d="M100 150 Q${100+50*Math.cos(i*1.256)} ${150+50*Math.sin(i*1.256)} 100 150" transform="rotate(${i*72} 100 150)"/>`).join("")}
        <circle cx="100" cy="150" r="60" opacity="0.3"/><circle cx="100" cy="150" r="30" opacity="0.4"/></g>`;
    case "dragon": // 史诗火焰/鳞
      return `<g opacity="0.4"><path d="M100 40 C60 90 60 160 100 260 C140 160 140 90 100 40 Z" fill="${g}" opacity="0.18"/>
        ${[...Array(6)].map((_,i)=>`<path d="M70 ${70+i*30} Q100 ${60+i*30} 130 ${70+i*30}" stroke="${g}" fill="none" stroke-width="1.4" opacity="0.5"/>`).join("")}</g>`;
    case "war": // 战争射线
      return `<g stroke="${g}" stroke-width="1.4" opacity="0.32">${[...Array(7)].map((_,i)=>`<line x1="100" y1="150" x2="${100+140*Math.cos(i*0.9-1.5)}" y2="${150+140*Math.sin(i*0.9-1.5)}"/>`).join("")}</g>`;
    case "impact": // 冲击爆发线
      return `<g stroke="${g}" stroke-width="2" opacity="0.4">${[...Array(16)].map((_,i)=>`<line x1="100" y1="150" x2="${100+130*Math.cos(i*0.3925)}" y2="${150+130*Math.sin(i*0.3925)}" opacity="${i%2?0.6:0.25}"/>`).join("")}</g>`;
    case "blade": // 复仇刀光
      return `<g opacity="0.5"><path d="M40 250 L150 40 L165 55 L60 255 Z" fill="${g}" opacity="0.22"/>
        <path d="M40 250 L150 40" stroke="${g}" stroke-width="1.6" opacity="0.7"/></g>`;
    case "heart": // 甜宠柔光心
      return `<g opacity="0.3"><circle cx="100" cy="140" r="64" fill="${g}" opacity="0.14"/>
        <path d="M100 175 C70 150 72 118 100 130 C128 118 130 150 100 175 Z" fill="${g}" opacity="0.4"/></g>`;
    case "city": // 都市天际线
      return `<g fill="${g}" opacity="0.3">${[...Array(8)].map((_,i)=>`<rect x="${18+i*22}" y="${150+(i%3)*20}" width="16" height="${120-(i%3)*20}" opacity="${0.3+0.1*(i%3)}"/>`).join("")}</g>`;
    case "myth": // 玄幻星轨
      return `<g stroke="${g}" fill="none" opacity="0.35" stroke-width="1.2">
        <circle cx="100" cy="150" r="70"/><circle cx="100" cy="150" r="48" opacity="0.6"/>
        ${[...Array(8)].map((_,i)=>`<circle cx="${100+70*Math.cos(i*0.785)}" cy="${150+70*Math.sin(i*0.785)}" r="3" fill="${g}" stroke="none"/>`).join("")}</g>`;
    case "calm": // 平静弧线
      return `<g stroke="${g}" fill="none" opacity="0.3" stroke-width="1.3">${[...Array(4)].map((_,i)=>`<path d="M0 ${110+i*28} Q100 ${90+i*28} 200 ${110+i*28}"/>`).join("")}</g>`;
    case "pop": // 流行波点
      return `<g fill="${g}" opacity="0.3">${[...Array(18)].map((_,i)=>`<circle cx="${20+(i%6)*32}" cy="${70+Math.floor(i/6)*60}" r="${4+(i%3)*2}" opacity="${0.3+0.15*(i%3)}"/>`).join("")}</g>`;
    default:
      return `<circle cx="100" cy="150" r="60" fill="${g}" opacity="0.12"/>`;
  }
}
// 生成完整 SVG 风格海报（data URI）
function genPoster(m){
  const t = posterTheme(m);
  const glyph = posterGlyph(m);
  const uid = "p"+m.id;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="bg${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${t.c1}"/><stop offset="1" stop-color="${t.c2}"/>
      </linearGradient>
      <radialGradient id="gl${uid}" cx="0.7" cy="0.28" r="0.8">
        <stop offset="0" stop-color="${t.glow}" stop-opacity="0.45"/><stop offset="0.6" stop-color="${t.glow}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="200" height="300" fill="url(#bg${uid})"/>
    <rect width="200" height="300" fill="url(#gl${uid})"/>
    ${motifSVG(t.motif, t.glow)}
    <text x="100" y="172" font-family="Georgia,serif" font-size="120" font-weight="700"
      fill="${t.glow}" fill-opacity="0.16" text-anchor="middle" dominant-baseline="middle">${esc(glyph)}</text>
    <rect x="0" y="0" width="200" height="300" fill="none" stroke="${t.glow}" stroke-opacity="0.18" stroke-width="2"/>
    <rect x="6" y="6" width="188" height="288" fill="none" stroke="${t.glow}" stroke-opacity="0.1" stroke-width="0.6"/>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
// 海报 HTML：底层风格海报 + 上层真实海报（失败自动隐藏）。约定真实图放 posters/{id}.jpg
function posterHTML(m, cls){
  const gen = genPoster(m);
  const real = m.poster ? m.poster : `posters/${m.id}.jpg`;
  return `<div class="${cls}" style="background-image:url('${gen}')">
    <img class="real-poster" src="${esc(real)}" alt="${esc(m.title)}" loading="lazy"
      onerror="this.style.display='none'" onload="this.classList.add('loaded')">
  </div>`;
}

// 风险等级 → 样式类
function riskClass(level){
  if(level && level.indexOf("高")>=0) return "high";
  if(level && level.indexOf("中")>=0) return "mid";
  return "low";
}

// 是否“放映中”（用于呼吸灯）
function isLive(m){
  return ["热播中","上映中","热映中","全球爆款","连载中","今日首发","年番上线","第二季年番上线"].some(s=>m.status.indexOf(s)>=0);
}
function isUpcoming(m){
  return m.status.indexOf("即将")>=0 || m.status.indexOf("新上")>=0;
}

// 今日基准日期（每日更新时由 data.js 顶部的 TODAY 提供；缺省用真实今天）
const TODAY = (typeof REPORT_DATE !== "undefined" && REPORT_DATE) ? REPORT_DATE : new Date().toISOString().slice(0,10);
// 距今多少天没在报告中出现
function daysSinceSeen(m){
  if(!m.lastSeen) return 0;
  const a = new Date(m.lastSeen+"T00:00:00"), b = new Date(TODAY+"T00:00:00");
  return Math.round((b-a)/86400000);
}
// 连续 3 天未上报告 → 视为已归档（仍保留，只在经典厅打标）
function isArchived(m){ return daysSinceSeen(m) >= 3; }
// 是否今日新增（首次收录就是今天）
function isNew(m){ return m.firstSeen === TODAY && daysSinceSeen(m) === 0; }

// HTML 转义
function esc(s){ return (s==null?"":String(s)).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

// 标签集合（用于搜索匹配的文本池）
function searchPool(m){
  return [m.title, m.mark, m.cast, m.director, m.ipFrom, m.platform, m.summary, m.guide, m.keywords,
          (m.genre||[]).join(" "), m.media, m.status].filter(Boolean).join(" ").toLowerCase();
}

// ---- 渲染卡片 ----
function cardHTML(m){
  const live = isLive(m), up = isUpcoming(m);
  const badge = live
    ? `<div class="badge-live"><span class="dot"></span>放映中</div>`
    : (up ? `<div class="badge-live upcoming"><span class="dot"></span>即将放映</div>` : "");
  const hotPip = m.hot>=90 ? `<div class="hot-pip">🔥 爆 ${m.hot}</div>` : (m.hot>=80?`<div class="hot-pip">热 ${m.hot}</div>`:"");
  const corner = isNew(m) ? `<div class="corner-tag new">NEW</div>`
               : (isArchived(m) ? `<div class="corner-tag arch">已归档</div>` : "");
  const genreTags = (m.genre||[]).slice(0,2).map(g=>`<span class="tag">${esc(g)}</span>`).join("");
  const metaRows = [];
  if(m.cast) metaRows.push(`<div class="row"><span class="k">主演</span><span class="v">${esc(m.cast)}</span></div>`);
  if(m.platform && m.platform!=="—") metaRows.push(`<div class="row"><span class="k">平台</span><span class="v">${esc(m.platform)}</span></div>`);
  metaRows.push(`<div class="row"><span class="k">上映</span><span class="v">${esc(m.release||"—")}</span></div>`);
  return `<article class="card${isArchived(m)?' archived':''}" data-id="${m.id}">
    ${badge}${hotPip}${corner}
    <div class="card-poster">
      ${posterHTML(m, "poster-img")}
      <span class="filmstrip"></span><span class="filmstrip r"></span>
      <div class="poster-title">${esc(m.title)}</div>
    </div>
    <div class="card-body">
      <div class="card-title">${esc(m.title)}</div>
      <div class="card-tags"><span class="tag media">${esc(m.media)}</span>${genreTags}</div>
      <div class="card-meta">${metaRows.join("")}</div>
    </div>
    <div class="stamp">${esc(m.status)}<br>JINGHAILU</div>
  </article>`;
}

// ---- 渲染头牌 ----
function renderHero(m){
  const genreTags = (m.genre||[]).map(g=>`<span class="tag amber">${esc(g)}</span>`).join("");
  document.getElementById("hero").innerHTML = `
    <div class="hero-card" data-id="${m.id}">
      <div class="hero-bg"></div>
      <div class="hero-poster">
        ${posterHTML(m, "hero-poster-img")}
        <span class="big">${esc(m.title)}</span>
      </div>
      <div class="hero-content">
        <div class="hero-tags"><span class="tag media">${esc(m.media)}</span>${genreTags}
          ${m.rating?`<span class="tag amber">★ ${m.rating}</span>`:""}</div>
        <h2>${esc(m.title)}${m.mark?`<span class="mark">${esc(m.mark)}</span>`:""}</h2>
        <div class="hero-meta">${m.cast?`主演 <b>${esc(m.cast)}</b> · `:""}${esc(m.platform||"")} · ${esc(m.release||"")}</div>
        <div class="hero-sum">${esc(m.summary||"")}</div>
        <span class="hero-cta">查看详情与解说 →</span>
      </div>
    </div>`;
}

// ---- 渲染所有厅 ----
function renderHalls(list){
  const box = document.getElementById("halls");
  box.innerHTML = "";
  let shown = 0;
  HALLS.forEach(h=>{
    const items = list.filter(m=>m.hall===h.key);
    if(items.length===0) return;
    shown += items.length;
    // 厅内按热度降序
    items.sort((a,b)=>(b.hot||0)-(a.hot||0));
    const sec = document.createElement("section");
    sec.className = "hall";
    sec.innerHTML = `
      <div class="hall-head">
        <h3><span class="num">${h.num}</span>${h.name}</h3>
        <span class="desc">${h.desc}</span>
        <span class="count">${items.length} 部在映</span>
      </div>
      <div class="hall-rule"></div>
      <div class="grid">${items.map(cardHTML).join("")}</div>`;
    box.appendChild(sec);
  });
  if(shown===0){
    box.innerHTML = `<div class="empty">银幕暂时空着 —— 没有找到匹配「${esc(document.getElementById("search").value)}」的剧目</div>`;
  }
}

// ---- 详情抽屉 ----
function openDrawer(m){
  const fields = [];
  if(m.cast) fields.push(["主演阵容", m.cast]);
  if(m.director) fields.push(["导演", m.director]);
  if(m.ipFrom) fields.push(["IP 来源", m.ipFrom]);
  if(m.platform && m.platform!=="—") fields.push(["观看平台", m.platform]);
  if(m.release) fields.push(["上映时间", m.release]);
  if(m.keywords) fields.push(["关键词", m.keywords]);
  const fieldHTML = fields.map(f=>`<div class="dr-field"><div class="k">${esc(f[0])}</div><div class="v">${esc(f[1])}</div></div>`).join("");

  // 风险标注
  const rc = riskClass(m.risk?.level);
  const riskHTML = (m.risk?.tags||[]).map(t=>{
    let cls="low";
    if(t.indexOf("高")>=0) cls="high"; else if(t.indexOf("中")>=0) cls="mid";
    const icon = cls==="high"?"⛔":(cls==="mid"?"⚠":"✓");
    return `<span class="risk-pill ${cls}">${icon} ${esc(t)}</span>`;
  }).join("");

  // 解说检索区
  const hasBili = m.guide && m.guide.indexOf("B站")>=0;
  const platSearch = m.title;
  const guideLinks = [];
  if(hasBili){
    guideLinks.push(`<a class="glink bili" target="_blank" rel="noopener" href="https://search.bilibili.com/all?keyword=${encodeURIComponent(m.title+" 解说")}">▶ B站看解说</a>`);
  }
  guideLinks.push(`<a class="glink plat" target="_blank" rel="noopener" href="https://www.baidu.com/s?wd=${encodeURIComponent(m.title+" "+(m.platform&&m.platform!=="—"?m.platform:"在线观看"))}">⌕ 找正片 · ${esc((m.platform||"在线").split("（")[0].split("(")[0])}</a>`);
  guideLinks.push(`<a class="glink ghost" target="_blank" rel="noopener" href="https://search.bilibili.com/all?keyword=${encodeURIComponent(m.title)}">看更多二创</a>`);

  const guideText = m.guide ? m.guide : `暂无官方解说收录，可前往 B 站 / 各平台检索「${m.title}」相关解说与正片。`;

  const html = `
    <div class="drawer-handle"></div>
    <button class="drawer-close" id="drawerClose">×</button>
    <div class="ticket-stamp"><span class="big">ADMIT ONE</span>经海路 iMax<br>NO.${String(m.id).padStart(3,"0")}</div>
    <div class="dr-head">
      <div class="dr-poster">
        ${posterHTML(m, "dr-poster-img")}
        <span class="filmstrip"></span>
        <span class="pt">${esc(m.title)}</span>
      </div>
      <div class="dr-headinfo">
        <h2>${esc(m.title)}</h2>
        ${m.mark?`<div class="mark">${esc(m.mark)}</div>`:""}
        <div class="dr-tags">
          <span class="tag media">${esc(m.media)}</span>
          ${(m.genre||[]).map(g=>`<span class="tag amber">${esc(g)}</span>`).join("")}
          <span class="tag">${esc(m.status)}</span>
        </div>
        <div class="dr-rating">
          ${m.rating?`<div class="score">${m.rating}<small> 分</small></div>`:""}
          <div class="hotbar">
            <div class="lbl">热度指数 ${m.hot||"—"}</div>
            <div class="track"><div class="fill" style="width:${Math.min(m.hot||0,100)}%"></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="dr-grid">${fieldHTML}</div>

    ${m.summary?`<div class="dr-section"><h4>剧情看点</h4><p>${esc(m.summary)}</p></div>`:""}
    ${m.hotDetail?`<div class="dr-section"><h4>热度战报</h4><div class="dr-hotbox">${esc(m.hotDetail)}</div></div>`:""}

    <div class="dr-section">
      <h4>可看解说 · 检索入口</h4>
      <div class="guide-box">
        <div class="gtitle">🎬 哪里看 · 看什么解说</div>
        <div class="gtext">${esc(guideText)}</div>
        <div class="guide-links">${guideLinks.join("")}</div>
      </div>
    </div>

    ${riskHTML?`<div class="dr-section"><h4>观影提示</h4><div class="risk-tags">${riskHTML}</div></div>`:""}
  `;
  document.getElementById("drawerInner").innerHTML = html;
  document.getElementById("mask").classList.add("open");
  document.getElementById("drawer").classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("drawerClose").onclick = closeDrawer;
}
function closeDrawer(){
  document.getElementById("mask").classList.remove("open");
  document.getElementById("drawer").classList.remove("open");
  document.body.style.overflow = "";
}

// ---- 时间线 ----
function renderTimeline(){
  const box = document.getElementById("timeline");
  box.innerHTML = TIMELINE.map(t=>{
    const cls = t.today?"today":(t.hot?"hot":(t.soon?"soon":""));
    return `<div class="tl-item ${cls}">
      <span class="tl-date">${esc(t.date)}</span>
      <span class="tl-title">${esc(t.title)}${t.hot?" 🔥":""}</span>
      <span class="tl-plat">${esc(t.type)} · ${esc(t.platform)}</span>
    </div>`;
  }).join("");
}
function renderSpotlight(){
  document.getElementById("spotlight").innerHTML = SPOTLIGHT.map((s,i)=>
    `<li style="display:flex;gap:12px;font-size:14px;color:var(--ink-dim);line-height:1.7">
      <span style="font-family:var(--serif);color:var(--amber);flex-shrink:0">${String(i+1).padStart(2,"0")}</span>
      <span>${esc(s)}</span></li>`).join("");
}

// ---- 事件绑定 ----
function bindCardClicks(){
  document.querySelectorAll(".card,.hero-card").forEach(el=>{
    el.onclick = ()=>{
      const id = +el.dataset.id;
      const m = MOVIES.find(x=>x.id===id);
      if(m) openDrawer(m);
    };
  });
}

// ---- 搜索 ----
function applySearch(q){
  q = q.trim().toLowerCase();
  if(!q){ renderHalls(MOVIES); bindCardClicks(); return; }
  const filtered = MOVIES.filter(m=>searchPool(m).indexOf(q)>=0);
  renderHalls(filtered);
  bindCardClicks();
}

// ---- 初始化 ----
function init(){
  // 头牌：选 today 标记中热度最高的，否则全场热度最高
  const todays = MOVIES.filter(m=>m.today);
  const pool = todays.length?todays:MOVIES;
  const hero = pool.slice().sort((a,b)=>(b.hot||0)-(a.hot||0))[0];
  renderHero(hero);
  renderHalls(MOVIES);
  renderTimeline();
  renderSpotlight();
  bindCardClicks();
  document.getElementById("total").textContent = MOVIES.length;

  document.getElementById("mask").onclick = closeDrawer;
  document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeDrawer(); });

  let timer;
  document.getElementById("search").addEventListener("input",e=>{
    clearTimeout(timer);
    timer = setTimeout(()=>applySearch(e.target.value),150);
  });

  // 支持 #id=N 直达某剧详情（便于分享 / 测试）
  function openFromHash(){
    const mt = location.hash.match(/id=(\d+)/);
    if(mt){ const m = MOVIES.find(x=>x.id===+mt[1]); if(m) openDrawer(m); }
    const qt = location.hash.match(/q=([^&]+)/);
    if(qt){ const kw = decodeURIComponent(qt[1]); document.getElementById("search").value = kw; applySearch(kw); }
  }
  window.addEventListener("hashchange",openFromHash);
  openFromHash();
}
document.addEventListener("DOMContentLoaded",init);

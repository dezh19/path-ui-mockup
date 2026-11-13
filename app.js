/* PATH — Public Assistance and Triage Hub · interactive UI mockup
   Static demo: all data is fictional and stays in the browser. */

// ---------------- icons ----------------
const P = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  food:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  edu:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',
  fin:'<rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M16 15h2"/><path d="M6 6V4h12v2"/>',
  house:'<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-5a3 3 0 0 1 6 0v5"/><path d="M12 11v.01"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  alert:'<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
  copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  chart:'<path d="M3 3v18h18"/><path d="M8 17v-5M13 17V8M18 17v-9"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  right:'<path d="M5 12h14M13 5l7 7-7 7"/>', left:'<path d="M19 12H5M11 19l-7-7 7-7"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"/>',
  folder:'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9l-.8-1.2A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z"/>',
  eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  clip:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  spark:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  walk:'<circle cx="13" cy="4" r="2"/><path d="m9 20 3-6 3 3v4M6 12l3-4 4 1 3 3h3"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
  mega:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
};
const I = (n, cls='') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;

// ---------------- reference data ----------------
const TYPES = {
  food:  {name:'Food assistance', short:'Food', icon:'food', cls:'c-food', desc:'Food hampers and vouchers for families in need.'},
  edu:   {name:'Tuition & education', short:'Education', icon:'edu', cls:'c-edu', desc:'School fees, books and uniforms — including support paid each term.'},
  fin:   {name:'Financial aid', short:'Financial', icon:'fin', cls:'c-fin', desc:'One-off help with urgent bills and essential costs.'},
  house: {name:'Emergency housing', short:'Housing', icon:'house', cls:'c-house', desc:'Temporary shelter after fires and other emergencies.'},
};
const REGIONS = ['Region 4 · Demerara-Mahaica','Region 3 · Essequibo Islands-West Demerara','Region 6 · East Berbice-Corentyne','Region 10 · Upper Demerara-Berbice','Region 2 · Pomeroon-Supenaam','Region 5 · Mahaica-Berbice'];
const RSHORT = r => r.split(' · ')[0];
const STAFF = {
  admin:{name:'Rochelle Bacchus', role:'Administrative staff', ini:'RB', col:'#0E7C6B'},
  cw1:{name:'Kevin Ramnarine', role:'Caseworker', ini:'KR', col:'#6D5BD0'},
  cw2:{name:'Tamika Joseph', role:'Caseworker', ini:'TJ', col:'#E8604C'},
  cw3:{name:'Andre Fung-A-Fat', role:'Caseworker', ini:'AF', col:'#2F80C9'},
  mgr:{name:'Natasha Persaud', role:'Programme manager', ini:'NP', col:'#C98309'},
  it:{name:'Marcus Hope', role:'IntellectStorm system admin', ini:'MH', col:'#D2433A'},
};
const STATUS = {
  new:{label:'New', cls:'b-new'}, screening:{label:'Screening', cls:'b-screen'}, assigned:{label:'Assigned', cls:'b-prog'},
  progress:{label:'In progress', cls:'b-prog'}, approved:{label:'Approved', cls:'b-ok'}, rejected:{label:'Not approved', cls:'b-bad'},
  docs:{label:'Documents requested', cls:'b-warn'}, closed:{label:'Closed', cls:'b-grey'},
};
const DRIVES = [
  {d:'2026-11-21', t:'Christmas food hamper drive', type:'food', region:REGIONS[0], place:'Albouystown Community Centre, Georgetown', time:'9:00 AM – 2:00 PM', spots:'120 hampers'},
  {d:'2026-11-28', t:'Back-to-school supplies', type:'edu', region:REGIONS[3], place:'Mackenzie Sports Club Hall, Linden', time:'10:00 AM – 3:00 PM', spots:'80 school kits'},
  {d:'2026-12-05', t:'Fire relief support day', type:'house', region:REGIONS[2], place:'New Amsterdam Town Hall', time:'8:30 AM – 1:00 PM', spots:'Walk-ins welcome'},
  {d:'2026-12-09', t:'Food voucher distribution', type:'food', region:REGIONS[1], place:'Vreed-en-Hoop Market Square', time:'9:00 AM – 12:00 PM', spots:'200 vouchers'},
  {d:'2026-12-12', t:'Financial aid clinic', type:'fin', region:REGIONS[0], place:'Launch NGO Office, Charlestown', time:'1:00 PM – 5:00 PM', spots:'By appointment'},
  {d:'2026-12-16', t:'Community food drive', type:'food', region:REGIONS[4], place:'Anna Regina Community Centre', time:'9:00 AM – 1:00 PM', spots:'150 hampers'},
];

let APPS = [
  {id:'PTH-26-0148', name:'Shanice Williams', region:REGIONS[0], types:['food','edu'], date:'Nov 12, 2026', ch:'Online', flags:[], status:'new', idno:'••••• 4521', phone:'+592 6•• ••12', cw:null, kids:3},
  {id:'PTH-26-0147', name:'Dwayne Bascom', region:REGIONS[2], types:['house','fin'], date:'Nov 12, 2026', ch:'Walk-in', flags:['dup'], status:'new', idno:'••••• 7730', phone:'+592 6•• ••48', cw:null, dupOf:'PTH-26-0119', kids:2},
  {id:'PTH-26-0146', name:'Priya Singh', region:REGIONS[1], types:['edu'], date:'Nov 11, 2026', ch:'Online', flags:['incomplete'], status:'screening', idno:'••••• 1093', phone:'+592 6•• ••03', cw:null, missing:'Proof of school enrolment', kids:1},
  {id:'PTH-26-0145', name:'Marlon Adams', region:REGIONS[3], types:['food'], date:'Nov 11, 2026', ch:'Phone', flags:[], status:'screening', idno:'••••• 5562', phone:'+592 6•• ••77', cw:null, kids:4},
  {id:'PTH-26-0144', name:'Keisha Fraser', region:REGIONS[0], types:['fin','food'], date:'Nov 10, 2026', ch:'Online', flags:[], status:'docs', idno:'••••• 8814', phone:'+592 6•• ••90', cw:null, kids:2},
  {id:'PTH-26-0142', name:'Ravi Persaud', region:REGIONS[5], types:['house'], date:'Nov 9, 2026', ch:'Walk-in', flags:[], status:'assigned', idno:'••••• 3307', phone:'+592 6•• ••35', cw:'cw1', kids:0},
  {id:'PTH-26-0139', name:'Alicia Thom', region:REGIONS[0], types:['edu'], date:'Nov 8, 2026', ch:'Online', flags:[], status:'progress', idno:'••••• 6620', phone:'+592 6•• ••58', cw:'cw1', kids:2},
  {id:'PTH-26-0131', name:'Jamal Griffith', region:REGIONS[3], types:['food','fin'], date:'Nov 5, 2026', ch:'Phone', flags:[], status:'approved', idno:'••••• 2289', phone:'+592 6•• ••14', cw:'cw2', kids:5},
  {id:'PTH-26-0124', name:'Sharon Bovell', region:REGIONS[1], types:['house'], date:'Nov 3, 2026', ch:'Walk-in', flags:[], status:'progress', idno:'••••• 4410', phone:'+592 6•• ••66', cw:'cw1', kids:3},
  {id:'PTH-26-0119', name:'Dwayne Bascom', region:REGIONS[2], types:['house'], date:'Oct 28, 2026', ch:'Online', flags:[], status:'approved', idno:'••••• 7730', phone:'+592 6•• ••48', cw:'cw3', kids:2},
  {id:'PTH-26-0112', name:'Tiffany Lewis', region:REGIONS[4], types:['food'], date:'Oct 24, 2026', ch:'Online', flags:[], status:'rejected', idno:'••••• 9036', phone:'+592 6•• ••21', cw:'cw2', kids:1},
  {id:'PTH-26-0098', name:'Omar Khan', region:REGIONS[0], types:['edu'], date:'Sep 30, 2026', ch:'Walk-in', flags:[], status:'progress', idno:'••••• 1175', phone:'+592 6•• ••84', cw:'cw1', kids:1},
];

const CASES = {
  'PTH-26-0139': {
    summary:'Single mother of two. Requests tuition support for eldest daughter (Form 3, North Georgetown Secondary) and uniforms for both children.',
    stage:2,
    notes:[
      {by:'cw1', when:'Nov 10, 2026 · 2:14 PM', text:'Home visit completed. Household circumstances confirmed; enrolment letter received from the school.'},
      {by:'admin', when:'Nov 8, 2026 · 11:02 AM', text:'Application complete. Assigned to Kevin Ramnarine for assessment.'},
    ],
    comms:[
      {ch:'sms', when:'Nov 10, 2026', text:'PATH: Your application PTH-26-0139 is now In progress. Your caseworker is Kevin R.'},
      {ch:'phone', when:'Nov 9, 2026', text:'Called applicant to schedule home visit for Nov 10.'},
      {ch:'mail', when:'Nov 8, 2026', text:'Application received confirmation sent.'},
    ],
    recurring:{label:'Tuition support · GYD 45,000 per term', terms:[
      {t:'Term 1 · Sep 2026', amt:'GYD 45,000', st:'paid'},
      {t:'Term 2 · Jan 2027', amt:'GYD 45,000', st:'scheduled'},
      {t:'Term 3 · Apr 2027', amt:'GYD 45,000', st:'pending'},
    ]},
  },
};
function caseFor(id){
  if(!CASES[id]){
    const a = APPS.find(x=>x.id===id);
    CASES[id] = {summary:`Request for ${a.types.map(t=>TYPES[t].name.toLowerCase()).join(' and ')}. Household of ${a.kids+1}${a.kids?` including ${a.kids} child${a.kids>1?'ren':''}`:''}.`, stage:a.status==='approved'?3:a.status==='progress'?2:1,
      notes:[{by:'admin', when:a.date+' · 10:30 AM', text:`Received via ${a.ch.toLowerCase()} channel and screened. Assigned for assessment.`}],
      comms:[{ch:'mail', when:a.date, text:'Application received confirmation sent.'}],
      recurring: a.types.includes('edu') ? {label:'Tuition support · GYD 40,000 per term', terms:[{t:'Term 1 · Sep 2026', amt:'GYD 40,000', st:'paid'},{t:'Term 2 · Jan 2027', amt:'GYD 40,000', st:'scheduled'}]} : null};
  }
  return CASES[id];
}

const USERS = [
  {n:'Natasha Persaud', e:'npersaud@launchngo.gy', r:'Manager', org:'Launch NGO', last:'Today, 8:41 AM', mfa:true},
  {n:'Rochelle Bacchus', e:'rbacchus@launchngo.gy', r:'Administrative staff', org:'Launch NGO', last:'Today, 9:15 AM', mfa:true},
  {n:'Kevin Ramnarine', e:'kramnarine@launchngo.gy', r:'Caseworker', org:'Launch NGO', last:'Today, 10:02 AM', mfa:true},
  {n:'Tamika Joseph', e:'tjoseph@launchngo.gy', r:'Caseworker', org:'Launch NGO', last:'Yesterday', mfa:true},
  {n:'Andre Fung-A-Fat', e:'afung@launchngo.gy', r:'Caseworker', org:'Launch NGO', last:'Nov 10', mfa:false},
  {n:'Marcus Hope', e:'mhope@intellectstorm.gy', r:'System administrator', org:'IntellectStorm', last:'Today, 7:55 AM', mfa:true},
];
let AUDIT = [
  {t:'10:02 AM', who:'Kevin Ramnarine', what:'Viewed case PTH-26-0139', ip:'Office · 10.0.4.21'},
  {t:'9:58 AM', who:'Rochelle Bacchus', what:'Flagged PTH-26-0147 as possible duplicate of PTH-26-0119', ip:'Office · 10.0.4.17'},
  {t:'9:40 AM', who:'Kevin Ramnarine', what:'Revealed ID number on PTH-26-0124', ip:'Mobile · 190.80.x.x'},
  {t:'9:15 AM', who:'Rochelle Bacchus', what:'Signed in (two-step verified)', ip:'Office · 10.0.4.17'},
  {t:'8:41 AM', who:'Natasha Persaud', what:'Exported monthly report (PDF)', ip:'Office · 10.0.4.12'},
  {t:'7:55 AM', who:'Marcus Hope', what:'Nightly backup verified (encrypted, 30-day retention)', ip:'IntellectStorm DC'},
];

// ---------------- state ----------------
const S = {
  role:'public',
  wiz:{step:0, types:['food'], data:{first:'',last:'',idno:'',phone:'',email:'',region:REGIONS[0],address:'',house:'3'}, consent:false},
  lastRef:null,
  driveFilter:'All',
  queueTab:'all',
  sel:null, notifOpen:false, reveal:{},
  adminTab:'orgs',
};
const ROLES = {
  public:{label:'Applicant (public)', home:'#home'},
  admin:{label:'NGO admin staff', home:'#dashboard', who:'admin'},
  caseworker:{label:'Caseworker', home:'#cases', who:'cw1'},
  manager:{label:'NGO manager', home:'#reports', who:'mgr'},
  it:{label:'IntellectStorm admin', home:'#admin', who:'it'},
};

// ---------------- helpers ----------------
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const badge = st => `<span class="badge ${STATUS[st].cls}">${STATUS[st].label}</span>`;
const typeChips = ts => `<div class="typechips">${ts.map(t=>`<span class="tchip ${TYPES[t].cls}" title="${TYPES[t].name}">${I(TYPES[t].icon)}</span>`).join('')}</div>`;
const av = k => { const s=STAFF[k]; return `<span class="avatar" style="background:${s.col}">${s.ini}</span>`; };
const initials = n => n.split(' ').map(x=>x[0]).slice(0,2).join('');
const pav = (n,col) => `<span class="avatar" style="background:${col||'#94A3A0'}">${initials(n)}</span>`;
const PCOL = ['#0E7C6B','#6D5BD0','#E8604C','#2F80C9','#C98309','#1E9E62'];
const colFor = s => PCOL[[...s].reduce((a,c)=>a+c.charCodeAt(0),0)%PCOL.length];
function toast(msg){ const t=document.createElement('div'); t.className='toast'; t.innerHTML=I('check')+esc(msg); document.body.appendChild(t); setTimeout(()=>t.remove(),2600); }
function store(){ try{ localStorage.setItem('path-demo-role', S.role); }catch(e){} }

// ---------------- chrome ----------------
function demobar(){
  return `<div class="demobar"><div class="inner">
    <span class="tag">PATH · UI MOCKUP</span>
    <span class="muted" style="color:#9FB1AE">View as:</span>
    <div class="rolepick">${Object.entries(ROLES).map(([k,r])=>`<button data-role="${k}" class="${S.role===k?'on':''}">${r.label}</button>`).join('')}</div><select class="role-select" data-act="rolesel" aria-label="View as">${Object.entries(ROLES).map(([k,r])=>`<option value="${k}" ${S.role===k?'selected':''}>${r.label}</option>`).join('')}</select>
    <span class="powered">Hosted by <img src="intellectstorm-logo.png" alt="IntellectStorm"></span>
    <a href="#login" class="signout">${I('logout')} Sign out</a>
  </div></div>`;
}
function pubHeader(route){
  const nav = [['#home','Home'],['#apply','Apply for help'],['#track','Track my request'],['#drives','Assistance drives']];
  return `<header class="pub-head"><div class="inner">
    <a href="#home" class="logo"><span class="logo-mark">${I('heart')}</span><span>PATH<small>Public Assistance &amp; Triage Hub</small></span></a>
    <nav class="pub-nav">${nav.map(([h,l])=>`<a href="${h}" class="${route===h?'on':''}">${l}</a>`).join('')}</nav>
    <a href="#apply" class="btn btn-primary btn-sm" style="margin-left:auto" data-mobile-only>${I('plus')} Apply</a>
    <a href="#login" class="btn btn-ghost btn-sm hide-mobile">${I('user')} Staff sign in</a>
  </div></header>`;
}
function pubFooter(){
  return `<footer class="foot"><div class="inner">
    <span>© 2026 PATH · Public Assistance and Triage Hub. Your information is protected and only seen by the staff handling your request.</span>
    <span>Hosted by <img src="intellectstorm-logo.png" alt="IntellectStorm"></span>
  </div></footer>
  <nav class="bnav">
    ${[['#home','home','Home'],['#apply','plus','Apply'],['#track','search','Track'],['#drives','cal','Drives']].map(([h,i,l])=>`<a href="${h}" class="${location.hash===h?'on':''}">${I(i)}${l}</a>`).join('')}
  </nav>`;
}
function navFor(role){
  const n = {
    admin:[['Overview',[['#dashboard','home','Dashboard'],['#screening','inbox','Screening queue',APPS.filter(a=>['new','screening','docs'].includes(a.status)).length],['#intake','walk','Log walk-in / phone'],['#allcases','folder','All cases'],['#managedrives','cal','Assistance drives']]]],
    caseworker:[['My work',[['#cases','folder','My cases',APPS.filter(a=>a.cw==='cw1'&&a.status!=='closed').length],['#intake','walk','Log walk-in / phone'],['#drives-staff','cal','Assistance drives']]]],
    manager:[['Overview',[['#dashboard','home','Dashboard'],['#reports','chart','Reports'],['#allcases','folder','All cases'],['#screening','inbox','Screening queue']]]],
    it:[['Platform',[['#admin','building','Admin console'],['#admin-users','users','Users & roles'],['#admin-audit','shield','Audit log'],['#admin-health','server','System health']]]],
  }[role];
  return n;
}
const SHORTL={'My cases':'Cases','Log walk-in / phone':'Walk-in','Assistance drives':'Drives','Screening queue':'Queue','All cases':'Cases','Admin console':'Console','Users & roles':'Users','Audit log':'Audit','System health':'Health','Dashboard':'Home'};
function shell(route, content, title){
  const who = STAFF[ROLES[S.role].who];
  const groups = navFor(S.role);
  const flat = groups.flatMap(g=>g[1]);
  const isOn = h => route===h || (h==='#cases' && route.startsWith('#case-')) || (h==='#allcases' && route.startsWith('#case-') && S.role!=='caseworker');
  return `<div class="shell">
    <aside class="side">
      <a href="${ROLES[S.role].home}" class="logo"><span class="logo-mark">${I('heart')}</span><span>PATH<small>${S.role==='it'?'IntellectStorm console':'Launch NGO workspace'}</small></span></a>
      ${groups.map(([g,items])=>`<div class="grp">${g}</div>${items.map(([h,i,l,c])=>`<a href="${h}" class="${isOn(h)?'on':''}">${I(i)}${l}${c?`<span class="count">${c}</span>`:''}</a>`).join('')}`).join('')}
      <div class="grp">Help</div><a href="#home">${I('globe')}Public portal</a>
      <div class="me">${av(ROLES[S.role].who)}<div><b style="color:#fff;font-size:13px">${who.name}</b><div class="tiny" style="color:#7F9592">${who.role}</div></div></div>
    </aside>
    <div>
      <div class="topbar">
        <div class="search">${I('search')}<input placeholder="Search by name, reference or phone…" aria-label="Search"></div>
        <div style="margin-left:auto;position:relative" class="row">
          <button class="iconbtn" data-act="notif" aria-label="Notifications">${I('bell')}<span class="dot"></span></button>
          ${S.notifOpen?notifPanel():''}
          ${av(ROLES[S.role].who)}
        </div>
      </div>
      <main class="main">${content}</main>
    </div>
    <nav class="bnav">${flat.slice(0,4).map(([h,i,l])=>`<a href="${h}" class="${isOn(h)?'on':''}">${I(i)}${SHORTL[l]||l}</a>`).join('')}</nav>
  </div>`;
}
function notifPanel(){
  const items = {
    admin:[['flag','Possible duplicate: PTH-26-0147 matches PTH-26-0119','2 min ago'],['inbox','3 new applications since 8:00 AM','1 hr ago'],['clip','Keisha Fraser uploaded requested documents','3 hrs ago']],
    caseworker:[['folder','New case assigned: PTH-26-0142 (Ravi Persaud)','15 min ago'],['repeat','Term 2 tuition for PTH-26-0139 due Jan 6','Today'],['msg','Sharon Bovell replied by SMS','Yesterday']],
    manager:[['chart','November report is ready to export','Today'],['alert','4 applications waiting more than 3 days','Today']],
    it:[['server','Nightly backup verified','7:55 AM'],['msg','SMS delivery rate 98.4% (last 24 h)','7:00 AM'],['lock','1 staff account without two-step login','Yesterday']],
  }[S.role]||[];
  return `<div class="notif">${items.map(([i,t,w])=>`<div class="it"><span class="tchip ${i==='flag'?'c-house':'c-fin'}">${I(i==='flag'?'alert':i)}</span><div><b style="font-weight:600">${t}</b><div class="tiny muted">${w}</div></div></div>`).join('')}</div>`;
}

// ---------------- PUBLIC SCREENS ----------------
function viewHome(){
  return `${pubHeader('#home')}<div class="page">
  <section class="hero">
    <div style="position:relative;z-index:1">
      <span class="badge" style="background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.2)">${I('heart')} Help for families across Guyana</span>
      <h1 style="margin-top:16px">Asking for help<br><span class="grad-text" style="background-image:linear-gradient(90deg,#67E8F9,#A5B4FC)">should be simple.</span></h1>
      <p class="lead">Apply for food, education, financial or housing support in one short form — from your phone, in about 5 minutes. Then follow every step of your request.</p>
      <div class="row wrap">
        <a href="#apply" class="btn btn-accent btn-lg">Start my application ${I('right')}</a>
        <a href="#track" class="btn btn-lg btn-ghost">${I('search')} Track a request</a>
      </div>
      <div class="chips"><span class="chip">${I('clock')} About 5 minutes</span><span class="chip">${I('lock')} Your details are protected</span><span class="chip">${I('msg')} SMS &amp; email updates</span></div>
    </div>
    <div class="hero-card">
      <div class="row between"><b>Request PTH-26-0139</b>${badge('progress')}</div>
      <div class="mini-step"><span class="ring ok">${I('check')}</span><div><b>Received</b><div class="tiny muted">Nov 8 · Confirmation sent by SMS</div></div></div>
      <div class="mini-step"><span class="ring ok">${I('check')}</span><div><b>Reviewed by our team</b><div class="tiny muted">Nov 8 · Caseworker assigned</div></div></div>
      <div class="mini-step"><span class="ring" style="background:var(--accent-50);color:var(--accent);box-shadow:0 0 16px rgba(251,191,36,.35)">${I('clock')}</span><div><b>Being assessed</b><div class="tiny muted">Your caseworker visited on Nov 10</div></div></div>
      <div class="mini-step"><span class="ring" style="background:rgba(255,255,255,.07);color:var(--ink-3)">${I('heart')}</span><div><b>Decision &amp; support</b><div class="tiny muted">We'll text you as soon as it's ready</div></div></div>
    </div>
  </section>

  <div class="section-title"><div><h2>What can we help with?</h2><p class="muted">You can ask for more than one type of help on the same application.</p></div></div>
  <div class="tiles">${Object.entries(TYPES).map(([k,t])=>`<a href="#apply" data-pick="${k}" class="tile"><span class="ic ${t.cls}">${I(t.icon)}</span><h3>${t.name}</h3><p class="muted small">${t.desc}</p><span class="small" style="font-weight:700;color:var(--brand)">Apply ${'→'}</span></a>`).join('')}</div>

  <div class="section-title"><h2>How it works</h2></div>
  <div class="steps3">
    <div class="step3"><div class="n">1</div><h3>Tell us what you need</h3><p class="muted small">Choose the help you need and share a few details. No account needed.</p></div>
    <div class="step3"><div class="n">2</div><h3>We review your request</h3><p class="muted small">Our team checks your application and a caseworker gets in touch.</p></div>
    <div class="step3"><div class="n">3</div><h3>Get support &amp; updates</h3><p class="muted small">Follow progress online and get a text or email whenever something changes.</p></div>
  </div>

  <div class="section-title"><div><h2>Upcoming assistance drives</h2><p class="muted">Free support events near you.</p></div><a href="#drives" class="btn btn-ghost btn-sm">See all ${I('right')}</a></div>
  <div class="drives">${DRIVES.slice(0,3).map(driveCard).join('')}</div>

  <div class="card card-pad" style="margin-top:34px;display:flex;gap:18px;align-items:center;flex-wrap:wrap">
    <span class="ring" style="width:52px;height:52px;background:var(--sky-50);color:var(--sky)">${I('phone')}</span>
    <div style="flex:1;min-width:220px"><h3>Prefer to talk to someone?</h3><p class="muted small">Call or walk in to our office — staff will enter your request into PATH for you, so you get the same reference number and updates.</p></div>
    <a class="btn btn-soft" href="#drives">${I('pin')} Find an office</a>
  </div>
  </div>${pubFooter()}`;
}
function driveCard(d){
  const dt = new Date(d.d+'T12:00:00'); const m = dt.toLocaleString('en',{month:'short'}); const day = dt.getDate();
  const t = TYPES[d.type];
  return `<div class="drive"><div class="date-badge"><div class="m">${m}</div><div class="d">${day}</div></div>
    <div class="stack" style="gap:6px"><div class="row" style="gap:8px"><span class="tchip ${t.cls}">${I(t.icon)}</span><b>${d.t}</b></div>
    <div class="small muted row" style="gap:6px">${I('pin','')}${d.place}</div>
    <div class="row wrap small" style="gap:8px"><span class="badge b-grey">${RSHORT(d.region)}</span><span class="badge b-grey">${I('clock')} ${d.time}</span><span class="badge b-ok">${d.spots}</span></div></div></div>`;
}
function viewDrives(staff){
  const regs = ['All',...new Set(DRIVES.map(d=>RSHORT(d.region)))];
  const list = DRIVES.filter(d=>S.driveFilter==='All'||RSHORT(d.region)===S.driveFilter);
  const body = `<div class="ph"><div><h1>Assistance drives</h1><p class="muted">Current and upcoming support events, by region.</p></div>${staff?`<button class="btn btn-primary" data-act="toast" data-msg="Drive form opened (mockup)">${I('plus')} New drive</button>`:''}</div>
    <div class="filters" style="margin-bottom:16px">${regs.map(r=>`<button class="pill ${S.driveFilter===r?'on':''}" data-act="drivefilter" data-v="${r}">${r}</button>`).join('')}</div>
    <div class="drives">${list.map(driveCard).join('')||'<p class="muted">No drives in this region yet.</p>'}</div>`;
  return staff ? body : `${pubHeader('#drives')}<div class="page">${body}</div>${pubFooter()}`;
}

// apply wizard
const WSTEPS = ['Type of help','About you','Your situation','Review & send'];
function viewApply(){
  const w = S.wiz; const st = w.step;
  let body='';
  if(st===0){
    body = `<h2>What help do you need?</h2><p class="muted" style="margin:6px 0 18px">Choose all that apply — one application covers everything.</p>
    <div class="choice-grid">${Object.entries(TYPES).map(([k,t])=>`<button class="choice ${w.types.includes(k)?'on':''}" data-act="toggletype" data-v="${k}">
      <span class="ic tile-ic ${t.cls}" style="width:46px;height:46px;border-radius:14px;display:grid;place-items:center;flex:none">${I(t.icon)}</span>
      <span><b style="display:block;font-size:16px">${t.name}</b><span class="muted small">${t.desc}</span></span><span class="check">${I('check')}</span></button>`).join('')}</div>`;
  } else if(st===1){
    const d=w.data;
    body = `<h2>About you</h2><p class="muted" style="margin:6px 0 18px">We use this to contact you and to make sure each person gets help fairly.</p>
    <div class="form-grid">
      <div class="field"><label>First name</label><input class="input" data-f="first" value="${esc(d.first)}" placeholder="e.g. Shanice"></div>
      <div class="field"><label>Last name</label><input class="input" data-f="last" value="${esc(d.last)}" placeholder="e.g. Williams"></div>
      <div class="field"><label>National ID number</label><input class="input" data-f="idno" value="${esc(d.idno)}" placeholder="9-digit ID number"><span class="hint row" style="gap:6px">${I('lock','')} Encrypted. Only the staff handling your request can see it.</span></div>
      <div class="field"><label>Mobile number</label><input class="input" data-f="phone" value="${esc(d.phone)}" placeholder="+592 6xx xxxx"><span class="hint">We'll text you updates here.</span></div>
      <div class="field"><label>Email <span class="muted">(optional)</span></label><input class="input" data-f="email" value="${esc(d.email)}" placeholder="name@example.com"></div>
      <div class="field"><label>Region</label><select class="select" data-f="region">${REGIONS.map(r=>`<option ${d.region===r?'selected':''}>${r}</option>`).join('')}</select></div>
      <div class="field full"><label>Home address</label><input class="input" data-f="address" value="${esc(d.address)}" placeholder="Lot, street, village or ward"></div>
    </div>`;
  } else if(st===2){
    body = `<h2>Your situation</h2><p class="muted" style="margin:6px 0 18px">A few questions for each type of help you chose.</p>
    <div class="stack" style="gap:18px">
      <div class="field"><label>How many people live in your household?</label><div class="filters">${['1','2','3','4','5','6+'].map(n=>`<button class="pill ${w.data.house===n?'on':''}" data-act="house" data-v="${n}">${n}</button>`).join('')}</div></div>
      ${w.types.map(t=>`<div class="card card-pad" style="box-shadow:none"><div class="row" style="margin-bottom:12px"><span class="tchip ${TYPES[t].cls}">${I(TYPES[t].icon)}</span><b>${TYPES[t].name}</b></div>${typeQs(t)}</div>`).join('')}
      <div class="upload">${I('upload','')}<div style="margin-top:6px"><b>Add supporting documents</b> <span class="muted">(optional)</span></div><p class="muted small">Photo of ID, school letter, fire report, bills — JPG, PNG or PDF up to 10 MB.</p><button class="btn btn-soft btn-sm" style="margin-top:10px" data-act="toast" data-msg="2 files attached (mockup)">${I('plus')} Choose files</button></div>
    </div>`;
  } else {
    const d=w.data;
    body = `<h2>Check and send</h2><p class="muted" style="margin:6px 0 18px">Make sure everything looks right.</p>
    <div class="card card-pad" style="box-shadow:none"><div class="row between"><b>Help requested</b><button class="btn btn-sm btn-ghost" data-act="goto" data-v="0">Edit</button></div><div class="row wrap" style="margin-top:10px">${w.types.map(t=>`<span class="badge ${TYPES[t].cls}">${I(TYPES[t].icon)} ${TYPES[t].name}</span>`).join('')}</div></div>
    <div class="card card-pad" style="box-shadow:none;margin-top:12px"><div class="row between"><b>Your details</b><button class="btn btn-sm btn-ghost" data-act="goto" data-v="1">Edit</button></div>
      <dl class="kv" style="margin-top:12px"><dt>Name</dt><dd>${esc((d.first||'Shanice')+' '+(d.last||'Williams'))}</dd><dt>ID number</dt><dd class="mask">•••••${esc((d.idno||'4521').slice(-4))}</dd><dt>Mobile</dt><dd>${esc(d.phone||'+592 600 1212')}</dd><dt>Region</dt><dd>${esc(d.region)}</dd><dt>Household</dt><dd>${d.house} people</dd></dl></div>
    <label class="consent" style="margin-top:14px"><input type="checkbox" data-act="consent" ${w.consent?'checked':''}><span class="small"><b>Privacy notice.</b> I agree that PATH may store my details to process this request. They are encrypted, only seen by the staff handling my request, and never shared without my permission. I confirm the information is true.</span></label>`;
  }
  const pct = ((st+1)/WSTEPS.length)*100;
  return `${pubHeader('#apply')}<div class="page"><div class="wizard">
    <aside class="card wsteps"><b style="display:block;padding:6px 10px 10px">Your application</b>${WSTEPS.map((s,i)=>`<div class="wstep ${i<st?'done':i===st?'on':''}"><span class="n">${i<st?I('check'):i+1}</span>${s}</div>`).join('')}
      <div class="alert alert-info small" style="margin-top:14px">${I('lock')}<span>Your information is encrypted and only seen by staff handling your request.</span></div></aside>
    <section class="card card-pad" style="padding:28px">
      <div class="row between small" style="margin-bottom:8px"><b>Step ${st+1} of ${WSTEPS.length} · ${WSTEPS[st]}</b><span class="muted">${Math.round(pct)}%</span></div>
      <div class="progress" style="margin-bottom:22px"><span style="width:${pct}%"></span></div>
      ${body}
      <div class="wfoot">${st>0?`<button class="btn btn-ghost" data-act="back">${I('left')} Back</button>`:'<span></span>'}
      ${st<3?`<button class="btn btn-primary" data-act="next" ${w.types.length?'':'disabled style="opacity:.5"'}>Continue ${I('right')}</button>`:`<button class="btn btn-primary" data-act="submit" ${w.consent?'':'disabled style="opacity:.5;cursor:not-allowed"'}>${I('check')} Send my application</button>`}</div>
    </section></div></div>${pubFooter()}`;
}
function typeQs(t){
  if(t==='food') return `<div class="form-grid"><div class="field"><label>Children under 12</label><select class="select"><option>0</option><option>1</option><option selected>2</option><option>3+</option></select></div><div class="field"><label>Anyone with special dietary needs?</label><select class="select"><option>No</option><option>Yes</option></select></div></div>`;
  if(t==='edu') return `<div class="form-grid"><div class="field"><label>Student's school</label><input class="input" placeholder="e.g. North Georgetown Secondary"></div><div class="field"><label>Grade / form</label><input class="input" placeholder="e.g. Form 3"></div><div class="field full"><label>What do you need?</label><div class="filters"><span class="pill on">Tuition fees</span><span class="pill">Books</span><span class="pill on">Uniforms</span><span class="pill">Transport</span></div><span class="hint">${I('repeat','')} Tuition can be supported every term once approved.</span></div></div>`;
  if(t==='fin') return `<div class="form-grid"><div class="field"><label>What is the cost for?</label><select class="select"><option>Electricity / water bill</option><option>Medical costs</option><option>Rent</option><option>Other</option></select></div><div class="field"><label>Approximate amount (GYD)</label><input class="input" placeholder="e.g. 25,000"></div></div>`;
  return `<div class="form-grid"><div class="field"><label>What happened?</label><select class="select"><option>House fire</option><option>Flooding</option><option>Eviction</option><option>Other emergency</option></select></div><div class="field"><label>When did it happen?</label><input class="input" type="date" value="2026-11-09"></div><div class="field full"><label>Tell us briefly</label><textarea class="textarea" placeholder="Where are you staying now? What do you need most?"></textarea></div></div>`;
}
function viewSuccess(){
  const ref = S.lastRef || 'PTH-26-0149';
  return `${pubHeader('')}<div class="page"><div class="success card card-pad" style="padding:38px">
    <div class="big">${I('check')}</div><h1 style="font-size:28px">Application sent!</h1>
    <p class="muted" style="margin-top:8px">Thank you. Our team will review your request and a caseworker will contact you.</p>
    <div class="refbox">${ref} <button class="iconbtn" data-act="toast" data-msg="Reference copied">${I('copy')}</button></div>
    <p class="small muted">Keep this reference number to track your request.</p>
    <div style="display:flex;justify-content:center;margin:22px 0"><div class="sms"><b class="tiny muted" style="display:block;margin-bottom:4px">Text message · now</b>PATH: We received your application ${ref}. We'll text you when it is reviewed. Track it at path.gy/track</div></div>
    <div class="row" style="justify-content:center;gap:10px;flex-wrap:wrap"><a class="btn btn-primary" href="#track" data-act="trackref" data-v="${ref}">${I('search')} Track this request</a><a class="btn btn-ghost" href="#home">Back to home</a></div>
  </div></div>${pubFooter()}`;
}
function viewTrack(){
  const ref = S.trackRef || '';
  const a = APPS.find(x=>x.id===ref.trim().toUpperCase()) || (ref && ref===S.lastRef ? {id:ref, status:'new', types:S.wiz.types, date:'Today', cw:null} : null);
  let res='';
  if(ref && !a) res = `<div class="alert alert-warn" style="margin-top:16px">${I('alert')}<span>We couldn't find <b>${esc(ref)}</b>. Check the number in your text message, or try a demo reference such as <b>PTH-26-0139</b>.</span></div>`;
  if(a){
    const order=['new','screening','assigned','progress','approved'];
    let idx = {new:0,screening:1,docs:1,assigned:2,progress:3,approved:4,rejected:4,closed:4}[a.status];
    const steps=[['Application received','We sent you a confirmation by text and email.'],['Reviewed by our team',a.status==='docs'?'We need one more document from you.':'We check your application is complete.'],['Caseworker assigned',a.cw?`${STAFF[a.cw].name.split(' ')[0]} will look after your request.`:'A caseworker will be assigned to you.'],['Assessment','Your caseworker may call or visit you.'],[a.status==='rejected'?'Decision':'Approved & support given',a.status==='rejected'?'We were not able to approve this request. You can apply again or call us.':'You will receive a text with the details of your support.']];
    res = `<div class="card card-pad" style="margin-top:18px">
      <div class="row between wrap"><div><div class="tiny muted">Reference</div><h2 style="font-size:22px">${a.id}</h2></div>${badge(a.status)}</div>
      <div class="row wrap" style="margin:12px 0 22px">${a.types.map(t=>`<span class="badge ${TYPES[t].cls}">${I(TYPES[t].icon)} ${TYPES[t].name}</span>`).join('')}<span class="badge b-grey">Sent ${a.date}</span></div>
      ${a.status==='docs'?`<div class="alert alert-warn" style="margin-bottom:18px">${I('upload')}<div><b>Action needed:</b> please upload a recent utility bill as proof of address.<div style="margin-top:8px"><button class="btn btn-sm btn-accent" data-act="toast" data-msg="Document uploaded — thank you!">${I('upload')} Upload now</button></div></div></div>`:''}
      <div class="tl">${steps.map((s,i)=>`<div class="tl-item ${i<idx||(i===idx&&['approved','rejected'].includes(a.status))?'done':i===idx?'now':''}"><span class="tdot">${i<idx||(i===idx&&['approved','rejected'].includes(a.status))?I('check'):i===idx?I('clock'):''}</span><h4>${s[0]}</h4><p class="small muted">${s[1]}</p></div>`).join('')}</div>
      <div class="row wrap" style="gap:10px;border-top:1px solid var(--line);padding-top:16px"><span class="small muted">${I('bell','')} Updates go to your phone ending ••12</span><button class="btn btn-sm btn-ghost" style="margin-left:auto" data-act="toast" data-msg="Message sent to your caseworker">${I('msg')} Message my caseworker</button></div>
    </div>`;
  }
  return `${pubHeader('#track')}<div class="page" style="max-width:760px">
    <h1 style="font-size:30px">Track my request</h1><p class="muted" style="margin:6px 0 18px">Enter the reference number from your text message or email.</p>
    <div class="card card-pad"><div class="row wrap"><input class="input" id="trackin" style="flex:1;min-width:200px" placeholder="e.g. PTH-26-0139" value="${esc(ref)}"><button class="btn btn-primary" data-act="track">${I('search')} Find</button></div>
    <div class="tiny muted" style="margin-top:10px">Try: <a href="#" data-act="demo-ref" data-v="PTH-26-0139" style="color:var(--brand);font-weight:700">PTH-26-0139</a> · <a href="#" data-act="demo-ref" data-v="PTH-26-0144" style="color:var(--brand);font-weight:700">PTH-26-0144</a> · <a href="#" data-act="demo-ref" data-v="PTH-26-0131" style="color:var(--brand);font-weight:700">PTH-26-0131</a></div></div>
    ${res}</div>${pubFooter()}`;
}

// ---------------- STAFF SCREENS ----------------
function stat(ic,cls,lbl,val,delta,dcol,hl){ return `<div class="card stat ${hl?'hl':''}"><div class="lbl"><span class="ic ${cls}">${I(ic)}</span>${lbl}</div><div class="val">${val}</div><div class="delta" style="color:${dcol||'var(--ink-3)'}">${delta}</div></div>`; }
function viewDashboard(){
  const waiting = APPS.filter(a=>['new','screening','docs'].includes(a.status));
  const who = STAFF[ROLES[S.role].who].name.split(' ')[0];
  return shell(location.hash, `
    <div class="ph"><div><p class="muted">Thursday, November 12</p><h1>Good morning, ${who} 👋</h1></div>
      <div class="row wrap"><a href="#intake" class="btn btn-ghost">${I('walk')} Log walk-in</a><a href="#screening" class="btn btn-primary">${I('inbox')} Open screening queue</a></div></div>
    <div class="stats">
      ${stat('inbox','c-fin','New this week','23','▲ 6 vs last week','#D9F99D',1)}
      ${stat('clock','c-food','Waiting for screening',waiting.length,'Oldest: 2 days','var(--warn)')}
      ${stat('alert','c-house','Flagged',APPS.filter(a=>a.flags.length).length,'1 duplicate · 1 incomplete','var(--coral)')}
      ${stat('folder','c-edu','Open cases','41','Across 3 caseworkers')}
    </div>
    <div class="case-grid" style="margin-top:18px">
      <div class="card"><div class="card-pad row between" style="padding-bottom:10px"><h3>Needs attention</h3><a href="#screening" class="small" style="color:var(--brand);font-weight:700">View queue →</a></div>
        ${appTable(waiting.slice(0,5), true)}</div>
      <div class="stack">
        <div class="card card-pad"><h3 style="margin-bottom:14px">Requests by type · this month</h3>
          <div class="bars">${[['food',38,'#F2A93B'],['edu',24,'#6D5BD0'],['fin',17,'#2F80C9'],['house',9,'#E8604C']].map(([t,v,c])=>`<div class="bar" style="grid-template-columns:110px 1fr 36px"><span class="row" style="gap:6px">${TYPES[t].short}</span><div class="track"><span style="width:${v/38*100}%;background:${c}"></span></div><b>${v}</b></div>`).join('')}</div></div>
        <div class="card card-pad"><h3 style="margin-bottom:10px">Caseworker load</h3>
          ${['cw1','cw2','cw3'].map((k,i)=>`<div class="row" style="padding:8px 0">${av(k)}<div style="flex:1"><b class="small">${STAFF[k].name}</b><div class="progress" style="margin-top:6px;height:6px"><span style="width:${[72,55,40][i]}%"></span></div></div><b class="small">${[18,14,9][i]}</b></div>`).join('')}</div>
      </div>
    </div>`);
}
function appTable(list, compact){
  if(!list.length) return `<div class="card-pad muted">Nothing here — nice work!</div>`;
  return `<div style="overflow:auto"><table class="table"><thead><tr><th>Applicant</th><th>Help</th><th class="hide-sm">Received</th>${compact?'':'<th class="hide-sm">Channel</th>'}<th>Status</th><th class="hide-sm">Flags</th></tr></thead><tbody>
  ${list.map(a=>`<tr data-act="open" data-v="${a.id}" class="${S.sel===a.id?'sel':''}"><td><div class="who">${pav(a.name,colFor(a.name))}<div><b>${a.name}</b><span class="tiny muted">${a.id} · ${RSHORT(a.region)}</span></div></div></td>
  <td class="t-help">${typeChips(a.types)}</td><td class="hide-sm small">${a.date}</td>${compact?'':`<td class="hide-sm"><span class="badge b-grey">${I(a.ch==='Online'?'globe':a.ch==='Phone'?'phone':'walk')} ${a.ch}</span></td>`}<td class="t-status">${badge(a.status)}</td>
  <td class="hide-sm">${a.flags.includes('dup')?`<span class="badge b-flag">${I('copy')} Possible duplicate</span>`:''}${a.flags.includes('incomplete')?`<span class="badge b-warn">${I('alert')} Incomplete</span>`:''}${a.flags.length?'':'<span class="muted tiny">—</span>'}</td></tr>`).join('')}
  </tbody></table></div>`;
}
function viewScreening(){
  const tabs=[['all','All waiting'],['new','New'],['flag','Flagged'],['docs','Documents requested']];
  let list = APPS.filter(a=>['new','screening','docs'].includes(a.status));
  if(S.queueTab==='new') list=list.filter(a=>a.status==='new');
  if(S.queueTab==='flag') list=list.filter(a=>a.flags.length);
  if(S.queueTab==='docs') list=list.filter(a=>a.status==='docs');
  return shell('#screening', `
    <div class="ph"><div><h1>Screening queue</h1><p class="muted">Check each application, then assign it to a caseworker. You decide the priority — PATH only flags issues.</p></div><a href="#intake" class="btn btn-primary">${I('plus')} Log walk-in / phone request</a></div>
    <div class="row between wrap" style="margin-bottom:14px"><div class="tabs">${tabs.map(([k,l])=>`<button class="${S.queueTab===k?'on':''}" data-act="qtab" data-v="${k}">${l}</button>`).join('')}</div>
    <div class="filters"><span class="pill">${I('pin','')} All regions</span><span class="pill">All types</span></div></div>
    <div class="card">${appTable(list,false)}</div>
    ${S.sel?drawer(S.sel):''}`);
}
function drawer(id){
  const a=APPS.find(x=>x.id===id); if(!a) return '';
  const dup = a.dupOf && APPS.find(x=>x.id===a.dupOf);
  return `<div class="scrim" data-act="close"></div><aside class="drawer" role="dialog" aria-label="Application ${a.id}">
    <div class="dh"><div class="row between"><span class="tiny muted">${a.id} · received ${a.date} via ${a.ch.toLowerCase()}</span><button class="iconbtn" data-act="close" aria-label="Close">${I('x')}</button></div>
      <div class="row" style="margin-top:8px">${pav(a.name,colFor(a.name))}<div><h2 style="font-size:20px">${a.name}</h2><div class="small muted">${a.region}</div></div><span style="margin-left:auto">${badge(a.status)}</span></div></div>
    <div class="db">
      ${dup?`<div class="alert alert-flag">${I('copy')}<div><b>Possible duplicate.</b> Same ID number and phone as <b>${dup.id}</b> (${STATUS[dup.status].label.toLowerCase()}, ${dup.date}).
        <div class="compare"><div><b>This application</b><br>House fire relief + financial aid<br>New Amsterdam</div><div><b>${dup.id}</b><br>Emergency housing<br>Approved by Andre F.</div></div></div></div>`:''}
      ${a.flags.includes('incomplete')?`<div class="alert alert-warn">${I('alert')}<div><b>Incomplete.</b> Missing: ${a.missing}. You can request it by SMS.</div></div>`:''}
      <div class="card card-pad" style="box-shadow:none"><h3 style="margin-bottom:12px">Applicant</h3><dl class="kv">
        <dt>ID number</dt><dd class="mask">${a.idno} <span class="badge b-grey">${I('lock')} Hidden</span></dd><dt>Mobile</dt><dd>${a.phone}</dd><dt>Household</dt><dd>${a.kids+1} people (${a.kids} children)</dd><dt>Help requested</dt><dd>${a.types.map(t=>TYPES[t].name).join(', ')}</dd><dt>Documents</dt><dd>${a.flags.includes('incomplete')?'1 of 2 uploaded':'2 files uploaded'}</dd></dl></div>
      <div class="card card-pad" style="box-shadow:none"><h3 style="margin-bottom:10px">Assign to caseworker</h3>
        <div class="row wrap">${['cw1','cw2','cw3'].map((k,i)=>`<button class="choice ${a.cw===k?'on':''}" style="padding:10px 12px;flex:1;min-width:150px;align-items:center" data-act="assign" data-v="${k}">${av(k)}<span><b class="small" style="display:block">${STAFF[k].name}</b><span class="tiny muted">${[18,14,9][i]} open cases</span></span></button>`).join('')}</div></div>
      <div class="field"><label>Screening note</label><textarea class="textarea" placeholder="Add a note for the caseworker…"></textarea></div>
    </div>
    <div class="df"><button class="btn btn-primary" data-act="approve-assign">${I('check')} Accept &amp; assign</button><button class="btn btn-ghost" data-act="request-docs">${I('msg')} Request documents</button><button class="btn btn-danger" data-act="reject">${I('x')} Not eligible</button></div>
  </aside>`;
}
function viewIntake(){
  return shell('#intake', `
    <div class="ph"><div><h1>Log a walk-in or phone request</h1><p class="muted">Enter the request for the applicant — they'll get the same reference number and SMS updates as an online application.</p></div></div>
    <div class="case-grid"><div class="card card-pad" style="padding:26px">
      <div class="field" style="margin-bottom:18px"><label>How did they contact us?</label><div class="filters"><span class="pill on">${I('walk','')} Walk-in</span><span class="pill">${I('phone','')} Phone call</span><span class="pill">${I('msg','')} SMS / WhatsApp</span><span class="pill">${I('mail','')} Email</span></div></div>
      <div class="field" style="margin-bottom:18px"><label>Help requested</label><div class="filters">${Object.entries(TYPES).map(([k,t],i)=>`<span class="pill ${i<2?'on':''}">${t.name}</span>`).join('')}</div></div>
      <div class="form-grid"><div class="field"><label>Full name</label><input class="input" placeholder="Applicant's full name"></div><div class="field"><label>National ID number</label><input class="input" placeholder="Checked for duplicates as you type"></div>
      <div class="field"><label>Mobile number</label><input class="input" placeholder="+592"></div><div class="field"><label>Region</label><select class="select">${REGIONS.map(r=>`<option>${r}</option>`).join('')}</select></div>
      <div class="field full"><label>What did they tell you?</label><textarea class="textarea" placeholder="Summary of their situation and what they need"></textarea></div></div>
      <div class="wfoot"><button class="btn btn-ghost" data-act="toast" data-msg="Draft saved">Save draft</button><button class="btn btn-primary" data-act="intake-save">${I('check')} Create application</button></div>
    </div>
    <div class="stack"><div class="alert alert-info">${I('shield')}<div><b>Duplicate check</b><br><span class="small">PATH checks the ID number, phone and address against existing applications and warns you before saving.</span></div></div>
    <div class="alert alert-warn">${I('lock')}<div><b>Consent</b><br><span class="small">Read the privacy notice to the applicant and confirm they agree before saving.</span><label class="row small" style="margin-top:8px"><input type="checkbox" checked style="accent-color:var(--brand)"> Applicant agreed verbally</label></div></div></div></div>`);
}
function viewCases(){
  const mine = APPS.filter(a=>a.cw==='cw1');
  return shell('#cases', `
    <div class="ph"><div><h1>My cases</h1><p class="muted">You only see cases assigned to you.</p></div><div class="tabs"><button class="on">Open (${mine.length})</button><button>Due this week</button><button>Closed</button></div></div>
    <div class="stats" style="margin-bottom:18px">${stat('folder','c-edu','Open cases',mine.length,'2 need a visit','',1)}${stat('repeat','c-food','Recurring support','2','Next payment Jan 6')}${stat('msg','c-fin','Unread replies','1','From Sharon Bovell')}${stat('check','c-ok','Closed this month','6','▲ 2 vs Oct','var(--ok)')}</div>
    <div class="case-list">${mine.map(a=>`<a href="#case-${a.id}" class="card case-card">${pav(a.name,colFor(a.name))}<div><div class="row wrap" style="gap:8px"><b>${a.name}</b>${badge(a.status)}</div><div class="small muted">${a.id} · ${RSHORT(a.region)} · assigned ${a.date}</div></div><div class="row">${typeChips(a.types)}<span class="muted">${I('right','')}</span></div></a>`).join('')}</div>`);
}
function viewAllCases(){
  const list = APPS.filter(a=>!['new','screening','docs'].includes(a.status));
  return shell('#allcases', `<div class="ph"><div><h1>All cases</h1><p class="muted">Every request after screening, with who is handling it.</p></div><button class="btn btn-ghost" data-act="toast" data-msg="CSV export started">${I('download')} Export</button></div>
  <div class="card"><div style="overflow:auto"><table class="table"><thead><tr><th>Applicant</th><th>Help</th><th>Caseworker</th><th class="hide-sm">Opened</th><th>Status</th></tr></thead><tbody>
  ${list.map(a=>`<tr onclick="location.hash='#case-${a.id}'"><td><div class="who">${pav(a.name,colFor(a.name))}<div><b>${a.name}</b><span class="tiny muted">${a.id}</span></div></div></td><td>${typeChips(a.types)}</td><td><div class="row small">${a.cw?av(a.cw)+STAFF[a.cw].name:'—'}</div></td><td class="hide-sm small">${a.date}</td><td>${badge(a.status)}</td></tr>`).join('')}
  </tbody></table></div></div>`);
}
function viewCase(id){
  const a=APPS.find(x=>x.id===id); if(!a) return viewCases();
  const c=caseFor(id); const stages=['Received','Screened','Assessment','Decision','Support given'];
  const st = a.status==='approved'?3:a.status==='rejected'?3:a.status==='closed'?4:2;
  const revealed = S.reveal[id];
  const back = S.role==='caseworker'?'#cases':'#allcases';
  return shell('#case-'+id, `
    <a href="${back}" class="small muted row" style="gap:6px;margin-bottom:10px">${I('left','')} Back to cases</a>
    <div class="ph"><div class="row">${pav(a.name,colFor(a.name))}<div><h1>${a.name}</h1><p class="muted small">${a.id} · ${a.region} · via ${a.ch.toLowerCase()} on ${a.date}</p></div></div>
      <div class="row wrap"><select class="select" style="width:auto" data-act="setstatus">${['assigned','progress','approved','rejected','closed'].map(s=>`<option value="${s}" ${a.status===s?'selected':''}>${STATUS[s].label}</option>`).join('')}</select><button class="btn btn-primary" data-act="toast" data-msg="Status saved · applicant notified by SMS">${I('check')} Update status</button></div></div>
    <div class="card card-pad" style="margin-bottom:18px"><div class="stepper">${stages.map((s,i)=>`<div class="s ${i<st?'done':i===st?'now':''}"><i></i>${s}</div>`).join('')}</div></div>
    <div class="case-grid">
      <div class="stack" style="gap:18px">
        <div class="card card-pad"><h3 style="margin-bottom:8px">Summary</h3><p>${c.summary}</p><div class="row wrap" style="margin-top:12px">${a.types.map(t=>`<span class="badge ${TYPES[t].cls}">${I(TYPES[t].icon)} ${TYPES[t].name}</span>`).join('')}</div></div>
        <div class="card card-pad"><div class="row between"><h3>Case notes</h3><span class="tiny muted">${c.notes.length} notes</span></div>
          <div class="row" style="margin:14px 0 6px;align-items:flex-start">${av(ROLES[S.role].who)}<div style="flex:1"><textarea class="textarea" id="notein" placeholder="Add a note — visible to staff only" style="min-height:70px"></textarea><div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn btn-sm btn-primary" data-act="addnote" data-v="${id}">${I('plus')} Add note</button></div></div></div>
          ${c.notes.map(n=>`<div class="note">${av(n.by)}<div><b class="small">${STAFF[n.by].name}</b> <span class="meta">· ${n.when}</span><p class="small" style="margin-top:4px">${esc(n.text)}</p></div></div>`).join('')}</div>
        <div class="card card-pad"><div class="row between"><h3>Communication log</h3><button class="btn btn-sm btn-soft" data-act="toast" data-msg="SMS sent to applicant">${I('msg')} Send SMS</button></div>
          ${c.comms.map(m=>`<div class="note"><span class="tchip ${m.ch==='sms'?'c-fin':m.ch==='phone'?'c-food':'c-edu'}">${I(m.ch==='sms'?'msg':m.ch)}</span><div><span class="meta">${m.ch.toUpperCase()} · ${m.when}</span><p class="small">${esc(m.text)}</p></div></div>`).join('')}</div>
      </div>
      <div class="stack" style="gap:18px">
        <div class="card card-pad"><h3 style="margin-bottom:12px">Applicant</h3><dl class="kv" style="grid-template-columns:100px 1fr">
          <dt>ID number</dt><dd><span class="mask">${revealed?'1043'+a.idno.slice(-4)+'2':a.idno}</span> ${revealed?'':`<button class="btn btn-sm btn-ghost" style="padding:3px 8px;margin-left:4px" data-act="reveal" data-v="${id}">${I('eye')} Show</button>`}</dd>
          <dt>Mobile</dt><dd>${a.phone}</dd><dt>Household</dt><dd>${a.kids+1} people</dd><dt>Caseworker</dt><dd class="row" style="gap:6px">${a.cw?av(a.cw)+STAFF[a.cw].name:'Not assigned'}</dd></dl>
          <div class="tiny muted row" style="gap:6px;margin-top:12px">${I('shield','')} Viewing sensitive details is recorded in the audit log.</div></div>
        ${c.recurring?`<div class="card card-pad recur"><div class="row" style="margin-bottom:6px"><span class="tchip" style="background:rgba(255,255,255,.18);color:#fff">${I('repeat')}</span><h3>Recurring support</h3></div><p class="small muted">${c.recurring.label}</p>
          ${c.recurring.terms.map(t=>`<div class="term"><span class="small" style="font-weight:600">${t.t}</span><span class="small">${t.amt}</span>${t.st==='paid'?'<span class="badge b-ok">Paid</span>':t.st==='scheduled'?'<span class="badge b-new">Scheduled</span>':'<span class="badge b-grey">Pending</span>'}</div>`).join('')}
          <button class="btn btn-sm btn-ghost" style="margin-top:12px;width:100%" data-act="toast" data-msg="Term added to schedule">${I('plus')} Add term</button></div>`:''}
        <div class="card card-pad"><h3 style="margin-bottom:10px">Documents</h3>${['National ID (front).jpg','Supporting letter.pdf'].map(f=>`<div class="row" style="padding:8px 0;border-bottom:1px solid var(--line-2)"><span class="tchip c-fin">${I('file')}</span><span class="small" style="flex:1">${f}</span><button class="iconbtn" aria-label="Download">${I('download')}</button></div>`).join('')}</div>
      </div>
    </div>`);
}
function donut(parts){
  const tot=parts.reduce((a,p)=>a+p[1],0); let acc=0; const r=52, C=2*Math.PI*r;
  return `<svg width="150" height="150" viewBox="0 0 150 150"><circle cx="75" cy="75" r="${r}" fill="none" stroke="var(--line-2)" stroke-width="20"/>${parts.map(([l,v,c])=>{const len=v/tot*C; const s=`<circle cx="75" cy="75" r="${r}" fill="none" stroke="${c}" stroke-width="20" stroke-dasharray="${len} ${C-len}" stroke-dashoffset="${-acc}" transform="rotate(-90 75 75)"/>`; acc+=len; return s;}).join('')}<text x="75" y="72" text-anchor="middle" font-weight="800" font-size="24" fill="var(--ink)">${tot}</text><text x="75" y="92" text-anchor="middle" font-size="12" fill="var(--ink-3)">requests</text></svg>`;
}
function viewReports(){
  const months=[['Jun',41],['Jul',55],['Aug',62],['Sep',71],['Oct',79],['Nov',88]]; const mx=88;
  return shell('#reports', `
    <div class="ph"><div><h1>Reports</h1><p class="muted">Launch NGO · June to November 2026</p></div><div class="row wrap"><span class="pill">${I('cal','')} Last 6 months</span><button class="btn btn-ghost" data-act="toast" data-msg="Report exported as PDF">${I('download')} Export PDF</button></div></div>
    <div class="stats">${stat('inbox','c-fin','Requests received','396','▲ 11% vs previous 6 months','#D9F99D',1)}${stat('check','c-ok','Approved','281','71% approval rate')}${stat('clock','c-food','Avg. time to decision','4.2 days','▼ 1.3 days','var(--ok)')}${stat('globe','c-edu','Applied online','64%','Rest by phone or walk-in')}</div>
    <div class="case-grid" style="margin-top:18px;grid-template-columns:1.3fr 1fr">
      <div class="card card-pad"><h3>Requests per month</h3><svg class="chartsvg" viewBox="0 0 520 230" style="margin-top:12px"><defs><linearGradient id="gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22D3EE"/><stop offset="1" stop-color="#6366F1"/></linearGradient><linearGradient id="gb2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(148,163,184,.35)"/><stop offset="1" stop-color="rgba(148,163,184,.08)"/></linearGradient></defs>
        ${[0,25,50,75,100].map(v=>`<line x1="34" x2="510" y1="${200-v*1.8}" y2="${200-v*1.8}" stroke="var(--line-2)"/><text x="26" y="${204-v*1.8}" text-anchor="end" font-size="11" fill="var(--ink-3)">${v}</text>`).join('')}
        ${months.map(([m,v],i)=>`<rect x="${52+i*78}" y="${200-v*1.8}" width="46" height="${v*1.8}" rx="8" fill="${i===5?'url(#gb)':'url(#gb2)'}"/><text x="${75+i*78}" y="${192-v*1.8}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">${v}</text><text x="${75+i*78}" y="220" text-anchor="middle" font-size="12" fill="var(--ink-3)">${m}</text>`).join('')}
      </svg></div>
      <div class="card card-pad"><h3>By type of help</h3><div class="donut-wrap" style="margin-top:12px">${donut([['Food',152,'#F2A93B'],['Education',104,'#6D5BD0'],['Financial',87,'#2F80C9'],['Housing',53,'#E8604C']])}
        <div class="legend">${[['Food',152,'#F2A93B'],['Education',104,'#6D5BD0'],['Financial',87,'#2F80C9'],['Housing',53,'#E8604C']].map(([l,v,c])=>`<span><i style="background:${c}"></i>${l} · <b>${v}</b></span>`).join('')}</div></div></div>
    </div>
    <div class="case-grid" style="margin-top:18px;grid-template-columns:1fr 1fr">
      <div class="card card-pad"><h3 style="margin-bottom:14px">By region</h3><div class="bars">${[['Region 4',168],['Region 6',71],['Region 3',58],['Region 10',49],['Region 2',30],['Region 5',20]].map(([r,v])=>`<div class="bar"><span>${r}</span><div class="track"><span style="width:${v/168*100}%;background:linear-gradient(90deg,#22D3EE,#6366F1);color:#3B82F6"></span></div><b>${v}</b></div>`).join('')}</div></div>
      <div class="card card-pad"><h3 style="margin-bottom:14px">By status (November)</h3><div class="bars">${[['Approved',51,'var(--ok)'],['In progress',19,'var(--violet)'],['Screening',9,'var(--accent)'],['Not approved',6,'var(--bad)'],['Docs requested',3,'var(--warn)']].map(([r,v,c])=>`<div class="bar"><span>${r}</span><div class="track"><span style="width:${v/51*100}%;background:${c}"></span></div><b>${v}</b></div>`).join('')}</div></div>
    </div>`);
}
function viewAdmin(tab){
  S.adminTab = tab;
  const tabs=[['#admin','Organisations'],['#admin-users','Users & roles'],['#admin-audit','Audit log'],['#admin-health','System health']];
  let body='';
  if(tab==='orgs') body = `<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">
      <div class="card card-pad"><div class="row between"><span class="tchip c-fin" style="width:44px;height:44px">${I('heart')}</span><span class="badge b-ok">${I('check')} Live</span></div><h3 style="margin-top:12px">Launch NGO</h3><p class="small muted">Georgetown · food, education, financial aid, emergency housing</p>
        <dl class="kv small" style="margin-top:12px;grid-template-columns:110px 1fr"><dt>Staff accounts</dt><dd>25</dd><dt>Open cases</dt><dd>41</dd><dt>Data location</dt><dd>IntellectStorm DC, Georgetown</dd><dt>Data agreement</dt><dd>Signed Jan 2027</dd></dl></div>
      <div class="card card-pad" style="border-style:dashed;box-shadow:none;background:var(--surface-2)"><span class="tchip c-edu" style="width:44px;height:44px">${I('plus')}</span><h3 style="margin-top:12px">Add another NGO</h3><p class="small muted">PATH is built so IntellectStorm can host more NGOs, each with its own staff, data and branding.</p><span class="badge b-grey" style="margin-top:12px">Planned for a later phase</span></div></div>`;
  if(tab==='users') body = `<div class="row between wrap" style="margin-bottom:12px"><div class="tabs"><button class="on">All (${USERS.length})</button><button>Launch NGO</button><button>IntellectStorm</button></div><button class="btn btn-primary btn-sm" data-act="toast" data-msg="Invitation sent">${I('plus')} Invite user</button></div>
    <div class="card"><div style="overflow:auto"><table class="table"><thead><tr><th>User</th><th>Role</th><th class="hide-sm">Organisation</th><th class="hide-sm">Last active</th><th>Two-step login</th></tr></thead><tbody>
    ${USERS.map(u=>`<tr><td><div class="who">${pav(u.n,colFor(u.n))}<div><b>${u.n}</b><span class="tiny muted">${u.e}</span></div></div></td><td><span class="badge ${u.r==='Caseworker'?'b-prog':u.r==='Manager'?'b-screen':u.r==='System administrator'?'b-bad':'b-new'}">${u.r}</span></td><td class="hide-sm small">${u.org}</td><td class="hide-sm small">${u.last}</td><td>${u.mfa?`<span class="badge b-ok">${I('check')} On</span>`:`<span class="badge b-flag">${I('alert')} Off</span>`}</td></tr>`).join('')}</tbody></table></div></div>
    <div class="card card-pad" style="margin-top:16px"><h3 style="margin-bottom:10px">What each role can do</h3><div style="overflow:auto"><table class="table"><thead><tr><th>Permission</th><th>Admin staff</th><th>Caseworker</th><th>Manager</th><th>System admin</th></tr></thead><tbody>
    ${[['Screen & assign applications',1,0,1,0],['View assigned cases',1,1,1,0],['View all cases',1,0,1,0],['See full ID numbers',0,1,0,0],['Reports & export',0,0,1,0],['Manage users & servers',0,0,0,1]].map(r=>`<tr><td class="small" style="font-weight:600">${r[0]}</td>${r.slice(1).map(v=>`<td>${v?`<span style="color:var(--ok)">${I('check')}</span>`:'<span class="muted">—</span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  if(tab==='audit') body = `<div class="card"><div class="card-pad row between"><div><h3>Audit log · today</h3><p class="small muted">Every view and change of personal data is recorded.</p></div><button class="btn btn-ghost btn-sm" data-act="toast" data-msg="Audit log exported">${I('download')} Export</button></div>
    <div style="overflow:auto"><table class="table"><thead><tr><th>Time</th><th>User</th><th>Action</th><th class="hide-sm">Where</th></tr></thead><tbody>${AUDIT.map(r=>`<tr><td class="small">${r.t}</td><td class="small" style="font-weight:600">${r.who}</td><td class="small wrap">${esc(r.what)}</td><td class="hide-sm tiny muted">${r.ip}</td></tr>`).join('')}</tbody></table></div></div>`;
  if(tab==='health') body = `<div class="stats">${stat('server','c-fin','Uptime (30 days)','99.96%','All services healthy','#D9F99D',1)}${stat('refresh','c-edu','Last backup','7:55 AM','Encrypted · kept 30 days')}${stat('msg','c-food','SMS delivered','98.4%','Digicel & GTT · last 24 h','var(--ok)')}${stat('lock','c-house','Security scan','0 high','Last run Nov 9')}</div>
    <div class="card card-pad" style="margin-top:18px"><h3 style="margin-bottom:12px">Environments</h3>${[['Production','IntellectStorm VM · 2 vCPU · 4 GB RAM','b-ok','Healthy','v1.0.3'],['Staging','IntellectStorm VM · 1 vCPU · 2 GB RAM','b-ok','Healthy','v1.0.4-rc1'],['Database','PostgreSQL 16 · encrypted at rest','b-ok','Healthy','42% disk'],['File storage','Encrypted object storage','b-warn','71% used','Review in 30 days']].map(([n,d,c,s,v])=>`<div class="row" style="padding:12px 0;border-bottom:1px solid var(--line-2)"><span class="tchip c-fin">${I('server')}</span><div style="flex:1"><b class="small">${n}</b><div class="tiny muted">${d}</div></div><span class="tiny muted hide-sm" style="margin-right:8px">${v}</span><span class="badge ${c}">${s}</span></div>`).join('')}</div>`;
  return shell(location.hash, `<div class="ph"><div><h1>Admin console</h1><p class="muted">IntellectStorm platform administration for PATH.</p></div></div>
    <div class="tabs" style="margin-bottom:18px">${tabs.map(([h,l])=>`<a href="${h}"><button class="${location.hash===h||(h==='#admin'&&tab==='orgs'&&location.hash==='#admin')?'on':''}" tabindex="-1">${l}</button></a>`).join('')}</div>${body}`);
}


// ---------------- LOGIN ----------------
const TESTERS = [
  {role:'public', name:'Shanice Williams', email:'shanice.w@gmail.com', label:'Applicant', note:'Track request PTH-26-0148', col:'#22D3EE'},
  {role:'admin', name:'Rochelle Bacchus', email:'rbacchus@launchngo.gy', label:'NGO admin staff', note:'Screening queue & walk-ins', col:'#3B82F6'},
  {role:'caseworker', name:'Kevin Ramnarine', email:'kramnarine@launchngo.gy', label:'Caseworker', note:'4 assigned cases', col:'#8B5CF6'},
  {role:'manager', name:'Natasha Persaud', email:'npersaud@launchngo.gy', label:'NGO manager', note:'Reports & all cases', col:'#F59E0B'},
  {role:'it', name:'Marcus Hope', email:'mhope@intellectstorm.gy', label:'IntellectStorm admin', note:'Users, audit log, servers', col:'#FB7185'},
];
const DEMO_PW = 'Demo@2026';
const L = {busy:false, stage:'form', who:null, err:''};
function viewLogin(){
  const t = L.who;
  const form = L.stage==='otp' ? `
      <div class="row" style="gap:12px;margin-top:22px">${pav(t.name,t.col)}<div><b>${t.name}</b><div class="tiny muted">${t.email}</div></div></div>
      <h1 style="font-size:28px">Two-step <span class="grad-text">verification</span></h1>
      <p class="muted">Enter the 6-digit code we sent to your phone ending ••47.</p>
      <div class="otp" id="otp">${[0,1,2,3,4,5].map(i=>`<span id="otp${i}"></span>`).join('')}</div>
      <button class="btn btn-primary btn-lg btn-block" id="otpbtn" disabled><span class="spin"></span> Verifying…</button>
      <p class="tiny muted" style="text-align:center;margin-top:14px">${I('shield','')} Staff accounts always use two-step login to protect applicants' data.</p>`
  : `
      <h1>Welcome <span class="grad-text">back</span></h1>
      <p class="muted">Sign in to PATH to manage requests for assistance.</p>
      <form id="loginform" class="stack" style="gap:16px;margin-top:26px" autocomplete="off">
        <div class="field"><label for="lemail">Email</label><div class="in-ic">${I('mail')}<input class="input" id="lemail" type="email" placeholder="you@organisation.gy"></div></div>
        <div class="field"><label for="lpw">Password</label><div class="in-ic">${I('lock')}<input class="input" id="lpw" type="password" placeholder="••••••••"><button type="button" class="iconbtn eye" data-act="peek" aria-label="Show password" style="width:34px;height:34px">${I('eye')}</button></div></div>
        <div class="row between small"><label class="row" style="gap:8px"><input type="checkbox" checked style="accent-color:#3B82F6;width:16px;height:16px"> Remember this device</label><a href="#" data-act="toast" data-msg="Password reset link sent (mockup)" style="color:#93C5FD;font-weight:600">Forgot password?</a></div>
        ${L.err?`<div class="alert alert-flag small">${I('alert')}<span>${L.err}</span></div>`:''}
        <button class="btn btn-primary btn-lg btn-block" id="loginbtn" type="submit">Sign in ${I('right')}</button>
      </form>
      <div class="divider">or</div>
      <a href="#home" class="btn btn-ghost btn-block">${I('heart')} Ask for help without an account</a>`;
  return `<div class="login-wrap"><div class="login-grid">
    <section class="login-card">
      <div class="row between"><a href="#home" class="logo"><span class="logo-mark">${I('heart')}</span><span>PATH<small>Public Assistance &amp; Triage Hub</small></span></a>
      <img src="intellectstorm-logo.png" alt="IntellectStorm" style="height:18px;background:#fff;border-radius:7px;padding:3px 7px"></div>
      ${form}
    </section>
    <aside class="testers">
      <div class="row between"><span class="badge b-prog">${I('spark')} Demo mode</span><span class="tiny muted">Password: <span class="pw-chip">${DEMO_PW}</span></span></div>
      <h2 style="font-size:24px;margin:16px 0 4px">Test accounts</h2>
      <p class="muted small" style="margin-bottom:18px">Tap an account to sign in automatically and see PATH from that person's view.</p>
      <div class="stack" style="gap:10px">${TESTERS.map((u,i)=>`<button class="tester ${L.who===u&&L.busy?'busy':''}" data-act="autologin" data-v="${i}" ${L.busy?'disabled':''}>
        ${pav(u.name,u.col)}<span class="meta"><b>${u.name}</b><span>${u.label} · ${u.note}</span></span><span class="go">${L.who===u&&L.busy?'<span class="spin"></span>':I('right')}</span></button>`).join('')}</div>
      <p class="tiny muted" style="margin-top:16px">${I('lock','')} All people and records in this mockup are fictional.</p>
    </aside>
  </div></div>`;
}
function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }
async function typeInto(el, text, speed){ el.classList.add('caret'); el.value=''; for(const ch of text){ el.value+=ch; await sleep(speed); } el.classList.remove('caret'); }
async function autoLogin(i){
  if(L.busy) return; const u=TESTERS[i]; L.busy=true; L.who=u; L.err=''; L.stage='form'; render();
  const em=$('#lemail'), pw=$('#lpw'); em.focus();
  await typeInto(em, u.email, 28); pw.focus(); await typeInto(pw, DEMO_PW, 45); await sleep(150);
  finishLogin(u);
}
async function finishLogin(u){
  const b=$('#loginbtn'); if(b){ b.innerHTML='<span class="spin"></span> Signing in…'; b.disabled=true; }
  await sleep(650);
  if(u.role!=='public'){
    L.stage='otp'; render();
    const code='482917';
    for(let k=0;k<6;k++){ await sleep(140); const c=$('#otp'+k); if(!c) return; c.textContent=code[k]; c.classList.add('f'); }
    await sleep(450);
  }
  L.busy=false; L.stage='form'; S.role=u.role; store();
  if(u.role==='public'){ S.trackRef='PTH-26-0148'; location.hash='#track'; } else location.hash=ROLES[u.role].home;
  toast(`Signed in as ${u.name}`);
}

// ---------------- router ----------------
const ROUTES = {
  '#login':()=>viewLogin(),
  '#home':()=>viewHome(), '#apply':()=>viewApply(), '#track':()=>viewTrack(), '#drives':()=>viewDrives(false), '#success':()=>viewSuccess(),
  '#dashboard':()=>viewDashboard(), '#screening':()=>viewScreening(), '#intake':()=>viewIntake(), '#cases':()=>viewCases(), '#allcases':()=>viewAllCases(),
  '#reports':()=>viewReports(), '#managedrives':()=>shell('#managedrives', viewDrives(true)), '#drives-staff':()=>shell('#drives-staff', viewDrives(true)),
  '#admin':()=>viewAdmin('orgs'), '#admin-users':()=>viewAdmin('users'), '#admin-audit':()=>viewAdmin('audit'), '#admin-health':()=>viewAdmin('health'),
};
const PUBLIC_ROUTES = ['#home','#apply','#track','#drives','#success'];
function render(){
  let h = location.hash || '#login';
  if(h==='#login'){ document.getElementById('app').innerHTML = viewLogin(); document.title='PATH · Sign in'; return; }
  // keep the demo role in sync with the area being viewed
  if(PUBLIC_ROUTES.includes(h)) S.role='public';
  else if(S.role==='public') S.role = h.startsWith('#admin')?'it':h==='#reports'?'manager':(h.startsWith('#case-')||h==='#cases')?'caseworker':'admin';
  const html = h.startsWith('#case-') ? viewCase(h.slice(6)) : (ROUTES[h]||ROUTES['#home'])();
  document.getElementById('app').innerHTML = demobar() + html;
  document.title = 'PATH · ' + ({'#home':'Get help','#apply':'Apply','#track':'Track my request','#drives':'Assistance drives'}[h] || 'Staff workspace');
}
window.addEventListener('hashchange', ()=>{ S.notifOpen=false; if(!location.hash.startsWith('#screening')) S.sel=null; render(); window.scrollTo(0,0); });

// ---------------- events ----------------
document.addEventListener('click', e=>{
  const r = e.target.closest('[data-role]');
  if(r){ S.role=r.dataset.role; store(); S.sel=null; S.notifOpen=false; location.hash = ROLES[S.role].home; render(); return; }
  const pick = e.target.closest('[data-pick]'); if(pick){ S.wiz.types=[pick.dataset.pick]; S.wiz.step=0; }
  const el = e.target.closest('[data-act]'); if(!el) { if(S.notifOpen && !e.target.closest('.notif')){S.notifOpen=false; render();} return; }
  const act = el.dataset.act, v = el.dataset.v;
  const w = S.wiz;
  switch(act){
    case 'toggletype': w.types = w.types.includes(v) ? w.types.filter(x=>x!==v) : [...w.types, v]; render(); break;
    case 'next': if(!w.types.length) return; w.step=Math.min(3,w.step+1); render(); window.scrollTo(0,0); break;
    case 'back': w.step=Math.max(0,w.step-1); render(); break;
    case 'goto': w.step=+v; render(); break;
    case 'house': w.data.house=v; render(); break;
    case 'consent': w.consent=el.checked; render(); break;
    case 'submit': if(!w.consent) return; S.lastRef='PTH-26-0'+(149+Math.floor(Math.random()*40)); location.hash='#success'; w.step=0; w.consent=false; break;
    case 'trackref': S.trackRef=v; break;
    case 'track': e.preventDefault(); S.trackRef=($('#trackin').value||'').trim().toUpperCase(); render(); break;
    case 'demo-ref': e.preventDefault(); S.trackRef=v; render(); break;
    case 'drivefilter': S.driveFilter=v; render(); break;
    case 'qtab': S.queueTab=v; render(); break;
    case 'open': S.sel=v; render(); break;
    case 'close': S.sel=null; render(); break;
    case 'assign': { const a=APPS.find(x=>x.id===S.sel); a.cw=v; render(); break; }
    case 'approve-assign': { const a=APPS.find(x=>x.id===S.sel); if(!a.cw){ toast('Choose a caseworker first'); break; } a.status='assigned'; a.flags=[]; S.sel=null; render(); toast(`Assigned to ${STAFF[a.cw].name} · applicant notified by SMS`); break; }
    case 'request-docs': { const a=APPS.find(x=>x.id===S.sel); a.status='docs'; S.sel=null; render(); toast('Document request sent by SMS'); break; }
    case 'reject': { const a=APPS.find(x=>x.id===S.sel); a.status='rejected'; S.sel=null; render(); toast('Marked not eligible · decision recorded with your name'); break; }
    case 'intake-save': toast('Application PTH-26-0150 created · SMS sent to applicant'); setTimeout(()=>{location.hash='#screening';},700); break;
    case 'addnote': { const t=($('#notein').value||'').trim(); if(!t){toast('Write a note first');break;} caseFor(v).notes.unshift({by:ROLES[S.role].who, when:'Just now', text:t}); render(); toast('Note added'); break; }
    case 'reveal': S.reveal[v]=true; AUDIT.unshift({t:'Now', who:STAFF[ROLES[S.role].who].name, what:`Revealed ID number on ${v}`, ip:'Office'}); render(); toast('ID shown · this view was recorded in the audit log'); break;
    case 'notif': e.stopPropagation(); S.notifOpen=!S.notifOpen; render(); break;
    case 'toast': e.preventDefault(); toast(el.dataset.msg); break;
    case 'autologin': autoLogin(+v); break;
    case 'peek': { const p=$('#lpw'); p.type = p.type==='password'?'text':'password'; break; }
  }
});
document.addEventListener('submit', e=>{
  if(e.target.id!=='loginform') return; e.preventDefault();
  const em=($('#lemail').value||'').trim().toLowerCase(); const u=TESTERS.find(t=>t.email===em);
  if(!u){ L.err='Use one of the test accounts on the right — or tap one to sign in automatically.'; render(); return; }
  L.who=u; L.busy=true; finishLogin(u);
});
document.addEventListener('input', e=>{ const f=e.target.dataset.f; if(f) S.wiz.data[f]=e.target.value; });
document.addEventListener('change', e=>{
  const f=e.target.dataset.f; if(f) S.wiz.data[f]=e.target.value;
  if(e.target.dataset.act==='rolesel'){ S.role=e.target.value; store(); S.sel=null; location.hash=ROLES[S.role].home; render(); return; }
  if(e.target.dataset.act==='setstatus'){ const id=location.hash.slice(6); const a=APPS.find(x=>x.id===id); a.status=e.target.value; render(); }
});
document.addEventListener('keydown', e=>{ if(e.key==='Enter' && e.target.id==='trackin'){ S.trackRef=e.target.value.trim().toUpperCase(); render(); } if(e.key==='Escape' && S.sel){ S.sel=null; render(); } });

// boot
try{ const r=localStorage.getItem('path-demo-role'); if(r && ROLES[r]) S.role=r; }catch(e){}
if(!location.hash) location.hash = '#login';
render();

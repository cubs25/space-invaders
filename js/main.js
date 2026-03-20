// --- SVG Marcianos ---
const ENEMY_SVG = {
  frame1: `<path d="M227.2,101.2V81.4h-19v-22h-21.6v-21h21.6v-22h-22V38h-21.6v21.4h-61.4V38h-22V16.4H59.6v22h21.6v21H59.6v22h-19v19.8H19.4v22V164h21.2v-40.8h19V164h21.6v21.6h42.7v-22H81.2V143H185v20.6h-41.5v22h42.2V164h22.5v-21v-19.8h19V164h21.2v-40.8v-22H227.2z M103.4,101v0.4H81.8v-22h21.6V101z M185.6,101v0.4H164v-22h21.6V101z"/>`,
  frame2: `<path d="M224.7,42.6V86h-19V64h-21.6V43h21.6V21h-22v21.6h-21.6V64h-61.4V42.6h-22V21H57.1v22h21.6v21H57.1v22h-19V42.6H16.9v85.2h21.2v19.8h19v20h21.6h1.2v-21.4h103.2v21.4h22.6v-20h19v-19.8h21.2V42.6H224.7z M100.9,105.6v0.4H79.3V84h21.6V105.6z M183.1,105.6v0.4h-21.6V84h21.6V105.6z"/><polygon points="34.8,190 56.4,190 56.4,168 34.8,168"/><polygon points="205.2,189.4 226.8,189.4 226.8,167.4 205.2,167.4"/>`
};

const ENEMY_SVG2 = {
  frame1: `<rect x="89.2" y="49.2" width="87.2" height="30"/><path d="M91.6,98.6V115h18.4V98.6h12.2V115h18.4V98.6H153V115h18.4V98.6V83.1h15.9v-6.7l0,0V41.9l0,0v-7.1h-16V19.4 H91.5v15.4H75.8v16.2l0,0v16l0,0v16.2h15.8V98.6z M171,50.9v20h-31.6v-20H171z M92.1,50.9h31.2v20H92.1V50.9z"/><polygon points="208.9,109.1 208.9,125.6 171.2,125.6 171.2,141.3 92.1,141.3 92.1,125.6 54.4,125.6 54.4,109.1 31.6,109.1 31.6,125.6 31.6,127.5 31.6,141.8 91.6,141.8 91.6,157.3 31.6,157.3 31.6,171.6 31.6,173.5 31.6,190 54.4,190 54.4,173.5 92.1,173.5 92.1,157.4 171.2,157.4 171.2,173.5 208.9,173.5 208.9,190 231.7,190 231.7,173.5 231.7,171.6 231.7,157.3 171.3,157.3 171.3,141.8 231.7,141.8 231.7,127.5 231.7,125.6 231.7,109.1"/>`,
  frame2: `<rect x="89.2" y="49.2" width="87.2" height="23"/><path d="M91.6,98.6V115h18.4V98.6h12.2V115h18.4V98.6H153V115h18.4V98.6V83.1h15.9v-6.7l0,0V41.9l0,0v-7.1h-16V19.4 H91.5v15.4H75.8v16.2l0,0v16l0,0v16.2h15.8V98.6z M171,46.9v24h-31.6v-24H171z M92.1,46.9h31.2v24H92.1V46.9z"/><polygon points="208.9,83.1 208.9,125.6 171.2,125.6 171.2,141.3 92.1,141.3 92.1,125.6 54.4,125.6 54.4,83.1 31.6,83.1 31.6,125.6 31.6,127.5 31.6,141.8 91.6,141.8 91.6,157.3 31.6,157.3 31.6,171.6 31.6,173.5 31.6,200 54.4,200 54.4,173.5 92.1,173.5 92.1,157.4 171.2,157.4 171.2,173.5 208.9,173.5 208.9,200 231.7,200 231.7,173.5 231.7,171.6 231.7,157.3 171.3,157.3 171.3,141.8 231.7,141.8 231.7,127.5 231.7,125.6 231.7,83.1"/>`
};

const ENEMY_SVG4 = {
  frame1: `<rect x="101.8" y="49.2" fill="#53e01e" width="87.2" height="20"/><path fill="#53e01e" d="M104.2,98.6V115h18.4V98.6h12.2V115h18.4V98.6h12.4V115H184V98.6V83.1h15.9v-6.7l0,0V41.9l0,0v-7.1h-16V19.4 h-79.8v15.4H88.4V51l0,0v16l0,0v16.2h15.8C104.2,83.2,104.2,98.6,104.2,98.6z M183.6,50.9v16H152v-16H183.6z M104.7,50.9h31.2v16 h-31.2V50.9z"/><polygon fill="#53e01e" points="221.5,83.1 221.5,125.6 183.8,125.6 183.8,141.3 104.7,141.3 104.7,125.6 67,125.6 67,83.1 44.2,83.1 44.2,125.6 44.2,127.5 44.2,141.8 104.2,141.8 104.2,157.3 44.2,157.3 44.2,171.6 44.2,173.5 44.2,200 67,200 67,173.5 104.7,173.5 104.7,157.4 183.8,157.4 183.8,173.5 221.5,173.5 221.5,200 244.3,200 244.3,173.5 244.3,171.6 244.3,157.3 183.9,157.3 183.9,141.8 244.3,141.8 244.3,127.5 244.3,125.6 244.3,83.1"/>`,
  frame2: `<rect x="101.8" y="49.2" fill="#53e01e" width="87.2" height="20"/><path fill="#53e01e" d="M104.2,98.6V115h18.4V98.6h12.2V115h18.4V98.6h12.4V115H184V98.6V83.1h15.9v-6.7l0,0V41.9l0,0v-7.1h-16V19.4 h-79.8v15.4H88.4V51l0,0v16l0,0v16.2h15.8C104.2,83.2,104.2,98.6,104.2,98.6z M183.6,50.9v16H152v-16H183.6z M104.7,50.9h31.2v16 h-31.2V50.9z"/><polygon fill="#53e01e" points="221.5,109.1 221.5,125.6 183.8,125.6 183.8,141.3 104.7,141.3 104.7,125.6 67,125.6 67,109.1 44.2,109.1 44.2,125.6 44.2,127.5 44.2,141.8 104.2,141.8 104.2,157.3 44.2,157.3 44.2,171.6 44.2,173.5 44.2,190 67,190 67,173.5 104.7,173.5 104.7,157.4 183.8,157.4 183.8,173.5 221.5,173.5 221.5,190 244.3,190 244.3,173.5 244.3,171.6 244.3,157.3 183.9,157.3 183.9,141.8 244.3,141.8 244.3,127.5 244.3,125.6 244.3,109.1"/>`
};

const LEVEL3_COLORS = ['#5c2e0e', '#4a7060', '#8a7a65', '#c28a3e'];
const LEVEL_COLORS = { 1: '#9e9d9d', 2: '#3e5368', 3: '#6a7a6d', 4: '#ef4343' };

function makeEnemySVG(color, level, row) {
  let svg, c;
  if (level === 2) { svg = ENEMY_SVG2; c = color; }
  else if (level === 3) {
    svg = row % 2 === 0 ? ENEMY_SVG : ENEMY_SVG2;
    c = LEVEL3_COLORS[row % LEVEL3_COLORS.length];
  }
  else if (level === 4) { svg = ENEMY_SVG4; c = '#53e01e'; }
  else { svg = ENEMY_SVG; c = color; }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.8 210.6" width="36" height="36">
    <style>.f1{animation:sw 0.6s steps(1) infinite}.f2{animation:sw 0.6s steps(1) infinite reverse}@keyframes sw{0%,49%{opacity:1}50%,100%{opacity:0}}</style>
    <g class="f1" fill="${c}">${svg.frame1}</g>
    <g class="f2" fill="${c}">${svg.frame2}</g>
  </svg>`;
}

// --- SVG Tiburón Astronauta Bonus ---
const SHARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 144" width="78" height="22" style="shape-rendering:crispEdges">
  <style>
    @keyframes thr{0%,100%{transform:scaleX(1)}50%{transform:scaleX(2)}}
    .fl{transform-origin:416px 32px;animation:thr 0.18s ease-in-out infinite}
    .fl2{transform-origin:416px 88px;animation:thr 0.18s ease-in-out infinite 0.09s}
  </style>
  <rect x="368" y="16" width="48" height="8" fill="#c28a3e"/>
  <rect x="376" y="24" width="48" height="8" fill="#8a7a65"/>
  <rect x="376" y="32" width="48" height="8" fill="#8a7a65"/>
  <rect x="368" y="40" width="48" height="8" fill="#c28a3e"/>
  <g class="fl"><rect x="416" y="24" width="16" height="8" fill="#c28a3e"/><rect x="424" y="28" width="32" height="8" fill="#ffdd00"/><rect x="424" y="32" width="24" height="8" fill="#ff8800"/></g>
  <rect x="368" y="88" width="48" height="8" fill="#c28a3e"/>
  <rect x="376" y="96" width="48" height="8" fill="#8a7a65"/>
  <rect x="376" y="104" width="48" height="8" fill="#8a7a65"/>
  <rect x="368" y="112" width="48" height="8" fill="#c28a3e"/>
  <g class="fl2"><rect x="416" y="96" width="16" height="8" fill="#c28a3e"/><rect x="424" y="100" width="32" height="8" fill="#ffdd00"/><rect x="424" y="104" width="24" height="8" fill="#ff8800"/></g>
  <rect x="168" y="0" width="16" height="8" fill="#4a7060"/>
  <rect x="160" y="8" width="24" height="8" fill="#4a7060"/>
  <rect x="152" y="16" width="32" height="8" fill="#4a7060"/>
  <rect x="144" y="24" width="40" height="8" fill="#5c7a6a"/>
  <rect x="24" y="32" width="352" height="8" fill="#4a7060"/>
  <rect x="8" y="40" width="368" height="8" fill="#4a7060"/>
  <rect x="0" y="48" width="16" height="8" fill="#c28a3e"/>
  <rect x="16" y="48" width="360" height="8" fill="#5c7a6a"/>
  <rect x="0" y="56" width="24" height="8" fill="#c28a3e"/>
  <rect x="24" y="56" width="352" height="8" fill="#5c7a6a"/>
  <rect x="0" y="64" width="8" height="8" fill="#ede0cc"/>
  <rect x="16" y="64" width="8" height="8" fill="#ede0cc"/>
  <rect x="32" y="64" width="8" height="8" fill="#ede0cc"/>
  <rect x="48" y="64" width="8" height="8" fill="#ede0cc"/>
  <rect x="56" y="64" width="320" height="8" fill="#5c7a6a"/>
  <rect x="0" y="72" width="56" height="16" fill="#1a0a02"/>
  <rect x="56" y="72" width="320" height="16" fill="#4a7060"/>
  <rect x="104" y="40" width="8" height="40" fill="#3a5a50"/>
  <rect x="120" y="40" width="8" height="40" fill="#3a5a50"/>
  <rect x="136" y="40" width="8" height="40" fill="#3a5a50"/>
  <rect x="0" y="88" width="8" height="8" fill="#ede0cc"/>
  <rect x="16" y="88" width="8" height="8" fill="#ede0cc"/>
  <rect x="32" y="88" width="8" height="8" fill="#ede0cc"/>
  <rect x="48" y="88" width="8" height="8" fill="#ede0cc"/>
  <rect x="56" y="88" width="320" height="8" fill="#5c7a6a"/>
  <rect x="0" y="96" width="24" height="8" fill="#c28a3e"/>
  <rect x="24" y="96" width="352" height="8" fill="#5c7a6a"/>
  <rect x="8" y="104" width="360" height="8" fill="#ede0cc"/>
  <rect x="16" y="112" width="352" height="8" fill="#ddd0b8"/>
  <rect x="32" y="120" width="336" height="8" fill="#8a7a65"/>
  <rect x="216" y="32" width="112" height="80" fill="#5c2e0e"/>
  <rect x="224" y="40" width="96" height="8" fill="#8a5a2e"/>
  <rect x="224" y="96" width="96" height="8" fill="#8a5a2e"/>
  <rect x="224" y="48" width="8" height="32" fill="#8a5a2e"/>
  <rect x="312" y="48" width="8" height="32" fill="#8a5a2e"/>
  <rect x="224" y="40" width="8" height="8" fill="#c28a3e"/>
  <rect x="312" y="40" width="8" height="8" fill="#c28a3e"/>
  <rect x="224" y="96" width="8" height="8" fill="#c28a3e"/>
  <rect x="312" y="96" width="8" height="8" fill="#c28a3e"/>
  <rect x="88" y="104" width="56" height="8" fill="#3a5a50"/>
  <rect x="80" y="112" width="56" height="8" fill="#3a5a50"/>
  <rect x="72" y="120" width="48" height="8" fill="#2a4a40"/>
  <rect x="40" y="40" width="24" height="8" fill="#c28a3e"/>
  <rect x="40" y="120" width="24" height="8" fill="#c28a3e"/>
  <rect x="152" y="104" width="16" height="8" fill="#c28a3e"/>
  <rect x="184" y="104" width="16" height="8" fill="#c28a3e"/>
</svg>`;

// --- SVG Cohete ---
const ROCKET_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.8 210.6" width="48" height="38">
  <rect x="125.9" y="196.2" fill="#FF0F85" width="11.1" height="11.1"/>
  <path fill="#3CAABC" d="M246.2,143.6v-19h-20.8v-20.4v-21h-21v21h-43.5V61.8H142V11.2h-21.6v50.6h-18.9v42.4H58v-21H37v21v20.4H16.6V144l0,0v19h84.9v20.4h19.6v12.8h21v-12.8h18.8V163h85.3V143.6L246.2,143.6z M108.6,122.4c0,0.7-0.3,1-1,1H86.4c-4.9,0-6.3,1.5-6.3,6.5v6.7c0,5,1.4,6.5,6.3,6.5h21.1c0.7,0,1,0.3,1,1v4.7c0,0.7-0.3,1-1,1H86.2c-9.6,0-13.3-3.4-13.3-12.5v-8.2c0-9.1,3.7-12.5,13.3-12.5h21.4c0.7,0,1,0.3,1,1V122.4z M121.1,83.2h21v21h-21V83.2z M149,127.7c0,5.4-3,8.5-8.3,8.5h-17.9c-1.7,0-2.5,0.9-2.5,2.7v3.5c0,0.7,0.3,1,0.9,1h26.6c0.7,0,1,0.3,1,1v4.5c0,0.7-0.4,1-1,1h-30.3c-3.1,0-4.4-1.2-4.4-4v-7.3c0-5.4,2.9-8.5,8.3-8.5h17.9c1.7,0,2.5-0.9,2.5-2.7v-1.5c0-1.8-0.9-2.7-2.5-2.7h-23.9c-0.7,0-1.1-0.3-1.1-1v-4.5c0-0.7,0.4-1,1.1-1h25.1c5.5,0,8.4,2.8,8.4,7.7V127.7z M189.9,142.2c0,4.9-2.9,7.7-8.4,7.7h-26.3c-0.7,0-1-0.3-1-1v-4.5c0-0.7,0.3-1,1-1h25.2c1.7,0,2.5-0.9,2.5-2.7v-1.9c0-1.8-0.8-2.7-2.5-2.7h-21.9c-3.1,0-4.4-1.2-4.4-4v-11.4c0-2.8,1.2-4,4.4-4h29.1c0.7,0,1,0.3,1,1v4.5c0,0.7-0.4,1-1,1h-25.5c-0.7,0-1,0.3-1,1v4.8c0,0.7,0.3,1,1,1h19.5c5.4,0,8.3,2.8,8.3,8.1V142.2z"/>
</svg>`;

// --- Estado ---
const state = { playerX: 270, bullets: [], enemies: [], score: 0, lives: 3, level: 1, running: false, keys: {} };

// --- Nave bonus ---
const bonus = { el: null, x: 0, dir: 1, active: false, nextSpawn: randomBonusDelay(), timer: 0, y: 12 };

function randomBonusDelay() { return 400 + Math.floor(Math.random() * 600); }

function spawnBonus() {
  if (bonus.active) return;
  bonus.active = true;
  bonus.dir = Math.random() < 0.5 ? 1 : -1;
  bonus.x = bonus.dir === 1 ? -100 : 640;
  const el = document.createElement('div');
  el.id = 'bonus-ship';
  el.innerHTML = SHARK_SVG;
  const flip = bonus.dir === 1 ? 'scaleX(-1)' : 'scaleX(1)';
  el.style.cssText = `position:absolute;top:12px;left:${bonus.x}px;cursor:pointer;z-index:5;transform:${flip};transform-origin:center center;`;
  bonus.y = 12;
  board.appendChild(el);
  bonus.el = el;
}

function moveBonus() {
  if (!bonus.active) {
    bonus.timer++;
    if (bonus.timer >= bonus.nextSpawn) { bonus.timer = 0; bonus.nextSpawn = randomBonusDelay(); spawnBonus(); }
    return;
  }
  bonus.x += bonus.dir * 2.5;
  bonus.el.style.left = bonus.x + 'px';
  if (bonus.x > 660 || bonus.x < -120) { bonus.el.remove(); bonus.el = null; bonus.active = false; }
}

function checkBonusHit(b) {
  if (!bonus.active || b.owner !== 'player') return false;
  const bx = b.x, by = board.clientHeight - b.y;
  if (bx > bonus.x && bx < bonus.x + 78 && by > 8 && by < 34) {
    const pts = [50, 100, 150, 200, 300][Math.floor(Math.random() * 5)];
    state.score += pts;
    showBonusPoints(bonus.x + 30, 18, pts);
    playBonus();
    bonus.el.remove(); bonus.el = null; bonus.active = false;
    updateHUD();
    return true;
  }
  return false;
}

// --- Curly del tiburón ---
const sharkBullets = [];
let sharkShootTimer = 0;
const SHARK_SHOOT_INTERVAL = 180;

function sharkShoot() {
  if (!bonus.active) return;
  sharkShootTimer++;
  if (sharkShootTimer < SHARK_SHOOT_INTERVAL) return;
  if (Math.random() > 0.33) { sharkShootTimer = 0; return; }
  sharkShootTimer = 0;
  const el = document.createElement('div');
  el.classList.add('shark-bullet');
  el.textContent = '〜';
  el.style.cssText = `position:absolute;font-size:18px;color:#c28a3e;top:${bonus.y || 20}px;left:${bonus.x + 30}px;pointer-events:none;z-index:6;text-shadow:0 0 6px #ff8800;`;
  board.appendChild(el);
  sharkBullets.push({ el, x: bonus.x + 30, y: bonus.y || 20, vx: bonus.dir * -1.5, vy: 1.5, age: 0 });
}

function moveSharkBullets() {
  for (let i = sharkBullets.length - 1; i >= 0; i--) {
    const b = sharkBullets[i];
    b.age++;
    const targetX = state.playerX + 24;
    const dx = targetX - b.x;
    b.vx += dx * 0.008;
    b.vx = Math.max(-4, Math.min(4, b.vx));
    b.vy += 0.05;
    b.x += b.vx;
    b.y += b.vy;
    const wobble = Math.sin(b.age * 0.3) * 3;
    b.el.style.left = (b.x + wobble) + 'px';
    b.el.style.top = b.y + 'px';
    const px = state.playerX, py = board.clientHeight - 58;
    if (b.x >= px && b.x <= px + 48 && b.y >= py - 38 && b.y <= py + 4) {
      b.el.remove(); sharkBullets.splice(i, 1);
      state.lives--; playPlayerHit();
      pixelFlash(state.playerX + 24, 45, state.lives);
      renderLives();
      if (state.lives <= 0) endGame();
      continue;
    }
    for (let j = state.bullets.length - 1; j >= 0; j--) {
      const pb = state.bullets[j];
      if (!pb || pb.owner !== 'player') continue;
      const pbx = pb.x, pby = board.clientHeight - pb.y;
      if (Math.abs(pbx - b.x) < 16 && Math.abs(pby - b.y) < 16) {
        b.el.remove(); sharkBullets.splice(i, 1);
        pb.el.remove(); state.bullets[j] = null;
        state.score += 75;
        showBonusPoints(b.x, board.clientHeight - b.y, 75);
        playBonus(); updateHUD(); break;
      }
    }
    state.bullets = state.bullets.filter(Boolean);
    if (b.y > board.clientHeight + 20 || b.age > 300) { b.el.remove(); sharkBullets.splice(i, 1); }
  }
}

function showBonusPoints(x, y, pts) {
  const el = document.createElement('div');
  el.textContent = '+' + pts;
  el.style.cssText = `position:absolute;left:${x}px;top:${y}px;color:#c28a3e;font-size:22px;font-family:'VT323',monospace;pointer-events:none;z-index:10;animation:floatUp 0.9s ease-out forwards;`;
  board.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

// --- Sonidos ---
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
let muted = false;
function getAudio() { if (!audioCtx) audioCtx = new AudioCtx(); return audioCtx; }

// --- Playlist ---
const PLAYLIST = [
  { file: 'assets/sounds/Various_Artists - Darude - Sandstorm.mp3', label: 'Darude — Sandstorm' },
  { file: 'assets/sounds/TechnoViking.mp4', label: 'Techno Viking' },
  { file: 'assets/sounds/Magnus_the_Magnus_Area.mp4', label: 'Magnus the Magnus Area' },
  { file: 'assets/sounds/ThereYouGo.mp3', label: 'There You Go' },
];
let trackIndex = Math.floor(Math.random() * PLAYLIST.length);
let bgAudio = new Audio(PLAYLIST[trackIndex].file);
bgAudio.loop = false;
bgAudio.volume = 0.4;
bgAudio.addEventListener('ended', () => nextTrack());

function playBG() { if (muted) return; bgAudio.play().catch(() => {}); }
function pauseBG() { bgAudio.pause(); }
function nextTrack() { trackIndex = (trackIndex + 1) % PLAYLIST.length; loadTrack(); playBG(); }
function prevTrack() { trackIndex = (trackIndex - 1 + PLAYLIST.length) % PLAYLIST.length; loadTrack(); playBG(); }
function loadTrack() { bgAudio.pause(); bgAudio.src = PLAYLIST[trackIndex].file; bgAudio.load(); updatePlayerUI(); }
function setBGVolume(v) { bgAudio.volume = Math.max(0, Math.min(1, v)); const s = document.getElementById('vol-slider'); if (s) s.value = Math.round(bgAudio.volume * 100); }
function updatePlayerUI() { const l = document.getElementById('track-label'); if (l) l.textContent = PLAYLIST[trackIndex].label; }
function toggleMute() {
  muted = !muted; bgAudio.muted = muted;
  const btn = document.getElementById('btn-mute');
  if (btn) btn.innerHTML = muted ? '<i class="fa-solid fa-volume-xmark"></i> SONIDO' : '<i class="fa-solid fa-volume-high"></i> SONIDO';
}

function playShoot() {
  if (muted) return;
  const ctx = getAudio(), o = ctx.createOscillator(), g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(2000, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);
  g.gain.setValueAtTime(0.25, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
  o.start(); o.stop(ctx.currentTime + 0.1);
  const o2 = ctx.createOscillator(), g2 = ctx.createGain();
  o2.connect(g2); g2.connect(ctx.destination);
  o2.type = 'square';
  o2.frequency.setValueAtTime(3200, ctx.currentTime);
  o2.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.06);
  g2.gain.setValueAtTime(0.1, ctx.currentTime);
  g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
  o2.start(); o2.stop(ctx.currentTime + 0.07);
}

function playEnemyHit() {
  if (muted) return;
  const ctx = getAudio(), o = ctx.createOscillator(), g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = 'sine';
  o.frequency.setValueAtTime(1200, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);
  g.gain.setValueAtTime(0.3, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
  o.start(); o.stop(ctx.currentTime + 0.18);
  const o2 = ctx.createOscillator(), g2 = ctx.createGain();
  o2.connect(g2); g2.connect(ctx.destination);
  o2.type = 'triangle';
  o2.frequency.setValueAtTime(900, ctx.currentTime);
  o2.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.12);
  g2.gain.setValueAtTime(0.15, ctx.currentTime);
  g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
  o2.start(); o2.stop(ctx.currentTime + 0.14);
}

function playPlayerHit() {
  if (muted) return;
  const ctx = getAudio();
  for (let i = 0; i < 3; i++) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = 'square';
    o.frequency.setValueAtTime(150 - i * 40, ctx.currentTime + i * 0.08);
    g.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.08);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.1);
    o.start(ctx.currentTime + i * 0.08);
    o.stop(ctx.currentTime + i * 0.08 + 0.1);
  }
}

function playBonus() {
  if (muted) return;
  const ctx = getAudio(), o = ctx.createOscillator(), g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = 'sine';
  o.frequency.setValueAtTime(440, ctx.currentTime);
  o.frequency.setValueAtTime(660, ctx.currentTime + 0.08);
  o.frequency.setValueAtTime(880, ctx.currentTime + 0.16);
  g.gain.setValueAtTime(0.15, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
  o.start(); o.stop(ctx.currentTime + 0.3);
}

// --- DOM ---
const board = document.getElementById('board');
const player = document.getElementById('player');
const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');
const levelEl = document.getElementById('level');
const screenStart = document.getElementById('screen-start');
const screenGameOver = document.getElementById('screen-gameover');

// --- Record Global ---
const SCORES_URL = 'https://cubs25.com/space-invaders/scores.php';
let globalScores = [];

async function fetchRecord() {
  try {
    const res = await fetch(SCORES_URL);
    const data = await res.json();
    globalScores = data.scores || [];
  } catch(e) { globalScores = []; }
  renderLeaderboard();
}

function renderLeaderboard() {
  const el = document.getElementById('record-display');
  if (!el) return;
  if (!globalScores.length) { el.innerHTML = '<span style="color:#555">NO RECORDS</span>'; return; }
  const colors = ['#FFD700', '#C0C0C0', '#CD7F32'];
  const sizes = ['22px', '18px', '15px'];
  el.innerHTML = globalScores.map((s, i) =>
    `<span style="color:${colors[i]};font-size:${sizes[i]};margin:0 8px;letter-spacing:2px;">${i+1}. ${s.initials} <strong>${s.score}</strong></span>`
  ).join('');
}

async function submitScore(score, initials) {
  try {
    const res = await fetch(SCORES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score, initials })
    });
    const data = await res.json();
    globalScores = data.scores || globalScores;
    renderLeaderboard();
    return data.qualified;
  } catch(e) { return false; }
}

function qualifiesTop3(score) {
  if (globalScores.length < 3) return true;
  return score > globalScores[globalScores.length - 1].score;
}

// --- HUD ---
function updateHUD() {
  scoreEl.textContent = state.score;
  levelEl.textContent = state.level;
  document.getElementById('bottom-score').textContent = state.score;
  document.getElementById('score-bg').textContent = state.score;
}

// --- Pausa ---
let paused = false;
function togglePause() {
  if (!state.running) return;
  paused = !paused;
  const btn = document.getElementById('btn-pause-big');
  if (btn) btn.innerHTML = paused ? '<i class="fa-solid fa-play"></i> PAUSA' : '<i class="fa-solid fa-pause"></i> PAUSA';
  if (!paused) gameLoop();
}

// --- Input ---
document.addEventListener('keydown', (e) => {
  state.keys[e.code] = true;
  if (e.code === 'KeyP') togglePause();
  if (e.code === 'Enter' && !state.running) {
    const startScreen = document.getElementById('screen-start');
    if (startScreen && !startScreen.classList.contains('hidden')) { setInitials(); }
    else { startGame(); }
  }
  if (e.code === 'Space' && state.running) { e.preventDefault(); shootPlayer(); }
});
document.addEventListener('keyup', (e) => { state.keys[e.code] = false; });

// --- Iniciales ---
let playerInitials = '???';
function setInitials() {
  const input = document.getElementById('initials-input-start');
  const val = input ? input.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '') : '';
  if (val.length === 0) { input.style.borderColor = '#ef4343'; input.placeholder = 'TUS INICIALES'; input.focus(); return; }
  input.style.borderColor = '#c28a3e';
  playerInitials = val.slice(0, 4);
  startGame();
}

// --- Start ---
function startGame() {
  state.running = true; state.score = 0; state.lives = 3; state.level = 1;
  state.playerX = 270; state.bullets = []; state.enemies = [];
  bonus.active = false; bonus.timer = 0; bonus.nextSpawn = randomBonusDelay();
  if (bonus.el) { bonus.el.remove(); bonus.el = null; }
  sharkBullets.forEach(b => b.el.remove());
  sharkBullets.length = 0; sharkShootTimer = 0;
  board.querySelectorAll('.bullet,.enemy,.pixel-particle,.shark-bullet').forEach(el => el.remove());
  screenStart.classList.add('hidden');
  screenGameOver.classList.add('hidden');
  const nameEl = document.getElementById('player-name');
  if (nameEl) { nameEl.textContent = playerInitials; nameEl.style.cssText = 'color:#ad7d4b;font-family:"Pixelify Sans",monospace;font-weight:bold;letter-spacing:3px;'; }
  paused = false;
  const btnP = document.getElementById('btn-pause-big');
  if (btnP) btnP.innerHTML = '<i class="fa-solid fa-pause"></i> PAUSA';
  enemyDir = 1; enemyMoveTimer = 0;
  renderLeaderboard();
  document.getElementById('score-bg').textContent = '0';
  updateHUD(); renderLives(); spawnEnemies();
  updatePlayerUI(); playBG(); gameLoop();
}

// --- Vidas ---
function renderLives() {
  livesEl.innerHTML = `<i class="fa-solid fa-rocket" style="font-size:14px;margin-right:6px;color:#3CAABC;"></i>${state.lives}`;
}

// --- Player ---
function movePlayer() {
  if (state.keys['ArrowLeft'] && state.playerX > 10) state.playerX -= 5;
  if (state.keys['ArrowRight'] && state.playerX < 548) state.playerX += 5;
  player.style.left = state.playerX + 'px';
}

// --- Disparo jugador ---
let lastShot = 0;
function shootPlayer() {
  const now = Date.now();
  if (now - lastShot < 400) return;
  lastShot = now;
  const bullet = document.createElement('div');
  bullet.classList.add('bullet');
  const bulletX = state.playerX + 22;
  bullet.style.left = bulletX + 'px';
  bullet.style.bottom = '60px';
  board.appendChild(bullet);
  state.bullets.push({ el: bullet, x: bulletX, y: 60, owner: 'player' });
  playShoot();
}

// --- Spawn enemigos ---
function spawnEnemies() {
  const config = { 1:{rows:3,cols:8}, 2:{rows:3,cols:10}, 3:{rows:4,cols:10}, 4:{rows:5,cols:10} };
  const { rows, cols } = config[state.level];
  const color = LEVEL_COLORS[state.level];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const el = document.createElement('div');
      el.classList.add('enemy');
      el.innerHTML = makeEnemySVG(color, state.level, r);
      board.appendChild(el);
      state.enemies.push({ el, x: 20 + c * 56, y: 60 + r * 52, alive: true });
    }
  }
}

// --- Velocidad dinámica ---
let enemyDir = 1, enemyMoveTimer = 0;
function getEnemyInterval() {
  const alive = state.enemies.filter(e => e.alive).length;
  const total = state.enemies.length;
  if (total === 0) return 30;
  const baseMax = 120 - (state.level - 1) * 20;
  const baseMin = 18 - (state.level - 1) * 3;
  return Math.floor(baseMin + (baseMax - baseMin) * (alive / total));
}

function moveEnemies() {
  enemyMoveTimer++;
  if (enemyMoveTimer < getEnemyInterval()) return;
  enemyMoveTimer = 0;
  const alive = state.enemies.filter(e => e.alive);
  if (!alive.length) return;
  const maxX = Math.max(...alive.map(e => e.x));
  const minX = Math.min(...alive.map(e => e.x));
  if (maxX >= 548 || minX <= 6) { enemyDir *= -1; alive.forEach(e => { e.y += 18; }); }
  alive.forEach(e => { e.x += enemyDir * 10; e.el.style.left = e.x + 'px'; e.el.style.top = e.y + 'px'; });
}

// --- Disparo enemigos ---
let enemyShootTimer = 0;
const ENEMY_SHOOT_INTERVAL = 90;
function enemyShoot() {
  enemyShootTimer++;
  const interval = Math.max(20, ENEMY_SHOOT_INTERVAL - (state.level - 1) * 15);
  if (enemyShootTimer < interval) return;
  enemyShootTimer = 0;
  const alive = state.enemies.filter(e => e.alive);
  if (!alive.length) return;
  const shots = state.level === 4 ? 2 : 1;
  for (let s = 0; s < shots; s++) {
    let shooter;
    if (Math.random() < 0.7) {
      const cx = state.playerX + 24;
      shooter = alive.reduce((a, e) => Math.abs(e.x + 18 - cx) < Math.abs(a.x + 18 - cx) ? e : a);
    } else {
      shooter = alive[Math.floor(Math.random() * alive.length)];
    }
    const startX = shooter.x + 18 + (s * 6);
    const bullet = document.createElement('div');
    bullet.classList.add('bullet', 'bullet-enemy');
    bullet.style.left = startX + 'px';
    bullet.style.top = (shooter.y + 36) + 'px';
    board.appendChild(bullet);
    state.bullets.push({ el: bullet, x: startX, y: shooter.y + 36, owner: 'enemy' });
  }
}

// --- Mover balas ---
function moveBullets() {
  state.bullets = state.bullets.filter(b => {
    if (b.owner === 'player') {
      b.y += 10; b.el.style.bottom = b.y + 'px';
      if (b.y > 650) { b.el.remove(); return false; }
    } else {
      b.y += 5; b.el.style.top = b.y + 'px';
      if (b.y > 660) { b.el.remove(); return false; }
    }
    return true;
  });
}

// --- Píxeles impacto ---
function pixelFlash(x, y, lives, color = '#fff') {
  const count = 6 + (lives || 1) * 3;
  for (let i = 0; i < count; i++) {
    const px = document.createElement('div');
    px.classList.add('pixel-particle');
    const size = 3 + Math.floor(Math.random() * 5);
    const angle = Math.random() * Math.PI * 2;
    const dist = 20 + Math.random() * 40;
    px.style.cssText = `position:absolute;width:${size}px;height:${size}px;background:${color};left:${x}px;bottom:${y}px;pointer-events:none;animation:pixelFly 0.5s ease-out forwards;--dx:${Math.cos(angle)*dist}px;--dy:${Math.sin(angle)*dist}px;`;
    board.appendChild(px);
    setTimeout(() => px.remove(), 520);
  }
}

// --- Colisiones ---
function checkCollisions() {
  state.bullets.forEach((b, bi) => {
    if (b.owner === 'player') {
      if (checkBonusHit(b)) { b.el.remove(); state.bullets[bi] = null; return; }
      state.enemies.forEach(e => {
        if (!e.alive) return;
        const bx = b.x, by = board.clientHeight - b.y;
        if (bx > e.x && bx < e.x + 40 && by > e.y && by < e.y + 40) {
          e.alive = false; e.el.remove(); b.el.remove(); state.bullets[bi] = null;
          state.score += 10 * state.level;
          playEnemyHit();
          pixelFlash(e.x + 18, board.clientHeight - e.y - 20, state.lives, LEVEL_COLORS[state.level]);
          updateHUD();
        }
      });
    }
    if (b.owner === 'enemy') {
      const px = state.playerX, py = board.clientHeight - 58;
      if (b.x >= px && b.x <= px + 48 && b.y >= py - 38 && b.y <= py + 4) {
        b.el.remove(); state.bullets[bi] = null;
        state.lives--; playPlayerHit();
        pixelFlash(state.playerX + 24, 45, state.lives);
        renderLives();
        if (state.lives <= 0) endGame();
      }
    }
  });
  state.bullets = state.bullets.filter(Boolean);
}

// --- Nivel completo ---
function checkLevel() {
  if (state.enemies.filter(e => e.alive).length > 0) return;
  if (state.level < 4) {
    state.level++; state.enemies = [];
    state.bullets.forEach(b => b.el.remove()); state.bullets = [];
    enemyDir = 1; enemyMoveTimer = 0;
    updateHUD(); spawnEnemies();
  } else { endGame(true); }
}

// --- Game Over ---
function endGame(win = false) {
  state.running = false;
  screenGameOver.classList.remove('hidden');
  screenGameOver.querySelector('h1').textContent = win ? '¡GANASTE!' : 'GAME OVER';
  const goScore = document.getElementById('go-score');
  if (goScore) goScore.textContent = 'SCORE: ' + state.score;
  // mostrar botón ver tabla
  let btnLb = document.getElementById('btn-go-lb');
  if (!btnLb) {
    btnLb = document.createElement('button');
    btnLb.id = 'btn-go-lb';
    btnLb.onclick = () => { closeLeaderboard(); showLeaderboard(); };
    btnLb.style.cssText = 'font-family:"VT323",monospace;font-size:22px;color:#ede0cc;background:#4a7060;border:2px solid #c28a3e;padding:8px 24px;cursor:pointer;letter-spacing:2px;margin-top:6px;';
    btnLb.innerHTML = '<i class="fa-solid fa-trophy" style="color:#ad7d4b"></i> VER TABLA';
    screenGameOver.appendChild(btnLb);
  }
  if (qualifiesTop3(state.score)) {
    submitScore(state.score, playerInitials).then(() => renderLeaderboard());
  } else { fetchRecord(); }
}

// --- Leaderboard ---
async function showLeaderboard() {
  if (state.running && !paused) togglePause();
  let scores = [];
  try {
    const res = await fetch(SCORES_URL + '?limit=50&t=' + Date.now());
    const data = await res.json();
    scores = data.scores || [];
  } catch(e) { scores = globalScores; }

  const colors = ['#FFD700','#C0C0C0','#CD7F32'];
  const rows = scores.map((s, i) => {
    const c = colors[i] || '#ede0cc';
    const pos = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i+1}`;
    const dt = s.time ? `${s.date || ''} ${s.time}` : (s.date || '');
    return `<tr style="color:${c};border-bottom:1px solid #333">
      <td style="padding:4px 8px;text-align:center;width:40px">${pos}</td>
      <td style="padding:4px 12px;text-align:center;letter-spacing:3px;width:70px;text-decoration:underline;text-underline-offset:3px;">${s.initials}</td>
      <td style="padding:4px 12px;text-align:right;width:70px">${s.score}</td>
      <td style="padding:4px 8px;text-align:center;color:#555;font-size:13px">${dt}</td>
    </tr>`;
  }).join('');

  const modal = document.createElement('div');
  modal.id = 'modal-lb';
  modal.style.cssText = `position:absolute;inset:0;background:rgba(0,0,0,0.95);z-index:20;display:flex;flex-direction:column;align-items:center;padding:8px 8px 8px;overflow:hidden;`;
  modal.innerHTML = `
    <div style="width:100%;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;margin-bottom:4px;">
      <h2 style="font-family:'VT323',monospace;font-size:32px;color:#c28a3e;letter-spacing:4px;margin:0;">
        <i class="fa-solid fa-trophy" style="color:#FFD700"></i> TOP 50
      </h2>
      <button onclick="closeLeaderboard()" style="background:none;border:none;color:#8a7a65;font-size:22px;cursor:pointer;padding:4px 8px;line-height:1;transition:color 0.15s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#8a7a65'">✕</button>
    </div>
    <div style="width:100%;overflow-y:auto;flex:1;">
      <table style="font-family:'VT323',monospace;font-size:18px;border-collapse:collapse;width:100%;table-layout:fixed;">
        <thead style="position:sticky;top:0;background:#050510;">
          <tr style="color:#8a7a65;font-size:14px;border-bottom:2px solid #c28a3e;">
            <th style="padding:4px 8px;text-align:center">#</th>
            <th style="padding:4px 12px;text-align:center">PLAYER</th>
            <th style="padding:4px 12px;text-align:right">SCORE</th>
            <th style="padding:4px 8px;text-align:center">FECHA</th>
          </tr>
        </thead>
        <tbody>${rows || '<tr><td colspan="4" style="text-align:center;color:#555;padding:20px">NO HAY RECORDS AÚN</td></tr>'}</tbody>
      </table>
    </div>
  `;
  document.getElementById('game').appendChild(modal);
}

function closeLeaderboard() {
  const modal = document.getElementById('modal-lb');
  if (modal) modal.remove();
}

// --- Loop ---
function gameLoop() {
  if (!state.running || paused) return;
  movePlayer(); moveBullets(); moveEnemies();
  enemyShoot(); moveBonus(); sharkShoot(); moveSharkBullets();
  checkCollisions(); checkLevel();
  requestAnimationFrame(gameLoop);
}

// --- Init ---
player.innerHTML = ROCKET_SVG;
player.style.cssText = 'position:absolute;bottom:20px;width:48px;height:38px;';
fetchRecord();
updatePlayerUI();
screenStart.classList.remove('hidden');
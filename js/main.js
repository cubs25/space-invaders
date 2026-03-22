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

const ENEMY_SVG5 = {
  frame1: `<g> <rect x="147.3" y="432.2" fill="#434951" width="55.9" height="40.8"/> <path d="M206.1,476h-61.9v-46.8h61.9V476z M150.3,470h49.9v-34.8h-49.9V470z"/> </g> <g> <polygon fill="#434951" points="117.3,429.6 99.7,429.6 99.7,459.2 117.3,459.2 250.7,459.2 250.7,429.9 231.3,429.9 231.3,367.5 117.8,367.5 "/> <path d="M254.7,463.2H95.7v-37.6h17.6l0.4-62.1h121.5v62.3h19.4V463.2z M103.7,455.2h142.9v-21.3h-19.4v-62.3H121.7l-0.4,62.1 h-17.6V455.2z"/> </g> <rect x="105.2" y="301" fill="#434951" width="140" height="130"/> <line x1="168.1" y1="410.9" x2="182.3" y2="410.9"/> <g> <g> <polyline fill="#434951" points="89.4,262.5 70.5,262.5 70.5,243.4 51.7,243.4 51.7,262.5 70.5,262.5 70.5,280.7 89.2,280.7 89.2,287.3 89.2,297.5 89.2,305.2 138.7,305.2 138.7,318.5 214.8,318.5 214.8,304.3 262.8,304.3 262.8,297.5 262.8,286.5 262.8,280.7 281.7,280.7 281.7,262.5 300.4,262.5 300.4,244.7 281.7,244.7 281.7,262.5 263.1,262.5 263.1,171.2 249.9,171.2 249.9,85.1 230,85.1 230,65.2 205.6,65.2 205.6,46.2 145,46.2 145,65.2 119.7,65.2 119.7,85.1 102.9,85.1 102.9,171.2 89.4,171.2 89.4,262.5 "/> <path d="M217.8,321.5h-82v-13.3H86.2v-24.5H67.5v-18.3H48.7v-25.1h24.7v19.1h12.9v-91.3h13.5V82.1h16.8V62.2H142V43.2h66.7v19.1 H233v19.9h19.9v86.1h13.2v91.3h12.6v-17.8h24.7v23.8h-18.7v18.3h-18.8v23.6h-48.1V321.5z M141.7,315.5h70v-14.2h48.1v-23.6h18.8 v-12.3h-18.6v-91.3h-13.2V88.1H227V68.2h-24.4V49.2H148v19.1h-25.3v19.9h-16.8v86.1H92.4v91.3H73.5v12.3h18.7v24.5h49.6V315.5z M284.7,259.5h12.7v-11.8h-12.7V259.5z M54.7,259.5h12.7v-13.1H54.7V259.5z"/> </g> <g> <rect x="304.4" y="226" fill="#434951" width="18.7" height="17.8"/> <path d="M326.1,246.8h-24.7V223h24.7V246.8z M307.4,240.8h12.7V229h-12.7V240.8z"/> </g> <g> <rect x="27.3" y="226" fill="#434951" width="18.7" height="17.8"/> <path d="M49,246.8H24.3V223H49V246.8z M30.3,240.8H43V229H30.3V240.8z"/> </g> <polygon fill="#6A7077" points="233.8,158.3 222.3,158.3 222.3,118.2 212.2,118.2 212.2,166.9 217.9,166.9 217.9,215.9 192,215.9 192,262.5 233.8,262.5 233.8,241.8 233.8,241.8 "/> <polygon fill="#6A7077" points="146.4,101 124.8,101 124,101 113.3,101 113.3,189.5 124.8,189.5 124.8,158.6 146.4,158.6 "/> <g> <g> <polygon points="238.9,368.4 248.4,368.4 248.9,431 239.4,431 "/> <rect x="243.1" y="305.7" width="9.5" height="62.7"/> </g> <g> <rect x="99.5" y="305.7" width="9.5" height="62.7"/> <rect x="103.7" y="368.4" width="9.5" height="62.7"/> </g> </g> <rect x="158.4" y="299.7" fill="#6A7077" width="49.9" height="14"/> <rect x="208.3" y="285.8" fill="#6A7077" width="49.9" height="14"/> </g> <g> <polyline points="227.2,452.2 123.2,452.2 123.2,353 227.2,353 "/> <g> <rect x="133.1" y="380.8" fill="#53E01E" width="14.2" height="31.6"/> <rect x="158.4" y="409.8" fill="#D4D4D4" width="12.6" height="14.2"/> <rect x="187.8" y="409.8" fill="#FFFFFF" width="12.6" height="14.2"/> <rect x="129" y="424" fill="#FFFFFF" width="87.2" height="15.4"/> <rect x="214.3" y="413.6" fill="#53E01E" width="16.5" height="46.2"/> <rect x="214.3" y="465.3" fill="#53E01E" width="16.5" height="21.1"/> <rect x="143.8" y="419.8" fill="#53E01E" width="14.7" height="45.6"/> <rect x="119.6" y="423.8" fill="#53E01E" width="14" height="32.2"/> </g> <g> <rect x="112.2" y="327.2" fill="#D4D4D4" width="14.2" height="14.2"/> <g> <rect x="126.3" y="341.5" fill="#EDEDED" width="42.4" height="15"/> <rect x="140.9" y="356.5" fill="#EDEDED" width="14.2" height="14.2"/> </g> <g> <g> <g> <rect x="214.1" y="341.5" fill="#D4D4D4" width="13.8" height="14.2"/> <rect x="214.1" y="355.7" fill="#53E01E" width="13.8" height="19.8"/> </g> <rect x="227.5" y="327.1" fill="#FFFFFF" width="10.7" height="14.2"/> </g> <g> <g> <rect x="199.9" y="370.6" fill="#53E01E" width="14.2" height="15"/> <rect x="199.9" y="356.5" fill="#FFFFFF" width="14.2" height="14.2"/> </g> <rect x="168.7" y="341.5" fill="#FFFFFF" width="45.4" height="15"/> </g> </g> <rect x="160.3" y="356.6" fill="#4CAF1E" width="14" height="20.2"/> </g> </g>`,
  frame2: `<rect x="144.7" y="514.3" width="59.1" height="34"/> <g> <rect x="147.3" y="439.5" fill="#434951" width="55.9" height="40.8"/> <path d="M206.1,483.3h-61.9v-46.8h61.9V483.3z M150.3,477.3h49.9v-34.8h-49.9V477.3z"/> </g> <g> <polygon fill="#434951" points="117.3,437.9 89.7,437.9 89.7,467.5 117.3,467.5 260.7,467.5 260.7,438.2 231.3,438.2 231.3,346.8 117.8,346.8 "/> <path d="M264.7,471.5H85.7v-37.6h27.6l0.4-91.1h121.5v91.3h29.4V471.5z M93.7,463.5h162.9v-21.3h-29.4v-91.3H121.7l-0.4,91.1 H93.7V463.5z"/> </g> <rect x="105.2" y="280.3" fill="#434951" width="140" height="164"/> <line x1="168.1" y1="419.1" x2="182.3" y2="419.1"/> <g> <polyline fill="#434951" points="89.4,241.8 70.5,241.8 70.5,222.7 51.7,222.7 51.7,241.8 70.5,241.8 70.5,260 89.2,260 89.2,266.6 89.2,271.8 89.2,279.5 138.7,279.5 138.7,292.8 214.8,292.8 214.8,278.6 262.8,278.6 262.8,271.8 262.8,265.8 262.8,260 281.7,260 281.7,241.8 300.4,241.8 300.4,224 281.7,224 281.7,241.8 263.1,241.8 263.1,150.5 249.9,150.5 249.9,69.4 230,69.4 230,49.5 205.6,49.5 205.6,30.5 145,30.5 145,49.5 119.7,49.5 119.7,69.4 102.9,69.4 102.9,150.5 89.4,150.5 89.4,241.8 "/> <path d="M217.8,295.8h-82v-13.3H86.2V263H67.5v-18.3H48.7v-25.1h24.7v19.1h12.9v-91.3h13.5V66.4h16.8V46.5H142V27.5h66.7v19.1 H233v19.9h19.9v81.1h13.2v91.3h12.6V221h24.7v23.8h-18.7V263h-18.8v18.6h-48.1V295.8z M141.7,289.8h70v-14.2h48.1V257h18.8v-12.3 h-18.6v-91.3h-13.2V72.4H227V52.5h-24.4V33.5H148v19.1h-25.3v19.9h-16.8v81.1H92.4v91.3H73.5V257h18.7v19.5h49.6V289.8z M284.7,238.8h12.7V227h-12.7V238.8z M54.7,238.8h12.7v-13.1H54.7V238.8z"/> </g> <g> <rect x="304.4" y="218.3" fill="#434951" width="18.7" height="17.8"/> <path d="M326.1,239.1h-24.7v-23.8h24.7V239.1z M307.4,233.1h12.7v-11.8h-12.7V233.1z"/> </g> <g> <rect x="27.3" y="218.3" fill="#434951" width="18.7" height="17.8"/> <path d="M49,239.1H24.3v-23.8H49V239.1z M30.3,233.1H43v-11.8H30.3V233.1z"/> </g> <polygon fill="#6A7077" points="233.8,137.5 222.3,137.5 222.3,102.4 212.2,102.4 212.2,146.2 217.9,146.2 217.9,195.2 192,195.2 192,241.8 233.8,241.8 233.8,221.1 233.8,221.1 "/> <polygon fill="#6A7077" points="146.4,85.3 124.8,85.3 124,85.3 113.3,85.3 113.3,168.8 124.8,168.8 124.8,137.8 146.4,137.8 "/> <g> <g> <polygon points="238.9,347.7 248.4,347.7 248.9,434.2 239.4,434.2 "/> <rect x="243.1" y="278" width="9.5" height="69.7"/> </g> <g> <rect x="99.5" y="278" width="9.5" height="69.7"/> <rect x="103.7" y="347.7" width="9.5" height="86.7"/> </g> </g> <rect x="158.4" y="265" fill="#6A7077" width="49.9" height="14"/> <rect x="208.3" y="256.1" fill="#6A7077" width="49.9" height="14"/> <polyline points="227.2,460.5 123.2,460.5 123.2,332.2 227.2,332.2 "/> <rect x="130.4" y="414.1" fill="#EDEDED" width="12.6" height="23.2"/> <rect x="147.4" y="418.1" fill="#FFFFFF" width="14.6" height="19.2"/> <rect x="189.8" y="418.1" fill="#FFFFFF" width="12.6" height="19.2"/> <rect x="207.8" y="414.1" fill="#EDEDED" width="12.6" height="23.2"/> <rect x="125" y="437.3" fill="#FFFFFF" width="102.2" height="23.2"/> <rect x="112.2" y="305" fill="#EDEDED" width="14.2" height="15.7"/> <rect x="119.3" y="320" fill="#EDEDED" width="49.4" height="15"/> <rect x="140.9" y="334.8" fill="#EDEDED" width="14.2" height="18.2"/> <rect x="214.1" y="320" fill="#FFFFFF" width="13.8" height="14.2"/> <rect x="199.9" y="334.8" fill="#FFFFFF" width="14.2" height="18.2"/> <g> <rect x="168.7" y="320" fill="#FFFFFF" width="45.4" height="15"/> <rect x="126.4" y="305" fill="#FFFFFF" width="111.8" height="15"/> </g> <rect x="125" y="437.3" fill="#53E01E" width="16.5" height="46.7"/> <rect x="139.1" y="371" fill="#53E01E" width="16.5" height="35.5"/> <rect x="212.5" y="460.5" fill="#53E01E" width="14.7" height="46.1"/> <rect x="119.3" y="342.2" fill="#53E01E" width="14" height="32.6"/> <rect x="218.9" y="350.6" fill="#53E01E" width="13.8" height="46"/> <g> <rect x="166.8" y="367.1" fill="#434951" width="15.6" height="148.8"/> <path d="M185.4,518.9h-21.6V364.1h21.6V518.9z M169.8,512.9h9.6V370.1h-9.6V512.9z"/> </g> <g> <rect x="140.6" y="499.8" fill="#434951" width="68" height="14"/> <path d="M211.6,516.8h-74v-20h74V516.8z M143.6,510.8h62v-8h-62V510.8z"/> </g> <g> <rect x="144.6" y="546.7" fill="#434951" width="60" height="14"/> <path d="M207.6,563.7h-66v-20h66V563.7z M147.6,557.7h54v-8h-54V557.7z"/> </g> <rect x="147.7" y="539.3" fill="#FFFFFF" width="10.3" height="10.3"/> <rect x="160.9" y="538.3" fill="#FFFFFF" width="10.3" height="11.3"/> <rect x="176.9" y="539.3" fill="#FFFFFF" width="10.3" height="10.3"/> <rect x="190.5" y="539.3" fill="#FFFFFF" width="10.3" height="10.3"/> <rect x="190.5" y="513.8" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 391.3657 1041.9426)" fill="#FFFFFF" width="10.3" height="14.3"/> <rect x="174.4" y="513.8" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 359.0266 1037.9426)" fill="#FFFFFF" width="10.3" height="10.3"/> <rect x="160.4" y="513.8" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 331.0266 1035.9426)" fill="#FFFFFF" width="10.3" height="8.3"/> <rect x="147.7" y="513.8" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 305.8002 1040.9426)" fill="#FFFFFF" width="10.3" height="13.3"/> <rect x="224" y="514.6" fill="#53E01E" width="14.2" height="31.9"/> <rect x="183.9" y="371.2" fill="#53E01E" width="14.2" height="15.2"/> <rect x="103.9" y="492.2" fill="#53E01E" width="14.2" height="15.2"/> <rect x="224.2" y="319.4" fill="#4CAF1E" width="14" height="20.5"/> </g>`
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
  else if (level === 4) { svg = ENEMY_SVG5; c = 'rgba(255,255,255,0.6)'; }
  else { svg = ENEMY_SVG; c = color; }
  const vb = level === 4 ? '0 0 348 612' : '0 0 262.8 210.6';
  const sh = level === 4 ? '52' : '36';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="36" height="${sh}">
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

// --- Tiburón: curly niveles 1-3, racimo nivel 4 ---
const sharkBullets = [];
let sharkShootTimer = 0;
const SHARK_SHOOT_INTERVAL = 180;

function sharkShoot() {
  if (!bonus.active) return;
  sharkShootTimer++;
  if (sharkShootTimer < SHARK_SHOOT_INTERVAL) return;
  if (Math.random() > 0.33) { sharkShootTimer = 0; return; }
  sharkShootTimer = 0;
  const x = bonus.x + 30, y = bonus.y || 20;
  if (state.level === 4) {
    // bomba racimo
    const el = document.createElement('div');
    el.classList.add('shark-bullet');
    el.style.cssText = `position:absolute;width:10px;height:10px;background:#c28a3e;border-radius:50%;top:${y}px;left:${x}px;pointer-events:none;z-index:6;box-shadow:0 0 6px #ff8800;`;
    board.appendChild(el);
    sharkBullets.push({ el, x, y, vx: 0, vy: 3, age: 0, isBomb: true, splitY: board.clientHeight * 0.45 });
  } else {
    // curly homing
    const el = document.createElement('div');
    el.classList.add('shark-bullet');
    el.textContent = '〜';
    el.style.cssText = `position:absolute;font-size:18px;color:#c28a3e;top:${y}px;left:${x}px;pointer-events:none;z-index:6;text-shadow:0 0 6px #ff8800;`;
    board.appendChild(el);
    sharkBullets.push({ el, x, y, vx: bonus.dir * -1.5, vy: 1.5, age: 0, isBomb: false });
  }
}

function spawnCluster(x, y) {
  [{ vx: -2.5, vy: 4 }, { vx: 0, vy: 5 }, { vx: 2.5, vy: 4 }].forEach(v => {
    const el = document.createElement('div');
    el.classList.add('shark-bullet');
    el.style.cssText = `position:absolute;width:7px;height:7px;background:#ff8800;border-radius:50%;top:${y}px;left:${x}px;pointer-events:none;z-index:6;box-shadow:0 0 5px #c28a3e;`;
    board.appendChild(el);
    sharkBullets.push({ el, x, y, vx: v.vx, vy: v.vy, age: 0, isBomb: false });
  });
}

function moveSharkBullets() {
  for (let i = sharkBullets.length - 1; i >= 0; i--) {
    const b = sharkBullets[i];
    b.age++;

    if (b.isBomb) {
      // bomba madre cae recta, explota al llegar a splitY
      b.y += b.vy;
      b.el.style.top = b.y + 'px';
      if (b.y >= b.splitY) {
        b.el.remove(); sharkBullets.splice(i, 1);
        spawnCluster(b.x, b.y);
        continue;
      }
    } else {
      // curly homing (niveles 1-3) o fragmento de racimo
      const targetX = state.playerX + 24;
      const dx = targetX - b.x;
      b.vx += dx * 0.008;
      b.vx = Math.max(-4, Math.min(4, b.vx));
      b.vy += 0.05;
      b.x += b.vx;
      b.y += b.vy;
      const wobble = b.textContent === '〜' ? Math.sin(b.age * 0.3) * 3 : 0;
      b.el.style.left = (b.x + wobble) + 'px';
      b.el.style.top = b.y + 'px';
    }

    // colisión con jugador
    const px = state.playerX, py = board.clientHeight - 58;
    if (b.x >= px && b.x <= px + 48 && b.y >= py - 38 && b.y <= py + 4) {
      b.el.remove(); sharkBullets.splice(i, 1);
      state.lives--; playPlayerHit();
      pixelFlash(state.playerX + 24, 45, state.lives);
      renderLives();
      if (state.lives <= 0) endGame();
      continue;
    }

    // interceptable por bala jugador
    for (let j = state.bullets.length - 1; j >= 0; j--) {
      const pb = state.bullets[j];
      if (!pb || pb.owner !== 'player') continue;
      const pbx = pb.x, pby = board.clientHeight - pb.y;
      if (Math.abs(pbx - b.x) < 16 && Math.abs(pby - b.y) < 16) {
        b.el.remove(); sharkBullets.splice(i, 1);
        pb.el.remove(); state.bullets[j] = null;
        state.score += 75;
        showBonusPoints(b.x, b.y, 75);
        playBonus(); updateHUD(); break;
      }
    }
    state.bullets = state.bullets.filter(Boolean);
    if (b.y > board.clientHeight + 20 || b.age > 400) { b.el.remove(); sharkBullets.splice(i, 1); }
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

function playBG() { if (muted) return; bgAudio.play().catch(() => { }); }
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
    const res = await fetch(SCORES_URL + '?limit=50');
    const data = await res.json();
    globalScores = data.scores || [];
  } catch (e) { globalScores = []; }
  renderLeaderboard();
}

function renderLeaderboard() {
  const el = document.getElementById('record-display');
  if (!el) return;
  if (!globalScores.length) { el.innerHTML = '<span style="color:#555">NO RECORDS</span>'; return; }
  const colors = ['#FFD700', '#C0C0C0', '#CD7F32'];
  const sizes = ['22px', '18px', '15px'];
  el.innerHTML = globalScores.slice(0, 3).map((s, i) =>
    `<span style="color:${colors[i]};font-size:${sizes[i]};margin:0 8px;letter-spacing:2px;">${i + 1}. ${s.initials} <strong>${s.score}</strong></span>`
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
  } catch (e) { return false; }
}

function qualifiesTop3(score) {
  return score > 0;
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
  playerInitials = val.slice(0, 6);
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
  const config = { 1: { rows: 3, cols: 8 }, 2: { rows: 3, cols: 10 }, 3: { rows: 4, cols: 10 }, 4: { rows: 5, cols: 10 } };
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
    if (state.level === 4) bullet.style.background = '#35d926';
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
    px.style.cssText = `position:absolute;width:${size}px;height:${size}px;background:${color};left:${x}px;bottom:${y}px;pointer-events:none;animation:pixelFly 0.5s ease-out forwards;--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;`;
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
  } catch (e) { scores = globalScores; }

  const colors = ['#FFD700', '#C0C0C0', '#CD7F32'];
  const rows = scores.map((s, i) => {
    const c = colors[i] || '#ede0cc';
    const pos = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`;
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
// ── DATA ─────────────────────────────────────────────
// Mix a color toward warm white when lit
function blendWithLight(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  const t = 0.45;
  const nr = Math.round(r + (255 - r)*t);
  const ng = Math.round(g + (245 - g)*t);
  const nb = Math.round(b + (200 - b)*t);
  return `rgb(${nr},${ng},${nb})`;
}

const PRODUCTS = [
  {
    name: 'Flute',
    desc: '',
    price: 25000,
    imgs: [ 'img/flut01.jpg',
            'img/flut02.jpg',
            'img/flut03.jpg',
            //'img/flut04.jpg',
            //'img/flut05.jpg',
            'img/flut06.jpg',
            'img/flut07.jpg',],

    // índices habilitados de cada opción (0-based)
    // OPT_PANTALLA: 0=Blanco, 1=Traslúcido
    enabledPantalla: [0, 1],
    // OPT_BASE: 0=Blanco, 1=Beige, 2=Marrón, 3=Azul oscuro, 4=Verde, 5=Negro, 6=Madera
    enabledBase:     [0, 1, 2, 3, 4, 5],
    // OPT_LAMPARA: 0=No, 1=Sí, 2=Smart
    enabledLampara:  [0, 1],
    // OPT_CABLE: 0=Blanco, 1=Negro, 2=Textil
    enabledCable:    [0, 1],

    details: [
      { label: 'Alto',          value: '22 cm' },
      { label: 'Ancho',         value: '14 cm' },
      { label: 'Largo del Cable',         value: '150 cm' },
    ],

    svg: (sc, bsc, lit, W, H) => {
      const shadeColor = lit ? blendWithLight(sc) : sc;
      return `<svg width="${W}" height="${H}" viewBox="0 0 60 112" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${lit ? `<defs><radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff8dc" stop-opacity="0.9"/><stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/></radialGradient></defs>` : ''}
  <path d="M0 102.413C0 96.2877 4.96557 91.3221 11.0909 91.3221H48.4882C54.6136 91.3221 59.5791 96.2877 59.5791 102.413V111.182H0V102.413Z" fill="${bsc}"/>
  <path d="M11.0908 91.8221H48.4883C54.3374 91.8221 59.0791 96.5638 59.0791 102.413V110.681H0.5V102.413C0.500046 96.5638 5.24169 91.8222 11.0908 91.8221Z" stroke="black" stroke-opacity="0.2"/>
  <path d="M0 0H59.5791V89.3687H0V0Z" fill="${shadeColor}"/>
  ${lit ? `<path d="M0 0H59.5791V89.3687H0V0Z" fill="url(#glow)" opacity="0.7"/>` : ''}
  <path d="M59.0791 0.5V88.8691H0.5V0.5H59.0791Z" stroke="black" stroke-opacity="${lit ? '0.1' : '0.2'}"/>
  <path d="M50.6387 0.5V88.8691H8.94043V0.5H50.6387Z" stroke="black" stroke-opacity="${lit ? '0.07' : '0.13'}"/>
  <path d="M55.6033 0.5V88.8691H3.97534V0.5H55.6033Z" stroke="black" stroke-opacity="${lit ? '0.05' : '0.1'}"/>
  <path d="M45.1772 0.5V88.8691H14.4019V0.5H45.1772Z" stroke="black" stroke-opacity="${lit ? '0.05' : '0.1'}"/>
  <path d="M39.219 0.5V88.8691H20.3596V0.5H39.219Z" stroke="black" stroke-opacity="${lit ? '0.04' : '0.08'}"/>
  <path d="M32.7654 0.5V88.8691H26.8142V0.5H32.7654Z" stroke="black" stroke-opacity="${lit ? '0.04' : '0.08'}"/>
  <path d="M10.7439 92.2174C10.7439 90.2396 12.3473 88.6362 14.3252 88.6362H45.6612C47.639 88.6362 49.2424 90.2396 49.2424 92.2174H10.7439Z" fill="${bsc}"/>
  <path d="M14.325 89.1362H45.6609C47.1922 89.1362 48.4619 90.2535 48.7009 91.7172H11.2849C11.5239 90.2535 12.7937 89.1363 14.325 89.1362Z" stroke="black" stroke-opacity="0.2"/>
</svg>`;
    },
  },

  {
    name: 'Funghi',
    desc: '',
    price: 32000,
    imgs: [ 'img/hon02.jpg',
            'img/hon03.jpg',
            'img/hon05.jpg',
            'img/hon06.jpg',
            'img/hon08.jpg',  ],

    // índices habilitados de cada opción (0-based)
    // OPT_PANTALLA: 0=Blanco, 1=Traslúcido
    enabledPantalla: [0, 1],
    // OPT_BASE: 0=Blanco, 1=Beige, 2=Marrón, 3=Azul oscuro, 4=Verde, 5=Negro, 6=Madera
    enabledBase:     [0, 1, 2, 3, 4, 5],
    // OPT_LAMPARA: 0=No, 1=Sí, 2=Smart
    enabledLampara:  [0, 1],
    // OPT_CABLE: 0=Blanco, 1=Negro, 2=Textil
    enabledCable:    [0, 1],

    details: [
      { label: 'Alto',          value: '18 cm' },
      { label: 'Ancho',         value: '22 cm' },
      { label: 'Largo del cable',         value: '150 cm' },
    ],

svg: (sc, bsc, lit, W, H) => {
  const shadeColor = lit ? blendWithLight(sc) : sc;
  return `<svg width="${W}" height="${H}" viewBox="0 0 134 124" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${lit ? `<defs>
    <radialGradient id="glow" cx="50%" cy="60%" r="55%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
  </defs>` : ''}
  <!-- Base -->
  <path d="M101 115C101 119.971 96.9706 124 92 124L41 124C36.0294 124 32 119.971 32 115L32 91L101 91L101 115Z" fill="${bsc}"/>
  <path d="M92 123.465L41 123.465C36.3249 123.465 32.5352 119.675 32.5352 115L32.5352 91.5352L100.465 91.5352L100.465 115C100.465 119.675 96.6751 123.465 92 123.465Z" stroke="black" stroke-opacity="0.4" stroke-width="1.07"/>
  <!-- Pantalla -->
  <path d="M134 73C134 83.4934 125.493 92 115 92H19C8.50659 92 0 83.4934 0 73V62.0888C0 58.1288 1.23734 54.2677 3.53906 51.0453L34.3168 7.95647C37.8833 2.96335 43.6417 0 49.7777 0H84.2223C90.3583 0 96.1167 2.96335 99.6832 7.95647L130.461 51.0453C132.763 54.2677 134 58.1288 134 62.0888V73Z" fill="${shadeColor}"/>
  ${lit ? `<path d="M134 73C134 83.4934 125.493 92 115 92H19C8.50659 92 0 83.4934 0 73V62.0888C0 58.1288 1.23734 54.2677 3.53906 51.0453L34.3168 7.95647C37.8833 2.96335 43.6417 0 49.7777 0H84.2223C90.3583 0 96.1167 2.96335 99.6832 7.95647L130.461 51.0453C132.763 54.2677 134 58.1288 134 62.0888V73Z" fill="url(#glow)"/>` : ''}
  <path d="M49.7773 0.535156H84.2227C90.1858 0.535284 95.782 3.41515 99.248 8.26758L130.025 51.3564C132.262 54.4881 133.465 58.2403 133.465 62.0889V73C133.465 83.1979 125.198 91.4648 115 91.4648H19C8.80206 91.4648 0.535157 83.1979 0.535156 73V62.0889C0.535156 58.2403 1.73771 54.4881 3.97461 51.3564L34.752 8.26758C38.218 3.41516 43.8142 0.535284 49.7773 0.535156Z" stroke="black" stroke-opacity="${lit ? '0.15' : '0.4'}" stroke-width="1.07"/>
</svg>`;
},
  },

  {
    name: 'Curbis',
    desc: '',
    price: 30000,
    imgs: [ 'img/cal02.jpg',
            'img/cal03.jpg',
            'img/cal04.jpg',
            'img/cal07.jpg',
            'img/cal08.jpg',
            'img/cal09.jpg',],

    // índices habilitados de cada opción (0-based)
    // OPT_PANTALLA: 0=Blanco, 1=Traslúcido
    enabledPantalla: [0, 1],
    // OPT_BASE: 0=Blanco, 1=Beige, 2=Marrón, 3=Azul oscuro, 4=Verde, 5=Negro, 6=Madera
    enabledBase:     [0, 1, 2, 3, 4, 5],
    // OPT_LAMPARA: 0=No, 1=Sí, 2=Smart
    enabledLampara:  [0, 1],
    // OPT_CABLE: 0=Blanco, 1=Negro, 2=Textil
    enabledCable:    [0, 1],

    details: [
      { label: 'Alto',          value: '20 cm' },
      { label: 'Ancho',         value: '16 cm' },
      { label: 'Largo del cable',         value: '150 cm' },
    ],

svg: (sc, bsc, lit, W, H) => {
  const shadeColor = lit ? blendWithLight(sc) : sc;
  return `<svg width="${W}" height="${H}" viewBox="0 0 124 162" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${lit ? `<defs>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
  </defs>` : ''}
  <!-- Base -->
  <path d="M37.6667 125H86.3333L97 162H27L37.6667 125Z" fill="${bsc}"/>
  <path d="M85.957 125.5L96.335 161.5H27.665L38.043 125.5H85.957Z" stroke="black" stroke-opacity="0.36"/>
  <!-- Pantalla -->
  <mask id="mask0_10_11" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="124" height="125">
    <rect width="124" height="125" rx="32" fill="${shadeColor}"/>
    <rect x="0.5" y="0.5" width="123" height="124" rx="31.5" stroke="black" stroke-opacity="0.36"/>
  </mask>
  <g mask="url(#mask0_10_11)">
    <rect width="124" height="125" rx="32" fill="${shadeColor}"/>
    ${lit ? `<rect width="124" height="125" rx="32" fill="url(#glow)"/>` : ''}
    <line x1="134" y1="6.5" x2="-10" y2="6.50001" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="12.5" x2="-10" y2="12.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="18.5" x2="-10" y2="18.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="24.5" x2="-10" y2="24.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="30.5" x2="-10" y2="30.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="36.5" x2="-10" y2="36.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="42.5" x2="-10" y2="42.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="48.5" x2="-10" y2="48.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="54.5" x2="-10" y2="54.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="60.5" x2="-10" y2="60.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="66.5" x2="-10" y2="66.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="72.5" x2="-10" y2="72.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="78.5" x2="-10" y2="78.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="84.5" x2="-10" y2="84.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="90.5" x2="-10" y2="90.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="96.5" x2="-10" y2="96.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="102.5" x2="-10" y2="102.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="108.5" x2="-10" y2="108.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="114.5" x2="-10" y2="114.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
    <line x1="134" y1="120.5" x2="-10" y2="120.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
  </g>
  <rect x="0.5" y="0.5" width="123" height="124" rx="31.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
</svg>`;
},
  },  


  {
    name: 'Kilt',
    desc: '',
    price: 34000,
    imgs: [ 'img/skirt01.jpg', 'img/skirt02.jpg', 'img/skirt04.jpg'],

    // índices habilitados de cada opción (0-based)
    // OPT_PANTALLA: 0=Blanco, 1=Traslúcido
    enabledPantalla: [0, 1],
    // OPT_BASE: 0=Blanco, 1=Beige, 2=Marrón, 3=Azul oscuro, 4=Verde, 5=Negro, 6=Madera
    enabledBase:     [0, 1, 2, 3, 4, 5],
    // OPT_LAMPARA: 0=No, 1=Sí, 2=Smart
    enabledLampara:  [0, 1],
    // OPT_CABLE: 0=Blanco, 1=Negro, 2=Textil
    enabledCable:    [0, 1],

    details: [
      { label: 'Alto',          value: '26 cm' },
      { label: 'Ancho',         value: '22 cm' },
      { label: 'Largo del cable',         value: '150 cm' },
    ],

svg: (sc, bsc, lit, W, H) => {
  const shadeColor = lit ? blendWithLight(sc) : sc;
  return `<svg width="${W}" height="${H}" viewBox="0 0 150 171" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${lit ? `<defs>
    <radialGradient id="glow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
  </defs>` : ''}
  <!-- Base -->
  <path d="M49.7687 73.008C50.1954 68.727 50.4088 66.5865 51.8374 65.2933C53.266 64 55.4171 64 59.7193 64H90.2806C94.5829 64 96.734 64 98.1626 65.2933C99.5912 66.5865 99.8046 68.727 100.231 73.008L108.904 160.008C109.416 165.143 109.672 167.711 108.184 169.356C106.695 171 104.114 171 98.9535 171H51.0465C45.8856 171 43.3051 171 41.8165 169.356C40.3279 167.711 40.5838 165.143 41.0958 160.008L49.7687 73.008Z" fill="${bsc}"/>
  <path d="M59.7197 64.5H90.2803C92.4448 64.5 94.0206 64.5006 95.2354 64.6572C96.436 64.812 97.2177 65.1123 97.8271 65.6641C98.4365 66.2157 98.8129 66.9635 99.0859 68.1426C99.3622 69.3358 99.5187 70.9038 99.7334 73.0576L108.406 160.058C108.664 162.64 108.851 164.525 108.795 165.972C108.739 167.404 108.445 168.321 107.812 169.021C107.18 169.719 106.296 170.101 104.877 170.299C103.443 170.498 101.548 170.5 98.9531 170.5H51.0469C48.4516 170.5 46.5568 170.498 45.123 170.299C43.704 170.101 42.8204 169.719 42.1875 169.021C41.5545 168.321 41.261 167.404 41.2051 165.972C41.1487 164.525 41.3363 162.64 41.5938 160.058L50.2666 73.0576C50.4813 70.9038 50.6378 69.3358 50.9141 68.1426C51.1871 66.9635 51.5635 66.2157 52.1729 65.6641C52.7823 65.1123 53.564 64.812 54.7646 64.6572C55.9794 64.5006 57.5552 64.5 59.7197 64.5Z" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
  <!-- Pantalla -->
  <path d="M43.5 6.52058e-06L106.5 0L150 121H0L43.5 6.52058e-06Z" fill="${shadeColor}"/>
  ${lit ? `<path d="M43.5 6.52058e-06L106.5 0L150 121H0L43.5 6.52058e-06Z" fill="url(#glow)"/>` : ''}
  <path d="M106.148 0.5L149.289 120.5H0.710938L43.8516 0.5H106.148Z" stroke="black" stroke-opacity="${lit ? '0.1' : '0.36'}"/>
  <path d="M101.089 0.5L137.327 120.5H12.6729L48.9111 0.5H101.089Z" stroke="black" stroke-opacity="${lit ? '0.08' : '0.36'}"/>
  <path d="M95.1836 0.5L123.369 120.5H26.6309L54.8164 0.5H95.1836Z" stroke="black" stroke-opacity="${lit ? '0.08' : '0.36'}"/>
  <path d="M87.167 0.5L104.423 120.5H45.5771L62.833 0.5H87.167Z" stroke="black" stroke-opacity="${lit ? '0.06' : '0.36'}"/>
  <path d="M78.7227 0.5L84.4756 120.5H65.5244L71.2773 0.5H78.7227Z" stroke="black" stroke-opacity="${lit ? '0.06' : '0.36'}"/>
</svg>`;
},
  },  
  
  {
    name: 'Miko',
    desc: '',
    price: 45000,
    imgs: [ 'img/pon01.jpg',
            'img/pon03.jpg',
            'img/pon06.jpg',
            'img/pon07.jpg',
            'img/pon08.jpg',
            'img/pon09.jpg',
          ],

    // índices habilitados de cada opción (0-based)
    // OPT_PANTALLA: 0=Blanco, 1=Traslúcido
    enabledPantalla: [0],
    // OPT_BASE: 0=Blanco, 1=Beige, 2=Marrón, 3=Azul oscuro, 4=Verde, 5=Negro, 6=Madera
    enabledBase:     [0, 2, 3, 4, 5],
    // OPT_LAMPARA: 0=No, 1=Sí, 2=Smart
    enabledLampara:  [0, 1],
    // OPT_CABLE: 0=Blanco, 1=Negro, 2=Textil
    enabledCable:    [0, 1],

    details: [
      { label: 'Alto',          value: '22 cm' },
      { label: 'Ancho',         value: '15 cm' },
      { label: 'Largo del cable',         value: '150 cm' },
      { label: 'Terminación',   value: 'Difusor blanco y base mate' },
    ],

svg: (sc, bsc, lit, W, H) => {
  const shadeColor = lit ? blendWithLight(sc) : sc;
  return `<svg width="${W}" height="${H}" viewBox="0 0 100 145" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${lit ? `<defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
  </defs>` : ''}
  <!-- Marco exterior — base -->
  <rect width="100" height="130" rx="5" fill="${bsc}"/>
  <rect x="0.5" y="0.5" width="99" height="129" rx="4.5" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
  <!-- Panel interior — pantalla -->
  <rect x="9" y="9" width="82" height="112" fill="${shadeColor}"/>
  ${lit ? `<rect x="9" y="9" width="82" height="112" fill="url(#glow)"/>` : ''}
  <rect x="9.5" y="9.5" width="81" height="111" stroke="black" stroke-opacity="${lit ? '0.1' : '0.36'}"/>
  <!-- Barras verticales — base -->
  <rect x="32" y="9" width="4" height="112" fill="${bsc}"/>
  <rect x="32.5" y="9.5" width="3" height="111" stroke="black" stroke-opacity="${lit ? '0.1' : '0.36'}"/>
  <rect x="63" y="9" width="4" height="112" fill="${bsc}"/>
  <rect x="63.5" y="9.5" width="3" height="111" stroke="black" stroke-opacity="${lit ? '0.1' : '0.36'}"/>
  <!-- Barras horizontales — base -->
  <rect x="91" y="44" width="4" height="82" transform="rotate(90 91 44)" fill="${bsc}"/>
  <rect x="90.5" y="44.5" width="3" height="81" transform="rotate(90 90.5 44.5)" stroke="black" stroke-opacity="${lit ? '0.1' : '0.36'}"/>
  <rect x="91" y="83" width="4" height="82" transform="rotate(90 91 83)" fill="${bsc}"/>
  <rect x="90.5" y="83.5" width="3" height="81" transform="rotate(90 90.5 83.5)" stroke="black" stroke-opacity="${lit ? '0.1' : '0.36'}"/>
  <!-- Pie — base -->
  <rect x="9" y="129" width="82" height="16" fill="${bsc}"/>
  <rect x="9.5" y="129.5" width="81" height="15" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
</svg>`;
},
  },  

  {
    name: 'Puff',
    desc: '',
    price: 32000,
    imgs: [ 'img/puf01.jpg',
            'img/puf02.jpg',
            'img/puf03.jpg',
          ],

    // índices habilitados de cada opción (0-based)
    // OPT_PANTALLA: 0=Blanco, 1=Traslúcido
    enabledPantalla: [0, 1],
    // OPT_BASE: 0=Blanco, 1=Beige, 2=Marrón, 3=Azul oscuro, 4=Verde, 5=Negro, 6=Madera
    enabledBase:     [0, 1, 2, 3, 4, 5],
    // OPT_LAMPARA: 0=No, 1=Sí, 2=Smart
    enabledLampara:  [0, 1],
    // OPT_CABLE: 0=Blanco, 1=Negro, 2=Textil
    enabledCable:    [0, 1],

    details: [
      { label: 'Alto',          value: '22 cm' },
      { label: 'Ancho',         value: '15 cm' },
      { label: 'Largo del cable',         value: '150 cm' },
    ],

svg: (sc, bsc, lit, W, H) => {
  const shadeColor = lit ? blendWithLight(sc) : sc;
  return `<svg width="${W}" height="${H}" viewBox="0 0 132 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${lit ? `<defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
  </defs>` : ''}
  <!-- Base -->
  <path d="M101 144C101 147.314 98.3137 150 95 150L39 150C35.134 150 32 146.866 32 143L32 124L101 124L101 144Z" fill="${bsc}"/>
  <path d="M95 149.465L39 149.465C35.4295 149.465 32.5352 146.571 32.5352 143L32.5352 124.535L100.465 124.535L100.465 144C100.465 147.018 98.0182 149.465 95 149.465Z" stroke="black" stroke-opacity="0.4" stroke-width="1.07"/>
  <!-- Pantalla -->
  <path d="M7.04 0H124.96C129.528 13.6273 129.528 28.3727 124.96 42H7.04C2.4716 28.3727 2.4716 13.6273 7.04 0Z" fill="${shadeColor}"/>
  ${lit ? `<path d="M7.04 0H124.96C129.528 13.6273 129.528 28.3727 124.96 42H7.04C2.4716 28.3727 2.4716 13.6273 7.04 0Z" fill="url(#glow)"/>` : ''}
  <path d="M124.597 0.5C128.98 13.8156 128.98 28.1844 124.597 41.5H7.40332C3.02024 28.1844 3.02024 13.8156 7.40332 0.5H124.597Z" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
  <path d="M7.04 41H124.96C129.528 54.6273 129.528 69.3727 124.96 83H7.04C2.4716 69.3727 2.4716 54.6273 7.04 41Z" fill="${shadeColor}"/>
  ${lit ? `<path d="M7.04 41H124.96C129.528 54.6273 129.528 69.3727 124.96 83H7.04C2.4716 69.3727 2.4716 54.6273 7.04 41Z" fill="url(#glow)"/>` : ''}
  <path d="M124.597 41.5C128.98 54.8156 128.98 69.1844 124.597 82.5H7.40332C3.02024 69.1844 3.02024 54.8156 7.40332 41.5H124.597Z" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
  <path d="M7.04 82H124.96C129.528 95.6273 129.528 110.373 124.96 124H7.04C2.4716 110.373 2.4716 95.6273 7.04 82Z" fill="${shadeColor}"/>
  ${lit ? `<path d="M7.04 82H124.96C129.528 95.6273 129.528 110.373 124.96 124H7.04C2.4716 110.373 2.4716 95.6273 7.04 82Z" fill="url(#glow)"/>` : ''}
  <path d="M124.597 82.5C128.98 95.8156 128.98 110.184 124.597 123.5H7.40332C3.02024 110.184 3.02024 95.8156 7.40332 82.5H124.597Z" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
  <line x1="46.5" y1="1" x2="46.5" y2="124" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
  <line x1="86.5" y1="1" x2="86.5" y2="124" stroke="black" stroke-opacity="${lit ? '0.15' : '0.36'}"/>
</svg>`;
},
  },  


  {
    name: 'Toggle',
    desc: '',
    price: 28000,
    imgs: [ 'img/togle02.jpg',
            'img/togle01.jpg',
            'img/togle03.jpg',
          ],

    // índices habilitados de cada opción (0-based)
    // OPT_PANTALLA: 0=Blanco, 1=Traslúcido
    enabledPantalla: [1],
    // OPT_BASE: 0=Blanco, 1=Beige, 2=Marrón, 3=Azul oscuro, 4=Verde, 5=Negro, 6=Madera
    enabledBase:     [0, 1, 2, 3, 4, 5],
    // OPT_LAMPARA: 0=No, 1=Sí, 2=Smart
    enabledLampara:  [0, 1],
    // OPT_CABLE: 0=Blanco, 1=Negro, 2=Textil
    enabledCable:    [0, 1],

    details: [
      { label: 'Alto',          value: '26 cm' },
      { label: 'Ancho',         value: '13 cm' },
      { label: 'Largo del cable',         value: '150 cm' },
      { label: 'Terminación',   value: 'Pantalla traslúcida y base mate' },
    ],

svg: (sc, bsc, lit, W, H) => {
  const shadeColor = lit ? blendWithLight(sc) : sc;
  return `<svg width="${W}" height="${H}" viewBox="0 0 70 149" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${lit ? `<defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#fff8dc" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fff8dc" stop-opacity="0"/>
    </radialGradient>
  </defs>` : ''}
  <!-- Base -->
  <rect x="62" y="149" width="53" height="48" transform="rotate(180 62 149)" fill="${bsc}"/>
  <rect x="61.465" y="148.465" width="51.93" height="46.93" transform="rotate(180 61.465 148.465)" stroke="black" stroke-opacity="0.4" stroke-width="1.07"/>
  <!-- Pantalla -->
  <rect width="70" height="130" rx="35" fill="${shadeColor}"/>
  ${lit ? `<rect width="70" height="130" rx="35" fill="url(#glow)"/>` : ''}
  <rect x="0.535" y="0.535" width="68.93" height="128.93" rx="34.465" stroke="black" stroke-opacity="${lit ? '0.15' : '0.4'}" stroke-width="1.07"/>
</svg>`;
},
  },  




];

// Placeholders para el resto de cards del catálogo (borrar cuando haya productos reales)


const OPT_PANTALLA = [
  { name:'Blanco',     hex:'#F5F2ED', extra:0 },
  { name:'Traslúcido', hex:'#D6E8E4', extra:0, opacity:0.55 },
];
const OPT_BASE = [
  { name:'Marrón',      hex:'#814631', extra:0 },
  { name:'Blanco',      hex:'#F5F2ED', extra:0 },
  { name:'Beige',       hex:'#E8DDD0', extra:0 },
  { name:'Azul oscuro', hex:'#1E3552', extra:0 },
  { name:'Verde',       hex:'#135D52', extra:0 },
  { name:'Negro',       hex:'#1a1714', extra:0 },
  { name:'Madera',      hex:'#B8845A', extra:5000, disabled: true },
];
const OPT_LAMPARA = [
  { name:'No',         extra:0 },
  { name:'Sí',         extra:0 },
  { name:'Smart',      extra:18000, disabled: true },
];
const OPT_CABLE = [
  { name:'Blanco', hex:'#F0EDE8', extra:0 },
  { name:'Negro',  hex:'#2A2724', extra:0 },
  { name:'Textil', hex:'#8B7355', extra:3000, disabled: true },
];

let state = { productIdx:0, pantalla:0, base:0, lampara:0, cable:0, qty:1 };
let showingSVG = false;
let lampOn = false;
let currentThumb = 0;
let currentImgs = [];

function fmt(n) { return '$ ' + n.toLocaleString('es-AR'); }
function calcUnitTotal() {
  const p = PRODUCTS[state.productIdx];
  if (!p) return 0;
  return p.price
    + OPT_PANTALLA[state.pantalla].extra
    + OPT_BASE[state.base].extra
    + OPT_LAMPARA[state.lampara].extra
    + OPT_CABLE[state.cable].extra;
}
function calcTotal() {
  return calcUnitTotal() * (state.qty || 1);
}
function basePrice() {
  const p = PRODUCTS[state.productIdx];
  return p ? p.price : 0;
}

// ── SVG ──────────────────────────────────────────────
function buildLampSVG(small, lit) {
  const product = PRODUCTS[state.productIdx];
  if (!product || !product.svg) return '';
  const sc  = OPT_PANTALLA[state.pantalla].hex;
  const bsc = OPT_BASE[state.base].hex;
  const W   = small ? 54  : 260;
  const H   = small ? 64  : 299;
  return product.svg(sc, bsc, lit, W, H);
}



function refreshSVG() {
  document.getElementById('lampSvgWrap').innerHTML  = buildLampSVG(false, lampOn);
  document.getElementById('pSvgTop').innerHTML      = buildLampSVG(true,  lampOn);
}

// ── LIGHT TOGGLE ─────────────────────────────────────
const lightToggleBtn = document.getElementById('lightToggle');
const ICON_ON  = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const ICON_OFF = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01"/><path d="M20 12h.01"/><path d="M12 20h.01"/><path d="M4 12h.01"/><path d="M17.657 6.343h.01"/><path d="M17.657 17.657h.01"/><path d="M6.343 17.657h.01"/><path d="M6.343 6.343h.01"/></svg>`;

lightToggleBtn.addEventListener('click', () => {
  lampOn = !lampOn;
  lightToggleBtn.innerHTML = lampOn ? ICON_ON : ICON_OFF;
  lightToggleBtn.classList.toggle('on', lampOn);
  document.getElementById('svgOverlay').classList.toggle('lit', lampOn);
  refreshSVG();
});

// ── VIEW TOGGLE ───────────────────────────────────────
function showPhotos() {
  showingSVG = false;
  document.getElementById('svgOverlay').classList.remove('visible');
  document.getElementById('btnPhotos').classList.add('active');
  document.getElementById('btnDibujo').classList.remove('active');
  lightToggleBtn.classList.remove('show');
}
function showDibujo() {
  showingSVG = true;
  document.getElementById('svgOverlay').classList.add('visible');
  document.getElementById('btnDibujo').classList.add('active');
  document.getElementById('btnPhotos').classList.remove('active');
  lightToggleBtn.classList.add('show');
}

document.getElementById('btnPhotos').addEventListener('click', showPhotos);
document.getElementById('btnDibujo').addEventListener('click', showDibujo);

// ── GALLERY ───────────────────────────────────────────
function imgSrc(src, size) {
  if (src.startsWith('photo-')) return `https://images.unsplash.com/${src}?w=${size}&q=80&fit=crop&crop=center`;
  return src; // local file
}

function buildGallery(imgs) {
  currentImgs = imgs;
  currentThumb = 0;
  const area = document.getElementById('galleryArea');
  area.querySelectorAll('.gallery-photo').forEach(el => el.remove());
  imgs.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-photo' + (i > 0 ? ' hidden' : '');
    div.innerHTML = `<img src="${imgSrc(src, 1200)}" loading="lazy" onerror="this.style.display='none'">`;
    area.insertBefore(div, area.querySelector('.svg-overlay'));
  });
  const thumbsEl = document.getElementById('galleryThumbs');
  thumbsEl.innerHTML = '';
  imgs.forEach((src, i) => {
    const th = document.createElement('div');
    th.className = 'thumb' + (i===0?' active':'');
    th.innerHTML = `<img src="${imgSrc(src, 300)}" loading="lazy">`;
    th.addEventListener('click', () => { setPhoto(i); showPhotos(); });
    thumbsEl.appendChild(th);
  });
}

function setPhoto(idx) {
  currentThumb = (idx + currentImgs.length) % currentImgs.length;
  document.querySelectorAll('.gallery-photo').forEach((p,i) => p.classList.toggle('hidden', i!==currentThumb));
  document.querySelectorAll('.thumb').forEach((t,i) => t.classList.toggle('active', i===currentThumb));
}

document.getElementById('arrowPrev').addEventListener('click', () => { setPhoto(currentThumb-1); showPhotos(); });
document.getElementById('arrowNext').addEventListener('click', () => { setPhoto(currentThumb+1); showPhotos(); });

// ── PRICES ────────────────────────────────────────────
function updatePrices() {
  const unit = calcUnitTotal();
  const total = calcTotal();
  document.getElementById('pPrice').textContent = fmt(unit);
  document.getElementById('totalPrice').textContent = fmt(total);

  [
    { id:'extraPantalla', extra: OPT_PANTALLA[state.pantalla].extra },
    { id:'extraBase',     extra: OPT_BASE[state.base].extra },
    { id:'extraLampara',  extra: OPT_LAMPARA[state.lampara].extra },
    { id:'extraCable',    extra: OPT_CABLE[state.cable].extra },
  ].forEach(({id, extra}) => {
    document.getElementById(id).textContent = extra ? '+'+fmt(extra) : '';
  });

  const rows = [{ label:'Precio unitario', val: fmt(unit) }];
  if (OPT_PANTALLA[state.pantalla].extra) rows.push({ label:'Pantalla traslúcida', val:'+'+fmt(OPT_PANTALLA[state.pantalla].extra) });
  if (OPT_BASE[state.base].extra)         rows.push({ label:'Base '+OPT_BASE[state.base].name, val:'+'+fmt(OPT_BASE[state.base].extra) });
  if (OPT_LAMPARA[state.lampara].extra)   rows.push({ label:'Lámpara '+OPT_LAMPARA[state.lampara].name, val:'+'+fmt(OPT_LAMPARA[state.lampara].extra) });
  if (OPT_CABLE[state.cable].extra)       rows.push({ label:'Cable textil', val:'+'+fmt(OPT_CABLE[state.cable].extra) });
  rows.push({ label:'Cantidad', val:'x'+(state.qty||1) });
  document.getElementById('breakdownRows').innerHTML = rows.map(r =>
    `<div class="breakdown-row"><span>${r.label}</span><span>${r.val}</span></div>`
  ).join('');
}

// ── CANTIDAD ──────────────────────────────────────────
function updateQtyUI() {
  document.getElementById('qtyValue').textContent = state.qty;
}
document.getElementById('qtyMinus').addEventListener('click', () => {
  if (state.qty > 1) { state.qty--; updateQtyUI(); updatePrices(); }
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  if (state.qty < 20) { state.qty++; updateQtyUI(); updatePrices(); }
});

// ── SWATCHES & PILLS ─────────────────────────────────
function buildSwatches(cid, options, key, labelId, onChangeCb, enabledArr) {
  const container = document.getElementById(cid);
  const label = document.getElementById(labelId);
  function render() {
    container.innerHTML = '';
    label.textContent = options[state[key]].name;
    options.forEach((opt, idx) => {
      const isDisabled = opt.disabled || (enabledArr && !enabledArr.includes(idx));
      const sw = document.createElement('div');
      sw.className = 'swatch' + (idx===state[key]?' active':'') + (isDisabled?' disabled':'');
      if (isDisabled) sw.style.pointerEvents = 'none';
      sw.style.background = opt.hex;
      sw.title = opt.name;
      if (opt.hex === '#F5F2ED' || opt.hex === '#F0EDE8')
        sw.style.boxShadow = sw.classList.contains('active')
          ? '0 0 0 2px #fff, 0 0 0 3.5px #1a1714'
          : 'inset 0 0 0 1px rgba(0,0,0,0.12)';
      sw.addEventListener('click', () => {
        state[key] = idx; render(); updatePrices();
        if (onChangeCb) { onChangeCb(); /* showDibujo(); */ }
      });
      container.appendChild(sw);
    });
  }
  render();
}

function buildPills(cid, options, key, labelId, enabledArr) {
  const container = document.getElementById(cid);
  const label = document.getElementById(labelId);
  function render() {
    container.innerHTML = '';
    label.textContent = options[state[key]].name;
    options.forEach((opt, idx) => {
      const isDisabled = opt.disabled || (enabledArr && !enabledArr.includes(idx));
      const pill = document.createElement('button');
      pill.className = 'pill' + (idx===state[key]?' active':'');
      pill.textContent = opt.name;
      if (isDisabled) { pill.disabled = true; pill.classList.add('disabled'); }
      else pill.addEventListener('click', () => { state[key]=idx; render(); updatePrices(); });
      container.appendChild(pill);
    });
  }
  render();
}

// ── DESCRIPCIÓN LARGA ─────────────────────────────────
function getLongDescription(product) {
  if (product.desc) return product.desc;
  const dims = (product.details || []).map(d => d.label.toLowerCase() + ': ' + d.value).join(', ');
  return `${product.name} es una lámpara de mesa de diseño minimalista, pensada para sumar luz cálida a cualquier ambiente. Elegí el color de pantalla, la base y el cable que mejor combinen con tu espacio: cada unidad se arma a pedido con la configuración que definas.${dims ? ' Medidas — ' + dims + '.' : ''}`;
}

// ── RELACIONADOS ──────────────────────────────────────
function renderRelated(currentIdx) {
  const container = document.getElementById('relatedGrid');
  if (!container) return;
  const others = PRODUCTS.map((p, i) => ({ p, i })).filter(o => o.i !== currentIdx).slice(0, 4);
  container.innerHTML = others.map(({p, i}) => `
    <div class="card" data-idx="${i}">
      <div class="card-img"><img src="${imgSrc(p.imgs[0], 600)}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"></div>
      <div class="card-body">
        <span class="card-name">${p.name}</span>
        <span class="card-price">${fmt(p.price)}</span>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openProduct(parseInt(card.dataset.idx)));
  });
}
const heroCta = document.getElementById('heroCta');
if (heroCta) {
  heroCta.addEventListener('click', () => {
    document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth' });
  });
}

// ── CATALOG ───────────────────────────────────────────
const grid = document.getElementById('grid');

// Real products
PRODUCTS.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-img"><img src="${imgSrc(p.imgs[0], 600)}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"></div>
    <div class="card-body">
      <span class="card-name">${p.name}</span>
      <span class="card-price">${fmt(p.price)}</span>
    </div>`;
  card.addEventListener('click', () => openProduct(i));
  grid.appendChild(card);
});



// ── OPEN PRODUCT ──────────────────────────────────────
function openProduct(i, pushState = true) {
  const product = PRODUCTS[i];
  if (!product) return;
  state = { productIdx:i, pantalla:0, base:0, lampara:0, cable:0, qty:1 };
  lampOn = false;
  showingSVG = false;

  document.getElementById('pName').textContent = product.name;
  document.getElementById('pDesc').textContent = product.desc;
  document.getElementById('pDescLong').textContent = getLongDescription(product);
  updateQtyUI();
  document.title = `nikio — ${product.name}`;
  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.textContent = 'Agregar al carrito';
  delete addToCartBtn.dataset.added;
  lightToggleBtn.innerHTML = ICON_OFF;
  lightToggleBtn.classList.remove('on','show');
  document.getElementById('svgOverlay').classList.remove('lit');

  buildGallery(product.imgs);
  showPhotos();
  buildSwatches('swatchesPantalla', OPT_PANTALLA, 'pantalla', 'labelPantalla', refreshSVG, product.enabledPantalla);
  buildSwatches('swatchesBase',     OPT_BASE,     'base',     'labelBase',     refreshSVG, product.enabledBase);
  buildPills(   'pillsLampara',     OPT_LAMPARA,  'lampara',  'labelLampara',  product.enabledLampara);
  buildSwatches('swatchesCable',    OPT_CABLE,    'cable',    'labelCable',    null,        product.enabledCable);
  refreshSVG();
  updatePrices();
  buildDetails(product);
  renderRelated(i);

  document.getElementById('viewCatalog').classList.remove('active');
  document.getElementById('viewCart').classList.remove('active');
  document.getElementById('viewProduct').classList.add('active');
  window.scrollTo(0,0);

  if (pushState) {
    history.pushState({ view: 'product', productIdx: i }, document.title, `?producto=${i}`);
  }
}

function goBack(pushState = true) {
  document.getElementById('viewProduct').classList.remove('active');
  document.getElementById('viewCart').classList.remove('active');
  document.getElementById('viewCatalog').classList.add('active');
  document.title = 'nikio — catálogo';
  window.scrollTo(0,0);

  if (pushState) {
    history.pushState({ view: 'catalog' }, document.title, window.location.pathname);
  }
}
document.getElementById('backBtn').addEventListener('click', () => goBack());

// ── DETALLE ───────────────────────────────────────────
function buildDetails(product) {
  const section = document.querySelector('.product-details-section');
  const table = document.getElementById('detailsTableFull');
  if (!product.details || !product.details.length) {
    if (section) section.style.display = 'none';
    return;
  }
  if (section) section.style.display = '';
  table.innerHTML = product.details.map(r =>
    '<tr><td>' + r.label + '</td><td>' + r.value + '</td></tr>'
  ).join('');
}
document.getElementById('logoLink').addEventListener('click', () => goBack());

// ── ACORDEÓN (envíos / cuidado / faq) ─────────────────
document.querySelectorAll('.accordion-head').forEach(head => {
  head.addEventListener('click', () => {
    head.parentElement.classList.toggle('open');
  });
});

// ── HISTORY (botón atrás del navegador) ───────────────
window.addEventListener('popstate', (e) => {
  const s = e.state;
  if (s && s.view === 'product') {
    openProduct(s.productIdx, false);
  } else if (s && s.view === 'cart') {
    openCart(false);
  } else {
    document.getElementById('viewProduct').classList.remove('active');
    document.getElementById('viewCart').classList.remove('active');
    document.getElementById('viewCatalog').classList.add('active');
    document.title = 'nikio — catálogo';
  }
});

// Inicializar estado según URL al cargar
(function initFromURL() {
  const params = new URLSearchParams(window.location.search);
  const idx = parseInt(params.get('producto'));
  if (!isNaN(idx) && PRODUCTS[idx]) {
    openProduct(idx, false);
    history.replaceState({ view: 'product', productIdx: idx }, document.title, `?producto=${idx}`);
  } else {
    history.replaceState({ view: 'catalog' }, document.title, window.location.pathname);
  }
})();

// ── WHATSAPP ──────────────────────────────────────────
const WHATSAPP_NUMBER = '541134121993'; // +54 11 3412-1993, sin '+' ni espacios

function sendToWhatsapp(text, confirmElId) {
  try {
    navigator.clipboard.writeText(text).catch(() => {});
  } catch (e) {
    // navigator.clipboard puede no existir (contexto no seguro, navegador
    // viejo, webview de una app, etc.) — no debe frenar el envío a WhatsApp
  }
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  const el = document.getElementById(confirmElId);
  if (el) {
    el.style.opacity = '1';
    setTimeout(() => el.style.opacity = '0', 2500);
  }
}

// ── CARRITO ───────────────────────────────────────────
let cart = (() => {
  try { return JSON.parse(localStorage.getItem('nikio_cart') || '[]'); }
  catch { return []; }
})();

updateCartBadge();

function cartItemText(item) {
  return [
    `Producto:        ${item.name}`,
    `Color pantalla:  ${item.pantalla}`,
    `Color base:      ${item.base}`,
    `Lámpara:         ${item.lampara}`,
    `Cable:           ${item.cable}`,
    `Cantidad:        ${item.qty || 1}`,
    `Precio:          ${fmt(item.price)}`,
  ].join('\n');
}

function saveCart() {
  try { localStorage.setItem('nikio_cart', JSON.stringify(cart)); } catch {}
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  badge.textContent = cart.length;
  badge.classList.toggle('visible', cart.length > 0);
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">El carrito está vacío.</p>';
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-svg">${(() => {
        const p = PRODUCTS[item.productIdx];
        if (!p || !p.svg) return '';
        const sc  = OPT_PANTALLA[item.pantallaIdx]?.hex || '#fff';
        const bsc = OPT_BASE[item.baseIdx]?.hex || '#fff';
        return p.svg(sc, bsc, false, 48, 56);
      })()}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-specs">
          Pantalla: ${item.pantalla}<br>
          Base: ${item.base}<br>
          Lámpara: ${item.lampara}<br>
          Cable: ${item.cable}<br>
          Cantidad: ${item.qty || 1}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <span class="cart-item-price">${fmt(item.price)}</span>
        <button class="cart-item-remove" data-idx="${idx}" title="Eliminar">×</button>
      </div>
    </div>
  `).join('');

  // totales con descuento
  const subtotal     = cart.reduce((s, i) => s + i.price, 0);
  const hasDiscount  = cart.length >= 2;
  const discountAmt  = hasDiscount ? Math.round(subtotal * 0.20) : 0;
  const total        = subtotal - discountAmt;
  document.getElementById('cartSubtotal').textContent = fmt(subtotal);
  const discountRow  = document.getElementById('cartDiscountRow');
  discountRow.style.display = hasDiscount ? 'flex' : 'none';
  document.getElementById('cartDiscount').textContent = '- ' + fmt(discountAmt);
  document.getElementById('cartTotal').textContent = fmt(total);
  footer.style.display = 'block';

  // remove handlers
  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.splice(parseInt(btn.dataset.idx), 1);
      saveCart();
      updateCartBadge();
      renderCart();
    });
  });
}

function openCart(pushState = true) {
  document.getElementById('viewCatalog').classList.remove('active');
  document.getElementById('viewProduct').classList.remove('active');
  document.getElementById('viewCart').classList.add('active');
  document.title = 'nikio — carrito';
  window.scrollTo(0, 0);
  renderCart();
  if (pushState) history.pushState({ view: 'cart' }, document.title, '?carrito');
}

function goBackFromCart(pushState = true) {
  document.getElementById('viewCart').classList.remove('active');
  document.getElementById('viewProduct').classList.remove('active');
  document.getElementById('viewCatalog').classList.add('active');
  document.title = 'nikio — catálogo';
  window.scrollTo(0, 0);
  if (pushState) history.pushState({ view: 'catalog' }, document.title, window.location.pathname);
}

document.getElementById('navCartBtn').addEventListener('click', () => openCart());
document.getElementById('cartBackBtn').addEventListener('click', () => goBackFromCart());

document.getElementById('addToCartBtn').addEventListener('click', () => {
  const btn = document.getElementById('addToCartBtn');
  if (btn.dataset.added === 'true') {
    openCart();
    return;
  }
  const product = PRODUCTS[state.productIdx];
  if (!product) return;
  cart.push({
    name:         product.name,
    productIdx:   state.productIdx,
    pantallaIdx:  state.pantalla,
    baseIdx:      state.base,
    lamparaIdx:   state.lampara,
    cableIdx:     state.cable,
    pantalla:     OPT_PANTALLA[state.pantalla].name,
    base:         OPT_BASE[state.base].name,
    lampara:      OPT_LAMPARA[state.lampara].name,
    cable:        OPT_CABLE[state.cable].name,
    qty:          state.qty,
    price:        calcTotal(),
  });
  saveCart();
  updateCartBadge();
  // el botón pasa a funcionar como acceso directo al carrito
  btn.textContent = 'Ver carrito';
  btn.dataset.added = 'true';
});

document.getElementById('cartKeepBtn').addEventListener('click', () => goBackFromCart());

document.getElementById('cartCopyBtn').addEventListener('click', () => {
  const lines = ['Hola, me gustaría hacer el siguiente pedido:', ''];
  cart.forEach((item, i) => {
    lines.push(`— Producto ${i + 1} —`);
    lines.push(cartItemText(item));
    lines.push('');
  });
  const subtotalC   = cart.reduce((s, i) => s + i.price, 0);
  const discountC   = cart.length >= 2 ? Math.round(subtotalC * 0.20) : 0;
  const totalC      = subtotalC - discountC;
  if (discountC > 0) lines.push(`Descuento (20%): -${fmt(discountC)}`);
  lines.push(`Total estimado:  ${fmt(totalC)}`);
  sendToWhatsapp(lines.join('\n'), 'cartCopyConfirm');
});


// ── NAV + CATÁLOGO: reaccionan al scroll ──────────────
(() => {
  const navEl = document.querySelector('nav');
  const catalogEl = document.querySelector('.catalog');
  let lastY = window.scrollY;
  let ticking = false;
  const THRESHOLD = 8; // px mínimos de scroll para reaccionar (evita "jitter")

  const INSET_RANGE = 220;       // px de scroll en los que el catálogo pasa de angosto a 100%
  const CONTENT_MAX_WIDTH = 1400; // debe coincidir con --catalog-max-width en index.css
  const MIN_INSET = 24;           // piso para pantallas angostas — debe coincidir con el max(24px, ...) del CSS
  const MAX_RADIUS = 32;          // px de border-radius en scroll 0

  function getMaxInset() {
    // misma fórmula que --catalog-inset en CSS: abraza el ancho real de .catalog-wrap
    return Math.max(MIN_INSET, (window.innerWidth - CONTENT_MAX_WIDTH) / 2);
  }

  function updateCatalogWidth(y) {
    if (!catalogEl) return;
    const maxInset = getMaxInset();
    const progress = Math.min(y / INSET_RANGE, 1); // 0 → 1
    const inset = maxInset * (1 - progress);        // maxInset → 0px
    catalogEl.style.marginLeft = inset + 'px';
    catalogEl.style.marginRight = inset + 'px';
    // las esquinas de abajo se cierran primero; las de arriba quedan redondeadas siempre
    const bottomRadius = MAX_RADIUS * (1 - progress);
    catalogEl.style.borderRadius = `${MAX_RADIUS}px ${MAX_RADIUS}px ${bottomRadius}px ${bottomRadius}px`;
  }

  function onScroll() {
    const y = window.scrollY;

    if (y < 80) {
      // cerca del top: nav visible y transparente, sobre el hero
      navEl.classList.remove('nav-hidden', 'nav-solid');
    } else if (y > lastY + THRESHOLD) {
      // bajando
      navEl.classList.add('nav-hidden');
    } else if (y < lastY - THRESHOLD) {
      // subiendo
      navEl.classList.remove('nav-hidden');
      navEl.classList.add('nav-solid');
    }

    updateCatalogWidth(y);

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    updateCatalogWidth(window.scrollY);
  }, { passive: true });

  updateCatalogWidth(window.scrollY); // estado inicial correcto si la página carga scrolleada
})();
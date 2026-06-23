/* Imagery — SVG compositions that stand in for the photography
   that will be shot later.

   • Three 4:5 creator flat-lays (top-down still life of objects).
   • One 16:6 closing "drone" view (desk from directly above in a field).

   Built as flat shapes with subtle shadows. Each card carries its
   own color world per the brief. */

const FlatLayYoni = () => (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    {/* Vintage office — warm tobacco / cream tones */}
    <defs>
      <linearGradient id="yoni-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D9C39A" />
        <stop offset="100%" stopColor="#B89668" />
      </linearGradient>
      <radialGradient id="yoni-vig" cx="0.5" cy="0.5" r="0.8">
        <stop offset="60%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(60,40,18,0.35)" />
      </radialGradient>
      <pattern id="yoni-paper" width="2" height="2" patternUnits="userSpaceOnUse">
        <rect width="2" height="2" fill="#F4ECDB" />
        <circle cx="0.4" cy="0.4" r="0.2" fill="rgba(0,0,0,0.04)" />
      </pattern>
    </defs>
    <rect width="400" height="500" fill="url(#yoni-bg)" />
    <rect width="400" height="500" fill="url(#yoni-vig)" />

    {/* Open notebook — top-left */}
    <g transform="translate(40,80) rotate(-6)">
      <rect x="0" y="0" width="160" height="200" fill="url(#yoni-paper)" />
      <rect x="0" y="0" width="160" height="200" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      <line x1="80" y1="0" x2="80" y2="200" stroke="rgba(0,0,0,0.18)" strokeWidth="0.5" />
      {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
        <line key={i} x1="10" y1={20 + i*16} x2="70" y2={20 + i*16} stroke="rgba(60,40,18,0.45)" strokeWidth="0.8" />
      ))}
      {[0,1,2,3,4,5].map(i => (
        <line key={"r"+i} x1="90" y1={20 + i*16} x2="150" y2={20 + i*16} stroke="rgba(60,40,18,0.7)" strokeWidth="1" />
      ))}
      <rect x="-3" y="-3" width="166" height="206" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
    </g>

    {/* Vintage camera body — bottom-left */}
    <g transform="translate(60,310) rotate(8)">
      <rect x="0" y="0" width="140" height="86" rx="8" fill="#2A1F18" />
      <rect x="0" y="0" width="140" height="22" fill="#3A2B20" />
      <rect x="6" y="6" width="40" height="10" rx="2" fill="#86694A" />
      <circle cx="70" cy="55" r="28" fill="#0E0905" />
      <circle cx="70" cy="55" r="22" fill="#1B1410" />
      <circle cx="70" cy="55" r="14" fill="#040301" />
      <circle cx="63" cy="48" r="3" fill="rgba(255,255,255,0.18)" />
      <rect x="108" y="6" width="22" height="10" rx="1.5" fill="#86694A" />
      <text x="14" y="78" fontFamily="Georgia, serif" fontStyle="italic" fontSize="9" fill="rgba(255,255,255,0.4)">35mm</text>
    </g>

    {/* Necktie — folded, draped diagonal */}
    <g transform="translate(220,90) rotate(20)">
      <path d="M0 0 L24 0 L20 40 L24 200 L12 220 L0 200 L4 40 Z" fill="#5B2A23" />
      <path d="M2 4 L22 4 L18 40 L22 198 L12 216 L2 198 L6 40 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {/* stripes */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={i} x1="2" y1={50 + i*22} x2="22" y2={62 + i*22} stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      ))}
    </g>

    {/* Coffee cup with saucer — bottom right */}
    <g transform="translate(260,320)">
      <ellipse cx="60" cy="68" rx="62" ry="14" fill="rgba(0,0,0,0.18)" />
      <ellipse cx="60" cy="60" rx="58" ry="12" fill="#F2EAD5" />
      <ellipse cx="60" cy="56" rx="44" ry="9" fill="#E5DAC0" />
      <ellipse cx="60" cy="34" rx="34" ry="22" fill="#F4ECDB" />
      <ellipse cx="60" cy="32" rx="28" ry="16" fill="#3A1F0E" />
      <ellipse cx="60" cy="30" rx="26" ry="13" fill="#5B3520" />
      <ellipse cx="56" cy="28" rx="6" ry="2" fill="rgba(255,255,255,0.15)" />
      <path d="M94 24 Q108 24 108 38 Q108 50 94 50" fill="none" stroke="#F4ECDB" strokeWidth="5" strokeLinecap="round" />
    </g>

    {/* Brass key — micro detail */}
    <g transform="translate(40,40) rotate(-30)">
      <circle cx="0" cy="0" r="6" fill="none" stroke="#8C6B36" strokeWidth="2" />
      <rect x="6" y="-1" width="22" height="2" fill="#8C6B36" />
      <rect x="22" y="-3" width="2" height="6" fill="#8C6B36" />
      <rect x="26" y="-3" width="2" height="4" fill="#8C6B36" />
    </g>
  </svg>
);

const FlatLayDolev = () => (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    {/* Airport — cool concrete grey + travel objects */}
    <defs>
      <linearGradient id="dolev-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D8DBE0" />
        <stop offset="100%" stopColor="#B6BBC4" />
      </linearGradient>
      <radialGradient id="dolev-vig" cx="0.5" cy="0.5" r="0.8">
        <stop offset="60%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(30,40,55,0.25)" />
      </radialGradient>
    </defs>
    <rect width="400" height="500" fill="url(#dolev-bg)" />
    <rect width="400" height="500" fill="url(#dolev-vig)" />
    {/* subtle grid texture (concrete) */}
    {[60,120,180,240,300,360,440].map(y => (
      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
    ))}

    {/* Passport — top left */}
    <g transform="translate(40,60) rotate(-8)">
      <rect x="0" y="0" width="160" height="220" rx="6" fill="#1E3A52" />
      <rect x="0" y="0" width="160" height="220" rx="6" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* embossed seal */}
      <circle cx="80" cy="100" r="38" fill="none" stroke="#C9A24A" strokeWidth="1.2" />
      <circle cx="80" cy="100" r="28" fill="none" stroke="#C9A24A" strokeWidth="0.8" />
      <text x="80" y="76" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fill="#C9A24A" letterSpacing="1">PASSPORT</text>
      <path d="M70 96 L80 86 L90 96 L86 110 L74 110 Z" fill="#C9A24A" />
      <text x="80" y="170" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#C9A24A" letterSpacing="3">ISRAEL</text>
      <rect x="20" y="195" width="120" height="1" fill="rgba(201,162,74,0.4)" />
    </g>

    {/* Boarding pass — center right, tilted */}
    <g transform="translate(180,90) rotate(14)">
      <rect x="0" y="0" width="200" height="80" rx="4" fill="#F4F0E5" />
      <rect x="0" y="0" width="200" height="80" rx="4" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="0.6" />
      <line x1="142" y1="0" x2="142" y2="80" stroke="rgba(0,0,0,0.25)" strokeWidth="0.6" strokeDasharray="2 2" />
      <text x="10" y="16" fontFamily="monospace" fontSize="7" fill="rgba(0,0,0,0.5)" letterSpacing="1">BOARDING PASS</text>
      <text x="10" y="38" fontFamily="Georgia, serif" fontWeight="700" fontSize="16" fill="#0A0A0A">TLV → JFK</text>
      <text x="10" y="56" fontFamily="monospace" fontSize="7" fill="rgba(0,0,0,0.6)">SEAT 04A · GATE D7</text>
      <text x="10" y="70" fontFamily="monospace" fontSize="6" fill="rgba(0,0,0,0.4)">SHOHAM/DOLEV</text>
      <text x="152" y="42" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.6)" textAnchor="middle">04A</text>
      <text x="152" y="58" fontFamily="monospace" fontSize="6" fill="rgba(0,0,0,0.4)" textAnchor="middle">15:25</text>
      {/* barcode */}
      {[170,173,176,178,182,185,188,191,195].map((x,i)=>(
        <rect key={i} x={x} y="64" width={i%3?1:2} height="12" fill="#0A0A0A" />
      ))}
    </g>

    {/* Aviator sunglasses */}
    <g transform="translate(80,320) rotate(-12)">
      <circle cx="40" cy="32" r="34" fill="rgba(0,0,0,0.55)" stroke="#888" strokeWidth="2" />
      <circle cx="40" cy="32" r="30" fill="#2A3A4E" />
      <circle cx="32" cy="22" r="8" fill="rgba(255,255,255,0.2)" />
      <circle cx="130" cy="32" r="34" fill="rgba(0,0,0,0.55)" stroke="#888" strokeWidth="2" />
      <circle cx="130" cy="32" r="30" fill="#2A3A4E" />
      <circle cx="122" cy="22" r="8" fill="rgba(255,255,255,0.2)" />
      <path d="M74 30 Q85 24 96 30" fill="none" stroke="#888" strokeWidth="2" />
      <path d="M6 28 L0 22" stroke="#888" strokeWidth="2" />
      <path d="M164 28 L172 22" stroke="#888" strokeWidth="2" />
    </g>

    {/* Watch — bottom right */}
    <g transform="translate(280,340) rotate(18)">
      <rect x="-10" y="-46" width="20" height="40" fill="#3A3F46" />
      <rect x="-10" y="46" width="20" height="40" fill="#3A3F46" />
      <circle cx="0" cy="0" r="40" fill="#1A1D22" stroke="#888" strokeWidth="2" />
      <circle cx="0" cy="0" r="34" fill="#F2EFE7" />
      {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
        const a = (i / 12) * Math.PI * 2 - Math.PI/2;
        return (
          <line key={i} x1={Math.cos(a)*28} y1={Math.sin(a)*28} x2={Math.cos(a)*32} y2={Math.sin(a)*32}
            stroke="#0A0A0A" strokeWidth={i%3===0?2:1} />
        );
      })}
      <line x1="0" y1="0" x2="0" y2="-20" stroke="#0A0A0A" strokeWidth="2" />
      <line x1="0" y1="0" x2="15" y2="6" stroke="#0A0A0A" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="2" fill="#0A0A0A" />
      <text x="0" y="22" textAnchor="middle" fontFamily="Georgia, serif" fontSize="5" fill="rgba(0,0,0,0.5)" letterSpacing="0.5">TEL AVIV</text>
    </g>

    {/* Coin — micro */}
    <circle cx="350" cy="60" r="14" fill="#C9A24A" />
    <circle cx="350" cy="60" r="11" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="0.5" />
    <text x="350" y="64" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="rgba(0,0,0,0.45)">₪</text>
  </svg>
);

const FlatLayAyelet = () => (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    {/* Architecture — cream paper + drafting tools + fingerprint */}
    <defs>
      <linearGradient id="ay-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EFE6" />
        <stop offset="100%" stopColor="#E0DBCC" />
      </linearGradient>
      <radialGradient id="ay-vig" cx="0.5" cy="0.5" r="0.8">
        <stop offset="60%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(40,40,30,0.22)" />
      </radialGradient>
    </defs>
    <rect width="400" height="500" fill="url(#ay-bg)" />
    <rect width="400" height="500" fill="url(#ay-vig)" />

    {/* Drafting paper sheet — full background */}
    <g transform="translate(40,50) rotate(-3)">
      <rect x="0" y="0" width="320" height="380" fill="#FAF6EA" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      {/* blueprint grid */}
      {Array.from({length:16}).map((_,i)=>(
        <line key={"v"+i} x1={i*20} y1="0" x2={i*20} y2="380" stroke="rgba(2,75,185,0.10)" strokeWidth="0.5" />
      ))}
      {Array.from({length:19}).map((_,i)=>(
        <line key={"h"+i} x1="0" y1={i*20} x2="320" y2={i*20} stroke="rgba(2,75,185,0.10)" strokeWidth="0.5" />
      ))}
      {/* floor plan sketch */}
      <g stroke="#024BB9" strokeWidth="1.2" fill="none" transform="translate(40,60)">
        <rect x="0" y="0" width="180" height="120" />
        <line x1="100" y1="0" x2="100" y2="60" />
        <line x1="100" y1="60" x2="180" y2="60" />
        <line x1="0" y1="90" x2="60" y2="90" />
        <line x1="60" y1="60" x2="60" y2="90" />
        {/* door swing */}
        <path d="M0 60 A20 20 0 0 1 20 80" />
        <line x1="0" y1="60" x2="20" y2="80" strokeDasharray="2 2" />
        {/* dimensions */}
        <line x1="0" y1="-12" x2="180" y2="-12" strokeWidth="0.5" />
        <line x1="0" y1="-14" x2="0" y2="-10" strokeWidth="0.5" />
        <line x1="180" y1="-14" x2="180" y2="-10" strokeWidth="0.5" />
      </g>
      <text x="80" y="40" fontFamily="Georgia, serif" fontStyle="italic" fontSize="14" fill="rgba(2,75,185,0.7)">unit 04 · plan</text>
      <text x="60" y="240" fontFamily="monospace" fontSize="8" fill="rgba(0,0,0,0.45)" letterSpacing="0.5">1:50 · A.SAYAR · 02/26</text>
    </g>

    {/* Wooden ruler */}
    <g transform="translate(40,360) rotate(-3)">
      <rect x="0" y="0" width="320" height="20" fill="#D9B981" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
      {Array.from({length:32}).map((_,i)=>(
        <line key={i} x1={i*10} y1="0" x2={i*10} y2={i%5===0?12:6} stroke="rgba(60,40,18,0.7)" strokeWidth="0.6" />
      ))}
      {[0,5,10,15,20,25,30].map(i=>(
        <text key={i} x={i*10} y="18" fontFamily="monospace" fontSize="5" fill="rgba(60,40,18,0.8)" textAnchor="middle">{i}</text>
      ))}
    </g>

    {/* Pencil — diagonal across */}
    <g transform="translate(80,420) rotate(-22)">
      <rect x="0" y="0" width="180" height="10" fill="#F4D26A" />
      <rect x="0" y="0" width="180" height="3" fill="#E0BC54" />
      <rect x="180" y="-2" width="14" height="14" fill="#E48B5C" />
      <polygon points="194,-2 210,5 194,12" fill="#F4E5C8" />
      <polygon points="210,5 200,2 200,8" fill="#2A1F18" />
      <text x="20" y="8" fontFamily="monospace" fontSize="5" fill="rgba(0,0,0,0.5)" letterSpacing="0.4">2B · COURSE IT</text>
    </g>

    {/* Fingerprint — bottom right, signature gesture */}
    <g transform="translate(290,380)" stroke="#024BB9" strokeWidth="1" fill="none" opacity="0.85">
      <ellipse cx="0" cy="0" rx="34" ry="42" />
      <ellipse cx="0" cy="-2" rx="28" ry="34" />
      <ellipse cx="0" cy="-3" rx="22" ry="27" />
      <ellipse cx="-1" cy="-4" rx="16" ry="20" />
      <ellipse cx="-1" cy="-4" rx="10" ry="13" />
      <ellipse cx="-1" cy="-4" rx="4" ry="6" />
      <path d="M-34 10 Q-22 30 0 32 Q22 30 34 8" strokeWidth="1.2" />
    </g>

    {/* Triangle ruler */}
    <g transform="translate(220,60) rotate(35)" opacity="0.85">
      <polygon points="0,0 100,0 0,80" fill="rgba(255,255,255,0.7)" stroke="rgba(0,0,0,0.25)" strokeWidth="0.6" />
      {Array.from({length:9}).map((_,i)=>(
        <line key={i} x1={i*10} y1="0" x2={i*10} y2={i%5===0?6:3} stroke="rgba(0,0,0,0.4)" strokeWidth="0.5" />
      ))}
    </g>
  </svg>
);

/* Top-down closing scene: drone view of the same desk in the field. */
const DroneScene = () => (
  <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="grass-rad" cx="0.5" cy="0.5" r="0.85">
        <stop offset="0%" stopColor="#7AAE3D" />
        <stop offset="55%" stopColor="#5F9230" />
        <stop offset="100%" stopColor="#3B6A1F" />
      </radialGradient>
      <pattern id="grass-tex" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
        <rect width="14" height="14" fill="transparent" />
        <line x1="1" y1="2" x2="1" y2="10" stroke="rgba(50,90,30,0.55)" strokeWidth="0.6" />
        <line x1="4" y1="6" x2="4" y2="13" stroke="rgba(120,170,80,0.4)" strokeWidth="0.5" />
        <line x1="7" y1="1" x2="7" y2="8" stroke="rgba(40,80,28,0.55)" strokeWidth="0.6" />
        <line x1="11" y1="5" x2="11" y2="12" stroke="rgba(140,190,100,0.35)" strokeWidth="0.5" />
        <line x1="2" y1="11" x2="2" y2="14" stroke="rgba(70,110,40,0.45)" strokeWidth="0.6" />
        <line x1="9" y1="9" x2="9" y2="14" stroke="rgba(90,140,60,0.4)" strokeWidth="0.5" />
      </pattern>
      <filter id="desk-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="14" />
      </filter>
    </defs>
    <rect width="1600" height="600" fill="url(#grass-rad)" />
    <rect width="1600" height="600" fill="url(#grass-tex)" opacity="0.85" />

    {/* Soft sun spot */}
    <ellipse cx="800" cy="420" rx="520" ry="240" fill="rgba(255,250,210,0.18)" />

    {/* Cast shadow of desk */}
    <ellipse cx="820" cy="450" rx="130" ry="32" fill="rgba(0,0,0,0.45)" filter="url(#desk-shadow)" />

    {/* Desk seen from above (slightly tilted for perspective) */}
    <g transform="translate(800,430) rotate(-4)">
      <rect x="-110" y="-42" width="220" height="84" rx="3" fill="#1F3D8A" />
      {/* subtle steel highlight strip */}
      <rect x="-110" y="-42" width="220" height="9" fill="rgba(255,255,255,0.10)" />
      <rect x="-110" y="33" width="220" height="9" fill="rgba(0,0,0,0.18)" />
      {/* laptop (open, top-down) */}
      <g transform="translate(-32,-22)">
        <rect x="0" y="0" width="64" height="44" rx="2" fill="#C9CDD2" />
        <rect x="2" y="2" width="60" height="36" rx="1.5" fill="#0E0F12" />
        <rect x="4" y="4" width="56" height="32" rx="1" fill="#13202E" />
        <rect x="10" y="10" width="44" height="1.5" fill="rgba(255,255,255,0.16)" />
        <rect x="10" y="14" width="30" height="1.5" fill="rgba(255,255,255,0.12)" />
        <rect x="10" y="18" width="36" height="1.5" fill="rgba(255,255,255,0.10)" />
      </g>
      {/* small notebook on the side */}
      <rect x="56" y="-20" width="36" height="28" rx="1" fill="#F2EAD5" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
      <line x1="60" y1="-14" x2="88" y2="-14" stroke="rgba(0,0,0,0.35)" strokeWidth="0.5" />
      <line x1="60" y1="-9" x2="88" y2="-9" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
      <line x1="60" y1="-4" x2="84" y2="-4" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
      {/* coffee cup */}
      <circle cx="-82" cy="-8" r="10" fill="#F4ECDB" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
      <circle cx="-82" cy="-8" r="7" fill="#3A1F0E" />
      <circle cx="-82" cy="-8" r="6" fill="#5B3520" />
    </g>

    {/* Slight grain darkening around the edges */}
    <radialGradient id="vig-dark" cx="0.5" cy="0.5" r="0.7">
      <stop offset="60%" stopColor="rgba(0,0,0,0)" />
      <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
    </radialGradient>
    <rect width="1600" height="600" fill="url(#vig-dark)" />
  </svg>
);


/* Brand mark — two logo SVGs (rounded diamond + heart cutout) stacked;
   opacity swaps based on the background behind the header.
   `dark` = on a dark section (shows the Cloud Dancer mark). */
const BrandMark = ({ dark = false }) => (
  <span className="brandmark" aria-label="Course It" role="img">
    <img
      className="brandmark__img brandmark__img--black"
      src={(window.__resources && window.__resources.logoBlack) || "assets/logo-black.svg"}
      alt=""
      style={{ opacity: dark ? 0 : 1 }}
    />
    <img
      className="brandmark__img brandmark__img--light"
      src={(window.__resources && window.__resources.logoLight) || "assets/logo-cloud-dancer.svg"}
      alt=""
      style={{ opacity: dark ? 1 : 0 }}
    />
  </span>
);

Object.assign(window, { FlatLayYoni, FlatLayDolev, FlatLayAyelet, DroneScene, BrandMark });

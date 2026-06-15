/**
 * Technical placeholder visual system.
 *
 * The scenes intentionally do not use the logo as an illustration. They reuse
 * the geometry behind the brand language — ellipses, squares, industrial rails,
 * thin grids and modular panels — so empty image slots feel coherent without
 * turning the logo into decorative artwork.
 */

type Variant =
  | "hero-aisle"
  | "print-roll"
  | "packaging-line"
  | "signage-3d"
  | "shelf-strips"
  | "lightbox"
  | "totem"
  | "rollup"
  | "checkout-divider"
  | "window-decal"
  | "aisle-comms"
  | "basket"
  | "warehouse"
  | "team";

const palettes: Record<string, string[]> = {
  blueDark: ["#07090D", "#20242C", "#0052FF"],
  greyBlue: ["#1A1D22", "#5D6672", "#0052FF"],
  lightBlue: ["#E8E8E8", "#FAFAFA", "#0052FF"],
  inkOnly: ["#0A0A0A", "#2A2A2A", "#E8E8E8"],
};

function ShapeField({ seed, color }: { seed: number; color: string }) {
  const rand = (n: number) => {
    const x = Math.sin(seed * 999 + n * 137.5) * 10000;
    return x - Math.floor(x);
  };

  const shapes = Array.from({ length: 7 }).map((_, i) => {
    const x = rand(i) * 100;
    const y = rand(i + 10) * 100;
    const w = 5 + rand(i + 20) * 18;
    const h = 2 + rand(i + 30) * 11;
    const type = i % 3;
    return { x, y, w, h, type, opacity: 0.06 + rand(i + 40) * 0.1 };
  });

  return (
    <>
      {shapes.map((s, i) =>
        s.type === 0 ? (
          <rect
            key={i}
            x={`${s.x}%`}
            y={`${s.y}%`}
            width={`${s.w}%`}
            height={`${s.h}%`}
            fill={color}
            opacity={s.opacity}
          />
        ) : s.type === 1 ? (
          <ellipse
            key={i}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            rx={`${s.w}%`}
            ry={`${s.h}%`}
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity={s.opacity * 1.8}
          />
        ) : (
          <path
            key={i}
            d={`M ${s.x * 8} ${s.y * 4.5} l ${s.w * 8} ${-s.h * 2.2} l ${s.w * 2.2} ${s.h * 2.4}`}
            fill="none"
            stroke={color}
            strokeWidth="1.4"
            opacity={s.opacity * 1.6}
          />
        ),
      )}
    </>
  );
}

function TechnicalMotif({ color, accent, seed }: { color: string; accent: string; seed: number }) {
  const offset = (seed % 5) * 26;

  return (
    <g opacity="0.9">
      <g opacity="0.35">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v-${i}`} x1={80 + i * 70} y1="0" x2={20 + i * 70} y2="450" stroke={color} strokeWidth="0.8" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={60 + i * 68} x2="800" y2={30 + i * 68} stroke={color} strokeWidth="0.8" />
        ))}
      </g>
      <ellipse cx={420 + offset} cy={220} rx="250" ry="82" fill="none" stroke={color} strokeWidth="2" opacity="0.22" transform={`rotate(-14 ${420 + offset} 220)`} />
      <ellipse cx={450 - offset} cy={245} rx="170" ry="50" fill="none" stroke={accent} strokeWidth="2" opacity="0.55" transform={`rotate(-14 ${450 - offset} 245)`} />
      <rect x={330 + offset * 0.4} y="164" width="148" height="92" fill="none" stroke={color} strokeWidth="2" opacity="0.46" />
      <rect x={510 - offset * 0.25} y="194" width="34" height="34" fill={accent} opacity="0.9" />
      <rect x={250 + offset * 0.15} y="290" width="240" height="12" fill={color} opacity="0.28" />
      <rect x={516} y="288" width="90" height="12" fill={accent} opacity="0.55" />
    </g>
  );
}

const labels: Record<Variant, string> = {
  "hero-aisle": "Corsia GDO — comunicazione coordinata",
  "print-roll": "Stampa da bobina grande formato",
  "packaging-line": "Linea di produzione e confezionamento",
  "signage-3d": "Insegna a lettere 3D fresate",
  "shelf-strips": "Profili e portaprezzi per scaffali",
  lightbox: "Light box retroilluminato",
  totem: "Totem promozionale da pavimento",
  rollup: "Roll-up espositivo",
  "checkout-divider": "Separatore per nastro cassa",
  "window-decal": "Vetrofania su misura",
  "aisle-comms": "Segnaletica e bandiere di corsia",
  basket: "Cestini spesa personalizzati",
  warehouse: "Stabilimento di produzione",
  team: "Team operativo Europromo",
};

const paletteFor: Record<Variant, keyof typeof palettes> = {
  "hero-aisle": "blueDark",
  "print-roll": "inkOnly",
  "packaging-line": "greyBlue",
  "signage-3d": "blueDark",
  "shelf-strips": "lightBlue",
  lightbox: "blueDark",
  totem: "greyBlue",
  rollup: "lightBlue",
  "checkout-divider": "greyBlue",
  "window-decal": "lightBlue",
  "aisle-comms": "blueDark",
  basket: "lightBlue",
  warehouse: "inkOnly",
  team: "greyBlue",
};

const seeds: Record<Variant, number> = {
  "hero-aisle": 1,
  "print-roll": 2,
  "packaging-line": 3,
  "signage-3d": 4,
  "shelf-strips": 5,
  lightbox: 6,
  totem: 7,
  rollup: 8,
  "checkout-divider": 9,
  "window-decal": 10,
  "aisle-comms": 11,
  basket: 12,
  warehouse: 13,
  team: 14,
};

export function PlaceholderScene({
  variant,
  className = "",
  grayscale = false,
  showLabel = true,
}: {
  variant: Variant;
  className?: string;
  grayscale?: boolean;
  showLabel?: boolean;
}) {
  const [bg, mid, accent] = palettes[paletteFor[variant]];
  const seed = seeds[variant];

  return (
    <div className={`placeholder-scene relative overflow-hidden ${className}`} style={{ backgroundColor: bg }}>
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid slice"
        className={`h-full w-full ${grayscale ? "saturate-0" : ""}`}
        aria-hidden="true"
      >
        <rect width="800" height="450" fill={bg} />
        <radialGradient id={`glow-${variant}`} cx="65%" cy="35%" r="58%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.26" />
          <stop offset="100%" stopColor={bg} stopOpacity="0" />
        </radialGradient>
        <rect width="800" height="450" fill={`url(#glow-${variant})`} />
        <ShapeField seed={seed} color={mid} />
        <TechnicalMotif seed={seed} color={mid} accent={accent} />
        <line x1="0" y1={450 - seed * 18} x2="800" y2={450 - seed * 18 - 120} stroke={accent} strokeWidth="2" opacity="0.45" />
      </svg>
      {showLabel && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-white/10 bg-black/20 p-4 text-[10px] uppercase tracking-[0.18em] backdrop-blur-md">
          <span style={{ color: "#FAFAFA", opacity: 0.62 }}>{labels[variant]}</span>
          <span style={{ color: "#0052FF" }} className="tabular">WIREFRAME</span>
        </div>
      )}
    </div>
  );
}

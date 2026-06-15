interface LogoMarkProps {
  className?: string;
  squareColor?: string;
  strokeColor?: string;
}

/**
 * The Europromo mark: two open ellipse arcs forming an eye/lens shape,
 * with a solid blue square at the center.
 * Reused as: loader, footer ornament, section dividers, hover icons.
 */
export function LogoMark({
  className = "w-10 h-auto",
  squareColor = "#0052FF",
  strokeColor = "currentColor",
}: LogoMarkProps) {
  return (
    <svg viewBox="0 0 200 130" className={className} aria-hidden="true">
      <path
        d="M59 113C14 103-4 76 9 49 24 18 70 3 112 8L102 32C70 32 40 44 31 63 23 81 36 95 66 101Z M85 113L95 91C132 91 165 70 170 48 176 28 161 15 132 10L141 1C184 6 204 33 191 62 174 98 126 115 85 113Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth="8"
      />
      <rect x="93" y="51" width="28" height="28" fill={squareColor} />
    </svg>
  );
}

export function LogoFull({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-full w-auto" />
      <span className="font-display text-lg font-bold tracking-tight">EUROPROMO</span>
    </div>
  );
}

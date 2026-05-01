type Props = { className?: string; size?: number };

// Monoline "RJ" monogram in the spirit of the JK reference.
// R on the left (stem + bowl + leg), J on the right (cap + stem + hook),
// the J's hook curves back across and crosses the R's leg — interlocked.
// No badge background; pure mark in currentColor so it inherits theme.
export default function Logo({ className = "", size = 32 }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      role="img"
      aria-label="RJ"
      className={`text-fg ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {/* R — stem */}
      <path d="M 9 10 V 28" />
      {/* R — top bar + bowl + bowl-bottom back to stem */}
      <path d="M 9 10 H 17 A 4.5 4.5 0 0 1 17 19 H 9" />
      {/* R — diagonal leg */}
      <path d="M 13 19 L 21 28" />

      {/* J — short top cap */}
      <path d="M 22 10 H 30" />
      {/* J — stem dropping into a hook that curves back left under the R */}
      <path d="M 26 10 V 22 A 5 5 0 0 1 16 22" />
    </svg>
  );
}

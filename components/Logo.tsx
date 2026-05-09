import Image from "next/image";

type Props = { className?: string; size?: number };

// RJ monogram — image-based logo with theme-aware adaptation.
// The PNG is rendered black-on-transparent; in dark mode we invert it
// so it appears white on the dark background. Light mode keeps it
// black as designed.
export default function Logo({ className = "", size = 32 }: Props) {
  return (
    <span
      className={`relative inline-block logo-mark ${className}`}
      style={{ width: size, height: size }}
      aria-label="RJ"
      role="img"
    >
      <Image
        src="/logo.png"
        alt="RJ"
        fill
        priority
        sizes={`${size}px`}
        className="object-contain"
      />
    </span>
  );
}

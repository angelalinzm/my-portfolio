"use client";

// Regular hexagon points centered at (14,14), r=11
// Angles: 0°, 60°, 120°, 180°, 240°, 300°
const HEX_POINTS = "25,14 19.5,23.5 8.5,23.5 3,14 8.5,4.5 19.5,4.5";

interface CsImagePlaceholderProps {
  label?: string;
  variant?: "tall" | "short";
  hexColor?: string;
  className?: string;
}

export default function CsImagePlaceholder({
  label = "Add your Figma export here",
  variant = "tall",
  hexColor = "#4f46e5",
  className = "",
}: CsImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full flex items-center justify-center ${className}`}
      style={{
        background: "#f7f7f5",
        borderRadius: 16,
        minHeight: variant === "tall" ? 200 : 130,
      }}
    >
      {/* Floating spinning hexagon top-right */}
      <div className="absolute" style={{ top: -12, right: -12, zIndex: 1 }}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          style={{ animation: "cs-spin 9s linear infinite" }}
        >
          <polygon points={HEX_POINTS} stroke={hexColor} strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <p
        className="text-xs uppercase tracking-widest text-center px-8"
        style={{ color: "#bbb", letterSpacing: "1.5px", fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

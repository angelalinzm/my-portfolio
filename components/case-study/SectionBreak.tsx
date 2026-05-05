"use client";

type ShapeType = "star" | "diamond" | "triangle" | "pentagon";

const SHAPES: Record<ShapeType, string> = {
  star: "M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z",
  diamond: "M12 2 L22 12 L12 22 L2 12 Z",
  triangle: "M12 3 L21 20 L3 20 Z",
  pentagon: "M12 2 L21.5 8.9 L17.9 20.1 L6.1 20.1 L2.5 8.9 Z",
};

interface SectionBreakProps {
  eyebrow: string;
  title: string;
  emphasisWord: string;
  emphasisColor?: string;
  subtitle?: string;
  shape?: ShapeType;
  shapeColor?: string;
  spinDuration?: number;
  dotColor?: string;
}

export default function SectionBreak({
  eyebrow,
  title,
  emphasisWord,
  emphasisColor,
  subtitle,
  shape = "star",
  shapeColor = "#0284c7",
  spinDuration = 8,
  dotColor = "#16a34a",
}: SectionBreakProps) {
  const parts = title.split(emphasisWord);
  const emphColor = emphasisColor ?? shapeColor;

  return (
    <div
      className="w-full text-left"
      style={{ padding: "80px 48px", borderBottom: "1px solid #f8f8f8" }}
    >
      {/* Eyebrow */}
      <p
        className="text-xs uppercase mb-5"
        style={{
          letterSpacing: "2px",
          color: "#bbb",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {eyebrow}
      </p>

      {/* Title */}
      <h2
        className="font-bold"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 5vw, 42px)",
          letterSpacing: "-1.5px",
          color: "#0d0d0d",
          lineHeight: 1.15,
        }}
      >
        {parts[0]}
        <em style={{ color: emphColor, fontStyle: "normal" }}>{emphasisWord}</em>
        {parts[1]}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className="mt-3 text-sm"
          style={{ color: "#bbb", fontFamily: "'DM Sans', sans-serif" }}
        >
          {subtitle}
        </p>
      )}

      {/* Green dot + spinning shape */}
      <div className="flex items-center justify-start gap-2 mt-7">
        <div
          className="rounded-full"
          style={{ width: 7, height: 7, background: dotColor, flexShrink: 0 }}
        />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          style={{ animation: `cs-spin ${spinDuration}s linear infinite` }}
          aria-hidden="true"
        >
          <path
            d={SHAPES[shape]}
            stroke={shapeColor}
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

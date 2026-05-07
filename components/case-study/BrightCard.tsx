"use client";

export type BrightCardColor = "green" | "blue" | "amber" | "violet" | "pink" | "teal";
export type BrightCardShape = "hexagon" | "diamond" | "triangle" | "pentagon" | "star";
export type BrightCardSpin = "spin" | "spinr";

export const BRIGHT_COLORS: Record<BrightCardColor, string> = {
  green:  "#4ade80",
  blue:   "#7dd3fc",
  amber:  "#fdba74",
  violet: "#c4b5fd",
  pink:   "#f9a8d4",
  teal:   "#5eead4",
};

// All shapes share a 120×120 viewBox
export const BRIGHT_SHAPES: Record<BrightCardShape, string> = {
  hexagon: "60,3 115,32 115,88 60,117 5,88 5,32",
  diamond: "60,3 117,60 60,117 3,60",
  triangle: "60,3 117,117 3,117",
  pentagon: "60,2 116,44 94,112 26,112 4,44",
  star: "60,10 75,41 110,46 85,71 91,105 60,89 29,105 35,71 10,46 45,41",
};

interface BrightCardProps {
  color: BrightCardColor;
  /** Override background with any CSS color (bypasses the BRIGHT_COLORS map) */
  bg?: string;
  tag?: string;
  title?: string;
  /** Render the title in italic */
  titleItalic?: boolean;
  /** Italic + dark emphasis word inside the title */
  titleEmphasis?: string;
  body?: string;
  shape?: BrightCardShape;
  spinDir?: BrightCardSpin;
  spinDuration?: number;
  /**
   * "small" → tighter padding, 80px watermark, 16px radius
   * Used for future-state cards and other compact contexts.
   */
  size?: "default" | "small";
  /**
   * "number" layout: renders a flex-row with a large Playfair number
   * on the left and the body text on the right.
   */
  number?: string;
  /** Slot for fully custom body content (overrides `body` prop) */
  children?: React.ReactNode;
  /** Hide the spinning watermark shape */
  hideShape?: boolean;
}

export default function BrightCard({
  color,
  bg,
  tag,
  title,
  titleItalic = false,
  titleEmphasis,
  body,
  shape = "hexagon",
  spinDir = "spin",
  spinDuration = 18,
  size = "default",
  number,
  children,
  hideShape = false,
}: BrightCardProps) {
  const isSmall = size === "small";
  const svgSize   = isSmall ? 80  : 120;
  const svgOffset = isSmall ? -12 : -20;

  return (
    <div
      style={{
        background: bg ?? BRIGHT_COLORS[color],
        borderRadius: isSmall ? 16 : 20,
        padding: isSmall ? "18px 22px" : "28px 32px",
        position: "relative",
        overflow: "hidden",
        flex: 1,
      }}
    >
      {/* ── Spinning watermark ── */}
      {!hideShape && <div
        style={{
          position: "absolute",
          bottom: svgOffset,
          right: svgOffset,
          opacity: isSmall ? 0.12 : 0.15,
          animation: `${spinDir} ${spinDuration}s linear infinite`,
          transformOrigin: "center",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden="true"
        >
          <polygon
            points={BRIGHT_SHAPES[shape]}
            stroke="black"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>}

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {tag && (
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "rgba(0,0,0,0.45)",
              marginBottom: title || number ? 8 : 0,
            }}
          >
            {tag}
          </p>
        )}

        {/* Number layout (future-state style) */}
        {number ? (
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <span
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "rgba(0,0,0,0.2)",
                flexShrink: 0,
                minWidth: 28,
                lineHeight: 1.2,
              }}
            >
              {number}
            </span>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "rgba(0,0,0,0.75)",
                lineHeight: 1.6,
              }}
            >
              {body}
            </p>
          </div>
        ) : (
          <>
            {title && (
              <h3
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: isSmall ? 18 : 23,
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                  color: "#0d0d0d",
                  fontStyle: "normal",
                  marginBottom: body || children ? 10 : 0,
                  lineHeight: 1.25,
                }}
              >
                {titleEmphasis ? (
                  <>
                    {title.split(titleEmphasis)[0]}
                    <em style={{ fontStyle: "normal" }}>{titleEmphasis}</em>
                    {title.split(titleEmphasis)[1]}
                  </>
                ) : title}
              </h3>
            )}

            {children ?? (body && (
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 300,
                  color: "rgba(0,0,0,0.6)",
                  lineHeight: 1.75,
                }}
              >
                {body}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

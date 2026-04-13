"use client";

interface PullQuoteProps {
  quote: string;
  emphasisWord?: string;
  source?: string;
  accentColor?: string;
}

export default function PullQuote({
  quote,
  emphasisWord,
  source,
  accentColor = "#0284c7",
}: PullQuoteProps) {
  const parts = emphasisWord ? quote.split(emphasisWord) : null;

  return (
    <div
      className="relative overflow-hidden my-8"
      style={{ background: "#f7f7f5", borderRadius: 20, padding: "32px 36px 28px" }}
    >
      {/* Giant opening quote */}
      <span
        className="absolute select-none pointer-events-none"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 120,
          color: "#e8e8e8",
          top: -10,
          left: 20,
          lineHeight: 1,
          fontStyle: "italic",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <blockquote
        className="relative z-10"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 24,
          fontStyle: "italic",
          color: "#0d0d0d",
          lineHeight: 1.45,
        }}
      >
        {parts && emphasisWord ? (
          <>
            {parts[0]}
            <em style={{ color: accentColor }}>{emphasisWord}</em>
            {parts[1]}
          </>
        ) : (
          quote
        )}
      </blockquote>

      {source && (
        <p
          className="mt-4 flex items-center gap-2"
          style={{
            color: "#bbb",
            fontSize: 12,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span
            className="flex-shrink-0 inline-block"
            style={{ width: 20, height: 1, background: "#ddd" }}
          />
          {source}
        </p>
      )}
    </div>
  );
}

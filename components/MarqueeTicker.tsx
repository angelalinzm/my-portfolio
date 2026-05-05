"use client";

const items = [
  "User research",
  "Figma",
  "Information architecture",
  "AI product design",
  "Design systems",
  "Prototyping",
  "Brand identity",
  "UX strategy",
];

export default function MarqueeTicker() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden border-t border-b border-black/10 py-3"
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <div className="flex marquee-track whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-3 text-xs font-medium uppercase tracking-widest text-brand-text/50"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#16a34a", opacity: 0.7 }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

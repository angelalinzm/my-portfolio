"use client";

interface DotLabelProps {
  children: React.ReactNode;
  color?: string;
}

export default function DotLabel({ children, color = "#0284c7" }: DotLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div
        className="rounded-full flex-shrink-0"
        style={{ width: 8, height: 8, background: color }}
      />
      <span
        className="text-xs font-medium uppercase"
        style={{
          color,
          letterSpacing: "2px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {children}
      </span>
    </div>
  );
}

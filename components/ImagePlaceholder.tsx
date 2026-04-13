interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  label = "Add your Figma export here",
  className = "",
  aspectRatio = "16/9",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/15 bg-white/50 ${className}`}
      style={{ aspectRatio }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="mb-3 opacity-30"
      >
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="#0d0d0d" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.5" stroke="#0d0d0d" strokeWidth="1.5" />
        <path
          d="M4 22 L10 16 L15 20 L20 14 L28 22"
          stroke="#0d0d0d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p
        className="text-sm text-brand-text/40 font-medium text-center px-4"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

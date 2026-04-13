import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-black/10 px-6 md:px-10 py-8 mt-16"
      style={{ background: "#f0f0ed", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-xl italic font-bold text-brand-text"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          al.
        </Link>

        <div className="flex items-center gap-6 text-sm text-brand-text/50">
          <Link href="/work" className="hover:text-brand-text transition-colors">Work</Link>
          <Link href="/about" className="hover:text-brand-text transition-colors">About</Link>
          <a
            href="https://linkedin.com/in/angelalinzm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:anglin1029@gmail.com"
            className="hover:text-brand-text transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-brand-text/40">© {year} Angela Lin</p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  function handleWorkClick(e: React.MouseEvent) {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#work");
    }
  }

  const isWorkActive =
    pathname === "/work" ||
    pathname?.startsWith("/work/") ||
    isHome; // treat home as "work active" since it contains the work section

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16"
      style={{ background: "rgba(240,240,237,0.85)", backdropFilter: "blur(12px)" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-display text-2xl font-bold text-brand-text select-none"
        style={{ fontFamily: "'Urbanist', sans-serif", letterSpacing: "-0.01em" }}
      >
        al.
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {/* Work — scroll or navigate */}
        <a
          href={isHome ? "#work" : "/#work"}
          onClick={handleWorkClick}
          className={`text-sm font-medium transition-colors cursor-pointer ${
            isWorkActive
              ? ""
              : "text-brand-text/70 hover:text-brand-text"
          }`}
          style={{ fontFamily: "'DM Sans', sans-serif", color: isWorkActive ? "#e05a47" : undefined }}
        >
          Work
        </a>

        {/* About */}
        <Link
          href="/about"
          className={`text-sm font-medium transition-colors ${
            pathname === "/about"
              ? "text-brand-green"
              : "text-brand-text/70 hover:text-brand-text"
          }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          About
        </Link>
      </div>

      {/* CTA */}
      <div className="hidden md:flex">
        <a
          href="mailto:anglin1029@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          style={{ fontFamily: "'DM Sans', sans-serif", background: "#0d0d0d" }}
        >
          Let&apos;s talk
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-brand-text transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-brand-text transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-brand-text transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 bg-brand-page-bg border-t border-black/10 px-6 py-6 flex flex-col gap-4 md:hidden"
        >
          <a
            href={isHome ? "#work" : "/#work"}
            onClick={handleWorkClick}
            className="text-lg font-medium cursor-pointer"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#e05a47" }}
          >
            Work
          </a>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-brand-text"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            About
          </Link>
          <a
            href="mailto:anglin1029@gmail.com"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium text-white mt-2"
            style={{ background: "#0d0d0d", fontFamily: "'DM Sans', sans-serif" }}
          >
            Let&apos;s talk
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

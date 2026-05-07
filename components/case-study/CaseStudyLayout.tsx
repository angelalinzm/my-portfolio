"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Meta {
  role: string;
  timeline: string;
  team: string;
  tools: string;
}

interface NavItem {
  label: string;
  href: string;
}

interface CaseStudyLayoutProps {
  backHref?: string;
  eyebrow: string;
  accentColor?: string;
  headline: string;
  headlineEmphasis?: string;
  subtitle: string;
  heroImageLabel?: string;
  heroImageSrc?: string;
  /** Absolutely-positioned shape layer behind the hero */
  heroShapes?: React.ReactNode;
  meta: Meta;
  prev?: NavItem;
  next?: NavItem;
  children: React.ReactNode;
}

function renderHeadline(
  headline: string,
  emphasis: string | undefined,
  color: string
) {
  if (!emphasis) return headline;
  const parts = headline.split(emphasis);
  return (
    <>
      {parts[0]}
      <em style={{ color, fontStyle: "normal" }}>{emphasis}</em>
      {parts[1]}
    </>
  );
}

export default function CaseStudyLayout({
  backHref = "/work",
  eyebrow,
  accentColor = "#0284c7",
  headline,
  headlineEmphasis,
  subtitle,
  heroImageLabel = "Add your Figma screen here",
  heroImageSrc,
  heroShapes,
  meta,
  prev,
  next,
  children,
}: CaseStudyLayoutProps) {
  const metaItems = [
    { label: "Role", value: meta.role },
    { label: "Timeline", value: meta.timeline },
    { label: "Team", value: meta.team },
    { label: "Tools", value: meta.tools },
  ];

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: 100, paddingBottom: 64 }}
      >
        {/* Shape layer */}
        {heroShapes && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
            aria-hidden="true"
          >
            {heroShapes}
          </div>
        )}

        <div
          className="relative mx-auto px-8 md:px-12"
          style={{ maxWidth: 1200, zIndex: 2 }}
        >
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <Link
              href={backHref}
              className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-brand-text"
              style={{ color: "#bbb", fontFamily: "'DM Sans', sans-serif" }}
            >
              ← Back to work
            </Link>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="mt-6 mb-7 text-xs font-semibold uppercase"
            style={{
              letterSpacing: "2.5px",
              color: accentColor,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {eyebrow}
          </motion.p>

          {/* Two-column grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-start"
            style={{ gap: 48 }}
          >
            {/* Left: Headline + Subtitle */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease, delay: 0.18 }}
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: "clamp(44px, 6vw, 68px)",
                  fontWeight: 700,
                  letterSpacing: "-3px",
                  lineHeight: 1.05,
                  color: "#0d0d0d",
                }}
              >
                {renderHeadline(headline, headlineEmphasis, accentColor)}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.3 }}
                className="mt-5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: 18,
                  color: "#888",
                  lineHeight: 1.65,
                  maxWidth: 440,
                }}
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Right: Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="relative w-full overflow-hidden"
              style={{ borderRadius: 20, height: 260, background: "#f0f9ff" }}
            >
              {heroImageSrc ? (
                <Image
                  src={heroImageSrc}
                  alt={heroImageLabel}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <p
                    className="text-xs uppercase tracking-widest text-center px-8"
                    style={{ color: "#bbb", letterSpacing: "2px", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {heroImageLabel}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Meta row ── */}
      <div
        className="w-full"
        style={{ borderTop: "1px solid #f0f0f0" }}
      >
        <div
          className="mx-auto grid grid-cols-2 md:grid-cols-4"
          style={{ maxWidth: 1200 }}
        >
          {metaItems.map((item, i) => (
            <div
              key={item.label}
              className="px-8 md:px-12 py-6"
              style={{
                borderRight: i < metaItems.length - 1 ? "1px solid #f0f0f0" : "none",
              }}
            >
              <p
                className="text-xs font-semibold uppercase mb-1.5"
                style={{
                  letterSpacing: "1.5px",
                  color: "#bbb",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {item.label}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "#0d0d0d", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {children}
      </div>

      {/* ── Bottom navigation ── */}
      <div
        className="w-full"
        style={{ borderTop: "1px solid #f0f0f0", padding: "32px 48px" }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: 1200 }}
        >
          {/* Previous */}
          {prev ? (
            <Link href={prev.href} className="group flex flex-col gap-0.5">
              <span
                className="text-xs uppercase"
                style={{ letterSpacing: "2px", color: "#bbb", fontFamily: "'DM Sans', sans-serif" }}
              >
                ← Previous
              </span>
              <span
                className="text-sm font-semibold text-brand-text group-hover:text-brand-green transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {prev.label}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {next && (
            <Link
              href={next.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#0d0d0d", fontFamily: "'DM Sans', sans-serif" }}
            >
              Next: {next.label} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

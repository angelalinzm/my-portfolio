"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HandDrawnShapes from "@/components/HandDrawnShapes";
import MarqueeTicker from "@/components/MarqueeTicker";
import WorkSection from "@/components/WorkSection";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function HomePage() {
  return (
    <div className="relative flex flex-col" style={{ background: "#f0f0ed" }}>
      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-10 min-h-screen overflow-hidden">
        <HandDrawnShapes />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-widest text-brand-text/50 mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Product Designer · Boston, MA
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-brand-text"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
          >
            Designing human-first experiences
            <br />
            for the{" "}
            <em style={{ color: "#16a34a", fontStyle: "normal" }}>new world.</em>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="text-lg text-brand-text/60 max-w-xl leading-relaxed mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            I bridge business, design, and research to craft human-centered
            products — from 0→1 AI platforms to scalable design systems.
          </motion.p>

          {/* CTAs — scroll to #work on the same page */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "#0d0d0d", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              View my work
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-brand-text transition-all hover:bg-black/5 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                border: "1.5px solid rgba(13,13,13,0.2)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              See case studies →
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-8 text-xs text-brand-text/35 font-medium tracking-wide"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          scroll to explore ↓
        </motion.p>
      </section>

      {/* ── Marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <MarqueeTicker />
      </motion.div>

      {/* ── Work section ── */}
      <WorkSection id="work" />

      {/* ── About teaser ── */}
      <section className="px-6 md:px-10 py-20 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hi, I&apos;m{" "}
              <em style={{ color: "#16a34a", fontStyle: "normal" }}>Angela.</em>
            </h2>
            <p
              className="text-lg text-brand-text/60 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              I&apos;m a product designer with 4+ years of experience designing
              AI-powered platforms, health tech products, and fintech tools.
              I care deeply about the full picture — business goals, user
              needs, and the craft that bridges them.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-text/70 hover:text-brand-text transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              More about me →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "4+", label: "Years of experience" },
              { number: "3", label: "Industries" },
              { number: "0→1", label: "AI platforms launched" },
              { number: "60+", label: "Components shipped" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-5"
                style={{ background: "#fff", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
              >
                <p
                  className="text-3xl font-bold text-brand-text mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-xs font-medium text-brand-text/50"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

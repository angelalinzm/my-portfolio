"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import WorkSection from "@/components/WorkSection";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const CYCLING_PHRASES = [
  "eating something good",
  "bridging the gap between business, AI and design",
  "solving something puzzling",
  "scaling a design system",
  "touching grass",
  "vibe coding an idea",
  "baking sourdough",
  "turning complex systems into simple experiences",
];

const HEADLINE_LINES = [
  { text: "Designing", color: "#0d0d0d", paddingLeft: "8%" },
  { text: "human-first experiences", color: "#E05A48", paddingLeft: "0%" },
  { text: "for the new world.", color: "#0d0d0d", paddingLeft: "22%" },
];

const PILLS = [
  { text: "Hi! I'm Angela", top: "18%", left: "12%", delay: 0.5, dur: 4, amp: 8, bobDelay: "0s" },
  { text: "Product Designer", top: "30%", right: "12%", delay: 0.6, dur: 5, amp: 6, bobDelay: "0.8s" },
  { text: "Boston, MA", bottom: "24%", left: "6%", delay: 0.7, dur: 4.5, amp: 7, bobDelay: "1.5s" },
];

function CurrentlyLine() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const phrase = CYCLING_PHRASES[phraseIndex];

    if (phase === "typing") {
      if (displayed.length < phrase.length) {
        const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), 2200);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setPhraseIndex((i) => (i + 1) % CYCLING_PHRASES.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, phraseIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      style={{
        position: "absolute",
        bottom: 80,
        right: 40,
        maxWidth: "calc(100vw - 80px)",
        display: "flex",
        alignItems: "center",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: 22,
        color: "#888",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{
          fontSize: 42,
          lineHeight: 1,
          color: "#16a34a",
        }}>·</span>
        <span>currently:&nbsp;&nbsp;</span>
      </span>
      <span style={{ display: "inline-flex", alignItems: "center", width: "clamp(200px, 40vw, 560px)" }}>
        {displayed}
        <span style={{
          display: "inline-block",
          width: 2,
          height: "1em",
          background: "#888",
          marginLeft: 2,
          animationName: "cursorBlink",
          animationDuration: "0.8s",
          animationTimingFunction: "step-end",
          animationIterationCount: "infinite",
        }} />
      </span>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="relative flex flex-col" style={{ background: "#f0f0ed" }}>
      {/* ── Hero ── */}
      <section
        style={{
          width: "100%",
          height: "100vh",
          background: "#f0f0ed",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ── Floating pills ── */}
        {PILLS.map((pill, i) => (
          <motion.div
            key={pill.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: pill.delay, duration: 0.5, ease }}
            style={{
              position: "absolute",
              top: pill.top,
              left: (pill as { left?: string }).left,
              right: (pill as { right?: string }).right,
              bottom: (pill as { bottom?: string }).bottom,
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 500,
              fontSize: 20,
              color: "#E8690E",
              border: "1.5px solid #E8690E",
              borderRadius: 999,
              padding: "16px 32px",
              background: "transparent",
              whiteSpace: "nowrap",
              animationName: "heroBob",
              animationDuration: `${pill.dur}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationDelay: pill.bobDelay,
            }}
          >
            {pill.text}
          </motion.div>
        ))}

        {/* ── Hand illustration ── */}
        <motion.img
          src="/images/hand.png"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease }}
          className="hero-hand"
          style={{
            position: "absolute",
            bottom: "35%",
            left: -70,
            width: 420,
            pointerEvents: "none",
          }}
        />





        {/* ── Headline ── */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <h1 style={{ margin: 0 }}>
            <div style={{ display: "inline-flex", flexDirection: "column", gap: 0, textAlign: "left" }}>
              {HEADLINE_LINES.map(({ text, color, paddingLeft }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease }}
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(52px, 7vw, 96px)",
                    lineHeight: 1.15,
                    letterSpacing: "-2px",
                    whiteSpace: "nowrap",
                    color,
                    paddingLeft,
                    position: i === 0 || i === 2 ? "relative" : undefined,
                  }}
                >
                  {text}
                  {i === 2 && (
                    <img
                      src="/images/rocket.svg"
                      alt=""
                      className="hero-rocket"
                      style={{
                        position: "absolute",
                        bottom: "-18%",
                        right: "-45px",
                        width: 120,
                        pointerEvents: "none",
                        animationName: "rocketAppear",
                        animationDuration: "0.9s",
                        animationTimingFunction: "ease-out",
                        animationFillMode: "both",
                        animationDelay: "0.5s",
                      }}
                    />
                  )}
                  {i === 0 && (
                    <motion.img
                      src="/images/smiski.png"
                      alt=""
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5, ease }}
                      className="hero-smiski"
                      style={{
                        position: "absolute",
                        bottom: "65%",
                        right: "50%",
                        width: 140,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </h1>
        </div>

        {/* ── Currently line (absolute bottom center) ── */}
        <CurrentlyLine />

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

      {/* ── Work section ── */}
      <WorkSection id="work" />

      {/* ── About teaser ── */}
      <section className="px-6 md:px-10 py-20 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Hi, I&apos;m{" "}
              <em style={{ color: "#e05a47", fontStyle: "normal" }}>Angela.</em>
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
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
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

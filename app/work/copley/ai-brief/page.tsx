"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import SectionBreak from "@/components/case-study/SectionBreak";
import DotLabel from "@/components/case-study/DotLabel";
import BrightCard from "@/components/case-study/BrightCard";

// ─── Easing ────────────────────────────────────────────────────────────────
const ease = [0.25, 0.46, 0.45, 0.94] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.6, ease, delay },
});

// ─── Hero background shapes ────────────────────────────────────────────────
const FLOWER_PATH =
  "M55 55 C61 43,75 41,79 53 C85 43,99 47,99 61 C111 57,119 71,111 79 C121 85,119 101,107 103 C109 117,97 125,87 119 C83 131,69 131,65 119 C53 123,43 113,47 101 C35 97,35 81,47 77 C39 67,43 51,55 55Z";
const HEX_PTS = "80,45 62.5,75.3 27.5,75.3 10,45 27.5,14.7 62.5,14.7";

function HeroShapes() {
  return (
    <>
      <motion.div
        className="absolute"
        style={{ top: 60, left: 24 }}
        animate={{ rotate: [0, 1.5, -1, 0.8, -1.5, 0], y: [0, -5, 3, -4, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      >
        <svg width="110" height="115" viewBox="25 30 110 115" fill="none">
          <motion.path
            d={FLOWER_PATH}
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.22 }}
            transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </svg>
      </motion.div>

      <div className="absolute" style={{ top: 16, right: 48 }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle
            cx="70" cy="70" r="60"
            stroke="#fb923c" strokeWidth="2" strokeDasharray="10 7"
            fill="none" opacity={0.18}
            style={{ animation: "cs-spin 24s linear infinite", transformOrigin: "70px 70px" }}
          />
        </svg>
      </div>

      <motion.div
        className="absolute"
        style={{ bottom: 32, right: 40 }}
        animate={{ rotate: [0, -1.5, 1, -1, 1.5, 0], y: [0, 4, -3, 2, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <motion.polygon
            points={HEX_PTS}
            stroke="#4f46e5" strokeWidth="2.5" fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ bottom: 48, left: 36 }}
        animate={{ rotate: [0, 1, -1.5, 0.8, -1, 0], y: [0, -4, 3, -2, 1, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      >
        <svg width="75" height="70" viewBox="0 0 75 70" fill="none">
          <motion.path
            d="M37 5 L68 62 L6 62 Z"
            stroke="#fb923c" strokeWidth="2.2" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.18 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          />
        </svg>
      </motion.div>

      <div className="absolute rounded-full" style={{ top: 90, left: "50%", width: 4, height: 4, background: "#fb923c", opacity: 0.5 }} />
      <div className="absolute rounded-full" style={{ top: "40%", left: 80, width: 3, height: 3, background: "#16a34a", opacity: 0.45 }} />
      <div className="absolute rounded-full" style={{ top: "35%", right: 60, width: 3.5, height: 3.5, background: "#4f46e5", opacity: 0.45 }} />
    </>
  );
}

// ─── Section wrapper ────────────────────────────────────────────────────────
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div {...fadeUp()} className={`px-8 md:px-12 py-14 ${className}`}>
      {children}
    </motion.div>
  );
}

// ─── Two-column row ─────────────────────────────────────────────────────────
function TwoColRow({
  label,
  children,
  isLast = false,
  paddingY = "40px",
}: {
  label: string;
  children: React.ReactNode;
  isLast?: boolean;
  paddingY?: string;
}) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[220px_1fr]"
      style={{
        gap: "40px 72px",
        padding: `${paddingY} 0`,
        borderBottom: "none",
      }}
    >
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 18, color: "#0d0d0d", paddingTop: 2 }}>
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

// ─── Prose ─────────────────────────────────────────────────────────────────
const prose: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: 18,
  color: "#0d0d0d",
  lineHeight: 1.85,
};

// ─── Custom-height image placeholder ───────────────────────────────────────
const HEX_POINTS = "25,14 19.5,23.5 8.5,23.5 3,14 8.5,4.5 19.5,4.5";

function ImgBox({ label, hexColor, height }: { label: string; hexColor: string; height: number }) {
  return (
    <div
      style={{
        minHeight: height,
        background: "#f7f7f5",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="absolute" style={{ top: -12, right: -12, zIndex: 1 }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ animation: "cs-spin 9s linear infinite" }}>
          <polygon points={HEX_POINTS} stroke={hexColor} strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <p
        className="text-xs uppercase tracking-widest text-center px-8"
        style={{ color: "#bbb", letterSpacing: "1.5px", fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

// ─── Auto-advancing step image viewer ──────────────────────────────────────
const STEPS = ["step-1", "step-2", "step-3", "step-4", "step-5", "step-6"];

function AutoStepper() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full">
      {/* Image */}
      <div className="relative w-full" style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
        {/* Ghost image to hold layout height */}
        <img
          src={`/images/copley/${STEPS[current]}.png`}
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "auto", display: "block", visibility: "hidden" }}
        />
        <AnimatePresence>
          <motion.img
            key={current}
            src={`/images/copley/${STEPS[current]}.png`}
            alt={`Step ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </AnimatePresence>
      </div>

      {/* Dot indicators + step label */}
      <div className="flex items-center justify-between mt-4">
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 400, color: "#aaa" }}>
          Step {current + 1} of {STEPS.length}
        </p>
        <div className="flex items-center gap-2">
          {STEPS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 100,
                background: i === current ? "#4f46e5" : "#ddd",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: "#f0f0ed", borderRadius: 2, marginTop: 10 }}>
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          style={{ height: "100%", background: "#4f46e5", borderRadius: 2 }}
        />
      </div>
    </div>
  );
}

// ─── Diamond separator ──────────────────────────────────────────────────────
function Diamond() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <polygon points="4,0 8,4 4,8 0,4" stroke="#ddd" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function AiBriefPage() {
  return (
    <CaseStudyLayout
      backHref="/work"
      eyebrow="Case Study · Copley · 2024–2025"
      accentColor="#4f46e5"
      headline="Manual to agent: Designing the brief that designs itself."
      headlineEmphasis="designs itself."
      subtitle="Three generations of a brief flow. And the insight that users weren't filling out a form — they were trying to have a conversation."
      heroImageLabel="Brief Wizard — Gen 3 agent"
      heroImageSrc="/images/copley/agent.png"

      meta={{
        role: "Product Designer",
        timeline: "2025–2026",
        team: "Angela Lin · Mike Torra (CTO) · David Henriquez (CEO) · Kevin McNerney (Principal SWE) · Maddie Daly (Staff SWE)",
        tools: "Figma",
      }}
      prev={{ label: "Marketing Website", href: "/work/pasito/marketing-website" }}
      next={{ label: "AI Onboarding", href: "/work/copley/ai-onboarding" }}
    >

      {/* ══ OVERVIEW ═════════════════════════════════════════════════════ */}
      <Section className="!pt-16">
        <TwoColRow label="Overview" isLast>
          <p style={prose}>
            Copley is an AI-native marketing platform that helps brands create, test, and optimize ad campaigns at scale. As the sole product designer, I owned the end-to-end design of the Brief Wizard — the core flow where clients translate creative intent into AI-generated ad campaigns. Over the course of a year, I took it through three generations, moving from a rigid structured form to a fully conversational AI agent.
          </p>
        </TwoColRow>
      </Section>

      {/* ══ THE PROBLEM ══════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The problem"
        title="Ad creation was manual, linear, and started from zero. How do we make it iterative, intelligent, and agent-driven?"
        emphasisWord="How do we make it iterative, intelligent, and agent-driven?"
        emphasisColor="#0284c7"
        shape="star"
        shapeColor="#0284c7"
        spinDuration={8}
        dotColor="#0284c7"
      />

      <Section>
        <TwoColRow label="The Problem" isLast>
          <p style={prose}>
            Users weren&apos;t navigating the wizard the way it was designed. They were skipping fields, going back and forth, and treating the one free-text field as a chat box. They&apos;d type, generate, review, retype. They had turned a brief into a conversation. My job was to make the product catch up.
          </p>
        </TwoColRow>
      </Section>

      {/* ══ GEN 1 ════════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Gen 1 — Mid 2025"
        title="Structure over expression."
        emphasisWord="expression."
        emphasisColor="#fb923c"
        shape="diamond"
        shapeColor="#fb923c"
        spinDuration={12}
        dotColor="#fb923c"
      />

      <Section>
        <TwoColRow label="Gen 1 — Brief Form" isLast>
          <p style={prose} className="mb-8">
            The original brief was a single long-form page — source content, a creativity slider (Basic → Wild), output settings, variant count. Everything visible at once. The AI worked entirely in the background; users made selections, hit generate, and received output. No freeform input. No back-and-forth. No indication the AI had interpreted anything. It treated ad creation like a form. 
          </p>
          <div className="overflow-hidden" style={{ borderRadius: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/copley/gen-1.png" alt="Gen 1 brief form" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </TwoColRow>
      </Section>

      {/* ══ GEN 2 ════════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Gen 2 — October 2025"
        title="Adding a voice — but in the wrong place."
        emphasisWord="wrong place."
        emphasisColor="#16a34a"
        shape="triangle"
        shapeColor="#16a34a"
        spinDuration={10}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="Gen 2 — 6-Step Wizard" isLast>
          <p style={prose} className="mb-5">
            The second generation broke the single page into a 6-step wizard: Ad Type → Ad Source Content → Ad Source → Inspiration → Traits → Creative Direction → Variants → Review. The most significant addition was Step 5: a freeform Ad Concept field where users could describe the brief in their own words, paired with their Brand Kit.
          </p>
          <p style={prose}>
            But users immediately routed to that one field — rushing through steps 1–5 to get there, then iterating in the prompt box, completely bypassing the structured inputs. The wizard was 6 steps. The real interaction was happening in one box. When a system provides both structured and free-text input, users gravitate toward whichever feels most expressive.
          </p>
        </TwoColRow>

        <TwoColRow label="" isLast paddingY="20px">
          <BrightCard
            color="green"
            bg="#f0fdf4"
            tag=""
            title="Users weren't filling out a brief. They were prompting."
            titleEmphasis="prompting."
            shape="hexagon"
            spinDir="spin"
            spinDuration={18}
            body="Watching users in sessions, I could see the pattern without anyone needing to name it. The creative direction box had become the product. The rest was noise."
          />
        </TwoColRow>

        {/* Full-width: Gen 2 step-by-step auto stepper */}
        <div style={{ padding: "40px 0" }}>
          <AutoStepper />
        </div>
      </Section>

      {/* ══ GEN 3 ════════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Gen 3 — 2026 (In development)"
        title="Making the AI the interface."
        emphasisWord="the interface."
        emphasisColor="#4f46e5"
        shape="star"
        shapeColor="#4f46e5"
        spinDuration={6}
        dotColor="#4f46e5"
      />

      <Section>
        <TwoColRow label="Gen 3 — Agent">
          <p style={prose} className="mb-5">
            The third generation inverted the mental model entirely. Instead of a form that ends in AI, it&apos;s a conversation that begins with AI. A chat-based agent moves through the brief collaboratively — mixing quick structured inputs (image source, brand kit, traits) with open prompts (inspiration, concept direction). Then, crucially, the agent proposes the creative direction itself. It surfaces a full draft brief based on everything collected and asks: &ldquo;Are there any changes you&apos;d like to make, or would you like to use this creative direction?&rdquo;
          </p>
          <p style={prose}>
            The user can edit, redirect, or simply say &ldquo;I approve.&rdquo; The cognitive load shifts dramatically — instead of starting from a blank box, the user reacts to a proposal. Curation is faster, lower-stakes, and more collaborative than creation from scratch.
          </p>
        </TwoColRow>

        {/* Full-width: Gen 3 agent video */}
        <div style={{ padding: "40px 0" }}>
          <video
            src="/images/copley/brief-agent.mov"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 16 }}
          />
        </div>

        <TwoColRow label="Design Decisions" isLast>
          <div className="flex flex-col gap-3">
            <BrightCard
              color="violet"
              bg="#f5f3ff"
              tag=""
              title="Why conversational over wizard?"
              titleEmphasis="wizard?"
              shape="diamond"
              spinDir="spin"
              spinDuration={20}
              body="Wizards enforce sequence. Conversations allow the natural non-linearity of creative thinking. A marketer briefing a designer doesn't follow a fixed order — they lead with feeling, then references, then constraints. The agent accommodates this."
            />
            <BrightCard
              color="violet"
              bg="#f5f3ff"
              tag=""
              title="Why have the AI propose the brief?"
              titleEmphasis="brief?"
              shape="star"
              spinDir="spinr"
              spinDuration={16}
              body="Users facing blank boxes get stuck. When the AI proposes and users react, the dynamic shifts from creation to curation. The model infers context from behavior — images selected, inspiration provided — not just what was typed."
            />
          </div>
        </TwoColRow>
      </Section>

      {/* ══ OUTCOME ══════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Outcome"
        title="From tool to collaborator."
        emphasisWord="collaborator."
        emphasisColor="#2dd4bf"
        shape="pentagon"
        shapeColor="#2dd4bf"
        spinDuration={9}
        dotColor="#2dd4bf"
      />

      <Section>
        <TwoColRow label="Outcome" isLast>
          <p style={prose}>
            The Gen 3 conversational agent was presented internally and launched to clients, who described the experience as briefing a creative collaborator rather than operating a tool. We saw an increase in ad content creation through Copley. Ads were being generated 3x more daily than before. 
          </p>
        </TwoColRow>
      </Section>

      {/* ══ CLOSING ══════════════════════════════════════════════════════ */}
      <motion.div
        {...fadeUp()}
        className="px-8 md:px-12"
        style={{ paddingTop: 64, paddingBottom: 56, marginTop: 64, borderTop: "1px solid #efefec" }}
      >
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 18, color: "#0d0d0d", lineHeight: 1.85 }}>
          Taking a brief flow through three generations taught me that the best AI interfaces don&apos;t ask users to adapt to the machine. They meet users where creative thinking already happens — in conversation, in reaction, in the back-and-forth of refining an idea. The product didn&apos;t just get better. The model of what it was changed entirely.
        </p>
      </motion.div>

      {/* ══ SKILLS & TOOLS ═══════════════════════════════════════════════ */}
      <motion.div
        {...fadeUp()}
        className="px-8 md:px-12 pb-16"
        style={{ borderTop: "1px solid #f8f8f8", paddingTop: 48 }}
      >
        <DotLabel color="#0284c7">Skills &amp; Tools</DotLabel>

        <div className="flex flex-wrap items-center gap-2 mt-3">
          {["AI UX Design", "Interaction Design", "User Research", "Conversational UI", "Product Strategy"].map((skill, i, arr) => (
            <span key={skill} className="flex items-center gap-2">
              <span
                className="text-sm font-medium"
                style={{ background: "#eff6ff", color: "#1e40af", borderRadius: 100, padding: "5px 14px", fontFamily: "'DM Sans', sans-serif" }}
              >
                {skill}
              </span>
              {i < arr.length - 1 && <Diamond />}
            </span>
          ))}
          <span className="flex items-center gap-2">
            <Diamond />
            <span
              className="text-sm font-medium"
              style={{ background: "#f4f4f2", color: "#555", borderRadius: 100, padding: "5px 14px", fontFamily: "'DM Sans', sans-serif" }}
            >
              Figma
            </span>
          </span>
        </div>
      </motion.div>
    </CaseStudyLayout>
  );
}

"use client";

import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import SectionBreak from "@/components/case-study/SectionBreak";
import DotLabel from "@/components/case-study/DotLabel";
import CsImagePlaceholder from "@/components/case-study/CsImagePlaceholder";
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
            stroke="#22c55e"
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
            stroke="#0284c7" strokeWidth="2" strokeDasharray="10 7"
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

      <div className="absolute rounded-full" style={{ top: 90, left: "50%", width: 4, height: 4, background: "#0284c7", opacity: 0.5 }} />
      <div className="absolute rounded-full" style={{ top: "40%", left: 80, width: 3, height: 3, background: "#22c55e", opacity: 0.45 }} />
      <div className="absolute rounded-full" style={{ top: "35%", right: 60, width: 3.5, height: 3.5, background: "#fb923c", opacity: 0.45 }} />
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

// ─── Prose ─────────────────────────────────────────────────────────────────
const prose: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: 16,
  color: "#0d0d0d",
  lineHeight: 1.85,
};

// ─── Tall image placeholder with custom height ──────────────────────────────
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

// ─── Diamond separator ──────────────────────────────────────────────────────
function Diamond() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <polygon points="4,0 8,4 4,8 0,4" stroke="#ddd" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ButtonsPage() {
  return (
    <CaseStudyLayout
      backHref="/work"
      eyebrow="Case Study · Well · March – April 2022"
      accentColor="#0284c7"
      headline="Accessible buttons that actually work for everyone."
      headlineEmphasis="work for everyone."
      subtitle="Redesigning a core component system for contrast, text scaling, and multi-language support — with cleaner code underneath."
      heroImageLabel="Final button system"
      heroShapes={<HeroShapes />}
      meta={{
        role: "UX/UI Designer",
        timeline: "Mar – Apr 2022",
        team: "Andrew Schwint · Colleen Curtis · Bernie Smigel",
        tools: "Figma",
      }}
      prev={{ label: "Web Onboarding", href: "/work/well/web-onboarding" }}
      next={{ label: "Pasito MVP", href: "/work/pasito/mvp" }}
    >

      {/* ══ OVERVIEW ═════════════════════════════════════════════════════ */}
      <Section className="!pt-16">
        <p style={prose}>
          Toward the end of my co-op at Well, I was asked to redesign the app&apos;s selection buttons — the components users interact with during their health journey when answering questions about their condition. What looked like a small UI task turned into a real lesson in accessible component design: when color alone isn&apos;t enough, and how constraints lead you to cleaner solutions.
        </p>
      </Section>

      {/* ══ THE PROBLEM ══════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The problem"
        title="How do we design a reusable set that works across contrast levels, text sizes, and languages?"
        emphasisWord="contrast levels, text sizes, and languages?"
        emphasisColor="#0284c7"
        shape="star"
        shapeColor="#0284c7"
        spinDuration={8}
        dotColor="#0284c7"
      />

      {/* ══ THE START ════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The start"
        title="Audit first. Design second."
        emphasisWord="Design second."
        emphasisColor="#22c55e"
        shape="diamond"
        shapeColor="#22c55e"
        spinDuration={10}
        dotColor="#22c55e"
      />

      <Section>
        <p style={prose} className="mb-8">
          The PMs came in with a clear brief: consolidate the button types, fix the accessibility issues, and design all the selection screens. Before touching a single frame, I audited what already existed. My first goal was to find what we could reuse — so developers wouldn&apos;t be handed a net-new component build when existing foundations could do the work.
        </p>

        <DotLabel color="#0284c7">Requirements</DotLabel>

        <BrightCard
          color="blue"
          bg="#d6f1fc"
          tag="THE BRIEF"
          title="What I was asked to do"
          titleEmphasis="do"
          shape="hexagon"
          spinDir="spinr"
          spinDuration={20}
        >
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(0,0,0,0.65)", lineHeight: 1.75 }}>
            <p>— Research button types (tags vs. buttons, single vs. multi-select)</p>
            <p>— Incorporate WCAG accessibility requirements</p>
            <p>— Review current components for reusable parts</p>
            <p>— Design all selection screens for the health journey flow</p>
          </div>
        </BrightCard>
      </Section>

      {/* ══ DESIGN ═══════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Design"
        title="Knowing when to kill your darlings."
        emphasisWord="kill your darlings."
        emphasisColor="#fb923c"
        shape="triangle"
        shapeColor="#fb923c"
        spinDuration={12}
        dotColor="#fb923c"
      />

      <Section>
        <DotLabel color="#0284c7">First Iterations</DotLabel>

        <p style={prose} className="mb-6">
          The original design had a colorful background. My first instinct was to try to save it — to keep the visual personality of the existing experience while fixing the accessibility problems on top of it. I explored multiple selection styles and button types within that constraint.
        </p>

        <p style={prose} className="mb-8">
          It didn&apos;t work. WCAG requires at least two distinct indicators of selection — not just color. The colorful background was fighting that requirement at every turn. It wasn&apos;t a styling problem. It was the background itself.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <ImgBox label="Iteration 1 — colorful background" hexColor="#fb923c" height={240} />
          <ImgBox label="Iteration 2 — multi-select attempts" hexColor="#4f46e5" height={240} />
        </div>

        <DotLabel color="#0284c7">The Decision</DotLabel>

        <p style={prose} className="mb-8">
          I dropped the colorful background. Clean white background, clear selection states using both color and shape — two distinct indicators, as required. The button design was inspired by an existing component in the library, which meant developers already had a foundation to build from. The detail that unlocked the whole thing: a small label above each button group clarifying the question context. Tiny, but it made the interaction significantly clearer.
        </p>

        <BrightCard
          color="green"
          bg="#bbf7d0"
          tag="DESIGN PRINCIPLE"
          title="Two indicators, not one."
          titleEmphasis="one."
          shape="diamond"
          spinDir="spin"
          spinDuration={18}
          body="WCAG doesn't allow color as the sole indicator of state. Every selected button needed a second signal — a border treatment, a checkmark, a shape change. That constraint didn't limit the design. It made it more honest."
        />

        <div className="mt-10">
          <DotLabel color="#0284c7">Accessibility Test</DotLabel>
        </div>

        <p style={prose} className="mb-8">
          Final designs were tested for contrast ratios, text scaling, and multi-language support — the three failure modes of the original. All passed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <ImgBox label="Large buttons" hexColor="#22c55e" height={260} />
          <ImgBox label="List — single select" hexColor="#0284c7" height={260} />
          <ImgBox label="Bubble select" hexColor="#f472b6" height={260} />
        </div>

        <ImgBox label="Final component library — all button types" hexColor="#22c55e" height={400} />
      </Section>

      {/* ══ CLOSING ══════════════════════════════════════════════════════ */}
      <motion.div
        {...fadeUp()}
        className="px-8 md:px-12"
        style={{ paddingTop: 64, paddingBottom: 56, marginTop: 64, borderTop: "1px solid #efefec" }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: 18,
            color: "#0d0d0d",
            lineHeight: 1.85,
          }}
        >
          The button system shipped and was added to Well&apos;s component library, where it became the standard for all selection screens across the health journey flow. The lesson I took from it: accessible design isn&apos;t a checklist you run at the end. It&apos;s a forcing function. When you design for contrast, text scaling, and multiple languages from the start, you end up with something cleaner than you would have otherwise.
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
          {["Accessible Design", "Component Systems", "UX/UI Design", "Design Systems"].map((skill, i, arr) => (
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

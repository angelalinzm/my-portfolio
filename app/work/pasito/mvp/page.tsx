"use client";

import { motion } from "framer-motion";
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
            stroke="#E8690E" strokeWidth="2" strokeDasharray="10 7"
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
            stroke="#E8690E" strokeWidth="2.2" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.18 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          />
        </svg>
      </motion.div>

      <div className="absolute rounded-full" style={{ top: 90, left: "50%", width: 4, height: 4, background: "#E8690E", opacity: 0.5 }} />
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
}: {
  label: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[220px_1fr]"
      style={{
        gap: "40px 72px",
        padding: "40px 0",
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

// ─── Diamond separator ──────────────────────────────────────────────────────
function Diamond() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <polygon points="4,0 8,4 4,8 0,4" stroke="#ddd" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function MvpPage() {
  return (
    <CaseStudyLayout
      backHref="/work"
      eyebrow="Case Study · Pasito · June 2021 – December 2022"
      accentColor="#E8690E"
      headline="Taking Pasito's first product from sketches to validated prototype."
      headlineEmphasis="validated prototype."
      subtitle="From early sketches to a validated, clickable prototype — research, workshops, and 20+ user interviews that shaped every design decision."
      heroImageSrc="/images/pasito/pasito-home.png"
      heroImageLabel="Pasito MVP — final prototype"

      meta={{
        role: "UX/UI Designer · User Researcher",
        timeline: "Jun 2021 – Dec 2022",
        team: "Pauline Roteta · Julie Scotland · Angela Lin",
        tools: "Figma · Miro",
      }}
      prev={{ label: "Buttons", href: "/work/well/buttons" }}
      next={{ label: "Marketing Website", href: "/work/pasito/marketing-website" }}
    >

      {/* ══ OVERVIEW ═════════════════════════════════════════════════════ */}
      <Section className="!pt-16">
        <TwoColRow label="Overview" isLast>
          <p style={prose}>
            This was my largest undertaking at Pasito. From June 2021 through December 2022, I was the sole designer taking their first product from a few rough sketches to a validated, clickable prototype — running research, leading user testing, and iterating through two dashboards. I didn&apos;t just design the product. I helped build the design practice from the ground up.
          </p>
        </TwoColRow>
      </Section>

      {/* ══ THE PROBLEM ══════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The problem"
        title="Employees can't access benefits they don't understand. Employers lose money when those benefits go unused."
        emphasisWord="unused."
        emphasisColor="#0284c7"
        shape="star"
        shapeColor="#0284c7"
        spinDuration={8}
        dotColor="#0284c7"
      />

      <Section>
        <TwoColRow label="The Problem" isLast>
          <p style={prose}>
            Employees struggle to understand their benefits — what they&apos;re entitled to, what saves them money, and how to actually access it through their company. Employers lose money on taxes when benefits go unused. How do we build a product that bridges that gap for both sides?
          </p>
        </TwoColRow>
      </Section>

      {/* ══ RESEARCH ═════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Research"
        title="Introducing design thinking to a startup."
        emphasisWord="startup."
        emphasisColor="#16a34a"
        shape="diamond"
        shapeColor="#16a34a"
        spinDuration={10}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="Research" isLast>
          <p style={prose} className="mb-8">
            Pauline and Julie were business-minded founders who hadn&apos;t worked with a designer before. One of my first contributions wasn&apos;t a design — it was introducing them to a design process. I ran a series of workshops to help the team ideate together: affinity mapping, crazy 8s, and feedback synthesis from marketing validation interviews with working parents. What came out of those sessions was a shared understanding of what the product actually needed to be — not just what the founders had imagined, but what users were asking for.
          </p>
          <img src="/images/pasito/affinity-map.jpg" alt="Workshop affinity map" style={{ width: "100%", borderRadius: 16, border: "1px solid #e5e5e2" }} />
        </TwoColRow>
      </Section>

      {/* ══ IDEATION ═════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Ideation"
        title="Mapping the experience."
        emphasisWord="experience."
        emphasisColor="#E8690E"
        shape="triangle"
        shapeColor="#E8690E"
        spinDuration={12}
        dotColor="#E8690E"
      />

      <Section>
        <TwoColRow label="Ideation" isLast>
          <p style={prose} className="mb-8">
            With a clearer picture of the product, we developed user flows for the core experience: a question flow that would collect information from employees upfront, and the dashboard they&apos;d land on after. I mapped out a site map and sketched the structure before moving into Figma.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/pasito/sketch-1.jpg" alt="Site map" style={{ width: "100%", borderRadius: 16 }} />
            <img src="/images/pasito/sketch-2.jpg" alt="Early sketches" style={{ width: "100%", borderRadius: 16 }} />
          </div>
        </TwoColRow>
      </Section>

      {/* ══ DESIGN ═══════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Design"
        title="From lo-fi to clickable prototype."
        emphasisWord="prototype."
        emphasisColor="#16a34a"
        shape="star"
        shapeColor="#16a34a"
        spinDuration={6}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="Lo-Fi Prototype">
          <p style={prose} className="mb-8">
            I built the lo-fi prototype first, working through the core screens: the onboarding question flow, paycheck comparison, income tax comparison, the learn tab, and the employee dashboard. The design principle throughout: make complex financial information feel approachable. The product was asking people to understand FSAs, dependent care tax credits, and paycheck breakdowns — none of which are intuitive. The design had to do real work.
          </p>
          <BrightCard
            color="blue"
            bg="#d6f1fc"
            tag=""
            title="Make complexity feel approachable."
            titleEmphasis="approachable."
            shape="hexagon"
            spinDir="spinr"
            spinDuration={20}
            body="FSAs, dependent care tax credits, paycheck breakdowns — none of this is intuitive. The design's job was to carry that cognitive weight so users didn't have to. Simple layout. Clear hierarchy. No jargon where it could be avoided."
          />
        </TwoColRow>

        {/* Full-width lo-fi screens */}
        <div style={{ padding: "40px 0" }}>
          <div className="grid grid-cols-3 gap-4">
            <img src="/images/pasito/lofi-1.png" alt="Question flow — lo-fi" style={{ width: "100%", borderRadius: 16 }} />
            <img src="/images/pasito/lofi-2.png" alt="Paycheck comparison — lo-fi" style={{ width: "100%", borderRadius: 16 }} />
            <img src="/images/pasito/lofi-3.png" alt="Homepage" style={{ width: "100%", borderRadius: 16 }} />
          </div>
        </div>

      </Section>

      {/* ══ USER TESTING ═════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="User testing"
        title="20+ interviews. One defining insight."
        emphasisWord="defining insight."
        emphasisColor="#4f46e5"
        shape="pentagon"
        shapeColor="#4f46e5"
        spinDuration={9}
        dotColor="#4f46e5"
      />

      <Section>
        <TwoColRow label="User Testing" isLast>
          <p style={prose} className="mb-8">
            After developing the initial prototype, I led over 20 user testing interviews with working parents over Google Meet. The biggest finding: employees found it genuinely hard to figure out which benefits were best for their situation — largely because benefits information at most companies is disorganized and hard to parse. That insight directly shaped how we redesigned the learn tab and paycheck comparison breakdowns in subsequent iterations.
          </p>
          <BrightCard
            color="violet"
            bg="#ede9fe"
            tag=""
            title="The problem wasn't the product. It was the ecosystem."
            titleEmphasis="ecosystem."
            shape="diamond"
            spinDir="spin"
            spinDuration={18}
            body="Users weren't confused by Pasito — they were confused by their company's benefits in general. Disorganized, inaccessible, never explained. Pasito's job was to cut through that noise and make the right choice obvious."
          />
        </TwoColRow>
      </Section>

      {/* ══ HI-FI ════════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Hi-fi design"
        title="From lo-fi to polished product."
        emphasisWord="polished product."
        emphasisColor="#16a34a"
        shape="hexagon"
        shapeColor="#16a34a"
        spinDuration={10}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="Hi-Fi Screens">
          <p style={prose} className="mb-8">
            With user testing insights incorporated, I moved the employee dashboard into hi-fi. The visual system prioritized clarity over density — progressive disclosure of complex financial data, a consistent card-based layout, and a color system that flagged recommended actions without overwhelming users. Every screen was designed to answer one question at a glance: what should I do next?
          </p>
        </TwoColRow>

        {/* Full-width hi-fi screens */}
        <div style={{ padding: "40px 0" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/images/pasito/hifi-1.png" alt="Hi-fi screen 1" style={{ width: "100%", borderRadius: 16, border: "1px solid #e5e5e2" }} />
            <img src="/images/pasito/hifi-2.png" alt="Hi-fi screen 2" style={{ width: "100%", borderRadius: 16, border: "1px solid #e5e5e2" }} />
            <img src="/images/pasito/hifi-3.png" alt="Hi-fi screen 3" style={{ width: "100%", borderRadius: 16, border: "1px solid #e5e5e2" }} />
          </div>
        </div>

      </Section>

      {/* ══ 2022 UPDATE ══════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="2022 update"
        title="When the product pivots, you pivot with it."
        emphasisWord="pivot with it."
        emphasisColor="#2dd4bf"
        shape="star"
        shapeColor="#2dd4bf"
        spinDuration={8}
        dotColor="#2dd4bf"
      />

      <Section>
        <TwoColRow label="2022 Update" isLast>
          <p style={prose} className="mb-8">
            After YCombinator in 2022, Pasito shifted from a tax-focused tool to a broader HR communications platform — integrating payroll, financial, and claims data to optimize employee benefits coverage and utilization. The mission evolved, and so did the design. I redesigned the product to match the new direction: updated visual language, restructured information architecture, and new hi-fi mockups for the expanded product scope.
          </p>
          <div style={{ borderRadius: 16, border: "1px solid #e5e5e2", overflow: "hidden" }}>
            <img src="/images/pasito/2024.png" alt="2022 update" style={{ width: "100%", display: "block", transform: "scale(1.03)", transformOrigin: "center" }} />
          </div>
        </TwoColRow>
      </Section>

      {/* ══ CLOSING ══════════════════════════════════════════════════════ */}
      <motion.div
        {...fadeUp()}
        className="px-8 md:px-12"
        style={{ paddingTop: 64, paddingBottom: 56, marginTop: 64, borderTop: "1px solid #efefec" }}
      >
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 18, color: "#0d0d0d", lineHeight: 1.85 }}>
          Taking a product from sketches to a validated prototype — with real users, real feedback, and a real pivot in the business along the way — taught me that good design at a startup means staying close to the problem even as it changes. The MVP I shipped wasn&apos;t the final product. It was the proof that there was one worth building.
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
          {["User Research", "UX/UI Design", "Prototyping", "Facilitation & Workshopping"].map((skill, i, arr) => (
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
          {["Figma", "Miro"].map((tool) => (
            <span key={tool} className="flex items-center gap-2">
              <Diamond />
              <span
                className="text-sm font-medium"
                style={{ background: "#f4f4f2", color: "#555", borderRadius: 100, padding: "5px 14px", fontFamily: "'DM Sans', sans-serif" }}
              >
                {tool}
              </span>
            </span>
          ))}
        </div>
      </motion.div>
    </CaseStudyLayout>
  );
}

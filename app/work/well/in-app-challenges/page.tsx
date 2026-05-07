"use client";

import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import SectionBreak from "@/components/case-study/SectionBreak";
import DotLabel from "@/components/case-study/DotLabel";
import dynamic from "next/dynamic";
const PdfStepper = dynamic(() => import("@/components/case-study/PdfStepper"), { ssr: false });
import PullQuote from "@/components/case-study/PullQuote";
import BrightCard from "@/components/case-study/BrightCard";
import { inAppChallengesContent as c, inAppChallengesCardTokens as tokens } from "@/data/projects";

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
      <div className="absolute rounded-full" style={{ top: "40%", left: 80, width: 3, height: 3, background: "#16a34a", opacity: 0.45 }} />
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
        borderBottom: isLast ? "none" : "0.5px solid #f5f5f2",
      }}
    >
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: 18,
          color: "#0d0d0d",
          paddingTop: 2,
        }}
      >
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

// ─── Prose (no max-width — spans full content width) ───────────────────────
const prose: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: 18,
  color: "#555",
  lineHeight: 1.75,
};

// ─── Diamond separator for skills row ──────────────────────────────────────
function Diamond() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <polygon points="4,0 8,4 4,8 0,4" stroke="#ddd" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ─── HEXAD user-type pair ───────────────────────────────────────────────────
function UserPair({ type, desc }: { type: string; desc: string }) {
  return (
    <div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#0d0d0d", marginBottom: 2 }}>
        {type}
      </p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(0,0,0,0.55)", lineHeight: 1.6 }}>
        {desc}
      </p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function InAppChallengesPage() {
  const t = tokens; // shorthand

  return (
    <CaseStudyLayout
      backHref="/work"
      eyebrow={c.eyebrow}
      accentColor="#0284c7"
      headline={c.headline}
      headlineEmphasis={c.headlineEmphasis}
      subtitle={c.subtitle}
      heroImageLabel={c.heroImageLabel}
      heroImageSrc="/images/well/well-in-app-challenges.png"

      meta={c.meta}
      prev={c.nav.prev}
      next={c.nav.next}
    >

      {/* ══ PROBLEM ══════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The Problem"
        title="How do we drive engagement with users to interact with app features?"
        emphasisWord="engagement"
        shape="star"
        shapeColor="#0284c7"
        spinDuration={8}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="The Start">
          <p style={prose} className="mb-6">{c.theStart.para1}</p>
          <PullQuote
            quote={c.theStart.pullQuote.text}
            emphasisWord={c.theStart.pullQuote.emphasis}
            source={c.theStart.pullQuote.source}
            accentColor="#0284c7"
          />
          <p style={prose} className="mt-6">{c.theStart.para2}</p>
        </TwoColRow>

        <TwoColRow label="Requirements" isLast>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {c.theStart.requirements.map((req, i) => (
              <div key={req} className="flex items-start gap-4" style={{ background: "#f7f7f5", borderRadius: 14, padding: "18px 20px" }}>
                <span style={{ fontFamily: "'Urbanist', sans-serif", fontSize: 22, fontWeight: 700, color: "#0284c7", opacity: 0.35, lineHeight: 1, flexShrink: 0, paddingTop: 2 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 400, color: "#0d0d0d", lineHeight: 1.65 }}>
                  {req}
                </p>
              </div>
            ))}
          </div>
        </TwoColRow>
      </Section>

      {/* ══ RESEARCH ═════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Research"
        title="So how do people build habits?"
        emphasisWord="habits?"
        subtitle="Habits = Challenges"
        shape="diamond"
        shapeColor="#16a34a"
        spinDuration={10}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="HEXAD Framework">
          <p style={prose} className="mb-8">{c.research.para}</p>
          <div className="overflow-hidden mx-auto" style={{ borderRadius: 16, maxWidth: "75%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/well/hexad.png"
              alt="HEXAD user type framework"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </TwoColRow>

        <TwoColRow label="User Types" isLast>
          <p className="mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#0d0d0d" }}>
            HEXAD User Types
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <BrightCard
              color={t.hexad.extrinsic.color as "amber"}
              bg="#fff7ed"
              tag="Extrinsic · motivated by rewards"
              shape={t.hexad.extrinsic.shape as "diamond"}
              spinDir={t.hexad.extrinsic.spinDir as "spinr"}
              spinDuration={t.hexad.extrinsic.spinDuration}
            >
              <div className="space-y-3 mt-1">
                {c.research.extrinsic.map((u) => (
                  <UserPair key={u.type} type={u.type} desc={u.desc} />
                ))}
              </div>
            </BrightCard>

            <BrightCard
              color={t.hexad.intrinsic.color as "teal"}
              bg="#f0fdfa"
              tag="Intrinsic · personally motivated"
              shape={t.hexad.intrinsic.shape as "hexagon"}
              spinDir={t.hexad.intrinsic.spinDir as "spin"}
              spinDuration={t.hexad.intrinsic.spinDuration}
            >
              <div className="space-y-3 mt-1">
                {c.research.intrinsic.map((u) => (
                  <UserPair key={u.type} type={u.type} desc={u.desc} />
                ))}
              </div>
            </BrightCard>
          </div>
        </TwoColRow>
      </Section>

      {/* ══ IDEATION ═════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Ideation"
        title="Weeding through the ambiguous problem"
        emphasisWord="ambiguous"
        shape="triangle"
        shapeColor="#fb923c"
        spinDuration={12}
        dotColor="#fb923c"
      />

      <Section>
        <TwoColRow label="Leaving Personas Behind">
          <p style={prose}>{c.ideation.para}</p>
        </TwoColRow>

        <TwoColRow label="Levers">
          <div className="flex flex-wrap gap-2">
            {c.ideation.levers.map((lever) => (
              <span
                key={lever}
                className="text-sm font-medium"
                style={{ background: "#f0f9ff", color: "#0284c7", borderRadius: 100, padding: "6px 14px", fontFamily: "'DM Sans', sans-serif" }}
              >
                {lever}
              </span>
            ))}
          </div>
        </TwoColRow>

        {/* Full-width: user stories image */}
        <div
          className="w-full overflow-hidden"
          style={{ borderBottom: "0.5px solid #f5f5f2", padding: "40px 0" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/well/well-user-stories.png"
            alt="Challenges user stories workshop"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 16 }}
          />
        </div>

        <TwoColRow label="Presenting to Stakeholders">
          <p style={prose}>{c.ideation.stakeholdersPara}</p>
        </TwoColRow>

        {/* Full-width: PDF stepper */}
        <div className="w-full" style={{ borderBottom: "0.5px solid #f5f5f2", padding: "40px 0" }}>
          <PdfStepper src="/images/well/engagement-user-stories.pdf" startPage={13} />
        </div>

        <TwoColRow label="Separating User Flows">
          <p style={prose} className="mb-6">{c.ideation.tracksPara}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <BrightCard
              color={t.tracks[0].color as "violet"}
              bg="#f5f3ff"
              tag="Track A"
              title="Challenges"
              titleItalic
              body="Ongoing engagement mechanics to increase overall app adoption."
              shape={t.tracks[0].shape as "diamond"}
              spinDir={t.tracks[0].spinDir as "spinr"}
              spinDuration={t.tracks[0].spinDuration}
            />
            <BrightCard
              color={t.tracks[1].color as "pink"}
              bg="#fdf4ff"
              tag="Track B"
              title="Offers"
              titleItalic
              body="Targeted incentives tied to specific KPIs — may not impact overall adoption."
              shape={t.tracks[1].shape as "hexagon"}
              spinDir={t.tracks[1].spinDir as "spin"}
              spinDuration={t.tracks[1].spinDuration}
            />
          </div>
        </TwoColRow>

        {/* Full-width: challenges + offers diagrams */}
        <div className="flex flex-col gap-4 pt-10">
          <div className="overflow-hidden" style={{ borderRadius: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/well/challenges.png" alt="Challenges flow diagram" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div className="overflow-hidden" style={{ borderRadius: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/well/offers.png" alt="Offers flow diagram" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </Section>

      {/* ══ DESIGN ═══════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Design"
        title="The beginning machinations of a challenges system"
        emphasisWord="machinations"
        subtitle="Rewarding both intrinsic and extrinsic users."
        shape="star"
        shapeColor="#16a34a"
        spinDuration={6}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="Overview">
          <p style={prose}>{c.design.paras[0]}</p>
        </TwoColRow>

        <TwoColRow label="Key Decisions">
          <div className="flex flex-col gap-3">
            <BrightCard
              color={t.keyDecisions[0].color as "blue"}
              bg="#eff6ff"
              tag="Key decision"
              title='Rewards show "ready to claim" throughout — not just at the end'
              body="Extrinsic users need visible proof the system is working. Making points visible throughout kept the reward loop active even before intrinsic motivation kicked in."
              shape={t.keyDecisions[0].shape as "hexagon"}
              spinDir={t.keyDecisions[0].spinDir as "spinr"}
              spinDuration={t.keyDecisions[0].spinDuration}
            />
            <BrightCard
              color={t.keyDecisions[1].color as "green"}
              bg="#f0fdf4"
              tag="The outcome"
              title="Constraint pushed toward clearer hierarchy"
              body="Rather than relying on complex interactions, the constraint pushed me toward stronger information hierarchy — making the design more accessible, not less."
              shape={t.keyDecisions[1].shape as "diamond"}
              spinDir={t.keyDecisions[1].spinDir as "spin"}
              spinDuration={t.keyDecisions[1].spinDuration}
            />
          </div>
        </TwoColRow>

        <TwoColRow label="Delivery" isLast>
          <p style={prose}>{c.design.paras[3]}</p>
        </TwoColRow>

        {/* Full-width: hi-fi screens */}
        <div className="pt-10 overflow-hidden" style={{ borderRadius: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/well/well-hifi.png" alt="Lo-fi and hi-fi wireframes" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </Section>

      {/* ══ FUTURE STATES ════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Future States"
        title="Suggestions left for the team"
        emphasisWord="team"
        shape="diamond"
        shapeColor="#4f46e5"
        spinDuration={9}
        dotColor="#4f46e5"
      />

      <Section>
        <TwoColRow label="Future States" isLast>
          <p style={prose} className="mb-8">{c.futureStates.intro}</p>
          <div className="space-y-10">
            {c.futureStates.items.map((item, i) => (
              <motion.div key={item.number} {...fadeUp(i * 0.06)} className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <span
                    style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "2.5rem", fontWeight: 700, color: "#7dd3fc", lineHeight: 1 }}
                  >
                    {item.number}
                  </span>
                </div>
                <div className="pt-1">
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: "#0d0d0d", lineHeight: 1.75 }}>
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TwoColRow>
      </Section>

      {/* ══ SKILLS & TOOLS ═══════════════════════════════════════════════ */}
      <motion.div
        {...fadeUp()}
        className="px-8 md:px-12 pb-16"
        style={{ borderTop: "1px solid #f8f8f8", paddingTop: 48 }}
      >
        <DotLabel color="#0284c7">Skills &amp; Tools</DotLabel>

        <div className="flex flex-wrap items-center gap-2 mt-3">
          {c.skills.blue.map((skill, i) => (
            <span key={skill} className="flex items-center gap-2">
              <span
                className="text-sm font-medium"
                style={{ background: "#eff6ff", color: "#1e40af", borderRadius: 100, padding: "5px 14px", fontFamily: "'DM Sans', sans-serif" }}
              >
                {skill}
              </span>
              {i < c.skills.blue.length - 1 && <Diamond />}
            </span>
          ))}
          {c.skills.gray.map((skill, i) => (
            <span key={skill} className="flex items-center gap-2">
              <Diamond />
              <span
                className="text-sm font-medium"
                style={{ background: "#f4f4f2", color: "#555", borderRadius: 100, padding: "5px 14px", fontFamily: "'DM Sans', sans-serif" }}
              >
                {skill}
              </span>
              {i < c.skills.gray.length - 1 && <Diamond />}
            </span>
          ))}
        </div>
      </motion.div>
    </CaseStudyLayout>
  );
}

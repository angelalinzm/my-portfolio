"use client";

import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import SectionBreak from "@/components/case-study/SectionBreak";
import DotLabel from "@/components/case-study/DotLabel";
import BrightCard from "@/components/case-study/BrightCard";
import PullQuote from "@/components/case-study/PullQuote";

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
      <div className="absolute rounded-full" style={{ top: "40%", left: 80, width: 3, height: 3, background: "#22c55e", opacity: 0.45 }} />
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
        borderBottom: isLast ? "none" : "0.5px solid #f5f5f2",
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

// ─── Future state card (compact) ────────────────────────────────────────────
function FutureCard({ title, body, bg }: { title: string; body: string; bg: string }) {
  return (
    <div style={{ background: bg, borderRadius: 16, padding: "18px 22px" }}>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#0d0d0d", marginBottom: 8 }}>
        {title}
      </p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 400, color: "rgba(0,0,0,0.6)", lineHeight: 1.65 }}>
        {body}
      </p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function AiOnboardingPage() {
  return (
    <CaseStudyLayout
      backHref="/work"
      eyebrow="Case Study · Copley · 2024–2025"
      accentColor="#fb923c"
      headline="Designing AI onboarding for people who don't trust AI."
      headlineEmphasis="don't trust AI."
      subtitle="Copley is an AI-heavy marketing platform built for DTC brands. The challenge wasn't teaching users how to use the product — it was getting them to believe it was worth trusting in the first place."
      heroImageLabel="Onboarding flow + FTUE agent"
      heroShapes={<HeroShapes />}
      meta={{
        role: "Product Designer",
        timeline: "2025–2026",
        team: "Angela Lin · Mike Torra (CTO) · David Henriquez (CEO)",
        tools: "Figma",
      }}
      prev={{ label: "Design System & IA", href: "/work/copley/design-system" }}
      next={{ label: "AI Brief to Campaign", href: "/work/copley/ai-brief" }}
    >

      {/* ══ OVERVIEW ═════════════════════════════════════════════════════ */}
      <Section className="!pt-16">
        <TwoColRow label="Overview" isLast>
          <p style={prose} className="mb-5">
            Copley&apos;s core product is powerful — it analyzes store data, surfaces high-impact creative opportunities, and uses an AI agent to take users from brief to production-ready ad variants in minutes. But we had a problem: the people who needed it most were the least likely to trust it.
          </p>
          <p style={prose} className="mb-5">
            DTC marketers are skeptical of AI tools by default. They&apos;ve seen bad output, they worry about losing creative control, and they don&apos;t want to feel like they&apos;re being replaced. The existing onboarding put users through a form-heavy sign-up before showing them a single pixel of value — and dropped them into a blank dashboard with no guidance.
          </p>
          <p style={prose}>
            My job was to design an experience that built trust before it asked for it.
          </p>
        </TwoColRow>
      </Section>

      {/* ══ THE PROBLEM ══════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The problem"
        title="Three fears standing between users and value."
        emphasisWord="value."
        emphasisColor="#0284c7"
        shape="star"
        shapeColor="#22c55e"
        spinDuration={8}
        dotColor="#22c55e"
      />

      <Section>
        <TwoColRow label="Three Fears" isLast>
          <p style={prose} className="mb-8">
            Before designing anything, I needed to understand what was actually holding AI-hesitant users back. Through user interviews and behavioral analysis, three distinct fears emerged — and they required completely different design responses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8" style={{ alignItems: "stretch" }}>
            <motion.div {...fadeUp(0)} style={{ height: "100%" }}>
              <BrightCard
                color="blue"
                bg="#eff6ff"
                tag="FEAR 01"
                title="'AI will replace me'"
                titleEmphasis="replace"
                hideShape
                body="Not a fear of the tool — a fear of becoming irrelevant. Marketers who've spent years developing creative instincts don't want a system that makes their judgment unnecessary."
              />
            </motion.div>
            <motion.div {...fadeUp(0.06)} style={{ height: "100%" }}>
              <BrightCard
                color="amber"
                bg="#fff7ed"
                tag="FEAR 02"
                title="'I don't trust the output'"
                titleEmphasis="trust"
                hideShape
                body="They've seen AI generate bad creative. They need to see the reasoning, not just the result — transparency about how a recommendation was reached matters as much as the recommendation itself."
              />
            </motion.div>
            <motion.div {...fadeUp(0.12)} style={{ height: "100%" }}>
              <BrightCard
                color="violet"
                bg="#f5f3ff"
                tag="FEAR 03"
                title="'This is too complex'"
                titleEmphasis="complex"
                hideShape
                body="Copley has real depth — briefs, variants, traits, combinations. But complexity shown too early reads as risk. The wrong first impression and they're gone before they've seen what it can do."
              />
            </motion.div>
          </div>
        </TwoColRow>

        <div
          className="grid grid-cols-1 md:grid-cols-[220px_1fr]"
          style={{ gap: "40px 72px", padding: "4px 0 0" }}
        >
          <div />
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#0d0d0d", lineHeight: 1.3 }}>
            Users don&apos;t need to be convinced AI is good. They need to{" "}
            <em style={{ color: "#22c55e", fontStyle: "normal" }}>feel in control</em>{" "}
            while it&apos;s working.
          </p>
        </div>
      </Section>

      {/* ══ THE APPROACH ═════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The approach"
        title="Value before commitment. Show before tell."
        emphasisWord="commitment."
        emphasisColor="#0284c7"
        shape="diamond"
        shapeColor="#22c55e"
        spinDuration={10}
        dotColor="#22c55e"
      />

      <Section>
        <TwoColRow label="The Approach" isLast>
          <p style={prose} className="mb-5">
            The original onboarding asked users to commit — name, email, company info, integrations — before showing them a single thing Copley could do. For an AI-hesitant user, that&apos;s asking for trust they haven&apos;t earned yet.
          </p>
          <p style={prose} className="mb-8">
            I flipped the logic entirely. The new flow shows value first, earns trust through transparency, then asks for commitment. By the time a user reaches the sign-up form, they&apos;ve already seen a real insight from their own data. Sign-up becomes confirmation, not a blind leap.
          </p>
          <img src="/images/copley/onboarding-flow.png" alt="Onboarding flow map" style={{ width: "100%", borderRadius: 16 }} />
        </TwoColRow>
      </Section>

      {/* ══ KEY DESIGN DECISIONS ═════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Key design decisions"
        title="Three decisions that changed the outcome."
        emphasisWord="changed"
        emphasisColor="#0284c7"
        shape="star"
        shapeColor="#22c55e"
        spinDuration={6}
        dotColor="#22c55e"
      />

      <Section>
        <TwoColRow label="Decision 01 — The Insight Card">
          <p style={prose} className="mb-5">
            Instead of landing on an empty dashboard, users arrive at a ranked list of opportunities already found in their data. The first thing they see after connecting is proof that Copley has been working.
          </p>
          <p style={prose}>
            The copy pattern was intentional: name the pattern, show the specific number, explain the implication, offer an action. &ldquo;Close-up product shots are your best-performing creative — and you only have 2&rdquo; is not a generic recommendation. It&apos;s a finding, rooted in their account.
          </p>
        </TwoColRow>

        {/* Full-width: insights screen */}
        <div style={{ borderBottom: "0.5px solid #f5f5f2", padding: "40px 0" }}>
          <img src="/images/copley/opportunities.png" alt="Insight card — opportunities screen" style={{ width: "80%", borderRadius: 16, display: "block", margin: "0 auto" }} />
        </div>

        <div style={{ borderBottom: "0.5px solid #f5f5f2", padding: "40px 0" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <BrightCard
              color="green"
              bg="#f0fdf4"
              tag="WHAT CHANGED"
              title="The insight card is the landing page"
              titleEmphasis="is"
              shape="hexagon"
              spinDir="spin"
              spinDuration={20}
              body="Specific to their account, ranked by estimated revenue impact. This is the first thing they see after connecting their data — proof that Copley has been working since they signed up."
            />
            <BrightCard
              color="teal"
              bg="#f0fdfa"
              tag="WHY IT MATTERS"
              title="No empty state. Ever."
              titleEmphasis="Ever."
              shape="diamond"
              spinDir="spinr"
              spinDuration={18}
              body="An empty dashboard is the worst first impression for an AI-hesitant user. It puts the burden back on them. The insight card removes that entirely — the action is obvious, the value is visible."
            />
          </div>
        </div>

        <TwoColRow label="Decision 02 — The FTUE Brief Agent">
          <p style={prose} className="mb-5">
            The existing brief agent was built for power users — it opened cold and asked a series of configuration questions before generating anything. For a first-timer, that&apos;s a blank-page problem disguised as a feature.
          </p>
          <p style={prose}>
            I designed a parallel FTUE agent with a completely different interaction model: show → confirm → generate. Copley opens pre-seeded with the user&apos;s specific insight. The agent proposes a creative direction — the user approves or reacts. Four exchanges, all chip-based. No typing required, no prior knowledge needed.
          </p>
        </TwoColRow>

        {/* Full-width: FTUE agent */}
        <div style={{ borderBottom: "0.5px solid #f5f5f2", padding: "40px 0" }}>
          <video
            src="/images/copley/ftue.mov"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", borderRadius: 16 }}
          />
        </div>

        <div style={{ borderBottom: "0.5px solid #f5f5f2", padding: "40px 0" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <BrightCard
              color="pink"
              bg="#fdf4ff"
              tag="POWER AGENT (EXISTING)"
              title="Interview then generate"
              titleEmphasis="Interview"
              shape="triangle"
              spinDir="spinr"
              spinDuration={22}
              body="Opens cold. 8 configuration questions before a single ad is produced. Designed for power users who know what they want — not a first-timer's entry point."
            />
            <BrightCard
              color="blue"
              bg="#eff6ff"
              tag="FTUE AGENT (NEW)"
              title="Show then confirm"
              titleEmphasis="Show"
              shape="hexagon"
              spinDir="spin"
              spinDuration={18}
              body="Opens seeded with the user's specific insight. Copley writes the creative direction and proposes it. The user approves or edits. 4 exchanges, chip-based, no typing required."
            />
          </div>
        </div>

        <TwoColRow label="Decision 03 — Dismissal Feedback" isLast>
          <p style={prose} className="mb-5">
            AI-generated ads won&apos;t always be perfect. Pretending otherwise erodes trust faster than bad output does. The question was: how do you turn a bad ad into a trust moment?
          </p>
          <p style={prose} className="mb-8">
            When a user dismisses a variant, a small message appears in the agent panel: &ldquo;Not quite right — I&apos;ll use that to refine the next one.&rdquo; The replacement appears in the same slot. The first time it happens, the agent explains it. After that, it&apos;s silent. The system learns visibly, in real time, from the user&apos;s own judgment.
          </p>
          <ImgBox
            label="Variants screen — Suggested · Saved · Deleted feedback system"
            hexColor="#fb923c"
            height={320}
          />
        </TwoColRow>
      </Section>

      {/* ══ CREATIVE DIRECTION ═══════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Creative direction"
        title="Teaching the agent to speak like a strategist."
        emphasisWord="strategist."
        emphasisColor="#0284c7"
        shape="triangle"
        shapeColor="#22c55e"
        spinDuration={12}
        dotColor="#22c55e"
      />

      <Section>
        <TwoColRow label="Voice & Language">
          <p style={prose} className="mb-5">
            One of the more unexpected parts of this project was realizing that the copy the agent produced mattered as much as the UI surrounding it. If the agent sounds like a chatbot, users disengage. If it sounds like a senior creative strategist who&apos;s looked at their account, they lean in.
          </p>
          <p style={prose} className="mb-8">
            I designed a trait-based insight system where Copley surfaces specific creative opportunities rooted in actual performance data. The copy pattern: name the pattern, show the number, explain the implication, offer an action.
          </p>
          <PullQuote
            quote="Close-up product shots are your best performing creative — and you only have 2. Ads where the product fills more than 60% of the frame averaged a 2.4× higher click-through rate than your lifestyle and flat-lay creative."
            emphasisWord="2.4× higher click-through rate"
            source="— Copley insight card, High Impact recommendation"
            accentColor="#0284c7"
          />
        </TwoColRow>

        <TwoColRow label="Language Audit" isLast>
          <p style={prose} className="mb-8">
            I ran a full language audit across the product. Words like &ldquo;AI,&rdquo; &ldquo;automate,&rdquo; and &ldquo;machine learning&rdquo; consistently triggered skepticism. Replacing them with outcome-oriented verbs — &ldquo;surfaces,&rdquo; &ldquo;flags,&rdquo; &ldquo;highlights&rdquo; — reduced perceived threat without changing what the product actually does.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <BrightCard
              color="violet"
              bg="#f5f3ff"
              tag="BEFORE"
              title="Alienating language"
              titleEmphasis="language"
              shape="triangle"
              spinDir="spin"
              spinDuration={22}
              body="'Our AI will automate your experiments' · 'Machine learning-powered insights' · 'Gross Merchandise Value' · 'Tell us about your company'"
            />
            <BrightCard
              color="green"
              bg="#f0fdf4"
              tag="AFTER"
              title="Trust-building language"
              titleEmphasis="language"
              shape="hexagon"
              spinDir="spinr"
              spinDuration={18}
              body="'Copley surfaces which tests to run next' · 'Finds patterns your team would miss' · 'Roughly how large is your store?' · 'Help us show you the right results'"
            />
          </div>
        </TwoColRow>
      </Section>

      {/* ══ FUTURE STATES ════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Future states"
        title="Where this goes next."
        emphasisWord="goes"
        emphasisColor="#0284c7"
        shape="diamond"
        shapeColor="#22c55e"
        spinDuration={9}
        dotColor="#22c55e"
      />

      <Section>
        <TwoColRow label="Future States" isLast>
          <div className="flex flex-col gap-3">
            <motion.div {...fadeUp(0)}>
              <FutureCard
                title="Trait-based creative intelligence"
                body="Copley learns each brand's top-performing creative patterns over time and surfaces them proactively — not just at onboarding but throughout the brief agent flow."
                bg="#f0fdf4"
              />
            </motion.div>
            <motion.div {...fadeUp(0.06)}>
              <FutureCard
                title="Graduated trust system"
                body="As users build history with the product, the FTUE agent retires and the power agent takes over — surfacing only the configuration options each user has previously engaged with."
                bg="#eff6ff"
              />
            </motion.div>
            <motion.div {...fadeUp(0.12)}>
              <FutureCard
                title="Dismissal feedback at scale"
                body="Aggregate dismissal patterns across accounts to improve generation quality for entire creative categories — model-level learning from real creative feedback."
                bg="#f5f3ff"
              />
            </motion.div>
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
          Designing for AI-hesitant users forced me to think about trust as a design material — something you build deliberately through sequencing, language, and what you choose to show or hide at each moment. The instinct when working on an AI product is to explain the AI. I learned that the opposite works better: let users experience the output first, and trust follows from seeing it work.
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 18, color: "#0d0d0d", lineHeight: 1.85, marginTop: 20 }}>
          The dismissal feedback loop is technically a simple regeneration trigger. But positioned as &ldquo;your judgment is improving the system,&rdquo; it transforms the same interaction from cleanup into collaboration. That reframe changed everything about how the feature feels — without changing what it does.
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
          {["AI workflow design", "Conversation design", "UX strategy", "Copy systems", "Onboarding design"].map((skill, i, arr) => (
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

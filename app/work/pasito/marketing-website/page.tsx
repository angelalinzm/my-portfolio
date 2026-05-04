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

// ─── Page ──────────────────────────────────────────────────────────────────
export default function MarketingWebsitePage() {
  return (
    <CaseStudyLayout
      backHref="/work"
      eyebrow="Case Study · Pasito · July 2021"
      accentColor="#fb923c"
      headline="Building Pasito's brand and website from scratch."
      headlineEmphasis="scratch."
      subtitle="Brand identity, visual language, and a four-page site — designed end to end as my first project at a YC-backed fintech startup."
      heroImageLabel="Final website design"
      heroShapes={<HeroShapes />}
      meta={{
        role: "UX/UI Designer · Brand Designer",
        timeline: "July 2021",
        team: "Pauline Roteta · Julie Scotland · Angela Lin",
        tools: "Figma · Jira",
      }}
      prev={{ label: "Pasito MVP", href: "/work/pasito/mvp" }}
      next={{ label: "Copley AI Brief", href: "/work/copley/ai-brief" }}
    >

      {/* ══ OVERVIEW ═════════════════════════════════════════════════════ */}
      <Section className="!pt-16">
        <TwoColRow label="Overview" isLast>
          <p style={prose}>
            This was my first project at Pasito — and it set the tone for everything that followed. Pasito had a barebones website that didn&apos;t reflect what the product actually was or who it was for. With new messaging and a new product offering taking shape, the co-founders needed a website that could tell that story. I owned the design end to end: brand identity, visual language, layout, and IA across four pages.
          </p>
        </TwoColRow>
      </Section>

      {/* ══ THE PROBLEM ══════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The problem"
        title="How do we build a website that earns the trust of employer clients — and actually communicates what Pasito does?"
        emphasisWord="does?"
        emphasisColor="#0284c7"
        shape="star"
        shapeColor="#0284c7"
        spinDuration={8}
        dotColor="#0284c7"
      />

      {/* ══ RESEARCH ═════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Research"
        title="Learning the landscape."
        emphasisWord="landscape."
        emphasisColor="#22c55e"
        shape="diamond"
        shapeColor="#22c55e"
        spinDuration={10}
        dotColor="#22c55e"
      />

      <Section>
        <TwoColRow label="Research" isLast>
          <p style={prose} className="mb-8">
            Before designing anything, I audited the existing site with the co-founders. The verdict was quick: it didn&apos;t have the information or the design to attract clients. I moved into competitor research — studying how other fintech and HR benefits companies presented their product and mission online, and what messaging patterns were working. I brought findings back to Pauline and Julie, and we used that as the foundation to define what the new site needed to do.
          </p>
          <ImgBox label="Original Pasito website — before" hexColor="#aaa" height={320} />
        </TwoColRow>
      </Section>

      {/* ══ INFORMATION ARCHITECTURE ═════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Information architecture"
        title="Sorting the story."
        emphasisWord="story."
        emphasisColor="#fb923c"
        shape="triangle"
        shapeColor="#fb923c"
        spinDuration={12}
        dotColor="#fb923c"
      />

      <Section>
        <TwoColRow label="Site Structure" isLast>
          <p style={prose} className="mb-8">
            With the co-founders writing the new content and messaging, I worked with them to organize everything into a four-page structure. The goal was a clear path: understand the product, understand the people behind it, decide to get in touch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { bg: "#fef3c7", color: "amber", tag: "PAGE 01", title: "Homepage",      shape: "hexagon",  spinDir: "spin",  dur: 20, body: "Core value proposition and key differentiators from competitors. The entry point that earns the click to learn more." },
              { bg: "#dbeafe", color: "blue",  tag: "PAGE 02", title: "For Employers", shape: "diamond",  spinDir: "spinr", dur: 18, body: "How Pasito works for their client companies. Translating a complex product into a clear business case." },
              { bg: "#d1fae5", color: "green", tag: "PAGE 03", title: "About Us",      shape: "triangle", spinDir: "spin",  dur: 22, body: "The founders' story and leadership details. Building trust through the people behind the product." },
              { bg: "#ede9fe", color: "violet",tag: "PAGE 04", title: "Contact",       shape: "pentagon", spinDir: "spinr", dur: 16, body: "A form for potential clients to reach out. The conversion point — kept simple and frictionless." },
            ].map((card, i) => (
              <motion.div key={card.tag} {...fadeUp(i * 0.06)}>
                <BrightCard
                  color={card.color as "amber"}
                  bg={card.bg}
                  tag={card.tag}
                  title={card.title}
                  shape={card.shape as "hexagon"}
                  spinDir={card.spinDir as "spin"}
                  spinDuration={card.dur}
                  body={card.body}
                />
              </motion.div>
            ))}
          </div>
        </TwoColRow>
      </Section>

      {/* ══ DESIGN ═══════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Design"
        title="Brand identity and visual language."
        emphasisWord="visual language."
        emphasisColor="#22c55e"
        shape="star"
        shapeColor="#22c55e"
        spinDuration={6}
        dotColor="#22c55e"
      />

      <Section>
        <TwoColRow label="The Motif">
          <p style={prose} className="mb-8">
            I built the brand identity from scratch. The central motif — curvy shapes and lines that intertwine — was intentional: it reflects Pasito&apos;s core message of inclusivity and support, the idea that employers and employees are connected. The design system carried through every page: buttons carefully placed to guide users through the site, a layout built to lead rather than overwhelm.
          </p>
          <BrightCard
            color="pink"
            bg="#fce7f3"
            tag="DESIGN INTENT"
            title="Curves that connect."
            titleEmphasis="connect."
            shape="hexagon"
            spinDir="spinr"
            spinDuration={20}
            body="Curvy shapes and lines that intertwine — not decorative, but intentional. Pasito's mission is about connection between employers and employees. The visual language needed to reflect that."
          />
        </TwoColRow>

        <TwoColRow label="Deliverables" isLast>
          <p style={prose} className="mb-8">
            After multiple iterations in Figma, I delivered final designs for all four pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImgBox label="Homepage"      hexColor="#fb923c" height={380} />
            <ImgBox label="For Employers" hexColor="#0284c7" height={380} />
            <ImgBox label="About Us"      hexColor="#4f46e5" height={380} />
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
          The website shipped and went live — Pasito&apos;s public face as the company grew. It was the foundation the brand was built on through their YCombinator backing in 2022. Starting here, as the sole designer on my first project at my first startup, taught me what it means to own something fully: the decisions, the iterations, and the outcome.
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
          {["Brand Identity", "Visual Design", "Information Architecture", "UX/UI Design"].map((skill, i, arr) => (
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
          {["Figma", "Jira"].map((tool) => (
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

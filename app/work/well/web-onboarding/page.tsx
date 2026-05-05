"use client";

import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import SectionBreak from "@/components/case-study/SectionBreak";
import DotLabel from "@/components/case-study/DotLabel";
import PullQuote from "@/components/case-study/PullQuote";
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
  lineHeight: 1.8,
};

// ─── Diamond separator ──────────────────────────────────────────────────────
function Diamond() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <polygon points="4,0 8,4 4,8 0,4" stroke="#ddd" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function WebOnboardingPage() {
  return (
    <CaseStudyLayout
      backHref="/work"
      eyebrow="Case Study · Well · February – April 2022"
      accentColor="#0284c7"
      headline="A sign-up experience that makes users want to download."
      headlineEmphasis="want"
      subtitle="Multi-month project spanning illustration, responsive design, and real lessons in designing within business constraints."
      heroImageLabel="Web Onboarding — Final Mockup"
      heroImageSrc="/images/well/well-onboarding.png"
      heroShapes={<HeroShapes />}
      meta={{
        role: "UX/UI Designer · Illustrator",
        timeline: "Feb – Apr 2022",
        team: "Andrew Schwint · Colleen Curtis · Sebastian Vergara",
        tools: "Figma · Jira · Confluence",
      }}
      prev={{ label: "In-App Challenges", href: "/work/well/in-app-challenges" }}
      next={{ label: "Buttons", href: "/work/well/buttons" }}
    >

      {/* ══ OVERVIEW ═════════════════════════════════════════════════════ */}
      <Section className="!pt-16">
        <TwoColRow label="Overview" isLast>
          <p style={prose}>
            This was the first project I worked on at Well — and it set the tone for how I&apos;d approach the rest of my co-op. Product managers wanted a web-based sign-up flow to increase engagement and reach users who hadn&apos;t yet downloaded the app. What started as &lsquo;turn these wireframes into hi-fi designs&rsquo; quickly became a multi-month project spanning illustration, responsive design, and some real lessons in designing within business constraints.
          </p>
        </TwoColRow>
      </Section>

      {/* ══ THE PROBLEM ══════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Where it started"
        title="How do we create a sign-up that doesn't require downloading the app — and actually makes users want to?"
        emphasisWord="downloading"
        emphasisColor="#0284c7"
        shape="star"
        shapeColor="#0284c7"
        spinDuration={8}
        dotColor="#0284c7"
      />

      <Section>
        <TwoColRow label="The Problem" isLast>
          <p style={prose}>
            Product managers at Well wanted a web-based path to sign-up — a way to reach users who hadn&apos;t yet downloaded the app and convert them without requiring an install first.
          </p>
        </TwoColRow>
      </Section>

      {/* ══ THE START ════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Dissecting the brief"
        title="Lo-fi wireframes, a clear flow, and one open-ended brief."
        emphasisWord="open-ended"
        emphasisColor="#16a34a"
        shape="diamond"
        shapeColor="#16a34a"
        spinDuration={10}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="The Brief">
          <p style={prose}>
            The PMs came in with lo-fi wireframes and a defined flow. My job was to translate those into production-ready hi-fi designs and work directly with developers on what was technically feasible.
          </p>
        </TwoColRow>

        <TwoColRow label="Requirements" isLast>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { number: "01", text: "Translate lo-fi PM wireframes into hi-fi designs" },
              { number: "02", text: "Mirror the mobile app sign-up process with minimal steps" },
              { number: "03", text: "Create an original illustration that embodies Well's mission" },
            ].map(({ number, text }) => (
              <div key={number} className="flex items-start gap-4" style={{ background: "#f7f7f5", borderRadius: 14, padding: "18px 20px" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0284c7", opacity: 0.35, lineHeight: 1, flexShrink: 0, paddingTop: 2 }}>
                  {number}
                </span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 400, color: "#0d0d0d", lineHeight: 1.65 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </TwoColRow>
      </Section>

      {/* ══ RESEARCH ═════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Teaching myself"
        title="Responsive design — documented for the whole team."
        emphasisWord="documented"
        emphasisColor="#16a34a"
        shape="diamond"
        shapeColor="#16a34a"
        spinDuration={10}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="Responsive Design" isLast>
          <p style={prose} className="mb-5">
            This was my first time designing for responsive breakpoints. Rather than just figuring it out as I went, I spent time doing extensive research on breakpoint systems and responsive design principles — then documented everything I learned in Confluence for the broader design team&apos;s library.
          </p>
          <p style={prose}>
            That documentation became a reference resource for the team. It was one of the first times I understood that the work you do to help yourself learn has value beyond you.
          </p>
        </TwoColRow>
      </Section>

      {/* ══ DESIGN ═══════════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="The craft"
        title="A month of illustration, iteration, and storytelling."
        emphasisWord="iteration"
        emphasisColor="#16a34a"
        shape="star"
        shapeColor="#16a34a"
        spinDuration={6}
        dotColor="#16a34a"
      />

      <Section>
        <TwoColRow label="The Illustration">
          <p style={prose} className="mb-8">
            The brief asked for something that &lsquo;embodies Well&apos;s mission.&rsquo; That&apos;s an open-ended prompt — which meant I had a real creative opportunity, and real pressure to get it right.
          </p>
          <p style={prose} className="mb-8">
            I spent a full month creating, testing, and iterating on the illustration before my team and I were satisfied. The final design tells the story of a user moving forward through their health journey — stepping through a series of panels, each representing a different dimension of wellbeing: sleep, nutrition, habits, rewards. The figure moves through them with momentum, forward-facing, progressing toward their goals.
          </p>
          <BrightCard
            color="green"
            bg="#f0fdf4"
            tag="DESIGN INTENT"
            title="Well isn't a destination. It's a journey."
            titleEmphasis="journey."
            shape="diamond"
            spinDir="spin"
            spinDuration={18}
            body="The metaphor was intentional. The illustration needed to feel active — not aspirational in a passive way. The figure doesn't arrive somewhere. They're always moving."
          />
        </TwoColRow>

        {/* Full-width: Illustration iterations */}
        <div style={{ borderBottom: "0.5px solid #f5f5f2", padding: "40px 0" }}>
          <p className="mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#0d0d0d" }}>
            Illustration Iterations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["iteration-1", "iteration-2", "iteration-3", "iteration-4"].map((name) => (
              <div key={name} className="overflow-hidden" style={{ borderRadius: 16, border: "1px solid #e8e8e5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/well/${name}.png`} alt={name.replace("-", " ")} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Full-width: Final illustration */}
        <div style={{ padding: "40px 0" }}>
          <p className="mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#0d0d0d" }}>
            Final illustration
          </p>
          <div className="overflow-hidden" style={{ borderRadius: 16, border: "1px solid #e8e8e5" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/well/final.png" alt="Final illustration" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </Section>

      {/* ══ NAVIGATING CONSTRAINTS ═══════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Design reality"
        title="Good design isn't always the most elegant solution."
        emphasisWord="elegant"
        emphasisColor="#fb923c"
        shape="triangle"
        shapeColor="#fb923c"
        spinDuration={12}
        dotColor="#fb923c"
      />

      <Section>
        <TwoColRow label="Context">
          <p style={prose}>
            Over two months I was in constant conversation with PMs, developers, and the design team about what we could actually build. The biggest tension point: how do users get from the web onboarding to the app?
          </p>
        </TwoColRow>

        <TwoColRow label="The Tension" isLast>
          <p style={prose} className="mb-8">
            The ideal solution would have been a mobile deep link — tap a button, open the app. But that technology hadn&apos;t been developed yet, and there were security constraints that ruled it out. I explored a few alternatives before landing on the QR code approach the PMs had proposed. It wasn&apos;t my first choice aesthetically, but it was the right call given the constraints — it kept users from getting stuck on web without requiring infrastructure we didn&apos;t have.
          </p>
          <BrightCard
            color="amber"
            bg="#fff7ed"
            tag="DESIGN PRINCIPLE"
            title="Sometimes good design is the honest solution."
            titleEmphasis="honest"
            shape="triangle"
            spinDir="spinr"
            spinDuration={16}
            body="Not the most elegant one — the most truthful one. The QR code told users exactly what the product could do right now. That's not a compromise. That's a decision."
          />
        </TwoColRow>
      </Section>

      {/* ══ DELIVERABLES ═════════════════════════════════════════════════ */}
      <SectionBreak
        eyebrow="Final output"
        title="Desktop, tablet, and mobile — fully responsive."
        emphasisWord="mobile"
        emphasisColor="#4f46e5"
        shape="pentagon"
        shapeColor="#4f46e5"
        spinDuration={9}
        dotColor="#4f46e5"
      />

      <Section>
        <TwoColRow label="Deliverables" isLast>
          <p style={prose} className="mb-8">
            I delivered fully responsive designs across three breakpoints — desktop, tablet (iPad Pro 11&rdquo;), and mobile (iPhone X) — along with the final illustration.
          </p>
          <div className="flex gap-6 items-start">
            <div className="flex flex-col gap-2" style={{ flex: 1.4 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#0d0d0d", marginBottom: 4 }}>Desktop</p>
              <div className="flex flex-col gap-3">
                {["code", "agreement", "qr-code"].map((name) => (
                  <div key={name} style={{ borderRadius: 16, border: "1px solid #e8e8e5", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/well/${name}.png`} alt={name} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2" style={{ flex: 1 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#0d0d0d", marginBottom: 4 }}>iPad</p>
              <div style={{ borderRadius: 16, border: "1px solid #e8e8e5", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/well/ipad.png" alt="Tablet screens" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
            <div className="flex flex-col gap-2" style={{ flex: 0.7 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#0d0d0d", marginBottom: 4 }}>Mobile</p>
              <div style={{ borderRadius: 16, border: "1px solid #e8e8e5", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/well/mobile.png" alt="Mobile screens" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </TwoColRow>
      </Section>

      {/* ══ CLOSING ══════════════════════════════════════════════════════ */}
      <motion.div
        {...fadeUp()}
        className="px-8 md:px-12"
        style={{ paddingTop: 64, paddingBottom: 56 }}
      >
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 18, color: "#0d0d0d", lineHeight: 1.8 }}>
          The web onboarding shipped and was received positively. Looking back, the constraint that felt most frustrating at the time — the QR code — turned out to be the most clarifying design decision of the project. It forced me to ask: what does honesty look like in a product experience? The answer was simpler than I expected.
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
          {[
            "UX/UI Design",
            "Responsive Design",
            "Illustration",
            "Information Architecture",
            "Cross-functional Collaboration",
          ].map((skill, i, arr) => (
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
          {["Figma", "Jira", "Confluence"].map((tool) => (
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

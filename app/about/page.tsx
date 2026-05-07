"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const skills = [
  "Product Design",
  "UX Research",
  "Figma",
  "Information Architecture",
  "Design Systems",
  "Cursor",
  "Prototyping",
  "Brand Identity",
  "Usability Testing",
  "UX Strategy",
  "Claude Code",
  "Cross-functional Collaboration",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 md:px-10" style={{ background: "#f0f0ed" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {/* Top section: photo + bio */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="md:col-span-2"
          >
            <img
              src="/images/about.png"
              alt="Angela Lin"
              style={{ width: "100%", borderRadius: 20, display: "block" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="md:col-span-3 flex flex-col justify-center"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Product Designer · Boston, MA
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-5 leading-snug"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Hi there, I&apos;m Angela!
            </h2>
            <div
              className="space-y-4 text-lg text-brand-text/65 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              <p>
                I'm a product designer who thinks the best design problems are the ones nobody has solved cleanly yet — especially in AI, where the technology moves faster than the mental models people have for it.
              </p>
              <p>
                I've spent the last few years as a sole designer inside startups, owning product design end-to-end — from the first whiteboard sketch to engineer handoff. My sweet spot is the messy middle: ambiguous problems, fast-moving technology, and the challenge of building clarity out of chaos.
              </p>
              <p>
               I graduated from Northeastern University with a BS degree in Business Administration and Design major with a concentration in Entrepreneurial Startups and Experience Design.
              </p>
              <p>
               Outside of design, I'm an avid baker (deep in a sourdough era), a serial eater, and a traveler always planning the next trip. You'll also find me at the orchestra, painting, or building miniature houses with my hands. I'm all for living life in the moment, learning from every single experience, and of course, eating all the good food.
               </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="mailto:anglin1029@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
                style={{ background: "#0d0d0d", fontFamily: "'DM Sans', sans-serif" }}
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/angelalinzm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-brand-text transition-all hover:bg-black/5"
                style={{
                  border: "1.5px solid rgba(13,13,13,0.2)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                LinkedIn →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            Skills &{" "}
            <em style={{ color: "#0284c7", fontStyle: "normal" }}>expertise</em>
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium text-brand-text"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                company: "Copley",
                color: "#0284c7",
                role: "Product Designer",
                dates: "May 2024 – April 2026",
                desc: "Sole designer at a 0-to-1 AI marketing platform. Designed end-to-end workflows for generating and launching ad content across platforms, translated complex AI capabilities into production-ready experiences, and built the information architecture and design system for scalable AI marketing workflows.",
              },
              {
                company: "Smartleaf",
                color: "#0284c7",
                role: "Product Management & Design Co-op",
                dates: "Jan – Jun 2023",
                desc: "Devised research plans for key features in the Advisor Portal, managed and documented new feature development for handoff, and analyzed 1,000+ data points from 30+ financial clients to inform product decisions.",
              },
              {
                company: "Pasito",
                color: "#0284c7",
                role: "UX/UI Designer",
                dates: "Jun 2021 – Dec 2023",
                desc: "Crafted the MVP prototype from concept to development, led the website redesign with developers, and directed extensive user testing including A/B tests for a Y Combinator-backed fintech startup.",
              },
              {
                company: "Well",
                color: "#0284c7",
                role: "Product Design Co-op",
                dates: "Jan – Jun 2022",
                desc: "Researched and designed the first MVP for in-app challenges. Led design thinking workshops, ran 20+ user interviews, and delivered validated wireframes and user flows from an ambiguous brief in a single co-op term.",
              },
            ].map((exp) => (
              <div
                key={exp.company}
                className="rounded-2xl p-6"
                style={{ background: "#fff", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-brand-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif", color: exp.color }}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-brand-text/40 shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {exp.dates}
                  </span>
                </div>
                <p className="text-sm text-brand-text/50 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Resume download */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="flex justify-center"
        >
          <a
            href="/images/Angela_Lin_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "#0d0d0d", fontFamily: "'DM Sans', sans-serif" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

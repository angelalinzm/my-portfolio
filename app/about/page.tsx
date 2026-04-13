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
  "AI Product Design",
  "Prototyping",
  "Brand Identity",
  "Usability Testing",
  "UX Strategy",
  "Data-informed Design",
  "Cross-functional Collaboration",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-10" style={{ background: "#f0f0ed" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About{" "}
            <em className="italic" style={{ color: "#22c55e" }}>me</em>
          </h1>
        </motion.div>

        {/* Top section: photo + bio */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="md:col-span-2"
          >
            <ImagePlaceholder
              label="Add your photo here"
              aspectRatio="3/4"
              className="min-h-[300px]"
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
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hi, I&apos;m Angela Lin.
            </h2>
            <div
              className="space-y-4 text-brand-text/65 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              <p>
                [Placeholder — fill in your bio here. Tell your story: where you
                came from, what drives you, what kind of design problems you love
                to solve.]
              </p>
              <p>
                [Placeholder — share something about your background, education,
                or how you got into design. Make it personal and genuine.]
              </p>
              <p>
                [Placeholder — describe what you&apos;re looking for next or
                what kind of teams you thrive in.]
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
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills &{" "}
            <em className="italic" style={{ color: "#22c55e" }}>expertise</em>
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
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience
          </h2>
          <div className="space-y-6">
            {[
              { company: "Copley Advertising", role: "Sole Product Designer", dates: "2024–2026", desc: "[Placeholder — describe your role and impact here]" },
              { company: "Well", role: "Product Designer", dates: "Jan–Jun 2022", desc: "[Placeholder — describe your role and impact here]" },
              { company: "Pasito", role: "Lead Product Designer", dates: "Jun 2021–Present", desc: "[Placeholder — describe your role and impact here]" },
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
                    <p className="text-sm text-brand-green font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
          <button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "#0d0d0d", fontFamily: "'DM Sans', sans-serif" }}
            onClick={() => alert("Add your resume PDF link here")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download resume
          </button>
        </motion.div>
      </div>
    </div>
  );
}

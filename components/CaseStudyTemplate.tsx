"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Step {
  number: string;
  title: string;
  description: string;
}

interface CaseStudyTemplateProps {
  company: string;
  dates: string;
  title: string;
  description: string;
  role: string;
  timeline: string;
  deliverables: string;
  challenge: string;
  steps: Step[];
  skills: string[];
  nextProject?: {
    title: string;
    route: string;
    gradient: string;
  } | null;
}

export default function CaseStudyTemplate({
  company,
  dates,
  title,
  description,
  role,
  timeline,
  deliverables,
  challenge,
  steps,
  skills,
  nextProject,
}: CaseStudyTemplateProps) {
  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: "#f0f0ed" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease }}
          className="mb-10"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-text/60 hover:text-brand-text transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ← Back to work
          </Link>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-3"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {company} · {dates}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "'Urbanist', sans-serif", color: "#0d0d0d" }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="text-lg text-brand-text/70 mb-10 leading-relaxed max-w-2xl"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          {description}
        </motion.p>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 mb-12 rounded-2xl overflow-hidden"
          style={{ background: "#fff", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}
        >
          {[
            { label: "Role", value: role },
            { label: "Timeline", value: timeline },
            { label: "Company", value: company },
            { label: "Deliverables", value: deliverables },
          ].map((item, i) => (
            <div
              key={item.label}
              className="p-5 md:p-6"
              style={{
                borderRight: i < 3 ? "1px solid rgba(0,0,0,0.06)" : "none",
                borderBottom: "none",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest text-brand-text/40 mb-1.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="text-sm font-medium text-brand-text leading-snug"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          className="mb-16"
        >
          <ImagePlaceholder
            label="Hero image — Add your Figma export here"
            aspectRatio="16/9"
            className="min-h-[300px]"
          />
        </motion.div>

        {/* The challenge */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-5"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            The <em className="text-brand-green">challenge</em>
          </h2>
          <p
            className="text-base md:text-lg text-brand-text/70 leading-relaxed max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            {challenge}
          </p>
        </motion.section>

        {/* Image after challenge */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <ImagePlaceholder label="Research insights / problem framing" aspectRatio="3/2" />
        </motion.div>

        {/* Process steps */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-10"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            The <em className="text-brand-green">process</em>
          </h2>
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="flex gap-6 md:gap-8"
              >
                <div className="flex-shrink-0">
                  <span
                    className="text-4xl font-bold text-brand-text/10"
                    style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="pt-1">
                  <h3
                    className="text-lg font-semibold mb-2 text-brand-text"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base text-brand-text/60 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[1, 2].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: n * 0.1 }}
            >
              <ImagePlaceholder
                label={`Process image ${n} — Add your Figma export here`}
                aspectRatio="4/3"
              />
            </motion.div>
          ))}
        </div>

        {/* Full width final design */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <ImagePlaceholder
            label="Final design / key screens — Add your Figma export here"
            aspectRatio="16/9"
            className="min-h-[280px]"
          />
        </motion.div>

        {/* Skills & tools */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2
            className="text-lg font-semibold mb-4 text-brand-text"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Skills & tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-brand-text"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.1)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Next project */}
        {nextProject && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="pt-8 border-t border-black/10"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest text-brand-text/40 mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Next project
            </p>
            <Link
              href={nextProject.route}
              className="group flex items-center justify-between p-5 rounded-2xl transition-all hover:scale-[1.01]"
              style={{
                background: nextProject.gradient,
                boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {nextProject.title}
              </h3>
              <span className="text-white text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { companies } from "@/data/projects";
import CompanyCard from "@/components/CompanyCard";

type Company = (typeof companies)[0];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function StackingCard({ company, index }: { company: Company; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.98]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale, position: "relative", zIndex: index + 1 }}
      className="w-full"
    >
      <CompanyCard
        name={company.name}
        dates={company.dates}
        descriptor={company.descriptor}
        descriptorColor={company.descriptorColor}
        title={company.title}
        tags={company.tags}
        projects={company.projects as Parameters<typeof CompanyCard>[0]["projects"]}
      />
    </motion.div>
  );
}

interface WorkSectionProps {
  id?: string;
  /** Extra top padding — use on standalone /work page, not needed when embedded */
  standalonePage?: boolean;
}

export default function WorkSection({ id, standalonePage = false }: WorkSectionProps) {
  return (
    <section
      id={id}
      className={`w-full px-6 md:px-10 pb-24 ${standalonePage ? "pt-28 min-h-screen" : "pt-20"}`}
      style={{ background: "#f0f0ed" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-8"
        >
          <h2
            className={`font-bold mb-4 leading-tight ${
              standalonePage
                ? "text-4xl md:text-5xl lg:text-6xl"
                : "text-3xl md:text-4xl lg:text-5xl"
            }`}
            style={{ fontFamily: "'Playfair Display', serif", color: "#0d0d0d" }}
          >
            Selected{" "}
            <em style={{ color: "#16a34a", fontStyle: "normal" }}>
              work
            </em>
          </h2>
          <p
            className="text-base md:text-lg text-brand-text/60 whitespace-nowrap"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Product design across AI platforms, health tech, and consumer apps.
          </p>
        </motion.div>

        {/* Stacking company cards */}
        <div className="flex flex-col gap-6">
          {companies.map((company, i) => (
            <StackingCard key={company.id} company={company} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

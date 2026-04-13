"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard";

const chipColors: Record<string, { bg: string; text: string }> = {
  green: { bg: "#dcfce7", text: "#15803d" },
  blue: { bg: "#dbeafe", text: "#1d4ed8" },
  amber: { bg: "#fef3c7", text: "#b45309" },
  violet: { bg: "#ede9fe", text: "#7c3aed" },
};

interface Project {
  id: string;
  title: string;
  label: string;
  gradient: string;
  route: string;
  inProgress?: boolean;
  size?: "large" | "small";
}

interface CompanyCardProps {
  name: string;
  dates: string;
  descriptor: string;
  descriptorColor: string;
  title: string;
  tags: string[];
  projects: Project[];
  companyId?: string;
}

export default function CompanyCard({
  name,
  dates,
  descriptor,
  descriptorColor,
  title,
  tags,
  projects,
}: CompanyCardProps) {
  const chip = chipColors[descriptorColor] || chipColors.green;
  const largeProject = projects.find((p) => p.size === "large");
  const smallProjects = projects.filter((p) => p.size === "small");

  return (
    <div
      className="w-full rounded-3xl p-6 md:p-8"
      style={{
        background: "#ffffff",
        boxShadow: "0 2px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: "#0d0d0d",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {name}
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            background: "#f0f0ed",
            color: "#0d0d0d",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {dates}
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            background: chip.bg,
            color: chip.text,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {descriptor}
        </span>
      </div>

      {/* Company title */}
      <h3
        className="text-2xl md:text-3xl font-semibold mb-3 text-brand-text"
        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
      >
        {title}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-brand-text/50"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {tag}
          </span>
        ))}
        {tags.map((_, i) =>
          i < tags.length - 1 ? null : null
        )}
      </div>

      {/* Tag row with separators */}
      <div className="flex flex-wrap items-center gap-1.5 mb-5">
        {tags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-1.5">
            <span
              className="text-xs font-medium text-brand-text/50"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {tag}
            </span>
            {i < tags.length - 1 && (
              <span className="text-brand-text/20 text-xs">·</span>
            )}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/8 mb-6" />

      {/* Project grid */}
      {smallProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridTemplateColumns: smallProjects.length >= 2 ? "3fr 2fr" : "2fr 1.2fr" }}>
          {/* Large card */}
          {largeProject && (
            <div className="min-h-[220px] md:min-h-[260px]">
              <ProjectCard
                title={largeProject.title}
                label={largeProject.label}
                gradient={largeProject.gradient}
                route={largeProject.route}
                inProgress={largeProject.inProgress}
                size="large"
              />
            </div>
          )}
          {/* Small cards stacked */}
          <div className="flex flex-col gap-4">
            {smallProjects.map((p) => (
              <div key={p.id} className="flex-1 min-h-[120px]">
                <ProjectCard
                  title={p.title}
                  label={p.label}
                  gradient={p.gradient}
                  route={p.route}
                  inProgress={p.inProgress}
                  size="small"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Only one project */
        largeProject && (
          <div className="min-h-[220px]">
            <ProjectCard
              title={largeProject.title}
              label={largeProject.label}
              gradient={largeProject.gradient}
              route={largeProject.route}
              inProgress={largeProject.inProgress}
              size="large"
            />
          </div>
        )
      )}

      {/* View all link */}
      <div className="mt-5 flex justify-end">
        <Link
          href={`/work`}
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-text/60 hover:text-brand-text transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          View all {name} work →
        </Link>
      </div>
    </div>
  );
}

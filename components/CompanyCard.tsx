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
  imageSrc?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  comingSoon?: boolean;
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
        background: "#fafaf8",
        boxShadow: "0 2px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Company title */}
      <h3
        className="text-2xl md:text-3xl font-semibold mb-1 text-brand-text"
        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
      >
        {name}
      </h3>
      <p
        className="mb-6 flex items-center gap-1.5"
        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 400, color: "rgba(13,13,13,0.45)" }}
      >
        {title}
        <span style={{ fontSize: 14, lineHeight: 1, fontWeight: 700, color: "rgba(13,13,13,0.3)" }}>·</span>
        {dates}
      </p>

      {/* Project grid */}
      {smallProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridTemplateColumns: smallProjects.length >= 2 ? "3fr 2fr" : "2fr 1.2fr" }}>
          {/* Large card */}
          {largeProject && (
            <div className="min-h-[320px] md:min-h-[400px]">
              <ProjectCard
                title={largeProject.title}
                label={largeProject.label}
                gradient={largeProject.gradient}
                route={largeProject.route}
                inProgress={largeProject.inProgress}
                size="large"
                imageSrc={largeProject.imageSrc}
                imageFit={largeProject.imageFit}
                imagePosition={largeProject.imagePosition}
                comingSoon={largeProject.comingSoon}
              />
            </div>
          )}
          {/* Small cards stacked */}
          <div className="flex flex-col gap-4">
            {smallProjects.map((p) => (
              <div key={p.id} className="flex-1 min-h-[180px]">
                <ProjectCard
                  title={p.title}
                  label={p.label}
                  gradient={p.gradient}
                  route={p.route}
                  inProgress={p.inProgress}
                  size="small"
                  imageSrc={p.imageSrc}
                  imageFit={p.imageFit}
                  imagePosition={p.imagePosition}
                  comingSoon={p.comingSoon}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Only one project */
        largeProject && (
          <div className="min-h-[400px]">
            <ProjectCard
              title={largeProject.title}
              label={largeProject.label}
              gradient={largeProject.gradient}
              route={largeProject.route}
              inProgress={largeProject.inProgress}
              size="large"
              imageSrc={largeProject.imageSrc}
            />
          </div>
        )
      )}

    </div>
  );
}

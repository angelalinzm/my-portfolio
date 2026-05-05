"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  label: string;
  gradient: string;
  route: string;
  inProgress?: boolean;
  comingSoon?: boolean;
  size?: "large" | "small";
  imageSrc?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
}

export default function ProjectCard({
  title,
  label,
  gradient,
  route,
  inProgress = false,
  comingSoon = false,
  size = "small",
  imageSrc,
  imageFit = "cover",
  imagePosition = "top",
}: ProjectCardProps) {
  const inner = (
    <motion.div
      whileHover={comingSoon ? {} : { y: -4, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl h-full min-h-[160px]"
      style={{ background: imageSrc && imageFit === "cover" ? undefined : gradient, cursor: comingSoon ? "default" : "pointer", filter: comingSoon ? "grayscale(60%)" : "none" }}
    >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: imageFit, objectPosition: imagePosition }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: comingSoon
              ? "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)",
          }}
        />

        {/* In progress badge */}
        {inProgress && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-white"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              In progress
            </span>
          </div>
        )}

        {/* Coming soon overlay */}
        {comingSoon && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-white tracking-widest uppercase"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Coming soon
            </span>
          </div>
        )}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-white/70 block mb-1.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {label}
          </span>
          <div className="flex items-end justify-between">
            <h4
              className="text-white font-bold leading-snug"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: size === "large" ? "1.65rem" : "1.35rem",
              }}
            >
              {title}
            </h4>
            {!comingSoon && (
              <span className="text-white text-lg ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                →
              </span>
            )}
          </div>
        </div>
    </motion.div>
  );

  if (comingSoon) {
    return <div className="block h-full min-h-[160px]">{inner}</div>;
  }

  return <Link href={route} className="block h-full min-h-[160px]">{inner}</Link>;
}

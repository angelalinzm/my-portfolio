"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  label: string;
  gradient: string;
  route: string;
  inProgress?: boolean;
  size?: "large" | "small";
}

export default function ProjectCard({
  title,
  label,
  gradient,
  route,
  inProgress = false,
  size = "small",
}: ProjectCardProps) {
  return (
    <Link href={route} className="block h-full min-h-[160px]">
      <motion.div
        whileHover={{ y: -4, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative overflow-hidden rounded-2xl h-full min-h-[160px]"
        style={{ background: gradient }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
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

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <span
            className="text-xs font-medium uppercase tracking-widest text-white/60 block mb-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {label}
          </span>
          <div className="flex items-end justify-between">
            <h4
              className="text-white font-semibold leading-snug"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: size === "large" ? "1.1rem" : "0.95rem",
              }}
            >
              {title}
            </h4>
            <span className="text-white text-lg ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

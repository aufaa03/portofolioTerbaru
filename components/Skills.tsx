"use client";

import { useLang } from "@/lib/lang-context";
import { TECHNICAL_SKILLS, SOFT_SKILLS } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";
import {
  Monitor, Database, Search, Users, Brain, Zap,
  Crown, MessageCircle, Clock,
} from "lucide-react";

// ── Icon map shared by both skill arrays ──────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Monitor, Database, Search, Users, Brain, Zap,
  Crown, MessageCircle, Clock,
};

// Stagger delay helper
const DELAYS = ["", "delay-75", "delay-150", "delay-200", "delay-300", "delay-500"];

export default function Skills() {
  const { lang } = useLang();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 relative"
      aria-label="Professional expertise section"
    >
      {/* Ambient glow accents */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">

        {/* ── Section Header ── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""} mb-16`}
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            — Expertise
          </p>
          <h2 className="section-title text-white">
            {lang === "id" ? "Keahlian Profesional" : "Professional Expertise"}
          </h2>
          <p className="mt-4 text-sm text-white/40 max-w-xl leading-relaxed">
            {lang === "id"
              ? "Kemampuan yang siap diterapkan di berbagai lingkungan kerja — dari perusahaan, startup, administrasi, hingga operasi digital."
              : "Capabilities ready to apply across diverse work environments — from companies, startups, administration, to digital operations."}
          </p>
          <div className="accent-line mt-5" />
        </div>

        {/* ── Expertise Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {TECHNICAL_SKILLS.map((skill, i) => {
            const Icon = ICON_MAP[skill.icon] ?? Zap;
            return (
              <div
                key={skill.id}
                className={`animate-reveal ${DELAYS[i] ?? ""} ${inView ? "is-visible" : ""}
                  group relative overflow-hidden
                  rounded-2xl border border-white/[0.07]
                  bg-white/[0.03] backdrop-blur-sm
                  p-6
                  hover:border-blue-500/30
                  hover:bg-white/[0.055]
                  hover:-translate-y-1
                  transition-all duration-300 ease-out
                  cursor-default`}
              >
                {/* Card glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                                bg-gradient-to-br from-blue-600/[0.06] to-transparent
                                transition-opacity duration-300 pointer-events-none" />

                {/* Icon badge */}
                <div className="relative mb-5 w-11 h-11 rounded-xl
                                bg-gradient-to-br from-blue-600/20 to-indigo-600/10
                                border border-blue-500/20
                                flex items-center justify-center
                                group-hover:border-blue-400/40 group-hover:from-blue-600/30
                                transition-all duration-300">
                  <Icon size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="relative text-sm font-semibold text-white/85
                               group-hover:text-white transition-colors duration-200 mb-2 leading-snug">
                  {lang === "id" ? skill.title.id : skill.title.en}
                </h3>

                {/* Description */}
                <p className="relative text-xs text-white/40 leading-relaxed
                              group-hover:text-white/55 transition-colors duration-200">
                  {lang === "id" ? skill.description.id : skill.description.en}
                </p>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px
                                bg-gradient-to-r from-transparent via-blue-500/0 to-transparent
                                group-hover:via-blue-500/30 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* ── Professional / Soft Skills ── */}
        <div className={`animate-reveal delay-300 ${inView ? "is-visible" : ""}`}>
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-6">
              {lang === "id" ? "Atribut Profesional" : "Professional Attributes"}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {SOFT_SKILLS.map((skill) => {
                const Icon = ICON_MAP[skill.icon] ?? Zap;
                return (
                  <div
                    key={skill.id}
                    className="flex items-center gap-3 p-3 rounded-xl
                               bg-white/[0.03] border border-white/[0.06]
                               hover:bg-white/[0.06] hover:border-blue-500/20
                               transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20
                                    flex items-center justify-center flex-shrink-0
                                    group-hover:bg-blue-600/20 transition-colors">
                      <Icon size={14} className="text-blue-400" />
                    </div>
                    <span className="text-xs font-medium text-white/55
                                     group-hover:text-white/80 transition-colors leading-tight">
                      {lang === "id" ? skill.labelId : skill.labelEn}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Tools tag cloud */}
            <div className="pt-5 border-t border-white/[0.05]">
              <p className="text-[10px] text-white/25 uppercase tracking-widest mb-3">
                {lang === "id" ? "Tools & Platform" : "Tools & Platforms"}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "VS Code", "Vercel", "npm",
                  "Chrome DevTools", "Git", "Google Workspace", "Laravel", 
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-md
                               bg-white/[0.04] border border-white/[0.07] text-white/35
                               hover:text-white/60 hover:border-white/15 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

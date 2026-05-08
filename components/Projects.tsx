"use client";

import { useLang } from "@/lib/lang-context";
import { PROJECTS } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";
import { ExternalLink, Github, ArrowRight, Layout, BarChart2, User } from "lucide-react";

const PROJECT_ICONS = [Layout, BarChart2, User];

// Unique gradient for each project card
const CARD_ACCENTS = [
  "from-blue-600/10 to-transparent",
  "from-purple-600/10 to-transparent",
  "from-emerald-600/10 to-transparent",
];

export default function Projects() {
  const { lang, t } = useLang();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-label="Projects section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* ── Section Header ── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""} mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4`}
        >
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              — Featured Work
            </p>
            <h2 className="section-title text-white">
              {lang === "id" ? "Proyek Pilihan" : "Featured Projects"}
            </h2>
            <div className="accent-line mt-4" />
          </div>
          <p className="text-sm text-white/35 max-w-xs text-right hidden sm:block">
            {lang === "id"
              ? "Konsep proyek premium yang menunjukkan kemampuan teknis."
              : "Premium concept projects showcasing technical capabilities."}
          </p>
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const Icon = PROJECT_ICONS[i];
            const accent = CARD_ACCENTS[i];

            return (
              <article
                key={project.id}
                className={`glass-card-hover relative overflow-hidden group animate-reveal delay-${i * 100} ${inView ? "is-visible" : ""}`}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-48 bg-gradient-to-b ${accent} pointer-events-none`} />

                <div className="relative p-6 md:p-7 flex flex-col h-full">
                  {/* Project icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/8
                                  flex items-center justify-center mb-5
                                  group-hover:bg-blue-600/15 group-hover:border-blue-500/30 transition-all duration-300">
                    <Icon size={20} className="text-white/40 group-hover:text-blue-400 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white mb-2 leading-tight">
                      {t(project.title)}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-5">
                      {t(project.description)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-md
                                     bg-white/[0.05] border border-white/8 text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 text-xs font-semibold text-white/50
                                 hover:text-blue-400 transition-colors"
                      aria-label={`Live demo of ${t(project.title)}`}
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs font-semibold text-white/50
                                 hover:text-white transition-colors ml-auto"
                      aria-label={`GitHub for ${t(project.title)}`}
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className={`mt-10 text-center animate-reveal delay-300 ${inView ? "is-visible" : ""}`}>
          <a
            href="https://github.com/aufaa208"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            {lang === "id" ? "Lihat Semua di GitHub" : "View All on GitHub"}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

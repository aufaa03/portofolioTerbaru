"use client";

import { useLang } from "@/lib/lang-context";
import { EXPERIENCE_ITEMS } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";
import { Briefcase, Trophy, Users, CalendarDays } from "lucide-react";

const ICON_MAP = {
  work: Briefcase,
  award: Trophy,
  leadership: Users,
};

const TYPE_COLORS = {
  work: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  award: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  leadership: "bg-purple-500/10 border-purple-500/30 text-purple-400",
};

const TYPE_LABELS = {
  work: { id: "Magang", en: "Internship" },
  award: { id: "Prestasi", en: "Achievement" },
  leadership: { id: "Kepemimpinan", en: "Leadership" },
};

export default function Experience() {
  const { lang, t } = useLang();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      className="py-24 lg:py-32 relative"
      aria-label="Experience section"
    >
      {/* BG accent */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-purple-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* ── Section Header ── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""} mb-16`}
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            — Track Record
          </p>
          <h2 className="section-title text-white">
            {lang === "id" ? "Pengalaman" : "Experience"}
          </h2>
          <div className="accent-line mt-4" />
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8 md:pl-16">
            {EXPERIENCE_ITEMS.map((item, i) => {
              const Icon = ICON_MAP[item.type as keyof typeof ICON_MAP];
              const colorClass = TYPE_COLORS[item.type as keyof typeof TYPE_COLORS];
              const typeLabel = TYPE_LABELS[item.type as keyof typeof TYPE_LABELS];

              // Resolve bilingual strings
              const company =
                typeof item.company === "string"
                  ? item.company
                  : t(item.company as { id: string; en: string });
              const role = t(item.role);
              const points = item.points[lang];

              return (
                <div
                  key={item.id}
                  className={`relative animate-reveal delay-${i * 100} ${inView ? "is-visible" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute -left-16 top-6 w-8 h-8 rounded-full
                                  bg-[#111] border border-white/10 items-center justify-center z-10
                                  shadow-lg shadow-black/50">
                    <Icon size={13} className="text-white/50" />
                  </div>

                  {/* Card */}
                  <div className="glass-card-hover p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white truncate">{company}</h3>
                        <p className="text-sm text-white/50 mt-0.5">{role}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md
                                          text-[10px] font-semibold border ${colorClass}`}>
                          <Icon size={10} />
                          {lang === "id" ? typeLabel.id : typeLabel.en}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-white/30">
                          <CalendarDays size={10} />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/55">
                          <span className="mt-2 w-1 h-1 rounded-full bg-blue-400/60 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

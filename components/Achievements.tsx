"use client";

import { useLang } from "@/lib/lang-context";
import { ACHIEVEMENTS } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";
import { Trophy, Code2, Users } from "lucide-react";

// Icon map
const ICON_MAP: Record<string, React.ElementType> = {
  Trophy,
  Code2,
  Users,
};

// Badge color variants — matches existing TYPE_COLORS pattern in Experience.tsx
const BADGE_COLORS: Record<string, string> = {
  amber: "bg-amber-500/10 border-amber-500/25 text-amber-400",
  blue:  "bg-blue-500/10  border-blue-500/25  text-blue-400",
  purple:"bg-purple-500/10 border-purple-500/25 text-purple-400",
};

// Icon container glow — subtle tint per badge color
const ICON_BG: Record<string, string> = {
  amber:  "from-amber-600/20 to-amber-600/5 border-amber-500/20 group-hover:border-amber-400/35 group-hover:from-amber-600/28",
  blue:   "from-blue-600/20  to-blue-600/5  border-blue-500/20  group-hover:border-blue-400/35  group-hover:from-blue-600/28",
  purple: "from-purple-600/20 to-purple-600/5 border-purple-500/20 group-hover:border-purple-400/35 group-hover:from-purple-600/28",
};

const ICON_TEXT: Record<string, string> = {
  amber:  "text-amber-400  group-hover:text-amber-300",
  blue:   "text-blue-400   group-hover:text-blue-300",
  purple: "text-purple-400 group-hover:text-purple-300",
};

const CARD_HOVER_GLOW: Record<string, string> = {
  amber:  "from-amber-600/[0.06]",
  blue:   "from-blue-600/[0.06]",
  purple: "from-purple-600/[0.06]",
};

const BOTTOM_LINE: Record<string, string> = {
  amber:  "group-hover:via-amber-500/25",
  blue:   "group-hover:via-blue-500/25",
  purple: "group-hover:via-purple-500/25",
};

const CARD_HOVER_BORDER: Record<string, string> = {
  amber:  "hover:border-amber-500/25",
  blue:   "hover:border-blue-500/25",
  purple: "hover:border-purple-500/25",
};

const STAGGER_DELAYS = ["", "delay-150", "delay-300"];

export default function Achievements() {
  const { lang } = useLang();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="achievements"
      className="py-24 lg:py-32 relative"
      aria-label="Achievements section"
    >
      {/* Ambient glow accents — same low-opacity style as other sections */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-amber-600/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-64 h-64 bg-purple-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">

        {/* ── Section Header ── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""} mb-16`}
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            — Milestones
          </p>
          <h2 className="section-title text-white">
            {lang === "id" ? "Prestasi" : "Achievements"}
          </h2>
          <p className="mt-4 text-sm text-white/40 max-w-xl leading-relaxed">
            {lang === "id"
              ? "Pencapaian yang mencerminkan konsistensi belajar, pengalaman, dan perkembangan selama menempuh pendidikan di bidang teknologi."
              : "Milestones that reflect consistent learning, experience, and growth throughout my journey in technology education."}
          </p>
          <div className="accent-line mt-5" />
        </div>

        {/* ── Achievement Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Trophy;
            const color = item.badgeColor;

            return (
              <div
                key={item.id}
                className={`
                  animate-reveal ${STAGGER_DELAYS[i] ?? ""} ${inView ? "is-visible" : ""}
                  group relative overflow-hidden
                  rounded-2xl border border-white/[0.07]
                  bg-white/[0.03] backdrop-blur-sm
                  p-6
                  ${CARD_HOVER_BORDER[color]}
                  hover:bg-white/[0.055]
                  hover:-translate-y-1
                  transition-all duration-300 ease-out
                  cursor-default
                `}
              >
                {/* Card glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                              bg-gradient-to-br ${CARD_HOVER_GLOW[color]} to-transparent
                              transition-opacity duration-300 pointer-events-none`}
                />

                {/* Top row: icon badge + category badge */}
                <div className="relative flex items-start justify-between mb-5">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl
                                bg-gradient-to-br ${ICON_BG[color]}
                                border
                                flex items-center justify-center
                                transition-all duration-300 flex-shrink-0`}
                  >
                    <Icon
                      size={18}
                      className={`${ICON_TEXT[color]} transition-colors duration-300`}
                    />
                  </div>

                  {/* Category badge */}
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md
                                text-[10px] font-semibold border
                                ${BADGE_COLORS[color]}`}
                  >
                    {lang === "id" ? item.badge.id : item.badge.en}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="relative text-sm font-semibold text-white/85
                             group-hover:text-white transition-colors duration-200 mb-2 leading-snug"
                >
                  {lang === "id" ? item.title.id : item.title.en}
                </h3>

                {/* Description */}
                <p
                  className="relative text-xs text-white/40 leading-relaxed
                             group-hover:text-white/55 transition-colors duration-200"
                >
                  {lang === "id" ? item.description.id : item.description.en}
                </p>

                {/* Subtle bottom accent line */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-px
                              bg-gradient-to-r from-transparent via-transparent to-transparent
                              ${BOTTOM_LINE[color]} transition-all duration-300`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

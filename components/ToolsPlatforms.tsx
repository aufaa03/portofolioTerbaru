"use client";

import { useLang } from "@/lib/lang-context";
import { TOOLS } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";

export default function ToolsPlatforms() {
  const { lang } = useLang();
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="tools"
      className="py-16 lg:py-20 relative"
      aria-label="Tools and platforms section"
    >
      {/* Faint ambient accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-12
                      bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="section-container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""}`}
        >
          {/* ── Header ── */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-blue-400/70 uppercase tracking-widest mb-2">
              — Workflow
            </p>
            <h2 className="text-lg font-semibold text-white/80">
              {lang === "id" ? "Tools & Platform" : "Tools & Platforms"}
            </h2>
            <p className="mt-1.5 text-xs text-white/35 max-w-lg leading-relaxed">
              {lang === "id"
                ? "Beberapa tools dan platform yang familiar digunakan dalam workflow kerja dan pengembangan digital."
                : "Tools and platforms commonly used in digital work and development workflows."}
            </p>
          </div>

          {/* ── Pills ── */}
          <div className="flex flex-wrap gap-2.5">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="
                  inline-flex items-center
                  px-4 py-2
                  rounded-full
                  text-xs font-medium
                  text-white/50
                  bg-white/[0.04]
                  border border-white/[0.08]
                  hover:text-white/80
                  hover:bg-white/[0.07]
                  hover:border-blue-500/25
                  hover:-translate-y-px
                  transition-all duration-200 ease-out
                  cursor-default
                  select-none
                "
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Thin separator line below */}
          <div className="mt-10 h-px w-full bg-gradient-to-r
                          from-transparent via-white/[0.06] to-transparent" />
        </div>
      </div>
    </section>
  );
}

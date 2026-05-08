"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { ABOUT_CONTENT } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";

export default function About() {
  const { t } = useLang();
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-label="About section"
    >
      {/* Subtle background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* ── Section Header ── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""} mb-16`}
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            — Who I Am
          </p>
          <h2 className="section-title gradient-text">
            {t(ABOUT_CONTENT.title)}
          </h2>
          <div className="accent-line mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: Text ── */}
          <div className="space-y-6">
            {ABOUT_CONTENT.paragraphs[t({ id: "id", en: "en" }) as "id" | "en"].map(
              (para, i) => (
                <p
                  key={i}
                  className={`text-white/65 leading-relaxed text-base animate-reveal delay-${(i + 1) * 100} ${
                    inView ? "is-visible" : ""
                  }`}
                >
                  {para}
                </p>
              )
            )}

            {/* ── Stats ── */}
            <div className={`grid grid-cols-3 gap-4 pt-6 animate-reveal delay-400 ${inView ? "is-visible" : ""}`}>
              {ABOUT_CONTENT.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="glass-card p-4 text-center hover:border-blue-500/20 transition-colors"
                >
                  <p className="text-2xl font-bold gradient-text-accent">{stat.value}</p>
                  <p className="text-[10px] text-white/40 mt-1 leading-tight">
                    {t(stat.label)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className={`animate-reveal delay-300 ${inView ? "is-visible" : ""}`}>
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent blur-xl" />

              {/* Main hiking image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/sumbing1.jpg"
                  alt="Muhammad Aufa Rozaky — Mountain hiking, Gunung Sumbing"
                  fill
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/50 via-transparent to-transparent" />
              </div>

              {/* Caption card */}
              <div className="absolute bottom-4 left-4 right-4 glass-card p-3">
                <p className="text-xs text-white/70 font-medium">
                  📍 Eksplorasi & Petualangan
                </p>
                <p className="text-[10px] text-white/35 mt-0.5">
                  Mendaki gunung, membaca, & menjelajahi dunia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

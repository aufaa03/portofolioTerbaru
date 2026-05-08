"use client";

import { useLang } from "@/lib/lang-context";
import { WHY_ME } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";
import {
  Zap, CheckCircle, Search, Shuffle, MessageCircle, TrendingUp,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap, CheckCircle, Search, Shuffle, MessageCircle, TrendingUp,
};

export default function WhyMe() {
  const { lang, t } = useLang();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-label="Why work with me section"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d] to-transparent pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="section-container">
        {/* ── Section Header ── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""} mb-16 text-center`}
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            — Value Proposition
          </p>
          <h2 className="section-title text-white mx-auto">
            {lang === "id" ? "Mengapa Bekerja Sama?" : "Why Work With Me?"}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            {lang === "id"
              ? "Lebih dari sekadar skill teknis — saya membawa etos kerja, ketepatan, dan dedikasi pada setiap proyek."
              : "Beyond technical skills — I bring work ethic, precision, and dedication to every project."}
          </p>
          <div className="accent-line mt-4 mx-auto" />
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_ME.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Zap;
            return (
              <div
                key={item.icon}
                className={`glass-card-hover p-6 relative overflow-hidden animate-reveal delay-${i * 100} ${inView ? "is-visible" : ""}`}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20
                                flex items-center justify-center mb-4
                                group-hover:bg-blue-600/20 transition-colors">
                  <Icon size={18} className="text-blue-400" />
                </div>

                <h3 className="text-sm font-bold text-white mb-2">
                  {t(item.title)}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {t(item.desc)}
                </p>

                {/* Corner accent */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-600/5 blur-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

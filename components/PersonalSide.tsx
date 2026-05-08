"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { PERSONAL_CONTENT } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";
import { Mountain, BookOpen, Compass } from "lucide-react";

const ACTIVITY_ICONS: Record<string, React.ElementType> = {
  Mountain,
  BookOpen,
  Compass,
};

export default function PersonalSide() {
  const { lang, t } = useLang();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-label="Personal side section"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* ── Section Header ── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""} mb-16`}
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            — The Human Side
          </p>
          <h2 className="section-title gradient-text">
            {t(PERSONAL_CONTENT.title)}
          </h2>
          <div className="accent-line mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* ── Left Text ── */}
          <div className={`lg:col-span-2 space-y-6 animate-reveal ${inView ? "is-visible" : ""}`}>
            <p className="text-base text-white/60 leading-relaxed">
              {t(PERSONAL_CONTENT.description)}
            </p>

            {/* Activity cards */}
            <div className="space-y-3 pt-2">
              {PERSONAL_CONTENT.activities.map((activity) => {
                const Icon = ACTIVITY_ICONS[activity.icon] ?? Mountain;
                return (
                  <div
                    key={activity.id}
                    className="flex items-center gap-3 p-3.5 rounded-xl
                               bg-white/[0.03] border border-white/6
                               hover:border-blue-500/20 hover:bg-white/[0.05]
                               transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/15
                                    flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-white/65">
                      {lang === "id" ? activity.labelId : activity.labelEn}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Photo Gallery ── */}
          <div className={`lg:col-span-3 animate-reveal delay-200 ${inView ? "is-visible" : ""}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PERSONAL_CONTENT.gallery.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-2xl group
                              ${i === 0 ? "col-span-2 sm:col-span-2 aspect-video" : "aspect-square"}`}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10" />

                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Caption on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-2 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="glass-card px-2 py-1.5">
                      <p className="text-[10px] text-white/70 truncate">{photo.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

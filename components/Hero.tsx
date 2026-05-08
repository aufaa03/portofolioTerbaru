"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { HERO_CONTENT, SITE_META } from "@/lib/content";
import { ArrowRight, Mail, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Background Glow ── */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Grid Pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Content ── */}
          <div className="order-2 lg:order-1 space-y-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              {t(HERO_CONTENT.badge)}
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
                — Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="gradient-text">Muhammad Aufa</span>
                <br />
                <span className="text-white">Rozaky</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/50 font-medium tracking-wide">
              {t(HERO_CONTENT.subheadline)}
            </p>

            {/* Description */}
            <p className="text-base text-white/60 leading-relaxed max-w-lg">
              {t(HERO_CONTENT.description)}
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-white/35">
              <MapPin size={13} />
              <span>Indonesia</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary group"
              >
                {t(HERO_CONTENT.cta1)}
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-outline"
              >
                <Mail size={15} />
                {t(HERO_CONTENT.cta2)}
              </button>
            </div>

            {/* Trust text */}
            <div className="flex items-center gap-2 text-xs text-white/30">
              <Sparkles size={11} className="text-blue-400" />
              <span>{t(HERO_CONTENT.trustText)}</span>
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/20 via-transparent to-slate-600/10 blur-2xl" />

              {/* Profile frame */}
              <div className="profile-frame relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/profesional.jpg"
                  alt="Muhammad Aufa Rozaky — Web Developer"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/40 via-transparent to-transparent" />
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-4 -left-6 glass-card px-4 py-3 flex items-center gap-3 shadow-xl">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <Sparkles size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Top 5 LKS</p>
                  <p className="text-[10px] text-white/40">Web Development</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-4 glass-card px-3 py-2">
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  Fresh Grad
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent group-hover:from-white/40 transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
}

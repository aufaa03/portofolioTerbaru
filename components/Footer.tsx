"use client";

import { useLang } from "@/lib/lang-context";
import { FOOTER_CONTENT, NAV_ITEMS, SITE_META } from "@/lib/content";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
  const { lang, t } = useLang();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] py-12" aria-label="Footer">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="section-container">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold gradient-text-accent mb-3">MAR</p>
            <p className="text-xs text-white/30 leading-relaxed">
              {lang === "id"
                ? "Web Developer & Fresh Graduate yang siap membangun solusi digital yang bermakna."
                : "Web Developer & Fresh Graduate ready to build meaningful digital solutions."}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">
              {lang === "id" ? "Navigasi" : "Navigate"}
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.href)}
                  className="text-xs text-white/40 hover:text-white/80 text-left transition-colors"
                >
                  {lang === "id" ? item.labelId : item.labelEn}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">
              {lang === "id" ? "Temukan Saya" : "Find Me"}
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: SITE_META.github, label: "GitHub" },
                { Icon: Linkedin, href: SITE_META.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: SITE_META.instagram, label: "Instagram" },
                { Icon: Mail, href: `mailto:${SITE_META.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/8
                             flex items-center justify-center text-white/40
                             hover:text-white hover:border-white/20 hover:bg-white/8
                             transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">
            {t(FOOTER_CONTENT.text)}
          </p>
          <p className="text-[11px] text-white/20 flex items-center gap-1">
            {lang === "id" ? "Dibuat dengan" : "Made with"}
            <Heart size={10} className="text-red-400/60 fill-red-400/60" />
            {lang === "id" ? "oleh Aufa" : "by Aufa"}
          </p>
        </div>
      </div>
    </footer>
  );
}

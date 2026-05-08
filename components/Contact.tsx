"use client";

import { useLang } from "@/lib/lang-context";
import { CONTACT_CONTENT, SITE_META } from "@/lib/content";
import { useInView } from "@/lib/use-in-view";
import { Mail, Github, Linkedin, Instagram, Send, ArrowRight } from "lucide-react";

const SOCIAL_LINKS = [
  {
    id: "email",
    label: "Email",
    value: SITE_META.email,
    href: `mailto:${SITE_META.email}`,
    Icon: Mail,
    color: "hover:text-blue-400 hover:border-blue-500/30",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/aufaa03",
    href: SITE_META.github,
    Icon: Github,
    color: "hover:text-white hover:border-white/20",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-aufa-rozaky-689730364",
    href: SITE_META.linkedin,
    Icon: Linkedin,
    color: "hover:text-blue-500 hover:border-blue-500/30",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@aufaa_fafa",
    href: SITE_META.instagram,
    Icon: Instagram,
    color: "hover:text-pink-400 hover:border-pink-500/30",
  },
];

export default function Contact() {
  const { lang, t } = useLang();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-reveal ${inView ? "is-visible" : ""} max-w-2xl mx-auto text-center`}
        >
          {/* Label */}
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            — Get in Touch
          </p>

          {/* Title */}
          <h2 className="section-title gradient-text mb-4">
            {t(CONTACT_CONTENT.title)}
          </h2>

          {/* Subtitle */}
          <p className="text-white/50 text-base leading-relaxed mb-10">
            {t(CONTACT_CONTENT.subtitle)}
          </p>

          {/* ── Social Links ── */}
          <div className="grid sm:grid-cols-2 gap-3 mb-10 text-left">
            {SOCIAL_LINKS.map(({ id, label, value, href, Icon, color }) => (
              <a
                key={id}
                href={href}
                target={id !== "email" ? "_blank" : undefined}
                rel={id !== "email" ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-4 rounded-xl
                           glass-card border border-white/6
                           text-white/50 transition-all duration-200 group
                           ${color}`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8
                                flex items-center justify-center flex-shrink-0
                                group-hover:border-current transition-colors">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium truncate">{value}</p>
                </div>
                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            ))}
          </div>

          {/* ── Primary CTA ── */}
          <a
            href={`mailto:${SITE_META.email}`}
            className="btn-primary text-sm px-8 py-3.5 animate-glow-pulse inline-flex"
          >
            <Send size={15} />
            {t(CONTACT_CONTENT.cta)}
          </a>
        </div>
      </div>
    </section>
  );
}

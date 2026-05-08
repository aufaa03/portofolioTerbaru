"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/lib/lang-context";
import { NAV_ITEMS, SITE_META } from "@/lib/content";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ── Scroll detection ──────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section tracking ───────────────────────────
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.key);
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0b0b0b]/80 border-b border-white/[0.06] shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="section-container flex items-center justify-between h-16 lg:h-18"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="text-xl font-bold tracking-wider gradient-text-accent hover:opacity-80 transition-opacity"
          aria-label="Muhammad Aufa Rozaky — Home"
        >
          MAR
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.key
                    ? "text-white bg-white/8"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {lang === "id" ? item.labelId : item.labelEn}
              </button>
            </li>
          ))}
        </ul>

        {/* ── Right Controls ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                       border border-white/10 text-white/60 hover:text-white hover:border-white/20
                       transition-all duration-200"
            aria-label="Toggle language"
          >
            <Globe size={13} />
            <span>{lang === "id" ? "EN" : "ID"}</span>
          </button>

          {/* Hire Me CTA */}
          <a
            href={`mailto:${SITE_META.email}`}
            className="btn-primary text-xs px-5 py-2"
          >
            {lang === "id" ? "Hire Me" : "Hire Me"}
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="backdrop-blur-xl bg-[#0b0b0b]/90 border-t border-white/[0.06] px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.key
                  ? "text-white bg-white/8"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {lang === "id" ? item.labelId : item.labelEn}
            </button>
          ))}

          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/[0.06]">
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold
                         border border-white/10 text-white/60 hover:text-white transition-all"
            >
              <Globe size={13} />
              {lang === "id" ? "Switch to EN" : "Ganti ke ID"}
            </button>
            <a
              href={`mailto:${SITE_META.email}`}
              className="btn-primary text-xs py-2 flex-1 justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "@/lib/content";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: { id: string; en: string }) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "id",
  setLang: () => {},
  t: (obj) => obj.id,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect browser locale on first mount
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "id" || saved === "en") {
      setLangState(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      const detected: Lang = browserLang.startsWith("en") ? "en" : "id";
      setLangState(detected);
    }
    setMounted(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = (obj: { id: string; en: string }): string => obj[lang];

  if (!mounted) return <>{children}</>;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

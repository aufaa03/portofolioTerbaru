import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/lang-context";
import { SITE_META } from "@/lib/content";

// ─── Fonts ───────────────────────────────────────────────
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ─── Metadata / SEO ──────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_META.url),
  title: {
    default: "Muhammad Aufa Rozaky — Portfolio & CV",
    template: "%s | Muhammad Aufa Rozaky",
  },
  description:
    "Portfolio resmi Muhammad Aufa Rozaky — fresh graduate RPL/PPLG dengan pengalaman web development, administrasi digital, dan workflow berbasis teknologi.",
  keywords: [
    "Muhammad Aufa Rozaky",
    "siapa Muhammad Aufa Rozaky",
    "Siapa aufa?",
    "siapa aufaa",
    "Siapa aufa?",
    "siapa muhamad aufa rozaky",
    "Siapa Muhammad Aufa Rozaky?",
    "portofolio aufaa",
    "siapa aufaa?",
    "Muhammad Aufa Rozaky portfolio",
    "Muhammad Aufa Rozaky web developer",
    "fresh graduate web developer indonesia",
    "web developer indonesia",
    "portfolio next.js",
    "RPL PPLG developer",
    "smk pgri 2 taman",
    "pendaftaran smk pgri 2 taman",
    "siswa berprestasi pemalang",
    "data entry",
    "web developer pemalang",
    "web developer pekalongan",
    "web developer tegal",
    "freelance website pekalongan",
    "freelance website pemalang",
    "freelance website tegal",
    "freelance website brebes",
    "freelance website batang",
    "freelance data entry"  
  ],
  authors: [{ name: "Muhammad Aufa Rozaky", url: SITE_META.url }],
  creator: "Muhammad Aufa Rozaky",
  publisher: "Muhammad Aufa Rozaky",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: SITE_META.url,
    title: "Muhammad Aufa Rozaky — Portfolio & CV",
    description:
      "Portfolio resmi Muhammad Aufa Rozaky — web developer dan fresh graduate Software Engineering dari Indonesia.",
    siteName: "Muhammad Aufa Rozaky",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Aufa Rozaky — Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Aufa Rozaky — Portfolio & CV",
    description:
      "Portfolio resmi Muhammad Aufa Rozaky — fresh graduate Software Engineering, web developer Indonesia.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_META.url,
  },
};

// ─── JSON-LD Schema ──────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Aufa Rozaky",
  url: SITE_META.url,
  email: SITE_META.email,
  jobTitle: "Web Developer",
  description:
  "Fresh graduate Software Engineering (RPL/PPLG) with experience in web development, digital administration, and technology-based workflows.",
  sameAs: [SITE_META.github, SITE_META.linkedin, SITE_META.instagram],
  knowsAbout: [
  "Web Development",
  "Digital Administration",
  "Data Processing",
  "SEO",
  "Technology Workflow",
],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "SMK — Rekayasa Perangkat Lunak (RPL/PPLG)",
  },
  nationality: {
    "@type": "Country",
    name: "Indonesia",
  },
};

// ─── Root Layout ─────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-white selection:bg-blue-600/30`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

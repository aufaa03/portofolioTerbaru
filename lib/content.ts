// ============================================================
// BILINGUAL CONTENT CONSTANTS
// All site content lives here for easy editing
// ============================================================

export type Lang = "id" | "en";

export const SITE_META = {
  url: "https://muhammadaufa.vercel.app",
  author: "Muhammad Aufa Rozaky",
  email: "aufaa208@gmail.com",
  github: "https://github.com/aufaa03",
  linkedin: "https://linkedin.com/in/muhammad-aufa-rozaky-689730364",
  instagram: "https://instagram.com/aufaa_fafa",
};

export const NAV_ITEMS = [
  { key: "home", href: "#home", labelId: "Beranda", labelEn: "Home" },
  { key: "about", href: "#about", labelId: "Tentang", labelEn: "About" },
  {
    key: "experience",
    href: "#experience",
    labelId: "Pengalaman",
    labelEn: "Experience",
  },
  { key: "skills", href: "#skills", labelId: "Keahlian", labelEn: "Skills" },
  { key: "projects", href: "#projects", labelId: "Proyek", labelEn: "Projects" },
  { key: "contact", href: "#contact", labelId: "Kontak", labelEn: "Contact" },
];

export const HERO_CONTENT = {
  badge: {
    id: "Tersedia untuk Peluang Baru",
    en: "Available for Opportunities",
  },
  headline: "Muhammad Aufa Rozaky",
  subheadline: {
    id: "Fresh Graduate RPL • Web Development • Digital Administration",
    en: "RPL Fresh Graduate • Web Development • Digital Administration",
  },
  description: {
    id: "Fresh graduate RPL/PPLG dengan pengalaman kerja remote, pengembangan website modern, dan pengolahan data administratif ber-volume tinggi.",
    en: "RPL/PPLG fresh graduate with experience in remote work, modern website development, and high-volume administrative data processing.",
  },
  cta1: { id: "Lihat Proyek", en: "View Projects" },
  cta2: { id: "Hubungi Saya", en: "Contact Me" },
  trustText: {
    id: "Tersedia untuk full-time, magang, dan freelance",
    en: "Available for full-time, internship, and freelance",
  },
};

export const ABOUT_CONTENT = {
  title: { id: "Tentang Saya", en: "About Me" },
  paragraphs: {
    id: [
      "Saya adalah fresh graduate SMK jurusan Rekayasa Perangkat Lunak (RPL/PPLG) yang memiliki ketertarikan pada pengembangan website dan teknologi digital.",

      "Saya memiliki pengalaman kerja remote melalui program PKL, pernah memimpin komunitas coding sekolah, dan terbiasa belajar secara mandiri melalui proyek serta eksplorasi teknologi.",

      "Di luar dunia teknologi, saya menikmati mendaki gunung, membaca buku, dan menjelajahi tempat baru untuk membangun disiplin, ketahanan, dan sudut pandang baru."
    ],
    en: [
      "I am a fresh graduate majoring in Software Engineering (RPL/PPLG) with an interest in website development and digital technology.",

      "I have remote work experience through internship programs, led a school coding community, and continuously improve through self-learning and technology exploration.",

      "Outside technology, I enjoy hiking mountains, reading books, and exploring new places to build discipline, resilience, and broader perspectives."
    ],
  },
  stats: [
    {
      value: "6+",
      label: {
        id: "Bulan Pengalaman",
        en: "Months Experience",
      },
    },
    {
      value: "Top 5",
      label: {
        id: "LKS Web Dev",
        en: "LKS Web Dev",
      },
    },
    {
      value: "High-Volume",
      label: {
        id: "Pengolahan Data Digital",
        en: "Digital Data Workflow",
      },
    },
  ],
};

export const EXPERIENCE_ITEMS = [
  {
    id: "cv-bsik",
    company: "CV Bina Sarana Insan Kamil",
    role: { id: "Magang / PKL — 6 Bulan (Remote)", en: "Internship / PKL — 6 Months (Remote / WFH)" },
    period: "2025",
    type: "work",
    points: {
      id: [
        "Menangani input data volume tinggi untuk arsip administrasi publik.",
        "Terbiasa bekerja dengan workflow pengolahan data digital berbasis web dan target kerja harian.",
        "Memastikan akurasi, kerapihan, dan struktur data tetap konsisten.",
        "Beradaptasi dengan sistem kerja remote dan target deadline."
      ],
      en: [
        "Handled high-volume data entry for administrative archive records.",
        "Experienced in web-based digital data processing workflows and daily work targets.",
        "Ensured accuracy, consistency, and structured documentation.",
        "Adapted effectively to remote workflow and deadlines."
      ],
    },
  },
  {
    id: "lks",
    company: { id: "Kompetisi LKS Web Development", en: "District Web Development Competition (LKS)" },
    role: { id: "Top 5 Finalis — Tingkat Kabupaten", en: "Top 5 Finalist — District Level" },
    period: "2026",
    type: "award",
    points: {
      id: ["Bersaing dalam kompetisi keterampilan web development tingkat kabupaten dan meraih peringkat Top 5."],
      en: ["Competed in a regional web development skills competition and achieved Top 5 ranking."],
    },
  },
  {
    id: "coding-club",
    company: { id: "Komunitas Coding Sekolah", en: "School Coding Community" },
    role: { id: "Ketua Komunitas", en: "Head of Coding Community" },
    period: "2024–2025",
    type: "leadership",
    points: {
      id: [
        "Memimpin kegiatan coding siswa dan sesi belajar bersama",
        "Mengorganisasi proyek kolaboratif antar anggota komunitas",
        "Menginspirasi minat teknologi di kalangan pelajar",
      ],
      en: [
        "Led student coding activities and peer learning sessions",
        "Organized collaborative projects among community members",
        "Inspired technology interest among students",
      ],
    },
  },
];

export const TECHNICAL_SKILLS = [
  {
    id: "web-dev",
    icon: "Monitor",
    title: {
      id: "Pengembangan Website Modern",
      en: "Modern Website Development",
    },
    description: {
      id: "Membangun website responsif, modern, dan optimal untuk berbagai perangkat dan kebutuhan bisnis.",
      en: "Building responsive, modern, and optimized websites for business and multi-device needs.",
    },
  },
  {
    id: "admin-data",
    icon: "Database",
    title: {
      id: "Administrasi & Pengolahan Data",
      en: "Administration & Data Processing",
    },
    description: {
      id: "Berpengalaman menangani input data volume tinggi dengan akurasi, konsistensi, dan manajemen dokumen yang rapi.",
      en: "Experienced in handling high-volume data input with accuracy, consistency, and organized documentation.",
    },
  },
  {
    id: "seo",
    icon: "Search",
    title: {
      id: "SEO & Optimasi Website",
      en: "SEO & Website Optimization",
    },
    description: {
      id: "Mengoptimalkan website agar cepat, mudah ditemukan, dan memiliki performa yang baik.",
      en: "Optimizing websites for speed, discoverability, and strong performance.",
    },
  },
  {
    id: "collab",
    icon: "Users",
    title: {
      id: "Kolaborasi Tim & Workflow Digital",
      en: "Team Collaboration & Digital Workflow",
    },
    description: {
      id: "Terbiasa menggunakan tools digital dan sistem kerja remote maupun kolaboratif.",
      en: "Comfortable using digital tools and collaborative or remote workflows.",
    },
  },
  {
    id: "problem-solving",
    icon: "Brain",
    title: {
      id: "Problem Solving & Troubleshooting",
      en: "Problem Solving & Troubleshooting",
    },
    description: {
      id: "Menganalisis dan menyelesaikan masalah teknis maupun operasional secara efektif.",
      en: "Analyzing and solving technical and operational problems effectively.",
    },
  },
  {
    id: "tech-adapt",
    icon: "Zap",
    title: {
      id: "Adaptasi Sistem & Teknologi",
      en: "Systems & Technology Adaptation",
    },
    description: {
      id: "Cepat mempelajari sistem, software, dan teknologi baru sesuai kebutuhan pekerjaan.",
      en: "Quickly adapts to new systems, software, and technologies based on work requirements.",
    },
  },
];

export const SOFT_SKILLS = [
  { id: "leadership", labelId: "Kepemimpinan", labelEn: "Leadership", icon: "Crown" },
  { id: "communication", labelId: "Komunikasi", labelEn: "Communication", icon: "MessageCircle" },
  { id: "teamwork", labelId: "Kerja Tim", labelEn: "Teamwork", icon: "Users" },
  { id: "fast-learning", labelId: "Belajar Cepat", labelEn: "Fast Learning", icon: "Zap" },
  { id: "time-management", labelId: "Manajemen Waktu", labelEn: "Time Management", icon: "Clock" },
  { id: "problem-solving", labelId: "Problem Solving", labelEn: "Problem Solving", icon: "Brain" },
];

export const TOOLS = [
  "Microsoft Excel",
  "Microsoft Word",
  "Google Sheets",
  "Google Docs",
  "Git & GitHub",
  "VS Code",
];

export const PROJECTS = [
  {
    id: "business-landing",
    title: { id: "Landing Page Bisnis Modern", en: "Modern Business Landing Page" },
    description: {
      id: "Website perusahaan responsif dengan konversi tinggi dan desain premium.",
      en: "High-converting responsive company website with premium design.",
    },
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "SEO"],
    image: null,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "dashboard-ui",
    title: { id: "UI Dashboard Produktivitas", en: "Productivity Dashboard UI" },
    description: {
      id: "Dashboard modern dengan fokus pada kejelasan tampilan dan analitik data.",
      en: "Modern dashboard focused on clarity and data analytics.",
    },
    tags: ["React", "TypeScript", "Charts", "Tailwind CSS"],
    image: null,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "portfolio-system",
    title: { id: "Sistem Website Portfolio", en: "Portfolio Website System" },
    description: {
      id: "Website personal branding premium yang SEO-friendly dan berkinerja tinggi.",
      en: "SEO-friendly premium personal branding website with high performance.",
    },
    tags: ["Next.js", "TypeScript", "SEO", "Glassmorphism"],
    image: null,
    github: "#",
    live: "#",
    featured: true,
  },
];

export const WHY_ME = [
  {
    icon: "Zap",
    title: { id: "Belajar Cepat", en: "Fast Learner" },
    desc: {
      id: "Beradaptasi dengan teknologi dan tools baru secara mandiri dengan cepat.",
      en: "Adapts to new technologies and tools independently and quickly.",
    },
  },
  {
    icon: "CheckCircle",
    title: { id: "Eksekusi Andal", en: "Reliable Execution" },
    desc: {
      id: "Menyelesaikan tugas dengan konsisten, termasuk menjaga 1.300+ entri data per hari.",
      en: "Consistently delivers, including maintaining 1,300+ data entries per day.",
    },
  },
  {
    icon: "Search",
    title: { id: "Detail Oriented", en: "Detail Oriented" },
    desc: {
      id: "Akurasi tinggi dalam coding, dokumentasi, dan pemecahan masalah.",
      en: "High accuracy in coding, documentation, and problem solving.",
    },
  },
  {
    icon: "Shuffle",
    title: { id: "Pola Pikir Adaptif", en: "Adaptable Mindset" },
    desc: {
      id: "Nyaman bekerja di lingkungan remote, tim, dan berbagai konteks proyek.",
      en: "Comfortable working in remote, team, and diverse project contexts.",
    },
  },
  {
    icon: "MessageCircle",
    title: { id: "Komunikasi Kuat", en: "Strong Communication" },
    desc: {
      id: "Menyampaikan ide secara jelas baik secara lisan maupun tulisan.",
      en: "Expresses ideas clearly both verbally and in writing.",
    },
  },
  {
    icon: "TrendingUp",
    title: { id: "Berorientasi Growth", en: "Growth Driven" },
    desc: {
      id: "Secara aktif meningkatkan skill melalui proyek, buku, dan eksplorasi teknologi.",
      en: "Actively improves through projects, books, and technology exploration.",
    },
  },
];

export const PERSONAL_CONTENT = {
  title: { id: "Di Luar Pekerjaan", en: "Beyond Work" },
  description: {
    id: "Di luar dunia teknologi, Aufa menikmati mendaki gunung, membaca buku, dan mengeksplorasi tempat baru. Aktivitas ini membantu membangun disiplin, ketahanan, dan sudut pandang yang lebih luas dalam kehidupan maupun pekerjaan.",
    en: "Outside technology, Aufa enjoys hiking mountains, reading books, and exploring new places. These activities help build discipline, resilience, and broader perspectives in both life and work.",
  },
  activities: [
    { id: "hiking", labelId: "Mendaki Gunung", labelEn: "Mountain Hiking", icon: "Mountain" },
    { id: "reading", labelId: "Membaca Buku", labelEn: "Reading Books", icon: "BookOpen" },
    { id: "travel", labelId: "Menjelajahi Tempat Baru", labelEn: "Exploring New Places", icon: "Compass" },
  ],
  gallery: [
    { src: "/images/puncaksindoro.jpeg", alt: "Puncak Sindoro" },
    { src: "/images/puncaksumbing.jpeg", alt: "Puncak Sumbing" },
    { src: "/images/sumbing1.jpg", alt: "Pendakian Sumbing" },
    { src: "/images/sumbing2.jpeg", alt: "View dari Puncak" },
    { src: "/images/lautanawanslamet.jpeg", alt: "Lautan Awan Slamet" },
    { src: "/images/fotorandom.jpg", alt: "Petualangan" },
  ],
};

export const CONTACT_CONTENT = {
  title: { id: "Mari Bangun Sesuatu yang Hebat", en: "Let's Build Something Great" },
  subtitle: {
    id: "Punya ide, peluang kerja, atau proyek digital? Mari diskusikan bersama.",
    en: "Have an idea, job opportunity, or digital project? Let's discuss it together.",
  },
  cta: { id: "Kirim Email", en: "Send Email" },
};

export const FOOTER_CONTENT = {
  text: {
    id: "© 2026 Muhammad Aufa Rozaky • Dibangun dengan Next.js",
    en: "© 2026 Muhammad Aufa Rozaky • Built with Next.js",
  },
};

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Cursor from "./components/Cursor";
import {  Github, Linkedin } from "lucide-react";
import gssocImg from "./assets/badges/gssoc.jpg";



const SkillLogos: Record<string, React.ReactNode> = {


  android: (
    <svg viewBox="0 0 24 24" fill="#3DDC84" className="w-8 h-8">
      <path d="M17.523 9.927h1.542v6.07h-1.542zM4.935 9.927h1.542v6.07H4.935z"/>
      <path d="M6.85 8.195h10.3v8.99H6.85z"/>
      <circle cx="9.348" cy="6.07" r="1"/>
      <circle cx="14.653" cy="6.07" r="1"/>
    </svg>
  ),

  bootstrap: (
    <svg viewBox="0 0 24 24" fill="#7952B3" className="w-8 h-8">
      <path d="M12.001 2C6.478 2 2 6.477 2 12s4.478 10 10.001 10C17.522 22 22 17.523 22 12c0-5.523-4.478-10-9.999-10zm1.89 14.535c-.663.447-1.636.674-2.673.674H7.38V6.79h3.838c1.087 0 1.938.25 2.566.738.63.49.944 1.198.944 2.125 0 .64-.159 1.184-.476 1.633a2.21 2.21 0 0 1-1.349.88v.058c.676.103 1.21.382 1.602.835.393.455.59 1.044.59 1.77 0 .986-.33 1.743-.99 2.254z"/>
    </svg>
  ),

  cpp: (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path fill="#00599C" d="M64 6l54 31v54l-54 31-54-31V37z"/>
      <path fill="#0086D4" d="M64 6v116l54-31V37z"/>
      <path fill="#FFF" d="M87 64l-23 13-23-13V51l23-13 23 13z"/>
    </svg>
  ),

  css: (
    <svg viewBox="0 0 24 24" fill="#1572B6" className="w-8 h-8">
      <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.438L1.5 0z"/>
    </svg>
  ),

  express: (
    <svg viewBox="0 0 128 128" className="w-10 h-10" fill="white">
      <text x="50%" y="55%" textAnchor="middle" fontSize="48" fontWeight="bold">Ex</text>
    </svg>
  ),

  figma: (
    <svg viewBox="0 0 256 384" className="w-8 h-8">
      <path fill="#F24E1E" d="M128 192a64 64 0 100 128 64 64 0 000-128z"/>
      <path fill="#A259FF" d="M128 0H64v128h64z"/>
      <path fill="#1ABCFE" d="M192 128H128v64h64z"/>
      <path fill="#0ACF83" d="M128 128V64H64v64z"/>
      <path fill="#FF7262" d="M192 0h-64v128h64z"/>
    </svg>
  ),

  firebase: (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path fill="#FFCA28" d="M3 22l18-10-3-12z"/>
      <path fill="#FFA000" d="M3 22l9-21 3 9z"/>
    </svg>
  ),

  git: (
    <svg viewBox="0 0 24 24" fill="#F05032" className="w-8 h-8">
      <path d="M2 12l10-10 10 10-10 10z"/>
    </svg>
  ),

  html: (
    <svg viewBox="0 0 24 24" fill="#E34F26" className="w-8 h-8">
      <path d="M1.5 0h21L20.6 21.6 12 24l-8.6-2.4z"/>
    </svg>
  ),

  java: (
    <svg viewBox="0 0 256 417" className="w-8 h-8">
      <path fill="#5382A1" d="M..." />
    </svg>
  ),

  javascript: (
    <svg viewBox="0 0 24 24" fill="#F7DF1E" className="w-8 h-8">
      <path d="M2 0h20v24H2z"/>
    </svg>
  ),

  linux: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#000">
      <path d="M12 0c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z"/>
    </svg>
  ),

  mongodb: (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path fill="#4DB33D" d="M12 0l2 7-2 17-2-17z"/>
    </svg>
  ),

  mysql: (
    <svg viewBox="0 0 24 24" fill="#00618A" className="w-8 h-8">
      <path d="M5 3l14 18"/>
    </svg>
  ),

  next: (
    <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
      <path d="M12 0v24M0 12h24"/>
    </svg>
  ),

  node: (
    <svg viewBox="0 0 24 24" fill="#3C873A" className="w-8 h-8">
      <path d="M12 0l10 6v12l-10 6-10-6V6z"/>
    </svg>
  ),

  opencv: (
    <svg viewBox="0 0 48 48" className="w-8 h-8">
      <circle cx="12" cy="12" r="8" fill="red"/>
      <circle cx="36" cy="12" r="8" fill="green"/>
      <circle cx="24" cy="34" r="8" fill="blue"/>
    </svg>
  ),

  pandas: (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <rect width="4" height="24" x="6" fill="#150E56"/>
      <rect width="4" height="24" x="14" fill="#3B82F6"/>
    </svg>
  ),

  postman: (
    <svg viewBox="0 0 24 24" fill="#FF6C37" className="w-8 h-8">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),

  python: (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path fill="#3776AB" d="M..." />
    </svg>
  ),

  react: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
      <circle cx="12" cy="12" r="2"/>
      <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="#61DAFB"/>
      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(60 12 12)" stroke="#61DAFB"/>
      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(120 12 12)" stroke="#61DAFB"/>
    </svg>
  ),

  redux: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#764ABC">
      <path d="M..." />
    </svg>
  ),

  sklearn: (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="#F7931E">
      <circle cx="24" cy="24" r="20"/>
    </svg>
  ),

  tensorflow: (
    <svg viewBox="0 0 24 24" fill="#FF6F00" className="w-8 h-8">
      <path d="M..." />
    </svg>
  ),
};

/*
  Updated portfolio page using info from user's resume.
  Projects, skills, achievements pulled from uploaded resume. :contentReference[oaicite:1]{index=1}
*/

const projects = [
  {
    title: "Surakshak — Behaviour-Based Mobile Authentication",
    desc:
      "Mobile app that continuously authenticates users using behavioural biometrics (typing rhythm, touch pressure, swipe patterns). Integrated real-time risk scoring and anomaly detection.",
    tags: ["Mobile", "Biometrics", "Security"],
    url: "https://github.com/ananyadhagat/surakshak-Hackorbit/tree/main",
  },
  {
    title: "Votify — Secure Voting Platform",
    desc:
      "Secure voting platform with automated voter ID QR generation and real-time face verification for identity authentication.",
    tags: ["Web", "Face verification", "Realtime"],
    url: "https://vote-160ee.web.app/",
  },
  {
    title: "KrishiStore — Web Direct Farm Access",
    desc:
      "Frontend for a platform enabling farmers to sell products directly, focused on simple UX and product listings.",
    tags: ["Frontend", "HTML/CSS", "Flutter concept"],
    url: "https://github.com/AkankshaRaj07/KrishiStore",
  },
  // New projects requested
  {
    title: "Amazon Clone (UI + Cart Flow)",
    desc:
      "A responsive Amazon-like storefront built with React. Features product listing, search, filters, product details, and a client-side cart with local state persistence.",
    tags: ["React", "E-commerce", "Responsive"],
    url: "https://github.com/your-username/amazon-clone",
  },
  {
    title: "Lazarev Frontend (Animations)",
    desc:
      "Polished landing page frontend inspired by Lazarev designs — smooth scroll, micro-interactions, and CSS + Framer Motion animations.",
    tags: ["HTML/CSS", "Animations", "Framer Motion"],
    url: "https://github.com/your-username/lazarev-frontend",
  },
  {
    title: "Rock Paper Scissors (Interactive Game)",
    desc:
      "Interactive Rock-Paper-Scissors with scorekeeping and animated results — built to practice state management and UX microcopy.",
    tags: ["JavaScript", "Game", "DOM"],
    url: "https://github.com/your-username/rock-paper-scissors",
  },
  {
    title: "Tic Tac Toe (AI & Multiplayer)",
    desc:
      "Classic Tic Tac Toe with a minimax-based AI and a local 2-player mode; includes animations for moves and win highlights.",
    tags: ["JavaScript", "AI", "Game"],
    url: "https://github.com/your-username/tic-tac-toe",
  },
  {
    title: "Fanta Animation (CSS / SVG)",
    desc:
      "Animated micro-site demonstrating SVG + CSS animation techniques (bubbles, fizz, parallax) inspired by Fanta ad motion.",
    tags: ["SVG", "CSS Animation", "Creative"],
    url: "https://github.com/your-username/fanta-animation",
  },
  {
    title: "Blogging Backend (REST API)",
    desc:
      "A RESTful backend for a blogging application with authentication, CRUD for posts, and comment support. Built with Node.js, Express, and MongoDB.",
    tags: ["Node.js", "Express", "MongoDB"],
    url: "https://blogging-app-yv81.onrender.com/",
  },
];



const skills = [
  { name: "Android", svg: "android" },
  { name: "Bootstrap", svg: "bootstrap" },
  { name: "C++", svg: "cpp" },
  { name: "CSS3", svg: "css" },
  { name: "Express.js", svg: "express" },
  { name: "Figma", svg: "figma" },
  { name: "Firebase", svg: "firebase" },
  { name: "Git", svg: "git" },
  { name: "HTML5", svg: "html" },
  { name: "Java", svg: "java" },
  { name: "JavaScript", svg: "javascript" },
  { name: "Linux", svg: "linux" },
  { name: "MongoDB", svg: "mongodb" },
  { name: "MySQL", svg: "mysql" },
  { name: "Next.js", svg: "next" },
  { name: "Node.js", svg: "node" },
  { name: "OpenCV", svg: "opencv" },
  { name: "Pandas", svg: "pandas" },
  { name: "Postman", svg: "postman" },
  { name: "Python", svg: "python" },
  { name: "React", svg: "react" },
  { name: "React Native", svg: "react" },
  { name: "Redux", svg: "redux" },
  { name: "Scikit Learn", svg: "sklearn" },
  { name: "TensorFlow", svg: "tensorflow" },
];




// at top of App.tsx (below imports, above function App)

const badgeItems = [
  {
    id: "lc-50",
    title: "LeetCode —  50 Days",
    src: "https://assets.leetcode.com/static_assets/others/2550.gif",
  },
  {
    id: "lc-100",
    title: "LeetCode —  100 Days",
    src: "https://assets.leetcode.com/static_assets/others/25100.gif",
  },
  {
    id: "lc-monthly",
    title: "LeetCode — Monthly Daily Challenge",
    src: "https://leetcode.com/static/images/badges/2024/gif/2024-12.gif",
  },
  { id: "gssoc", title: "GSSoC — Contributor Badge", src: gssocImg }

];



export default function App() {
  const heroRef = useRef<HTMLElement | null>(null);

  // scroll spy for nav
  useEffect(() => {
    const onScroll = () => {
      const sections = ["hero", "projects", "skills", "achievements", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        const link = document.querySelector(`a[href="#${id}"]`);
        if (!el || !link) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= 120) {
          link.classList.add("text-purple-400");
        } else {
          link.classList.remove("text-purple-400");
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // tilt helpers (reuse from previous)
  const handlePointerMove = (e: React.PointerEvent, el: HTMLDivElement | null) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 10;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handlePointerLeave = (el: HTMLDivElement | null) => {
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-100 antialiased relative">
      <Cursor />

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="text-sm font-semibold">Akanksha Kumari</div>
          <div className="hidden md:flex gap-3 text-sm text-slate-300">
            <a href="#hero" className="hover:text-purple-400 transition">Home</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#achievements" className="hover:text-purple-400 transition">Achievements</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>

        <div className="flex gap-3 items-center text-slate-300">
          <a href="http://www.linkedin.com/in/akanksha-kumari-b82129276" className="hover:text-purple-400 transition" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/AkankshaRaj07" className="hover:text-purple-400 transition" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="hero" ref={heroRef} className="pt-28 pb-12">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hey — I’m <span className="text-purple-400">Akanksha</span>.<br />
            I build clean web apps & delightful UIs.
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            B.Tech (CSE) student — Lakshmi Narain College of Technology & Excellence. CGPA: 8.72. Passionate about building secure, user-friendly applications and researching behaviour-based security systems. (Full resume details in footer).
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <a href="#projects" className="interactive px-4 py-2 rounded-md ring-1 ring-slate-700 hover:bg-slate-800 transition">See projects</a>
            <a href="#contact" className="interactive px-4 py-2 rounded-md bg-purple-500/10 border border-purple-500 text-purple-300 hover:bg-purple-500/20 transition">Contact</a>
          </div>
        </motion.div>
      </header>

      {/* PROJECTS */}
      {/* PROJECTS */}
<section id="projects" className="max-w-6xl mx-auto px-6 pb-12">
  <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {projects.map((p, i) => (
      <motion.div
        key={p.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08 }}
        className="group"
      >
        <div
          className="interactive bg-[#0f1114] p-5 rounded-2xl border border-slate-800 shadow-sm transform transition-transform"
          onPointerMove={(e) => handlePointerMove(e, e.currentTarget as HTMLDivElement)}
          onPointerLeave={(e) => handlePointerLeave(e.currentTarget as HTMLDivElement)}
          style={{ transformStyle: "preserve-3d", willChange: "transform", transition: "transform 200ms ease" }}
        >
          <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition">
            <a href={p.url} target="_blank" rel="noreferrer" className="underline decoration-transparent hover:decoration-purple-400">
              {p.title}
            </a>
          </h3>

          <p className="text-slate-400 text-sm mb-3">{p.desc}</p>

          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-slate-800 rounded-md">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* SKILLS (with aesthetic logo badges) */}
<section id="skills" className="max-w-6xl mx-auto px-6 pb-12">
  <h2 className="text-2xl font-semibold mb-6">Skills</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="flex flex-col items-center p-4 bg-[#0f1114] rounded-xl border border-slate-800 hover:border-purple-500/40 transition"
      >
        {/* LOGO */}
        <div className="w-12 h-12 flex items-center justify-center mb-3">
          {SkillLogos[skill.svg]}
        </div>

        {/* LABEL */}
        <div className="text-sm text-slate-300 text-center">
          {skill.name}
        </div>
      </div>
    ))}
  </div>
</section>



{/* ACHIEVEMENTS — vertical bands: Hackathons, then Certifications, then Other Achievements */}
<section id="achievements" className="max-w-6xl mx-auto px-6 pb-12">
  <h2 className="text-2xl font-semibold mb-6">Achievements</h2>

  {/* ---------------- HACKATHONS (band 1) ---------------- */}
  <motion.div
    className="mb-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
  >
    <h3 className="text-lg font-semibold mb-4">Hackathons</h3>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        {
          title: "Winner — Smart India Internal Hackathon",
          meta: "Top team among ~100 teams",
          year: "2025",
          tag: "Hackathon",
          tone: "purple",
        },
        {
          title: "Finalist — Suraksha Cyber Hackathon (Canara Bank)",
          meta: "Security prototype round",
          year: "2025",
          tag: "Cybersecurity",
          tone: "rose",
        },
        {
          title: "Finalist — HackOrbit National Hackathon (MITS Gwalior)",
          meta: "Top 25 teams nationwide",
          year: "2025",
          tag: "National",
          tone: "amber",
        },
        {
          title: "Participant — Google Solution Challenge 2025",
          meta: "Prototype stage",
          year: "2025",
          tag: "Google",
          tone: "emerald",
        },
        {
          title: "Selected for Smart India Hackathon 2024",
          meta: "College-level selection",
          year: "2024",
          tag: "Selection",
          tone: "slate",
        },
      ].map((h, i) => (
        <motion.div
          key={`hack-${i}-${h.year}`}
          variants={{
            hidden: { x: -26, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 240, damping: 20 } },
          }}
          transition={{ delay: i * 0.04 }}
          className="p-4 rounded-lg bg-[#0f1114] border border-slate-800 shadow-sm hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold">{h.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{h.meta}</p>
              <p className="mt-2 text-xs text-slate-300">
                <strong className="text-slate-200">{h.year}</strong> · {h.tag}
              </p>
            </div>

            <span
              className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-600"
              style={{ alignSelf: "start" }}
            >
              {h.tag}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* ---------------- CERTIFICATIONS (band 2) ---------------- */}
  <motion.div
    className="mb-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
  >
    <h3 className="text-lg font-semibold mb-4">Certifications</h3>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[
        {
          title: "Oracle Cloud Infrastructure (OCI) — Foundations Associate",
          meta: "Cloud fundamentals",
          year: "2024",
          tag: "Certification",
          tone: "purple",
        },
        {
          title: "Microsoft Azure Fundamentals (AZ-900)",
          meta: "Cloud concepts & architecture",
          year: "2024",
          tag: "Certification",
          tone: "blue",
        },
        {
          title: "Google Generative AI Certification",
          meta: "Prompting & GenAI fundamentals",
          year: "2024",
          tag: "AI",
          tone: "fuchsia",
        },
        {
          title: "Postman API Certification",
          meta: "API design & testing",
          year: "2024",
          tag: "API",
          tone: "amber",
        },
      ].map((c, i) => (
        <motion.div
          key={`cert-${i}-${c.year}`}
          variants={{
            hidden: { scale: 0.98, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.36, ease: "easeOut" } },
          }}
          transition={{ delay: i * 0.03 }}
          className="p-4 rounded-lg bg-[#0f1114] border border-slate-800 shadow-sm hover:shadow-md flex items-start justify-between gap-4"
        >
          <div>
            <h4 className="text-sm font-semibold">{c.title}</h4>
            <p className="text-xs text-slate-400 mt-1">{c.meta}</p>
            <p className="mt-2 text-xs text-slate-300">
              <strong className="text-slate-200">{c.year}</strong>
            </p>
          </div>

          <span className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700" style={{ alignSelf: "start" }}>
            {c.tag}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* ---------------- OTHER ACHIEVEMENTS (band 3: timeline) ---------------- */}
  <motion.div
    className="mb-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
  >
    <h3 className="text-lg font-semibold mb-4">Other Achievements</h3>

    <div className="relative pl-6 before:content-[''] before:absolute before:left-2 before:top-6 before:h-[calc(100%-1.5rem)] before:w-[2px] before:bg-slate-800">
      {[
        {
          year: "2024–2025",
          title: "220+ LeetCode Problems",
          meta: "100+ day streak",
          tag: "DSA",
          tone: "emerald",
        },
        {
          year: "2022",
          title: "Dainik Jagran Genius Award",
          meta: "Academic excellence",
          tag: "Award",
          tone: "yellow",
        },
        {
          year: "2022",
          title: "Prabhat Khabar Samman Samaroh Award",
          meta: "Academic achievement",
          tag: "Award",
          tone: "rose",
        },
        {
          year: "2020",
          title: "Prabhat Khabar Samman Samaroh Award",
          meta: "School topper recognition",
          tag: "Award",
          tone: "rose",
        },
      ].map((a, i) => (
        <motion.div
          key={`other-${i}-${a.year}`}
          initial={{ opacity: 0, y: 10, scale: 0.995 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 260, damping: 22 }}
          className="relative mb-8 last:mb-0"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-1">
            <div
              className="w-3 h-3 rounded-full ring-4 ring-slate-900"
              style={{
                backgroundColor: {
                  purple: "#c084fc",
                  rose: "#fb7185",
                  amber: "#fbbf24",
                  emerald: "#34d399",
                  slate: "#94a3b8",
                  blue: "#60a5fa",
                  fuchsia: "#e879f9",
                  yellow: "#facc15",
                }[a.tone],
              }}
            />
          </div>

          <div className="ml-6 md:ml-8 p-4 rounded-lg bg-[#0f1114] border border-slate-800 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold">{a.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{a.meta}</p>
                <p className="mt-2 text-xs text-slate-300">
                  <strong className="text-slate-200">{a.year}</strong> · {a.tag}
                </p>
              </div>

              <span className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-600">
                {a.tag}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

{/* BADGES */}
{/* BADGES — round badges with fallback + lightbox */}
<section id="badges" className="max-w-6xl mx-auto px-6 pb-12">
  <h2 className="text-2xl font-semibold mb-6">Badges & Recognitions</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
    {badgeItems.map((b, i) => (
      <motion.div
        key={b.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.06 }}
        className="group"
      >
        <div
          className="interactive p-6 rounded-2xl bg-[#0f1114] border border-slate-800 hover:border-purple-500/40 transition flex flex-col items-center justify-center cursor-pointer"
          style={{ minHeight: 180 }}
          onClick={() => b.src && window.open(b.src, "_blank")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") b.src && window.open(b.src, "_blank"); }}
          aria-label={b.title}
        >

          {/* UNIFORM circular image frame */}
          <div className="w-28 h-28 mb-4 rounded-full overflow-hidden flex items-center justify-center bg-[#111217] border border-slate-800">
            <img
              src={b.src}
              alt={b.title}
              className="w-20 h-20 object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.parentElement as HTMLElement)?.setAttribute("data-broken", "true");
              }}
            />

            {/* fallback placeholder if image fails */}
            <div
              className="fallback-placeholder w-full h-full flex items-center justify-center text-xs text-purple-300"
              style={{ display: "none" }}
            >
              Badge
            </div>
          </div>

          <div className="text-sm text-slate-300 text-center font-medium">
            {b.title}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>








      {/* CONTACT / CTA */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-8 border-t border-slate-800">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    <div>
      <h3 className="text-lg font-semibold">Get in touch</h3>
      <p className="text-slate-400 text-sm">I'm open to internships and early-career roles — email me for collabs.</p>
      <p className="text-xs text-slate-400 mt-2">
        Email:&nbsp;
        <a className="underline" href="mailto:akanksha9123@gmail.com">akanksha9123@gmail.com</a>
      </p>
      <p className="text-xs text-slate-400">LeetCode: Solved 220+ problems (100-day streak)</p>
    </div>

    <div className="flex gap-3">
      <a href="mailto:akanksha9123@gmail.com" className="interactive px-4 py-2 bg-purple-500/10 border border-purple-500 text-purple-300 rounded-md">Email me</a>
      <a href="https://drive.google.com/file/d/14nISrCSc_QEYgaOP7xdO780nCaPJCl-R/view?usp=sharing" target="_blank" rel="noreferrer" className="px-4 py-2 border border-slate-700 rounded-md">Download Resume</a>
    </div>
  </div>

  <div className="mt-6 text-xs text-slate-500 text-center">
    Built with ❤️ — React, Tailwind v4, Framer Motion. Full resume data used for projects, skills, and achievements.
  </div>
</footer>

    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/* --- data --- */
type Skill = {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  size: "sm" | "md" | "lg";
  icon?: string;
};

const skills: Skill[] = [
  /* frontend */
  { name: "React",       category: "frontend",  size: "lg",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript",  category: "frontend",  size: "lg",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript",  category: "frontend",  size: "md",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML5",       category: "frontend",  size: "md",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        category: "frontend",  size: "md",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Redux",       category: "frontend",  size: "sm",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Next.js",     category: "frontend",  size: "md",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Bootstrap",   category: "frontend",  size: "sm",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind",    category: "frontend",  size: "sm",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  /* backend */
  { name: "Node.js",     category: "backend",   size: "lg",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js",  category: "backend",   size: "md",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "REST APIs",   category: "backend",   size: "md" },
  { name: "Sequelize",   category: "backend",   size: "sm",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" },
  /* database */
  { name: "PostgreSQL",  category: "database",  size: "lg",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL",       category: "database",  size: "md",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB",     category: "database",  size: "sm",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  /* tools */
  { name: "Git",         category: "tools",     size: "lg",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",      category: "tools",     size: "md",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Scrum",       category: "tools",     size: "sm" },
  { name: "Figma",       category: "tools",     size: "sm",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const categories = [
  { id: "all",      label: "Todo" },
  { id: "frontend", label: "Frontend" },
  { id: "backend",  label: "Backend" },
  { id: "database", label: "Base de Datos" },
  { id: "tools",    label: "Herramientas" },
];

const sizeClass: Record<Skill["size"], string> = {
  sm: "",
  md: "lg",
  lg: "xl",
};

export default function Skills() {
  const ref     = useRef<HTMLDivElement>(null);
  const [visible, setVisible]  = useState(false);
  const [active,  setActive]   = useState("all");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = active === "all"
    ? skills
    : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-36 overflow-hidden" aria-label="Habilidades tecnicas">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-xs tracking-widest uppercase text-cyan">// 02 — habilidades</span>
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
        </div>

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Mi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
                Stack Tecnologico
              </span>
            </h2>
            <p className="text-muted-light text-lg mt-3 max-w-md">
              Herramientas y tecnologias que uso para dar vida a los proyectos.
            </p>
          </div>

          {/* filter pills */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar habilidades">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300
                  ${active === cat.id
                    ? "bg-cyan text-background font-bold glow-cyan"
                    : "border border-border text-muted hover:text-foreground hover:border-border-hover"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ---- tag cloud — size variant layout ---- */}
        <div
          className="flex flex-wrap gap-3 items-center"
          role="tabpanel"
          aria-label={`Habilidades: ${active}`}
        >
          {filtered.map((skill, i) => {
            const cls = sizeClass[skill.size];
            return (
              <div
                key={skill.name}
                className={`skill-tag ${cls}`}
                style={{ animationDelay: `${i * 40}ms` }}
                data-hover
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-4 h-4 object-contain flex-shrink-0"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                )}
                {skill.name}
              </div>
            );
          })}
        </div>

        {/* ---- horizontal progress bars for "featured" skills ---- */}
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            { name: "React / Next.js",    level: 90, color: "cyan"   },
            { name: "Node.js / Express",  level: 82, color: "purple" },
            { name: "JavaScript / TS",    level: 88, color: "cyan"   },
            { name: "PostgreSQL / MySQL", level: 78, color: "purple" },
          ].map((s) => (
            <BarSkill key={s.name} name={s.name} level={s.level} color={s.color as "cyan" | "purple"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BarSkill({ name, level, color }: { name: string; level: number; color: "cyan" | "purple" }) {
  const ref      = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const barBg   = color === "cyan" ? "bg-cyan" : "bg-purple";
  const textCol = color === "cyan" ? "text-cyan" : "text-purple";

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-display font-semibold text-foreground text-sm">{name}</span>
        <span className={`font-mono text-xs ${textCol}`}>{level}%</span>
      </div>
      <div
        className="h-1 bg-surface-3 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${barBg}`}
          style={{ width: vis ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

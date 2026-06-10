"use client";

import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
  color: "cyan" | "purple";
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend", color: "cyan" },
  { name: "CSS3", level: 90, category: "frontend", color: "cyan" },
  { name: "JavaScript", level: 88, category: "frontend", color: "cyan" },
  { name: "React", level: 90, category: "frontend", color: "cyan" },
  { name: "Redux", level: 80, category: "frontend", color: "cyan" },
  { name: "Bootstrap", level: 85, category: "frontend", color: "cyan" },
  // Backend
  { name: "Node.js", level: 82, category: "backend", color: "purple" },
  { name: "Express.js", level: 80, category: "backend", color: "purple" },
  { name: "Sequelize", level: 75, category: "backend", color: "purple" },
  // Database
  { name: "PostgreSQL", level: 78, category: "database", color: "purple" },
  { name: "MySQL", level: 75, category: "database", color: "purple" },
  // Tools
  { name: "Git", level: 85, category: "tools", color: "cyan" },
  { name: "GitHub", level: 85, category: "tools", color: "cyan" },
  { name: "Scrum", level: 80, category: "tools", color: "cyan" },
];

const categories = [
  { id: "all", label: "Todo" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Base de Datos" },
  { id: "tools", label: "Herramientas" },
];

const techIcons: Record<string, string> = {
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Sequelize: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Scrum: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
};

function SkillCard({ skill, index, sectionVisible }: { skill: Skill; index: number; sectionVisible: boolean }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (sectionVisible && !animated) {
      const t = setTimeout(() => setAnimated(true), index * 60);
      return () => clearTimeout(t);
    }
  }, [sectionVisible, index, animated]);

  const colorClass = skill.color === "cyan"
    ? "border-cyan/20 hover:border-cyan/40 bg-cyan/5"
    : "border-purple/20 hover:border-purple/40 bg-purple/5";

  const barColor = skill.color === "cyan" ? "bg-cyan" : "bg-purple";
  const glowColor = skill.color === "cyan" ? "shadow-cyan/20" : "shadow-purple/20";

  return (
    <div
      className={`group relative p-5 rounded-2xl border backdrop-blur-sm transition-all duration-500 cursor-default
                  ${colorClass} hover:shadow-lg ${glowColor} ${
        animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
          <img
            src={techIcons[skill.name]}
            alt={skill.name}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground text-sm truncate">{skill.name}</p>
          <p className="text-muted text-xs font-mono">{skill.level}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name}: ${skill.level}%`}>
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${barColor}`}
          style={{ width: animated ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-32 overflow-hidden" aria-label="Habilidades tecnicas">
      {/* Ambient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-mono text-xs tracking-widest uppercase text-cyan">// habilidades</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Mi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
              Stack Tecnologico
            </span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Herramientas y tecnologias que uso para dar vida a los proyectos
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Filtrar habilidades por categoria">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wide uppercase transition-all duration-300
                ${activeCategory === cat.id
                  ? "bg-cyan text-[#080b12] font-bold"
                  : "border border-border text-muted hover:text-foreground hover:border-cyan/30"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          role="tabpanel"
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} sectionVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  image: string;
  demo: string;
  repo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "World Developers",
    subtitle: "Work & Relax para IT",
    desc: "Plataforma Full Stack para trabajadores del mundo IT que ofrece hospedajes en hoteles bajo la metodologia Work & Relax. Proyecto grupal final del Bootcamp Henry.",
    tags: ["React", "Redux", "Node.js", "PostgreSQL", "Express"],
    image: "/proyecto1.png",
    demo: "https://world-dev-front.vercel.app",
    repo: "https://github.com/TheOliver413/WorldDev-Front.git",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Wiki Games",
    subtitle: "Enciclopedia de videojuegos",
    desc: "Single Page Application que consume la API externa RAWG. Permite explorar, buscar, filtrar y ordenar miles de videojuegos, ademas de crear nuevos registros.",
    tags: ["React", "Redux", "Node.js", "Express", "RAWG API"],
    image: "/proyecto2.png",
    demo: "https://wiki-game-front.vercel.app",
    repo: "https://github.com/TheOliver413/WikiGame-Front.git",
  },
  {
    id: 3,
    number: "03",
    title: "Mundo Pokemon",
    subtitle: "SPA para explorar Pokemon",
    desc: "Single Page Application desarrollada como Proyecto Individual en Henry. Permite explorar la Pokedex, buscar y filtrar Pokemon, y crear nuevos registros.",
    tags: ["React", "Redux", "Node.js", "PostgreSQL", "PokeAPI"],
    image: "/proyecto3.png",
    demo: "https://client-kohl.vercel.app",
    repo: "https://github.com/TheOliver413/Mundo-Pokemon-Front.git",
  },
  {
    id: 4,
    number: "04",
    title: "PI Food",
    subtitle: "App de recetas y gastronomia",
    desc: "Proyecto Individual del Bootcamp Henry. Aplicacion para explorar recetas, buscarlas por nombre, filtrarlas por tipo de dieta y ordenar por distintos criterios.",
    tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    image: "/proyecto4.png",
    demo: "https://pi-food-murex.vercel.app",
    repo: "https://github.com/TheOliver413/CLIENT_FOOD",
  },
  {
    id: 5,
    number: "05",
    title: "Blockify",
    subtitle: "Programacion visual con bloques",
    desc: "Aplicacion interactiva basada en la libreria Blockly. Los usuarios crean programas mediante bloques de codigo arrastrables y conectables de forma intuitiva.",
    tags: ["React", "Blockly", "JavaScript"],
    image: "/Blockify.png",
    demo: "https://blockify-delta.vercel.app",
    repo: "https://github.com/TheOliver413/Blockify.git",
  },
  {
    id: 6,
    number: "06",
    title: "Green Wrap Eatery",
    subtitle: "E-commerce corporativo",
    desc: "Web corporativa con tienda virtual desarrollada en WordPress y WooCommerce. Totalmente responsive con Stripe como pasarela de pagos para clientes en Georgia, USA.",
    tags: ["WordPress", "WooCommerce", "Stripe"],
    image: "/catering.png",
    demo: "https://gwrapeatery.com",
  },
  {
    id: 7,
    number: "07",
    title: "Coca Cola Landing",
    subtitle: "Landing page tematica",
    desc: "Sitio web tematico de Coca Cola desarrollado para reforzar conceptos. Construido en HTML5, CSS3 y jQuery, con envio de correo via FormSubmit API. Totalmente responsive.",
    tags: ["HTML5", "CSS3", "jQuery", "FormSubmit"],
    image: "/cocacola.png",
    demo: "https://coca-cola-kappa.vercel.app",
    repo: "https://github.com/TheOliver413/Coca-Cola",
  },
];

/* ---- individual row ---- */
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref            = useRef<HTMLDivElement>(null);
  const [vis, setVis]  = useState(false);
  const [hov, setHov]  = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`relative group project-line border-b border-border transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-hover
    >
      {/* hover bg wash */}
      <div
        className={`absolute inset-0 bg-cyan/[0.025] transition-opacity duration-400 pointer-events-none ${hov ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-12 gap-4 items-center py-7 px-2">

        {/* number */}
        <div className="col-span-1 hidden md:block">
          <span
            className={`font-mono text-xs tracking-widest transition-colors duration-300 ${hov ? "text-cyan" : "text-muted/40"}`}
          >
            {project.number}
          </span>
        </div>

        {/* title + subtitle */}
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-start gap-3">
            {project.featured && (
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0 animate-pulse" aria-label="Proyecto destacado" />
            )}
            <div>
              <h3
                className={`font-display font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${hov ? "text-cyan" : "text-foreground"}`}
              >
                {project.title}
              </h3>
              <p className="font-mono text-xs text-muted tracking-wide mt-0.5">{project.subtitle}</p>
            </div>
          </div>
        </div>

        {/* desc */}
        <div className="col-span-12 md:col-span-4">
          <p className="text-muted text-sm leading-relaxed">{project.desc}</p>
        </div>

        {/* tags */}
        <div className="col-span-12 md:col-span-2 hidden lg:flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-full bg-surface-3 border border-border text-muted-light">
              {t}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="font-mono text-[10px] px-2 py-1 rounded-full bg-surface-3 border border-border text-muted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* actions */}
        <div className="col-span-12 md:col-span-1 flex items-center justify-start md:justify-end gap-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo de ${project.title}`}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-border text-muted
                       hover:border-cyan/40 hover:text-cyan transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver repositorio de ${project.title}`}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-border text-muted
                         hover:border-purple/40 hover:text-purple transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* floating preview on hover */}
      <div
        className={`absolute right-24 top-1/2 -translate-y-1/2 z-20 w-52 aspect-video rounded-xl overflow-hidden border border-border shadow-2xl shadow-black/60 pointer-events-none
                    transition-all duration-400 ${hov ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 translate-x-4"}`}
        aria-hidden="true"
      >
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
    </div>
  );
}

/* ---- section ---- */
export default function Projects() {
  const ref           = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="proyectos" className="relative py-36 overflow-hidden" aria-label="Mis proyectos">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-xs tracking-widest uppercase text-cyan">// 03 — proyectos</span>
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
        </div>

        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            Trabajo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
              Seleccionado
            </span>
          </h2>
          <p className="font-mono text-muted text-sm">
            {projects.length} proyectos publicados
          </p>
        </div>

        {/* ---- editorial list ---- */}
        <div role="list" aria-label="Lista de proyectos">
          {/* header row */}
          <div className="grid grid-cols-12 gap-4 px-2 pb-4 border-b border-border">
            {["#", "Proyecto", "Descripcion", "Stack", ""].map((h, i) => (
              <div
                key={i}
                className={`font-mono text-[10px] tracking-widest uppercase text-muted/50
                  ${i === 0 ? "col-span-1 hidden md:block" : ""}
                  ${i === 1 ? "col-span-4" : ""}
                  ${i === 2 ? "col-span-4" : ""}
                  ${i === 3 ? "col-span-2 hidden lg:block" : ""}
                  ${i === 4 ? "col-span-1 text-right" : ""}
                `}
              >
                {h}
              </div>
            ))}
          </div>

          {projects.map((p, i) => (
            <div key={p.id} role="listitem">
              <ProjectRow project={p} index={i} />
            </div>
          ))}
        </div>

        {/* all projects CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/TheOliver413"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-muted-light
                       hover:border-border-hover hover:text-cyan transition-all duration-300 group font-mono text-sm"
          >
            Ver todos los proyectos en GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

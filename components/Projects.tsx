"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  image: string;
  demo: string;
  repo?: string;
  featured?: boolean;
  number: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "World Developers",
    description: "Work & Relax para IT",
    longDesc:
      "Plataforma Full Stack para trabajadores del mundo IT que ofrece hospedajes en hoteles bajo la metodologia Work & Relax. Proyecto grupal final del Bootcamp Henry.",
    tags: ["React", "Redux", "Node.js", "PostgreSQL", "Express"],
    image: "/proyecto1.png",
    demo: "https://world-dev-front.vercel.app",
    repo: "https://github.com/TheOliver413/WorldDev-Front.git",
    featured: true,
    number: "01",
  },
  {
    id: 2,
    title: "Wiki Games",
    description: "Enciclopedia de videojuegos",
    longDesc:
      "Single Page Application que consume la API externa RAWG. Permite explorar, buscar, filtrar y ordenar miles de videojuegos, ademas de crear nuevos registros.",
    tags: ["React", "Redux", "Node.js", "Express", "RAWG API"],
    image: "/proyecto2.png",
    demo: "https://wiki-game-front.vercel.app",
    repo: "https://github.com/TheOliver413/WikiGame-Front.git",
    number: "02",
  },
  {
    id: 3,
    title: "Mundo Pokemon",
    description: "SPA para explorar Pokemon",
    longDesc:
      "Single Page Application desarrollada como Proyecto Individual en Henry. Permite explorar la Pokedex, buscar y filtrar Pokemon, y crear nuevos registros.",
    tags: ["React", "Redux", "Node.js", "PostgreSQL", "PokeAPI"],
    image: "/proyecto3.png",
    demo: "https://client-kohl.vercel.app",
    repo: "https://github.com/TheOliver413/Mundo-Pokemon-Front.git",
    number: "03",
  },
  {
    id: 4,
    title: "PI Food",
    description: "App de recetas y gastronomia",
    longDesc:
      "Proyecto Individual del Bootcamp Henry. Aplicacion para explorar recetas, buscarlas por nombre, filtrarlas por tipo de dieta y ordenar por distintos criterios.",
    tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    image: "/proyecto4.png",
    demo: "https://pi-food-murex.vercel.app",
    repo: "https://github.com/TheOliver413/CLIENT_FOOD",
    number: "04",
  },
  {
    id: 5,
    title: "Blockify",
    description: "Programacion visual con bloques",
    longDesc:
      "Aplicacion interactiva basada en la libreria Blockly. Los usuarios crean programas mediante bloques de codigo arrastrables y conectables de forma intuitiva.",
    tags: ["React", "Blockly", "JavaScript"],
    image: "/Blockify.png",
    demo: "https://blockify-delta.vercel.app",
    repo: "https://github.com/TheOliver413/Blockify.git",
    number: "05",
  },
  {
    id: 6,
    title: "Green Wrap Eatery",
    description: "E-commerce corporativo",
    longDesc:
      "Web corporativa con tienda virtual desarrollada en WordPress y WooCommerce. Totalmente responsive con Stripe como pasarela de pagos para clientes en Georgia, USA.",
    tags: ["WordPress", "WooCommerce", "Stripe"],
    image: "/catering.png",
    demo: "https://gwrapeatery.com",
    number: "06",
  },
  {
    id: 7,
    title: "Coca Cola Landing",
    description: "Landing page tematica",
    longDesc:
      "Sitio web tematico de Coca Cola desarrollado para reforzar conceptos. Construido en HTML5, CSS3 y jQuery, con envio de correo via FormSubmit API. Totalmente responsive.",
    tags: ["HTML5", "CSS3", "jQuery", "FormSubmit"],
    image: "/cocacola.png",
    demo: "https://coca-cola-kappa.vercel.app",
    repo: "https://github.com/TheOliver413/Coca-Cola",
    number: "07",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const go = (next: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setPrevActive(active);
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setPrevActive(null);
      setAnimating(false);
    }, 350);
  };

  const prev = () => go((active - 1 + projects.length) % projects.length, "left");
  const next = () => go((active + 1) % projects.length, "right");

  const project = projects[active];

  return (
    <section id="proyectos" className="relative py-32 overflow-hidden" aria-label="Mis proyectos">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-cyan">// proyectos</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Trabajo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
                Seleccionado
              </span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-muted text-sm">
              {String(active + 1).padStart(2, "0")}{" "}
              <span className="text-border">/</span>{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <button
              onClick={prev}
              aria-label="Proyecto anterior"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted
                         hover:border-cyan/40 hover:text-cyan transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Proyecto siguiente"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted
                         hover:border-cyan/40 hover:text-cyan transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Image — magazine style full-bleed */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-video group">
              {/* Project number */}
              <div
                className="absolute top-4 left-4 z-20 font-mono text-5xl font-bold text-white/10 leading-none pointer-events-none select-none"
                aria-hidden="true"
              >
                {project.number}
              </div>

              <img
                key={active}
                src={project.image}
                alt={`Captura de pantalla de ${project.title}`}
                className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
                  animating
                    ? direction === "right"
                      ? "-translate-x-8 opacity-0"
                      : "translate-x-8 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan text-[#080b12] font-bold rounded-lg text-sm hover:bg-cyan/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo en vivo
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 text-foreground rounded-lg text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4" />
                      Repositorio
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div
            className={`lg:col-span-5 transition-all duration-350 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Featured badge */}
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan font-mono text-xs tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
                Proyecto destacado
              </span>
            )}

            <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-cyan font-mono text-sm mb-5">{project.description}</p>

            <p className="text-muted leading-relaxed mb-7">{project.longDesc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8" aria-label="Tecnologias utilizadas">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-surface-2 border border-border text-foreground/70 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan text-[#080b12] font-bold rounded-xl text-sm
                           hover:bg-cyan/90 glow-cyan transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Ver demo
              </a>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-xl text-sm
                             hover:border-purple/40 hover:text-purple transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  Ver codigo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Dot nav */}
        <div className="flex items-center justify-center gap-2 mt-12" role="tablist" aria-label="Navegacion de proyectos">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => go(i, i > active ? "right" : "left")}
              role="tab"
              aria-selected={active === i}
              aria-label={`Ir al proyecto ${p.title}`}
              className={`transition-all duration-300 rounded-full ${
                active === i
                  ? "w-8 h-2 bg-cyan"
                  : "w-2 h-2 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

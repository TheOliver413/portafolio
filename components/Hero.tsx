"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowDownRight } from "lucide-react";

/* ---------- typing ---------- */
const roles = [
  "Full Stack Developer",
  "React Engineer",
  "Node.js Developer",
  "UI/UX Enthusiast",
];

/* ---------- cursor ---------- */
function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
    };

    const lerp = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.14;
      ring.current.y += (pos.current.y - ring.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(lerp);
    };

    const hover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isHoverable = el.closest("a, button, [data-hover]");
      ringRef.current?.classList.toggle("hovered", !!isHoverable);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hover);
    raf.current = requestAnimationFrame(lerp);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hover);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

/* ---------- ticker text ---------- */
const tickerItems = [
  "React",  "Node.js", "TypeScript", "PostgreSQL",
  "Express", "Redux",   "Next.js",   "Git",
  "CSS",     "HTML5",   "MongoDB",   "REST APIs",
];
function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-y border-border py-3 select-none" aria-hidden="true">
      <div className="ticker-track gap-8 flex">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-widest uppercase text-muted flex items-center gap-8">
            {item}
            <span className="text-cyan/40">&#x2022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- main ---------- */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing,    setTyping]    = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* typing effect */
  const tick = useCallback(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timerRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timerRef.current = setTimeout(() => setTyping(false), 2400);
      }
    } else {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  useEffect(() => {
    tick();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [tick]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <CustomCursor />
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col justify-between overflow-hidden grid-bg"
        aria-label="Seccion de inicio"
      >
        {/* ---- ambient orbs ---- */}
        <div className="pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple/10 blur-3xl orb-drift" />
          <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-cyan/8 blur-3xl orb-drift" style={{ animationDelay: "-6s" }} />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-purple/6 blur-3xl orb-drift" style={{ animationDelay: "-12s" }} />
        </div>

        {/* ---- main content ---- */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-0 flex flex-col lg:flex-row items-center lg:items-end gap-12 flex-1">

          {/* LEFT: mega headline */}
          <div className="flex-1 w-full">
            {/* status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/[0.06] mb-10">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
              </span>
              <span className="font-mono text-cyan text-xs tracking-widest uppercase">
                Disponible para proyectos
              </span>
            </div>

            {/* headline */}
            <h1 className="font-display font-extrabold leading-none tracking-tight text-balance mb-6">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[clamp(72px,9vw,120px)] text-foreground">
                Hola, soy
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[clamp(72px,9vw,120px)] text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan/80 to-purple leading-none pb-2">
                Oliver Borda
              </span>
            </h1>

            {/* role typer */}
            <p className="font-mono text-muted text-xl md:text-2xl mb-10 h-8 flex items-center">
              <span className="text-cyan/60 mr-1">{"<"}</span>
              <span className="text-foreground/80 typing-cursor">{displayed}</span>
              <span className="text-cyan/60 ml-1">{" />"}</span>
            </p>

            {/* description */}
            <p className="text-muted-light leading-relaxed text-lg max-w-lg mb-12">
              Desarrollador apasionado por construir productos digitales de alto impacto.
              Transformo ideas complejas en interfaces elegantes y funcionales.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("proyectos")}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan text-background font-bold rounded-xl text-sm
                           tracking-wide glow-cyan hover:bg-cyan/90 transition-all duration-300 active:scale-95"
              >
                Ver proyectos
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="https://drive.google.com/file/d/1RNqrU0st0f11TyUHL5du0KuXJQ5rzynE/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-xl
                           text-sm tracking-wide hover:border-cyan/40 hover:text-cyan transition-all duration-300"
              >
                Descargar CV
              </a>
            </div>

            {/* stats row */}
            <div className="flex gap-10 mt-16">
              {[
                { value: "7+",  label: "Proyectos" },
                { value: "3+",  label: "Anos exp." },
                { value: "15+", label: "Tecnologias" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-extrabold text-cyan text-glow-cyan">{s.value}</p>
                  <p className="font-mono text-xs tracking-widest uppercase text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: avatar + orbit */}
          <div className="flex-shrink-0 relative" aria-hidden="true">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* orbit rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan/15 animate-spin-slow" />
              <div
                className="absolute inset-5 rounded-full border border-purple/15 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "14s" }}
              />

              {/* glow halo */}
              <div className="absolute inset-6 rounded-full bg-purple/15 blur-2xl" />
              <div className="absolute inset-6 rounded-full bg-cyan/10 blur-xl" />

              {/* photo */}
              <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-cyan/30 glow-cyan">
                <img
                  src="/Foto.jpg"
                  alt="Oliver Borda"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/foto.jpeg"; }}
                />
              </div>

              {/* floating badges */}
              {[
                { label: "React",    pos: "top-0 right-0",  col: "text-cyan  border-cyan/30  bg-cyan/5",   delay: "0s"    },
                { label: "Node.js",  pos: "bottom-6 -left-6", col: "text-purple border-purple/30 bg-purple/5", delay: "1.3s"  },
                { label: "TypeScript", pos: "-bottom-2 right-4", col: "text-cyan  border-cyan/30  bg-cyan/5",   delay: "0.7s"  },
              ].map((b) => (
                <div
                  key={b.label}
                  className={`absolute ${b.pos} px-3 py-1.5 rounded-lg border font-mono text-xs font-bold ${b.col} backdrop-blur-sm animate-float`}
                  style={{ animationDelay: b.delay }}
                >
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- ticker ---- */}
        <div className="relative z-10 w-full mt-16">
          <Ticker />
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted animate-bounce" aria-hidden="true">
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-6 bg-muted/40" />
        </div>
      </section>
    </>
  );
}

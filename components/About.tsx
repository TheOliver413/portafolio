"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Code2, Target, Download, ArrowUpRight } from "lucide-react";

const timeline = [
  {
    Icon: GraduationCap,
    year: "2022",
    title: "Bootcamp Henry",
    desc: "Full Stack Web Development — 800h de practica intensiva.",
  },
  {
    Icon: Code2,
    year: "2021",
    title: "Tecnologo ADSI",
    desc: "Analisis y Desarrollo de Sistemas de Informacion — SENA.",
  },
  {
    Icon: Target,
    year: "2020",
    title: "Tecnico en Programacion",
    desc: "Desarrollo y Programacion de Software — SENA.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobremi" className="relative py-36 overflow-hidden" aria-label="Sobre mi">
      {/* ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/6 blur-3xl pointer-events-none" aria-hidden="true" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-xs tracking-widest uppercase text-cyan">// 01 — sobre mi</span>
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
        </div>

        {/* asymmetric split */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT — image */}
          <div className="lg:col-span-4 relative" aria-hidden="true">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border border-cyan/10 rounded-2xl" />
              <div className="absolute -top-2 -left-2 w-full h-full border border-purple/10 rounded-2xl" />

              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[3/4] glow-purple">
                <img
                  src="/foto.jpeg"
                  alt="Oliver Borda, Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/Foto.jpg"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-mono text-xs text-cyan tracking-widest uppercase">Full Stack Developer</p>
                  <p className="font-display font-bold text-foreground text-lg">Oliver Borda</p>
                </div>
              </div>
            </div>

            {/* availability chip */}
            <div className="mt-6 flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-surface-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute h-full w-full rounded-full bg-cyan opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-xs text-muted-light tracking-wide">Disponible — Colombia</span>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="lg:col-span-8">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8 text-balance">
              Construyo experiencias{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
                digitales que importan
              </span>
            </h2>

            <div className="space-y-5 text-muted-light leading-relaxed text-lg mb-12">
              <p>
                Soy un desarrollador emprendedor y proactivo, con fuerte vocacion de trabajo en equipo.
                Me adapto rapidamente a nuevos desafios, siempre orientado al cumplimiento de metas con
                capacidad para trabajar bajo presion.
              </p>
              <p>
                Mi objetivo es integrar equipos donde pueda aportar mis conocimientos en las distintas
                areas del desarrollo y seguir creciendo profesionalmente. Creo en el codigo limpio,
                en la experiencia de usuario y en soluciones que resuelven problemas reales.
              </p>
            </div>

            {/* timeline */}
            <div className="space-y-0 mb-12">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-cyan/10 border border-cyan/20 text-cyan group-hover:bg-cyan/15 transition-colors">
                      <item.Icon className="w-4 h-4" />
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border my-2" aria-hidden="true" />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < timeline.length - 1 ? "1.5rem" : 0 }}>
                    <span className="font-mono text-xs text-muted tracking-widest">{item.year}</span>
                    <h3 className="font-display font-bold text-foreground text-base mt-0.5">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1RNqrU0st0f11TyUHL5du0KuXJQ5rzynE/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-cyan/30 text-cyan font-medium
                           hover:bg-cyan/10 hover:border-cyan/50 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Descargar CV
              </a>
              <a
                href="https://github.com/TheOliver413"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-border text-muted
                           hover:border-border-hover hover:text-foreground transition-all duration-300 group"
              >
                Ver GitHub
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

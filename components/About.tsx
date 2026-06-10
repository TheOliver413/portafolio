"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Code2, Target, Download } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    text: "Egresado del Bootcamp Henry",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    text: "Tecnologo en ADSI — Analisis y Desarrollo de Sistemas",
  },
  {
    icon: <Target className="w-5 h-5" />,
    text: "Tecnico en Desarrollo y Programacion de Software",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs tracking-widest uppercase text-cyan">
      {children}
    </span>
  );
}

export default function About() {
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

  return (
    <section id="sobremi" className="relative py-32 overflow-hidden" aria-label="Sobre mi">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image side */}
          <div className="relative flex-shrink-0" aria-hidden="true">
            <div className="relative w-72 h-80 lg:w-80 lg:h-96">
              {/* Frame decoration */}
              <div className="absolute -inset-3 border border-cyan/15 rounded-2xl" />
              <div className="absolute -inset-6 border border-purple/10 rounded-3xl" />

              {/* Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border glow-purple">
                <img
                  src="/foto.jpeg"
                  alt="Oliver Borda"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/Foto.jpg";
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple/30 via-transparent to-transparent" />
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-cyan/40 rounded-br-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-purple/40 rounded-tl-2xl" />
            </div>
          </div>

          {/* Content side */}
          <div className="flex-1">
            <SectionLabel>// sobre mi</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Construyo experiencias
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
                digitales que importan
              </span>
            </h2>

            <p className="text-muted leading-relaxed text-lg mb-6">
              Soy un desarrollador emprendedor y activo, con iniciativa propia y
              fuerte vocacion de trabajo en equipo. Me adapto rapidamente a nuevos
              desafios y entornos, siempre orientado al cumplimiento de metas y
              con capacidad para trabajar bajo presion.
            </p>

            <p className="text-muted leading-relaxed mb-8">
              Mi objetivo es integrar equipos donde pueda aportar mis conocimientos
              en las distintas areas del desarrollo y seguir creciendo
              profesionalmente. Creo en el codigo limpio, en la experiencia de
              usuario y en soluciones que resuelven problemas reales.
            </p>

            {/* Education highlights */}
            <ul className="space-y-4 mb-10" aria-label="Formacion academica">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-cyan/10 border border-cyan/20 text-cyan group-hover:bg-cyan/15 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-foreground/80 leading-relaxed pt-2">{item.text}</span>
                </li>
              ))}
            </ul>

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
          </div>
        </div>
      </div>
    </section>
  );
}

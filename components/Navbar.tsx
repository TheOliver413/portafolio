"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Sobre Mi",  href: "#sobremi" },
  { label: "Skills",    href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("inicio");
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setLineWidth(total > 0 ? (window.scrollY / total) * 100 : 0);

      const sections = ["inicio", "sobremi", "skills", "proyectos", "contacto"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border shadow-2xl shadow-black/40"
          : "bg-transparent"
      )}
    >
      {/* Scroll progress line */}
      <div
        className="absolute bottom-0 left-0 h-px bg-cyan transition-none"
        style={{ width: `${lineWidth}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleClick("#inicio"); }}
          className="font-mono text-lg font-bold tracking-widest hover:text-cyan transition-colors duration-300 relative group"
          aria-label="Ir al inicio"
        >
          <span className="text-cyan">&lt;</span>
          <span className="text-foreground">OB</span>
          <span className="text-cyan">/&gt;</span>
          <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full bg-cyan transition-all duration-300" aria-hidden="true" />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-10"
          role="navigation"
          aria-label="Navegacion principal"
        >
          {links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={clsx(
                  "relative font-mono text-xs tracking-widest uppercase transition-all duration-300 group",
                  isActive ? "text-cyan" : "text-muted hover:text-foreground"
                )}
              >
                {isActive && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
                )}
                {link.label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-px transition-all duration-300",
                    isActive ? "w-full bg-cyan" : "w-0 group-hover:w-full bg-cyan/50"
                  )}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* Social links + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/TheOliver413"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Oliver Borda"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted hover:text-cyan hover:border-cyan/40 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/oliver-sebastian-borda-mahecha-5a6649161/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Oliver Borda"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted hover:text-cyan hover:border-cyan/40 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:oliver413dev@gmail.com"
            className="ml-1 px-4 py-2 rounded-xl border border-cyan/30 font-mono text-xs text-cyan tracking-widest uppercase
                       hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-300"
          >
            Contactar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-muted hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-400",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav
          className="bg-background/95 backdrop-blur-2xl border-t border-border px-6 pb-6 pt-4 flex flex-col gap-4"
          role="navigation"
          aria-label="Navegacion movil"
        >
          {links.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={clsx(
                  "font-mono text-sm tracking-widest uppercase py-2 border-b border-border/40 transition-colors",
                  active === id ? "text-cyan" : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

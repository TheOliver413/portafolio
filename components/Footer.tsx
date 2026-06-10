export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        {/* top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* logo */}
          <span className="font-mono text-lg font-bold tracking-widest">
            <span className="text-cyan">&lt;</span>
            <span className="text-foreground">OB</span>
            <span className="text-cyan">/&gt;</span>
          </span>

          {/* nav quick links */}
          <nav className="flex items-center gap-8" aria-label="Navegacion footer">
            {[
              { label: "Inicio",    href: "#inicio" },
              { label: "Sobre Mi", href: "#sobremi" },
              { label: "Skills",   href: "#skills" },
              { label: "Proyectos",href: "#proyectos" },
              { label: "Contacto", href: "#contacto" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs tracking-widest uppercase text-muted hover:text-cyan transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* divider */}
        <div className="h-px bg-border mb-8" aria-hidden="true" />

        {/* bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-muted text-xs font-mono">
          <p>
            &copy; {year} Oliver Borda — Todos los derechos reservados
          </p>
          <p className="tracking-wide">
            Construido con{" "}
            <span className="text-cyan">Next.js</span>
            {" "}&#x2022;{" "}
            <span className="text-purple">React</span>
            {" "}&#x2022;{" "}
            <span className="text-cyan">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

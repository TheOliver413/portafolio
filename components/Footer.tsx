export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p className="font-mono">
          <span className="text-cyan">/</span>OB<span className="text-cyan">/</span>
          {" "}&copy; {year} Oliver Borda
        </p>
        <p className="font-mono text-xs tracking-wide">
          Construido con{" "}
          <span className="text-cyan">Next.js</span>
          {" "}&{" "}
          <span className="text-purple">React</span>
        </p>
      </div>
    </footer>
  );
}

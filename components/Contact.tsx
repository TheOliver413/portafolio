"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, ArrowUpRight } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/TheOliver413",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oliver-sebastian-borda-mahecha-5a6649161/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref           = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    from_name: "",
    email:     "",
    subject:   "",
    message:   "",
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "default_service",
          template_id: "template_b2ek4dq",
          user_id: "jOIyZeKrA3LUrNRa_",
          template_params: form,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ from_name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const input =
    "w-full px-4 py-3.5 bg-surface-2 border border-border rounded-xl text-foreground placeholder-muted text-sm font-sans focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all duration-300";

  return (
    <section id="contacto" className="relative py-36 overflow-hidden" aria-label="Seccion de contacto">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-xs tracking-widest uppercase text-cyan">// 04 — contacto</span>
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
        </div>

        {/* big CTA headline */}
        <div className="text-center mb-20">
          <h2 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 text-balance">
            Trabajemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">juntos</span>
          </h2>
          <p className="text-muted-light text-lg max-w-xl mx-auto">
            Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.
          </p>
        </div>

        {/* layout */}
        <div className="grid lg:grid-cols-5 gap-14">

          {/* left */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* contact info */}
            <div className="space-y-5">
              {[
                { icon: Mail,    label: "Email",     value: "oliver413dev@gmail.com", href: "mailto:oliver413dev@gmail.com" },
                { icon: MapPin,  label: "Ubicacion", value: "Colombia",               href: null },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 group" data-hover>
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan/10 border border-cyan/20 text-cyan flex-shrink-0 group-hover:bg-cyan/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-muted uppercase tracking-widest">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground hover:text-cyan transition-colors font-medium text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* socials */}
            <div>
              <p className="font-mono text-[10px] text-muted uppercase tracking-widest mb-5">Redes sociales</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Perfil de ${s.label}`}
                    data-hover
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-border text-muted
                               hover:border-cyan/40 hover:text-cyan hover:bg-cyan/5 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* big deco text */}
            <div className="font-display text-8xl font-black text-foreground/[0.03] leading-none select-none hidden lg:block" aria-hidden="true">
              OB
            </div>
          </div>

          {/* right — form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="from_name" className="sr-only">Nombre completo</label>
                    <input id="from_name" name="from_name" type="text" required value={form.from_name} onChange={handleChange} placeholder="Nombre completo *" className={input} />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Correo electronico</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Correo electronico *" className={input} />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="sr-only">Asunto</label>
                  <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="Asunto *" className={input} />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <textarea id="message" name="message" rows={6} required value={form.message} onChange={handleChange} placeholder="Cuentame sobre tu proyecto..." className={`${input} resize-none`} />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 text-sm mb-4 font-medium" role="alert">
                    <CheckCircle className="w-4 h-4" /> Mensaje enviado con exito!
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mb-4 font-medium" role="alert">
                    <AlertCircle className="w-4 h-4" /> Error al enviar. Intenta de nuevo.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  data-hover
                  className="w-full flex items-center justify-center gap-3 py-4 bg-cyan text-background font-bold rounded-xl
                             hover:bg-cyan/90 glow-cyan transition-all duration-300 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

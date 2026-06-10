"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "oliver413dev@gmail.com",
    href: "mailto:oliver413dev@gmail.com",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Ubicacion",
    value: "Colombia",
    href: null,
  },
];

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

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS integration — requires EMAILJS_PUBLIC_KEY in env or you can use the API
    try {
      const body = {
        service_id: "default_service",
        template_id: "template_b2ek4dq",
        user_id: "jOIyZeKrA3LUrNRa_",
        template_params: {
          from_name: form.from_name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
      };

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ from_name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-surface-2 border border-border rounded-xl text-foreground placeholder-muted text-sm font-sans focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all duration-300";

  return (
    <section id="contacto" className="relative py-32 overflow-hidden" aria-label="Seccion de contacto">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-cyan">// contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Trabajemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
              juntos
            </span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Tengo un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left info */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-10">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Hablemos</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan/10 border border-cyan/20 text-cyan flex-shrink-0 group-hover:bg-cyan/15 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-muted text-xs font-mono uppercase tracking-widest">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground hover:text-cyan transition-colors text-sm font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-muted text-xs font-mono uppercase tracking-widest mb-4">Redes sociales</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Perfil de ${s.label}`}
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-border text-muted
                               hover:border-cyan/40 hover:text-cyan hover:bg-cyan/5 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Big text decoration */}
            <div
              className="hidden lg:block font-mono text-8xl font-black text-foreground/[0.03] leading-none select-none"
              aria-hidden="true"
            >
              OB
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="from_name" className="sr-only">Nombre completo</label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      required
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="Nombre completo *"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Correo electronico</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Correo electronico *"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="sr-only">Asunto</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Asunto *"
                    className={inputClass}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuentame sobre tu proyecto..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 text-sm mb-4 font-medium" role="alert">
                    <CheckCircle className="w-4 h-4" />
                    Mensaje enviado con exito!
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mb-4 font-medium" role="alert">
                    <AlertCircle className="w-4 h-4" />
                    Error al enviar. Intenta de nuevo.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 py-3.5 bg-cyan text-[#080b12] font-bold rounded-xl
                             hover:bg-cyan/90 glow-cyan transition-all duration-300 active:scale-98 disabled:opacity-60
                             disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#080b12]/40 border-t-[#080b12] rounded-full animate-spin" aria-hidden="true" />
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

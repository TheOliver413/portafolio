import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass-panel">
            <span className="pulse-dot"></span>
            Disponible para nuevos proyectos
          </div>
          
          <h1 className="hero-title">
            Transformando ideas en <br />
            <span className="text-gradient">experiencias digitales</span>
          </h1>
          
          <p className="hero-subtitle">
            Soy un Desarrollador Full Stack especializado en React.js, 
            creando aplicaciones web modernas, rápidas y escalables con un enfoque 
            en el diseño de interfaz de usuario de alto impacto.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos <ArrowRight size={20} />
            </a>
            <div className="social-links">
              <a href="https://github.com/TheOliver413" target="_blank" rel="noreferrer" className="social-icon glass-panel">
                <Github size={22} />
              </a>
              <a href="#" className="social-icon glass-panel">
                <Linkedin size={22} />
              </a>
              <a href="#" className="social-icon glass-panel">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glass-panel code-snippet">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre>
              <code>
<span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
<br/>  <span className="property">name</span>: <span className="string">'Oliver'</span>,
<br/>  <span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'CSS'</span>],
<br/>  <span className="property">passion</span>: <span className="string">'Innovación'</span>
<br/>{'}'};
<br/>
<span className="keyword">export default</span> developer;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

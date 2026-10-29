import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Plataforma",
      category: "Full Stack",
      desc: "Una tienda virtual completa con carrito, pagos y panel de admin.",
      tech: ["React", "Node.js", "Stripe"],
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "large"
    },
    {
      id: 2,
      title: "Dashboard Analítico",
      category: "Frontend",
      desc: "Visualización de datos en tiempo real con gráficos interactivos.",
      tech: ["React", "Chart.js"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "medium"
    },
    {
      id: 3,
      title: "App de Gestión",
      category: "Mobile First",
      desc: "Aplicación PWA para la gestión de tareas de equipos.",
      tech: ["React", "Firebase"],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "medium"
    },
    {
      id: 4,
      title: "Clon de Spotify",
      category: "UI/UX",
      desc: "Interfaz moderna de reproductor de música.",
      tech: ["React", "Redux", "CSS Modules"],
      img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "wide"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trabajos <span className="text-gradient">Destacados</span></h2>
          <p className="section-subtitle">Explora algunos de mis proyectos más recientes e innovadores.</p>
        </div>

        <div className="bento-grid">
          {projects.map((project) => (
            <div key={project.id} className={`bento-item glass-panel ${project.size}`}>
              <div className="bento-image-wrapper">
                <img src={project.img} alt={project.title} className="bento-image" />
                <div className="bento-overlay">
                  <div className="bento-links">
                    <a href="#" className="glass-panel icon-link" title="Ver Código">
                      <Github size={20} />
                    </a>
                    <a href="#" className="glass-panel icon-link" title="Demo en Vivo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bento-content">
                <span className="bento-category">{project.category}</span>
                <h3 className="bento-title">{project.title}</h3>
                <p className="bento-desc">{project.desc}</p>
                <div className="bento-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

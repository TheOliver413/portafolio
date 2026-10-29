import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual glass-panel">
            <div className="profile-img-container">
              {/* Espacio para una foto de perfil */}
              <div className="img-placeholder">
                <span className="text-gradient">O</span>
              </div>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <h4 className="text-gradient">3+</h4>
                <p>Años Experiencia</p>
              </div>
              <div className="stat-item">
                <h4 className="text-gradient">15+</h4>
                <p>Proyectos Completados</p>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title">Sobre <span className="text-gradient">Mí</span></h2>
            <p className="about-text">
              Soy un desarrollador apasionado por crear soluciones tecnológicas que no solo funcionen a la perfección, sino que también ofrezcan una experiencia visual y de usuario excepcional.
            </p>
            <p className="about-text">
              Mi enfoque principal está en el ecosistema JavaScript/TypeScript, construyendo aplicaciones modernas con React y Node.js.
            </p>
            
            <div className="skills-container">
              <h3 className="skills-title">Tecnologías Principales</h3>
              <div className="skills-flex">
                {['React', 'JavaScript', 'Node.js', 'CSS/SASS', 'Git', 'Figma', 'MongoDB', 'Express'].map(skill => (
                  <span key={skill} className="skill-tag glass-panel">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

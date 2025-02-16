import { ChevronDown, Code, Layout, Smartphone } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        {/* Left Section */}
        <div className="hero-left">
          <div className="hero-badge">
            <Code size={16} className="badge-icon" />
            Frontend Developer
          </div>
          <h1 className="hero-title">
            Hola, soy <span className="hero-name">Alejandro Figueroa</span>
          </h1>
          <p className="hero-description">
            Especializado en crear experiencias web dinámicas, atractivas y
            funcionales. <br /> Combinando creatividad y tecnología para diseñar
            soluciones innovadoras.
          </p>
          <div className="hero-tech-stack">
            <div className="tech-item">
              <Layout className="tech-icon" />
              <span>Web</span>
            </div>
            <div className="tech-item">
              <Smartphone className="tech-icon" />
              <span>Mobile</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">
              <span>Ver Proyectos</span>
            </a>
            <a href="#contacto" className="btn btn-outline">
              <span>Contactar</span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        
      </div>  
      <div className="scroll-indicator">
        <span>Scroll para más</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Hero;

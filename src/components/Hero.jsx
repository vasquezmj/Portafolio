import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
  FaLaptopCode,
  FaCheckCircle,
  FaChartLine,
  FaShoppingCart,
  FaBookOpen,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaGlobeAmericas,
} from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineCode } from 'react-icons/hi';
import profilePhoto from '../assets/images/profile-photo.png';
import './Hero.css';

const quickStats = [
  { value: '+4 Años', label: 'Experiencia Técnica & Datos' },
  { value: '3 Demos', label: 'Proyectos Reales en Vivo' },
  { value: '12 Certs', label: 'Fidélitas · Cisco · IBM · Scrum' },
];

const clientServices = [
  {
    icon: <FaChartLine />,
    title: 'POS SellControl — Punto de Venta (Verdulería VL)',
    desc: 'Prueba mi sistema en JavaFX: ventas multi-pestaña por Kg/Unidad, caja, gastos y ticket 58mm.',
    demoId: 'pos',
  },
  {
    icon: <FaShoppingCart />,
    title: 'Mamochi — Sitio Web & Catálogo con WhatsApp',
    desc: 'Explora la tienda artesanal de crochet con promociones, catálogo y encargos por WhatsApp.',
    demoId: 'mamochi',
  },
  {
    icon: <FaBookOpen />,
    title: 'Biblioteca Pública — Gestión Bibliotecaria (Spring Boot)',
    desc: 'Catálogo público, reserva de libros por 14 días, renovaciones, mesa de circulación e idiomas.',
    demoId: 'biblioteca',
  },
];

const recruiterCards = [
  {
    icon: <FaBriefcase />,
    label: 'Experiencia Actual',
    title: 'Técnico & Análisis de Datos',
    sub: 'Coloplast · Oct 2022 – Actualidad',
  },
  {
    icon: <FaGraduationCap />,
    label: 'Formación Universitaria',
    title: 'Ing. Desarrollo de Software',
    sub: 'Universidad Fidélitas · En curso',
  },
  {
    icon: <FaAward />,
    label: 'Certificaciones',
    title: '12 Títulos Verificables',
    sub: 'PHP · Scrum · Cisco · IBM · Fidélitas',
  },
  {
    icon: <FaGlobeAmericas />,
    label: 'Idiomas & Metodología',
    title: 'Español Nativo · Inglés Intermedio',
    sub: 'Scrum Fundamentals Certified',
  },
];

const recruiterStack = [
  'React',
  'JavaScript (ES6+)',
  'Java (Spring Boot · JavaFX)',
  'PHP',
  'Python',
  'SQL (MySQL · PostgreSQL · SQLite)',
  'NoSQL (MongoDB)',
  'HTML5 & CSS3',
  'Power BI',
  'Git & Soporte TI',
];

function Hero({ onSelectDemo }) {
  const [activeTab, setActiveTab] = useState('solutions');

  const scrollToSection = (id, demoId) => {
    if (demoId && onSelectDemo) {
      onSelectDemo(demoId);
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="hero section">
      <div className="hero__grid">
        {/* Left Column: Value Proposition & CTAs */}
        <motion.div
          className="hero__main"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero__eyebrow-row">
            <span className="section-eyebrow">
              <HiOutlineSparkles aria-hidden="true" /> Desarrollador de Software · Datos · TI
            </span>
            <span className="hero__location-pill">
              <FaMapMarkerAlt aria-hidden="true" /> Cartago, Costa Rica
            </span>
          </div>

          <h1 className="hero__title">
            Construyo <span className="highlight">aplicaciones web</span> y sistemas que impulsan negocios reales.
          </h1>

          <p className="hero__lead">
            Soy <strong>Mauricio Vásquez Loría</strong>. Combino el desarrollo de software moderno en{' '}
            <strong>React, JavaScript, Java, PHP y Python</strong> con más de 4 años de experiencia en análisis de datos
            operativos e infraestructura en <strong>Coloplast</strong> para entregar soluciones rápidas,
            escalables y orientadas a resultados.
          </p>

          <div className="hero__cta-row">
            <button
              type="button"
              className="btn-accent hero__cta-primary"
              onClick={() => scrollToSection('demos')}
            >
              <HiOutlineSparkles aria-hidden="true" /> Probar Demos en Vivo <FaArrowRight aria-hidden="true" />
            </button>
            <button
              type="button"
              className="btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Cotizar Proyecto / Contactar
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => scrollToSection('projects')}
            >
              Ver Casos de Estudio
            </button>
          </div>

          {/* Metrics Strip */}
          <div className="hero__stats">
            {quickStats.map((stat) => (
              <div key={stat.label} className="hero__stat-item">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Dual Interactive Preview Card (Client Solutions vs Technical Profile) */}
        <motion.div
          className="hero__panel card-dark"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="hero__panel-header">
            <div className="hero__panel-dots" aria-hidden="true">
              <span className="dot dot--red" />
              <span className="dot dot--amber" />
              <span className="dot dot--green" />
            </div>
            <div className="hero__panel-tabs" role="tablist" aria-label="Vista rápida de perfil">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'solutions'}
                className={`hero__panel-tab ${activeTab === 'solutions' ? 'hero__panel-tab--active' : ''}`}
                onClick={() => setActiveTab('solutions')}
              >
                <FaLaptopCode aria-hidden="true" /> ¿Qué ofrezco a Clientes?
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'recruiter'}
                className={`hero__panel-tab ${activeTab === 'recruiter' ? 'hero__panel-tab--active' : ''}`}
                onClick={() => setActiveTab('recruiter')}
              >
                <HiOutlineCode aria-hidden="true" /> Perfil Técnico (Reclutadores)
              </button>
            </div>
          </div>

          {activeTab === 'solutions' ? (
            <div className="hero__solutions-list" role="tabpanel">
              <p className="hero__panel-intro">
                Haz clic en cualquier solución para probar una <strong>demo interactiva</strong> ahora mismo:
              </p>
              {clientServices.map((service) => (
                <button
                  type="button"
                  key={service.title}
                  className="hero__service-item"
                  onClick={() => scrollToSection('demos', service.demoId)}
                >
                  <span className="hero__service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <div className="hero__service-body">
                    <span className="hero__service-title">{service.title}</span>
                    <span className="hero__service-desc">{service.desc}</span>
                  </div>
                  <span className="hero__service-action">
                    Ver demo <FaArrowRight aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="hero__recruiter-view" role="tabpanel">
              {/* Perfil Header */}
              <div className="hero__recruiter-profile">
                <img
                  src={profilePhoto}
                  alt="Mauricio Vásquez Loría"
                  className="hero__recruiter-avatar"
                />
                <div className="hero__recruiter-meta">
                  <div className="hero__recruiter-name-row">
                    <strong>Mauricio Vásquez Loría</strong>
                    <span className="hero__recruiter-status">● Disponible</span>
                  </div>
                  <span>Desarrollador de Software · Análisis de Datos & Soporte TI</span>
                </div>
              </div>

              {/* 2x2 Grid de Resumen Profesional */}
              <div className="hero__recruiter-grid">
                {recruiterCards.map((card) => (
                  <div key={card.label} className="hero__recruiter-card">
                    <div className="hero__recruiter-card-top">
                      <span className="hero__recruiter-card-icon" aria-hidden="true">
                        {card.icon}
                      </span>
                      <span className="hero__recruiter-card-label">{card.label}</span>
                    </div>
                    <strong className="hero__recruiter-card-title">{card.title}</strong>
                    <span className="hero__recruiter-card-sub">{card.sub}</span>
                  </div>
                ))}
              </div>

              {/* Stack Principal en Etiquetas Visuales */}
              <div className="hero__recruiter-stack-box">
                <span className="hero__recruiter-stack-title">Stack & Herramientas Principales</span>
                <div className="hero__recruiter-badges">
                  {recruiterStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pie de contacto directo */}
              <div className="hero__recruiter-highlights">
                <span>
                  <FaCheckCircle aria-hidden="true" /> Visión end-to-end (Hardware, Datos y Web)
                </span>
                <span>
                  <FaEnvelope aria-hidden="true" /> vasquezmj22@gmail.com
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

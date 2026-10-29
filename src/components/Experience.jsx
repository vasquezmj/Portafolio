import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaChartBar,
  FaLaptopCode,
  FaCheckCircle,
  FaCalendarAlt,
  FaBuilding,
} from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    role: 'Técnico de Operaciones, Análisis de Datos & Soporte',
    company: 'Coloplast',
    location: 'Cartago, Costa Rica',
    period: 'Octubre 2022 – Actualidad',
    type: 'Tiempo Completo · Multinacional Médica',
    color: '#0D6EFD',
    icon: <FaChartBar />,
    summary:
      'Más de 4 años combinando análisis de datos operativos, generación de reportes para ingeniería, mejora continua de procesos y soporte técnico especializado en entorno industrial.',
    achievements: [
      'Análisis de datos operativos de equipos para identificar fallas, variaciones y patrones críticos.',
      'Generación de reportes técnicos e indicadores cuantitativos para la toma de decisiones del equipo de ingeniería.',
      'Participación activa en iniciativas estratégicas con equipos multidisciplinarios para eliminar cuellos de botella.',
      'Atención y resolución oportuna de tickets de soporte, estandarización de documentación y capacitación a nuevos técnicos.',
    ],
    tags: ['Power BI', 'Análisis de Datos', 'Soporte', 'KPIs & Mejora Continua', 'Documentación Técnica'],
  },
  {
    role: 'Desarrollador de Software & Soluciones Web (Proyectos & Clientes)',
    company: 'Desarrollo Independiente / Freelance',
    location: 'Costa Rica',
    period: '2024 – Actualidad',
    type: 'Proyectos Comerciales & Software a Medida',
    color: '#10b981',
    icon: <FaLaptopCode />,
    summary:
      'Diseño y desarrollo de aplicaciones web modernas, landing pages comerciales y software de punto de venta (POS) orientado a pequeñas y medianas empresas.',
    achievements: [
      'Desarrollo de POS SellControl (Cliente: Verdulería minorista) en Java, JavaFX y SQLite con arquitectura en capas, seguridad BCrypt e impresión térmica ESC/POS.',
      'Automatización de instaladores nativos y portables para Windows y Linux mediante jpackage y Maven.',
      'Diseño e implementación de Landing Page comercial para la marca MAMOCHI enfocada en conversión móvil y velocidad de carga.',
      'Desarrollo del Sistema de Gestión Bibliotecaria en Java 21 y Spring Boot 4 con Spring Security (roles y BCrypt), JPA/Hibernate, MySQL, Thymeleaf e internacionalización en 4 idiomas.',
    ],
    tags: ['React', 'JavaScript (ES6+)', 'Java & JavaFX', 'Spring Boot', 'PHP', 'SQL (MySQL · SQLite)', 'HTML5 & CSS3', 'UI/UX'],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="section-header">
        <span className="section-eyebrow">
          <FaBriefcase aria-hidden="true" /> Trayectoria
        </span>
        <h2 className="section-title">
          Experiencia <span className="highlight">Profesional</span>
        </h2>
        <p className="section-subtitle">
          Experiencia comprobada trabajando con equipos de ingeniería, datos operativos, soporte
          técnico y desarrollo de software para clientes.
        </p>
      </div>

      <div className="experience__list">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.role}
            className="experience-card card-dark"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.12 }}
          >
            <div className="experience-card__top">
              <div className="experience-card__title-group">
                <span
                  className="experience-card__icon"
                  style={{ background: `${exp.color}20`, color: exp.color }}
                  aria-hidden="true"
                >
                  {exp.icon}
                </span>
                <div>
                  <span className="experience-card__type">{exp.type}</span>
                  <h3 className="experience-card__role">{exp.role}</h3>
                  <p className="experience-card__company">
                    <FaBuilding aria-hidden="true" /> <strong>{exp.company}</strong> · {exp.location}
                  </p>
                </div>
              </div>

              <span
                className="experience-card__period"
                style={{ background: `${exp.color}18`, color: exp.color }}
              >
                <FaCalendarAlt aria-hidden="true" /> {exp.period}
              </span>
            </div>

            <p className="experience-card__summary">{exp.summary}</p>

            <ul className="experience-card__achievements">
              {exp.achievements.map((item) => (
                <li key={item}>
                  <FaCheckCircle style={{ color: exp.color }} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="experience-card__tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaArrowRight, FaCogs } from 'react-icons/fa';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import './Education.css';

const educationData = [
  {
    icon: <FaGraduationCap />,
    title: 'Bachillerato en Ingeniería en Desarrollo de Software',
    institution: 'Universidad Fidélitas',
    period: '2024 – Actualidad',
    description:
      'Formación integral en arquitectura de software, estructuras de datos, bases de datos relacionales/NoSQL, redes y gestión de proyectos con metodologías ágiles.',
    color: '#0D6EFD',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Especialidad en Diseño y Desarrollo Web',
    institution: 'Universidad Fidélitas',
    period: '2024 – Actualidad',
    description:
      'Especialización con énfasis en diseño de interfaces UX/UI, maquetación semántica HTML5/CSS3, JavaScript moderno, desarrollo frontend con React y optimización web.',
    color: '#10b981',
  },
  {
    icon: <FaCogs />,
    title: 'Técnico en Electromecánica',
    institution: 'Instituto Técnico Vargas Matamoros',
    period: '2022 – 2023',
    description:
      'Base técnica sólida en diagnóstico de equipos industriales, instrumentación, mantenimiento preventivo y resolución estructurada de fallas.',
    color: '#8b5cf6',
  },
  {
    icon: <FaCertificate />,
    title: '12 Certificaciones Profesionales Verificadas',
    institution: 'INA / Cisco · IBM · Universidad Fidélitas · SCRUMstudy',
    period: '2024 – 2026',
    description:
      'Certificados verificables en PHP Intermedio & Avanzado, Python Essentials 1 & 2, Endpoint Security, JavaScript ES6+, HTML5/CSS3, Bootstrap, jQuery, IT Fundamentals, Hardware y Scrum.',
    color: '#f59e0b',
    clickable: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

function Education() {
  const navigate = useNavigate();

  return (
    <section id="education" className="education section">
      <div className="section-header">
        <span className="section-eyebrow">
          <HiOutlineAcademicCap aria-hidden="true" /> Formación Académica
        </span>
        <h2 className="section-title">
          <span className="highlight">Educación</span> & Certificaciones
        </h2>
        <p className="section-subtitle">
          Formación universitaria continua respaldada por certificaciones técnicas.
        </p>
      </div>

      <div className="education__timeline">
        {educationData.map((item, index) => (
          <motion.div
            key={item.title}
            className={`education-card card-dark ${item.clickable ? 'education-card--clickable' : ''}`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <div
              className="education-card__icon-wrapper"
              style={{ background: `${item.color}20`, color: item.color }}
              aria-hidden="true"
            >
              {item.icon}
            </div>
            <div className="education-card__content">
              <h3 className="education-card__title">{item.title}</h3>
              <p className="education-card__institution">{item.institution}</p>
              <p className="education-card__description">{item.description}</p>
            </div>
            {item.clickable ? (
              <button
                type="button"
                className="education-card__action-btn"
                style={{ color: item.color, borderColor: `${item.color}55` }}
                onClick={() => navigate('/certificados')}
              >
                <span>Ver los 12 certificados</span>
                <FaArrowRight aria-hidden="true" />
              </button>
            ) : (
              <div
                className="education-card__period"
                style={{ background: `${item.color}15`, color: item.color }}
              >
                <FaCalendarAlt aria-hidden="true" />
                <span>{item.period}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;

import { motion } from 'framer-motion';
import { FaDatabase, FaTools, FaCode, FaServer } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import './Skills.css';

const skillCategories = [
  {
    title: 'Desarrollo Frontend & Backend',
    icon: <FaCode />,
    skills: [
      'React.js & Vite',
      'JavaScript (ES6+)',
      'HTML5 & CSS3 (Grid, Flexbox, Responsive)',
      'Java, JavaFX & Spring Boot',
      'PHP',
      'Python',
      'Bootstrap & jQuery',
    ],
  },
  {
    title: 'Análisis de Datos & Bases de Datos',
    icon: <FaDatabase />,
    skills: [
      'Power BI (Dashboards & KPIs Operativos)',
      'SQL (MySQL, PostgreSQL, Oracle, SQLite)',
      'MongoDB (NoSQL)',
      'Python Data Stack (Pandas, NumPy, Matplotlib)',
      'Reportes Técnicos & Mejora de Procesos',
    ],
  },
  {
    title: 'Infraestructura, Soporte TI & Seguridad',
    icon: <FaServer />,
    skills: [
      'Diagnóstico de Hardware, Software y Redes',
      'Seguridad de Endpoints (Cisco Verified)',
      'Máquinas Virtuales (VMs) & Mantenimiento Preventivo',
      'Sistemas Operativos Windows & Linux',
      'Integración de Periféricos',
    ],
  },
  {
    title: 'Herramientas, UX/UI & Metodologías',
    icon: <FaTools />,
    skills: [
      'Git, GitHub',
      'VS Code, NetBeans & Terminal CLI',
      'Figma & FlutterFlow (Prototipado UX/UI)',
      'Metodologías Ágiles: Scrum Certified & Kanban',
      'Español (Nativo) · Inglés (Intermedio)',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-header">
        <span className="section-eyebrow">
          <HiOutlineLightBulb aria-hidden="true" /> Competencias Técnicas
        </span>
        <h2 className="section-title">
          Mis <span className="highlight">Habilidades</span>
        </h2>
        <p className="section-subtitle">
          Perfil versátil que une ingeniería de software, ciencia de datos aplicada y soporte de
          infraestructura crítica.
        </p>
      </div>

      <motion.div
        className="skills__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="skill-card card-dark"
            variants={cardVariants}
          >
            <div className="skill-card__header">
              <span className="skill-card__icon" aria-hidden="true">
                {category.icon}
              </span>
              <h3 className="skill-card__title">{category.title}</h3>
            </div>
            <ul className="skill-card__list">
              {category.skills.map((skill) => (
                <li key={skill} className="skill-card__item">
                  <span className="skill-card__bullet" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;

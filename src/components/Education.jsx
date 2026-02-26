import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const educationData = [
    {
        icon: <FaGraduationCap />,
        title: 'Ingeniería en Desarrollo de Software',
        institution: 'Universidad de la Innovación',
        period: '2020 – 2024',
        description:
            'Formación integral en desarrollo de software, bases de datos, redes, métodos y técnicas de gestión de proyectos con metodologías ágiles.',
        color: '#0D6EFD',
    },
    {
        icon: <FaGraduationCap />,
        title: 'Especialización en Diseño y Desarrollo Web',
        institution: 'Universidad de la Innovación',
        period: '2024 – 2025',
        description:
            'Especialización con énfasis en UX/UI, desarrollo frontend con React, y técnicas de optimización de rendimiento web.',
        color: '#22c55e',
    },
    {
        icon: <FaCertificate />,
        title: 'Certificados',
        institution: 'Plataformas online',
        period: 'Actualización continua',
        description:
            'Certificaciones en React, JavaScript, Bootstrap, UX Design y metodologías ágiles de desarrollo.',
        color: '#f59e0b',
    },
];

const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: i * 0.15 },
    }),
};

function Education() {
    return (
        <section id="education" className="education section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="highlight">Educación</span>
            </motion.h2>

            <div className="education__timeline">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="education-card card-dark"
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                    >
                        <div className="education-card__icon-wrapper" style={{ background: `${item.color}20`, color: item.color }}>
                            {item.icon}
                        </div>
                        <div className="education-card__content">
                            <h3 className="education-card__title">{item.title}</h3>
                            <p className="education-card__institution">{item.institution}</p>
                            <p className="education-card__description">{item.description}</p>
                        </div>
                        <div className="education-card__period" style={{ background: `${item.color}15`, color: item.color }}>
                            <FaCalendarAlt />
                            <span>{item.period}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Education;

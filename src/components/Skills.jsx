import { motion } from 'framer-motion';
import {
    FaDatabase, FaTools, FaCode, FaPalette,
} from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
    {
        title: 'Datos',
        icon: <FaDatabase />,
        skills: [
            'Power BI',
            'MySQL',
            'Oracle Database',
            'PostgreSQL',
            'MongoDB',
        ],
    },
    {
        title: 'Herramientas',
        icon: <FaTools />,
        skills: [
            'Visual Studio Code',
            'Git & GitHub',
            'Figma',
            'FlutterFlow',
            'Terminal / CLI',
        ],
    },
    {
        title: 'Técnicas',
        icon: <FaCode />,
        skills: [
            'React.js',
            'JavaScript (ES6+)',
            'Python',
            'Java',
            'PHP',
        ],
    },
    {
        title: 'Diseño UX/UI',
        icon: <FaPalette />,
        skills: [
            'Wireframing & Prototyping',
            'Jerarquía visual',
            'Diseño responsive',
            'Accesibilidad básica',
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Skills() {
    return (
        <section id="skills" className="skills section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Mis <span className="highlight">Habilidades</span>
            </motion.h2>

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
                        whileHover={{ y: -5 }}
                    >
                        <div className="skill-card__header">
                            <span className="skill-card__icon">{category.icon}</span>
                            <h3 className="skill-card__title">{category.title}</h3>
                        </div>
                        <ul className="skill-card__list">
                            {category.skills.map((skill) => (
                                <li key={skill} className="skill-card__item">
                                    <span className="skill-card__bullet" />
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

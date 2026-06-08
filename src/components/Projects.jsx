import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import portafolioImg from '../assets/images/portafolio-preview.png';
import sellcontrolImg from '../assets/images/sellcontrol-pos.png';
import mamochiImg from '../assets/images/mamochi-preview.png';
import './Projects.css';

const projectsData = [
    {
        name: 'SellControl-Sistema POS',
        image: sellcontrolImg,
        description:
            'Sistema de punto de venta completo con gestión de inventario, registro de ventas en tiempo real, control de usuarios y generación de reportes detallados.',
        technologies: ['Java', 'SQLite', 'JavaFX'],
        github: 'https://github.com/vasquezmj/POS_punto_venta',
        demo: null,
    },
    {
        name: 'Mamochi',
        image: mamochiImg,
        description:
            'Landing page moderna y responsive para la marca MAMOCHI. Diseño atractivo con animaciones fluidas, secciones interactivas y una experiencia de usuario optimizada.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/vasquezmj/landing_MAMOCHI',
        demo: 'https://mamochi.vercel.app/',
    },
    {
        name: 'Portafolio Personal',
        image: portafolioImg,
        description:
            'Portafolio web profesional con diseño moderno y dark theme. Incluye secciones de proyectos, habilidades, formación académica y certificaciones con visualización de PDFs.',
        technologies: ['React', 'CSS', 'JavaScript', 'Vite'],
        github: 'https://github.com/vasquezmj/Portafolio',
        demo: null,
    },
];

function Projects() {
    return (
        <section id="projects" className="projects section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Proyectos <span className="highlight">Destacados</span>
            </motion.h2>

            <div className="projects__grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

export default Projects;

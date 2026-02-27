import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import heroIllustration from '../assets/images/hero-illustration.png';
import './Projects.css';

const projectsData = [
    {
        name: 'Nombre',
        image: heroIllustration,
        description:
            'Descripción del proyecto: un ejemplo de solución web completa que resuelve una necesidad real. Construcción de interfaz con enfoque en usabilidad y rendimiento.',
        technologies: ['React', 'JavaScript', 'CSS'],
        github: 'https://github.com/vasquezmj',
        demo: '#',
    },
    {
        name: 'Nombre',
        image: heroIllustration,
        description:
            'Descripción del proyecto: una aplicación diseñada para optimizar flujos de trabajo. Integración de componentes reutilizables y gestión eficiente del estado.',
        technologies: ['React', 'Bootstrap', 'HTML'],
        github: 'https://github.com/vasquezmj',
        demo: '#',
    },
    {
        name: 'Nombre',
        image: heroIllustration,
        description:
            'Descripción del proyecto: plataforma enfocada en la experiencia de usuario. Responsive design, accesibilidad y animaciones sutiles para una navegación fluida.',
        technologies: ['JavaScript', 'CSS', 'React'],
        github: 'https://github.com/vasquezmj',
        demo: '#',
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

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ProjectCard.css';

function ProjectCard({ project, index }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            className="project-card card-dark"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
        >
            <div className="project-card__header">
                <span className="project-card__name">{project.name}</span>
                <button
                    className="project-card__toggle"
                    onClick={() => setExpanded(!expanded)}
                    aria-label={expanded ? 'Collapse' : 'Expand'}
                >
                    {expanded ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>

            <div className="project-card__image-wrapper">
                <img
                    src={project.image}
                    alt={project.name}
                    className="project-card__image"
                    loading="lazy"
                />
            </div>

            <motion.div
                className="project-card__details"
                initial={false}
                animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
            >
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__techs">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </motion.div>

            <div className="project-card__actions">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label={`Ver código de ${project.name}`}
                    >
                        <FaGithub />
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label={`Ver demo de ${project.name}`}
                    >
                        <FaExternalLinkAlt />
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectCard;

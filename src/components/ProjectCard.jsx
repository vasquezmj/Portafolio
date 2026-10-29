import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaBookOpen,
} from 'react-icons/fa';
import './ProjectCard.css';

function ProjectPreviewGraphic({ project }) {
  const { previewType, image, name, accentColor } = project;

  const windowTitle =
    previewType === 'pos'
      ? 'POS SellControl · JavaFX + SQLite'
      : previewType === 'mamochi'
        ? 'mamochi.vercel.app · Hecho con amor'
        : previewType === 'biblioteca'
          ? 'Biblioteca Pública · Spring Boot 4 + MySQL'
          : 'Portafolio & Showroom · React 19';

  return (
    <div className="project-preview">
      <div className="project-preview__window-bar">
        <span />
        <span />
        <span />
        <code>{windowTitle}</code>
      </div>
      <div className="project-preview__image-wrap">
        <img
          src={image}
          alt={`Vista previa de ${name}`}
          loading="lazy"
          className="project-preview__img"
        />
        <span
          className="project-preview__badge"
          style={{ borderColor: accentColor, color: accentColor }}
        >
          ● Demo en vivo
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpenCaseStudy, onTryInteractiveDemo }) {
  return (
    <motion.article
      className="project-card card-dark"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
    >
      <ProjectPreviewGraphic project={project} />

      <div className="project-card__body">
        <span className="project-card__client">{project.clientType}</span>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description">{project.summary}</p>

        <div className="project-card__techs">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__actions">
        <button
          type="button"
          className="btn-accent project-card__btn-main"
          onClick={onTryInteractiveDemo}
        >
          <FaPlay aria-hidden="true" /> Probar Demo
        </button>
        <button
          type="button"
          className="btn-outline project-card__btn-case"
          onClick={onOpenCaseStudy}
        >
          <FaBookOpen aria-hidden="true" /> Caso de Estudio
        </button>

        <div className="project-card__icon-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`Ver código en GitHub de ${project.name}`}
              title="Ver código en GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`Abrir sitio web desplegado de ${project.name}`}
              title="Abrir sitio web desplegado"
            >
              <FaExternalLinkAlt aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;

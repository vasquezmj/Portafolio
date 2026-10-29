import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaPlay } from 'react-icons/fa';
import { HiOutlineBriefcase } from 'react-icons/hi';
import ProjectCard from './ProjectCard';
import portafolioImg from '../assets/images/portafolio-preview.png';
import sellcontrolImg from '../assets/images/sellcontrol-pos.png';
import mamochiImg from '../assets/images/mamochi-preview.png';
import bibliotecaImg from '../assets/images/biblioteca-preview.svg';
import './Projects.css';

const projectsData = [
  {
    id: 'sellcontrol',
    name: 'POS SellControl — Punto de Venta',
    clientType: 'Proyecto · Verdulería Minorista (Java 21 + JavaFX)',
    accentColor: '#27ae60',
    previewType: 'pos',
    image: sellcontrolImg,
    summary:
      'Sistema de Punto de Venta (POS) de escritorio para verdulería minorista con ventas multi-pestaña por Kg o unidad, control de fiados, caja, gastos/merma, reportes en Excel e impresión térmica ESC/POS (58mm).',
    problem:
      'El negocio requería un sistema ágil y sin códigos de barras para cobrar frutas, verduras y legumbres por kilogramo o por unidad, atender a varios clientes simultáneamente, llevar cuentas de fiados y conocer la ganancia real descontando gastos y merma.',
    solution:
      'Desarrollé POS SellControl en Java 21, JavaFX 23 y SQLite (modo WAL) con arquitectura en capas (Controller, Service, DAO), contraseñas encriptadas con BCrypt, impresión directa en impresora térmica HOP-H58 (58mm ESC/POS), exportación a Excel (.xlsx) con Apache POI e instalador nativo con jpackage.',
    impact: [
      'Ventas simultáneas en múltiples pestañas con cálculo automático por Kg o Unidad y cobro en Efectivo, Tarjeta o SINPE.',
      'Control completo de Caja (Ingresos, Cambios, Retiros), Gastos operativos (Abastecimiento, Empleados) y Merma.',
      'Cálculo exacto de Ganancia Real (Ventas Cobradas − Gastos − Merma) y configuración visual de ticket térmico 58mm.',
    ],
    technologies: ['Java 21', 'JavaFX 23', 'SQLite', 'BCrypt', 'ESC/POS', 'Apache POI (Excel)', 'jpackage'],
    github: 'https://github.com/vasquezmj/POS_punto_venta',
    demoUrl: null,
    interactiveDemoId: 'pos',
  },
  {
    id: 'mamochi',
    name: 'Mamochi — Hecho con Amor (Crochet)',
    clientType: 'Proyecto · Sitio Web Comercial',
    accentColor: '#FF8FA3',
    previewType: 'mamochi',
    image: mamochiImg,
    summary:
      'Sitio web comercial para Mamochi, emprendimiento de productos artesanales tejidos a mano en crochet (amigurumis personalizados, llaveros y flores eternas) con pedidos directos por WhatsApp.',
    problem:
      'El emprendimiento necesitaba una página web cálida y profesional que reflejara su identidad artesanal ("Hecho con amor"), exhibiera su catálogo y promociones del día, e impulsara pedidos personalizados por WhatsApp.',
    solution:
      'Construí el sitio web con HTML5, CSS3, Bootstrap 5.3 y JavaScript, integrando una paleta pastel personalizada (#FF8FA3, #C94A6A, #FAF7F5), tipografías expresivas (Cherry Swash, Dancing Script, Bree Serif), carrusel de promociones, tarjetas de productos con enlace directo a WhatsApp y sección de encargos personalizados.',
    impact: [
      'Exhibición clara de catálogo (Amigurumi Personalizado, Llaveros Tejidos y Flores) con consulta en 1 clic por WhatsApp.',
      'Sección dedicada a encargos personalizados (con aviso de adelanto del 50%), historia de marca (Misión, Visión, Valores) y reseñas de clientes.',
      'Diseño 100% responsivo desplegado en producción en Vercel con navegación fluida en celulares, tablets y escritorio.',
    ],
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Font Awesome', 'Google Fonts', 'Vercel'],
    github: 'https://github.com/vasquezmj/landing_MAMOCHI',
    demoUrl: 'https://mamochi.vercel.app/',
    interactiveDemoId: 'mamochi',
  },
  {
    id: 'biblioteca',
    name: 'Biblioteca Pública — Gestión Bibliotecaria',
    clientType: 'Proyecto · Sistema Web Institucional (Spring Boot 4 + MySQL)',
    accentColor: '#B89138',
    previewType: 'biblioteca',
    image: bibliotecaImg,
    summary:
      'Sistema web integral de gestión bibliotecaria con catálogo público, reservas en línea con control de stock, renovaciones, mesa de circulación para bibliotecarios, seguridad por roles e internacionalización en 4 idiomas.',
    problem:
      'Una biblioteca pública necesitaba modernizar su catálogo físico y automatizar el control de ejemplares disponibles, reservas en línea por 14 días, renovaciones de lectores y la mesa de circulación para entrega y devolución de obras.',
    solution:
      'Desarrollé la plataforma en Java 21 con Spring Boot 4.0.6, Spring Data JPA (Hibernate), Spring Security 6 con BCrypt y control de acceso por roles (ROLE_ADMIN, ROLE_BIBLIOTECARIO, ROLE_USUARIO), vistas SSR en Thymeleaf + Bootstrap 5.3, almacenamiento de portadas en Firebase Storage, soporte multi-idioma (ES/EN/FR/PT) y despliegue en Docker.',
    impact: [
      'Catálogo público con búsqueda por título, autor o ISBN, filtrado por género literario y consulta avanzada por rango de ejemplares.',
      'Flujo completo de préstamos: reserva en línea (descuento automático de stock), hasta 2 renovaciones por lector (+14 días) y mesa de circulación para entregas y devoluciones.',
      'Diseño editorial clásico (#14283D y dorado #B89138) con carnet digital del lector e internacionalización completa (Español, Inglés, Francés y Portugués).',
    ],
    technologies: [
      'Java',
      'Spring Boot 4',
      'Spring Security 6',
      'Spring Data JPA',
      'Thymeleaf',
      'MySQL / H2',
      'Firebase Storage',
      'Docker',
    ],
    github: 'https://github.com/vasquezmj/SistemaBiblioteca',
    demoUrl: null,
    interactiveDemoId: 'biblioteca',
  },
  {
    id: 'portafolio-showroom',
    name: 'Portafolio Profesional & Showroom en Vivo',
    clientType: 'Proyecto Propio · React + Vite',
    accentColor: '#0D6EFD',
    previewType: 'showroom',
    image: portafolioImg,
    summary:
      'Portafolio web interactivo con tema oscuro, visor de certificaciones en PDF y un Showroom en vivo que ejecuta réplicas funcionales de mis proyectos reales directamente en el navegador.',
    problem:
      'Mostrar únicamente capturas estáticas no permite a un cliente potencial ni a un reclutador probar el flujo real de un sistema de escritorio (JavaFX), una aplicación empresarial (Spring Boot) o un sitio comercial sin salir del portafolio.',
    solution:
      'Diseñé este portafolio en React con Vite y Framer Motion incorporando un Showroom interactivo con simulador de pantalla (Escritorio, Tablet y Móvil), vista dual Cliente/Reclutador y visor integrado de certificados PDF.',
    impact: [
      'Permite probar POS SellControl, Mamochi y el Sistema de Biblioteca Pública directo en el navegador.',
      'Integra estado reactivo real en cada demo (ventas, inventario, préstamos, reservas y generación de tickets).',
      'Diseño responsivo optimizado con CSS Container Queries y accesibilidad moderna.',
    ],
    technologies: ['React', 'Vite', 'Framer Motion', 'React Router', 'CSS Container Queries'],
    github: 'https://github.com/vasquezmj/Portafolio',
    demoUrl: null,
    interactiveDemoId: 'pos',
  },
];

function Projects({ onLaunchDemo }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  // Light-dismiss fallback for browsers without native <dialog closedby="any"> support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const handleBackdropClick = (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (!isDialogContent) {
          dialog.close();
        }
      };

      dialog.addEventListener('click', handleBackdropClick);
      return () => dialog.removeEventListener('click', handleBackdropClick);
    }
  }, []);

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closeCaseStudy = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  };

  const handleTryDemo = (demoId) => {
    closeCaseStudy();
    if (onLaunchDemo) {
      onLaunchDemo(demoId);
    }
    const showroomEl = document.getElementById('demos');
    if (showroomEl) {
      showroomEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="section-header">
        <span className="section-eyebrow">
          <HiOutlineBriefcase aria-hidden="true" /> Proyectos
        </span>
        <h2 className="section-title">
          Proyectos <span className="highlight">Destacados</span>
        </h2>
        <p className="section-subtitle">
          Explora el detalle técnico de mis proyectos o pruébalos en vivo en la sección de Demos
          Interactivas.
        </p>
      </div>

      <div className="projects__grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenCaseStudy={() => openCaseStudy(project)}
            onTryInteractiveDemo={() => handleTryDemo(project.interactiveDemoId)}
          />
        ))}
      </div>

      {/* Native Accessible Modal Dialog with Light-Dismiss */}
      <dialog
        ref={dialogRef}
        {...{ closedby: 'any' }}
        className="case-study-dialog"
        aria-labelledby="case-study-title"
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="case-study-dialog__content">
            <div className="case-study-dialog__header">
              <div>
                <span className="case-study-dialog__client">{selectedProject.clientType}</span>
                <h3 id="case-study-title">{selectedProject.name}</h3>
              </div>
              <button
                type="button"
                className="case-study-dialog__close"
                onClick={closeCaseStudy}
                aria-label="Cerrar caso de estudio"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>

            <div className="case-study-dialog__body">
              <div className="case-study-dialog__block">
                <h4>1. El Problema / Necesidad</h4>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="case-study-dialog__block">
                <h4>2. Solución & Arquitectura Implementada</h4>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="case-study-dialog__block">
                <h4>3. Resultados e Impacto</h4>
                <ul className="case-study-dialog__impact">
                  {selectedProject.impact.map((item) => (
                    <li key={item}>
                      <FaCheckCircle aria-hidden="true" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-study-dialog__techs">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="case-study-dialog__footer">
              <button
                type="button"
                className="btn-accent"
                onClick={() => handleTryDemo(selectedProject.interactiveDemoId)}
              >
                <FaPlay aria-hidden="true" /> Probar Demo Interactiva en Vivo
              </button>
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Abrir Sitio Desplegado
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <FaGithub aria-hidden="true" /> Ver Repositorio en GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

export default Projects;

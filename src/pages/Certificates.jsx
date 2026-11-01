import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCertificate,
  FaExternalLinkAlt,
  FaEye,
  FaTimes,
} from 'react-icons/fa';
import {
  SiPython,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiJquery,
  SiPhp,
  SiScrumalliance,
} from 'react-icons/si';
import { HiOutlineDesktopComputer, HiOutlineLightBulb } from 'react-icons/hi';
import { MdSecurity } from 'react-icons/md';
import './Certificates.css';

const certificatesData = [
  {
    icon: <SiPhp />,
    title: 'PHP Avanzado',
    institution: 'Universidad Fidélitas',
    date: 'Octubre 2026',
    description:
      'Desarrollo backend con PHP: programación orientada a objetos, arquitectura MVC, seguridad web y conexión a bases de datos.',
    color: '#777BB4',
    category: 'Desarrollo Web',
    file: '/certificados/Cert-Fidelitas-php-avanzado.pdf',
  },
  {
    icon: <SiPhp />,
    title: 'PHP Intermedio',
    institution: 'Universidad Fidélitas',
    date: 'Octubre 2026',
    description:
      'Programación del lado del servidor con PHP: formularios, funciones, sesiones/cookies e integración con bases de datos SQL.',
    color: '#777BB4',
    category: 'Desarrollo Web',
    file: '/certificados/Cert-Fidelitas-php-intermedio.pdf',
  },
  {
    icon: <SiPython />,
    title: 'Python Essentials 1',
    institution: 'INA / Cisco Networking Academy',
    date: 'Agosto 2024',
    description:
      'Fundamentos de programación con Python: variables, tipos de datos, estructuras de control, funciones y manejo de errores.',
    color: '#3776AB',
    category: 'Programación',
    file: '/certificados/Cert-INA-Cisco-Python-Essential-1.pdf',
  },
  {
    icon: <SiPython />,
    title: 'Python Essentials 2',
    institution: 'INA / Cisco Networking Academy',
    date: 'Octubre 2024',
    description:
      'Conceptos avanzados de Python: POO, manejo de archivos, módulos, excepciones y procesamiento de datos.',
    color: '#3776AB',
    category: 'Programación',
    file: '/certificados/Cert-INA-Cisco-Python-Essential-2.pdf',
  },
  {
    icon: <MdSecurity />,
    title: 'Endpoint Security',
    institution: 'INA / Cisco Networking Academy',
    date: 'Diciembre 2025',
    description:
      'Seguridad de endpoints: protección de dispositivos, detección de amenazas, políticas de seguridad y mejores prácticas.',
    color: '#e74c3c',
    category: 'Seguridad',
    file: '/certificados/Cert-INA-Cisco-Endpoint-Security.pdf',
  },
  {
    icon: <SiJavascript />,
    title: 'JavaScript (ES6+)',
    institution: 'Universidad Fidélitas',
    date: 'Enero 2025',
    description:
      'Programación moderna con JavaScript: ES6+, manipulación del DOM, eventos, asincronía y consumo de APIs.',
    color: '#f7df1e',
    category: 'Desarrollo Web',
    file: '/certificados/Cert-Fidelitas-JavaScript.pdf',
  },
  {
    icon: <SiHtml5 />,
    title: 'HTML5 y CSS3',
    institution: 'Universidad Fidélitas',
    date: 'Octubre 2024',
    description:
      'Maquetación web semántica con HTML5 y estilización avanzada con CSS3, incluyendo Flexbox y Grid.',
    color: '#e34f26',
    category: 'Desarrollo Web',
    file: '/certificados/Cert-Fidelitas-HTML5-CSS.pdf',
  },
  {
    icon: <SiBootstrap />,
    title: 'Páginas Dinámicas con CSS y Bootstrap',
    institution: 'Universidad Fidélitas',
    date: 'Noviembre 2024',
    description:
      'Desarrollo de interfaces responsivas con el framework Bootstrap: componentes, grid system y personalización.',
    color: '#7952b3',
    category: 'Desarrollo Web',
    file: '/certificados/Cert-Fidelitas-Bootstrap.pdf',
  },
  {
    icon: <SiJquery />,
    title: 'Framework jQuery',
    institution: 'Universidad Fidélitas',
    date: 'Mayo 2025',
    description:
      'Manipulación del DOM, eventos, animaciones y peticiones AJAX utilizando la librería jQuery.',
    color: '#0769ad',
    category: 'Desarrollo Web',
    file: '/certificados/Cert-Fidelitas-jQuery.pdf',
  },
  {
    icon: <HiOutlineLightBulb />,
    title: 'Information Technology Fundamentals',
    institution: 'IBM',
    date: 'Septiembre 2025',
    description:
      'Fundamentos de tecnologías de la información: hardware, software, redes, bases de datos y conceptos de cloud computing.',
    color: '#0f62fe',
    category: 'Fundamentos',
    file: '/certificados/Cert-IBM-IT-Fundamentals.pdf',
  },
  {
    icon: <HiOutlineDesktopComputer />,
    title: 'Computer Hardware Basics',
    institution: 'INA / Cisco Networking Academy',
    date: 'Octubre 2025',
    description:
      'Componentes de hardware, arquitectura de computadoras, mantenimiento preventivo y resolución estructurada de problemas.',
    color: '#6366f1',
    category: 'Fundamentos',
    file: '/certificados/Cert-Computer-Hardware-Basics.pdf',
  },
  {
    icon: <SiScrumalliance />,
    title: 'Scrum Fundamentals Certified',
    institution: 'SCRUMstudy',
    date: 'Octubre 2025',
    description:
      'Metodología ágil Scrum: roles, eventos, artefactos y principios para la gestión efectiva de proyectos.',
    color: '#22c55e',
    category: 'Metodologías',
    file: '/certificados/Cert-Scrum-Fundamentals.pdf',
  },
];

const CATEGORIES = [
  'Todos',
  'Desarrollo Web',
  'Programación',
  'Seguridad',
  'Fundamentos',
  'Metodologías',
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.05 },
  }),
};

function Certificates() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeCert, setActiveCert] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const filteredCerts =
    selectedCategory === 'Todos'
      ? certificatesData
      : certificatesData.filter((c) => c.category === selectedCategory);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('education');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const openCertModal = (cert) => {
    setActiveCert(cert);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closeCertModal = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  };

  return (
    <section className="certificates-page">
      <div className="certificates-page__topbar">
        <button
          type="button"
          className="certificates-page__back btn-outline"
          onClick={handleBack}
        >
          <FaArrowLeft aria-hidden="true" /> Volver al Portafolio
        </button>
      </div>

      <div className="section-header">
        <span className="section-eyebrow">
          <FaCertificate aria-hidden="true" /> {certificatesData.length} Certificaciones Oficiales
        </span>
        <h1 className="section-title">
          Mis <span className="highlight">Certificados</span>
        </h1>
        <p className="section-subtitle">
          Formación continua verificable en desarrollo web (frontend y backend con PHP), programación,
          seguridad de endpoints y metodologías ágiles.
        </p>
      </div>

      {/* Category Filter Bar */}
      <div className="certificates-filters" role="group" aria-label="Filtrar certificados por categoría">
        {CATEGORIES.map((cat) => {
          const count =
            cat === 'Todos'
              ? certificatesData.length
              : certificatesData.filter((c) => c.category === cat).length;
          const isActive = selectedCategory === cat;
          return (
            <button
              type="button"
              key={cat}
              aria-pressed={isActive}
              className={`cert-filter ${isActive ? 'cert-filter--active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span>{cat}</span>
              <span className="cert-filter__count" aria-label={`${count} certificados`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="certificates-grid">
        {filteredCerts.map((cert, index) => (
          <motion.article
            key={cert.title}
            className="certificate-card card-dark"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="certificate-card__header">
              <div
                className="certificate-card__icon"
                style={{ background: `${cert.color}20`, color: cert.color }}
                aria-hidden="true"
              >
                {cert.icon}
              </div>
              <div className="certificate-card__badges">
                <span className="certificate-card__date">{cert.date}</span>
                <span
                  className="certificate-card__category"
                  style={{ background: `${cert.color}18`, color: cert.color }}
                >
                  {cert.category}
                </span>
              </div>
            </div>

            <h2 className="certificate-card__title">{cert.title}</h2>
            <p className="certificate-card__institution">{cert.institution}</p>
            <p className="certificate-card__description">{cert.description}</p>

            <div className="certificate-card__footer">
              <div className="certificate-card__status">
                <FaCertificate style={{ color: cert.color }} aria-hidden="true" />
                <span>Verificado</span>
              </div>
              <div className="certificate-card__actions">
                <button
                  type="button"
                  className="btn-ghost certificate-card__preview-btn"
                  onClick={() => openCertModal(cert)}
                >
                  <FaEye aria-hidden="true" /> Vista previa
                </button>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-card__view-btn"
                  style={{ color: cert.color }}
                >
                  PDF <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Native PDF Preview Modal with Light-Dismiss */}
      <dialog
        ref={dialogRef}
        {...{ closedby: 'any' }}
        className="cert-preview-dialog"
        aria-labelledby="cert-dialog-title"
        onClose={() => setActiveCert(null)}
      >
        {activeCert && (
          <div className="cert-preview-dialog__content">
            <div className="cert-preview-dialog__header">
              <div>
                <span className="cert-preview-dialog__meta">
                  {activeCert.institution} · {activeCert.date}
                </span>
                <h3 id="cert-dialog-title">{activeCert.title}</h3>
              </div>
              <div className="cert-preview-dialog__header-actions">
                <a
                  href={activeCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Abrir en pestaña nueva
                </a>
                <button
                  type="button"
                  className="case-study-dialog__close"
                  onClick={closeCertModal}
                  aria-label="Cerrar vista previa del certificado"
                >
                  <FaTimes aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="cert-preview-dialog__viewer">
              <iframe
                src={activeCert.file}
                title={`Certificado ${activeCert.title}`}
                className="cert-preview-dialog__iframe"
              />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

export default Certificates;

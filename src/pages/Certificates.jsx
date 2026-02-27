import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import {
    SiPython, SiCisco, SiBootstrap, SiJavascript,
    SiHtml5, SiJquery, SiScrumalliance
} from 'react-icons/si';
import { HiOutlineDesktopComputer, HiOutlineLightBulb } from 'react-icons/hi';
import { MdSecurity } from 'react-icons/md';
import './Certificates.css';

const certificatesData = [
    {
        icon: <SiPython />,
        title: 'Python Essentials 1',
        institution: 'INA / Cisco Networking Academy',
        description: 'Fundamentos de programación con Python: variables, tipos de datos, estructuras de control, funciones y manejo de errores.',
        color: '#3776AB',
        category: 'Programación',
        file: '/certificados/Cert-INA-Cisco-Python-Essential-1.pdf',
    },
    {
        icon: <SiPython />,
        title: 'Python Essentials 2',
        institution: 'INA / Cisco Networking Academy',
        description: 'Conceptos avanzados de Python: POO, manejo de archivos, módulos, excepciones y procesamiento de datos.',
        color: '#3776AB',
        category: 'Programación',
        file: '/certificados/Cert-INA-Cisco-Python-Essential-2.pdf',
    },
    {
        icon: <MdSecurity />,
        title: 'Endpoint Security',
        institution: 'INA / Cisco Networking Academy',
        description: 'Seguridad de endpoints: protección de dispositivos, detección de amenazas, políticas de seguridad y mejores prácticas.',
        color: '#e74c3c',
        category: 'Seguridad',
        file: '/certificados/Cert-INA-Cisco-Endpoint-Security.pdf',
    },
    {
        icon: <SiJavascript />,
        title: 'JavaScript (ES6+)',
        institution: 'Universidad Fidélitas',
        description: 'Programación moderna con JavaScript: ES6+, manipulación del DOM, eventos, asincronía y consumo de APIs.',
        color: '#f7df1e',
        category: 'Desarrollo Web',
        file: '/certificados/Cert-Fidelitas-JavaScript.pdf',
    },
    {
        icon: <SiHtml5 />,
        title: 'HTML5 y CSS3',
        institution: 'Universidad Fidélitas',
        description: 'Maquetación web semántica con HTML5 y estilización avanzada con CSS3, incluyendo Flexbox y Grid.',
        color: '#e34f26',
        category: 'Desarrollo Web',
        file: '/certificados/Cert-Fidelitas-HTML5-CSS.pdf',
    },
    {
        icon: <SiBootstrap />,
        title: 'Bootstrap',
        institution: 'Universidad Fidélitas',
        description: 'Desarrollo de interfaces responsivas con el framework Bootstrap: componentes, grid system y personalización.',
        color: '#7952b3',
        category: 'Desarrollo Web',
        file: '/certificados/Cert-Fidelitas-Bootstrap.pdf',
    },
    {
        icon: <SiJquery />,
        title: 'jQuery',
        institution: 'Universidad Fidélitas',
        description: 'Manipulación del DOM, eventos, animaciones y peticiones AJAX utilizando la librería jQuery.',
        color: '#0769ad',
        category: 'Desarrollo Web',
        file: '/certificados/Cert-Fidelitas-jQuery.pdf',
    },
    {
        icon: <HiOutlineLightBulb />,
        title: 'IT Fundamentals',
        institution: 'IBM',
        description: 'Fundamentos de tecnologías de la información: hardware, software, redes, bases de datos y conceptos de cloud computing.',
        color: '#0f62fe',
        category: 'Fundamentos',
        file: '/certificados/Cert-IBM-IT-Fundamentals.pdf',
    },
    {
        icon: <HiOutlineDesktopComputer />,
        title: 'Computer Hardware Basics',
        institution: 'Plataforma Online',
        description: 'Componentes de hardware, arquitectura de computadoras, mantenimiento preventivo y resolución de problemas.',
        color: '#6366f1',
        category: 'Fundamentos',
        file: '/certificados/Cert-Computer-Hardware-Basics.pdf',
    },
    {
        icon: <SiScrumalliance />,
        title: 'Scrum Fundamentals Certified',
        institution: 'SCRUMstudy',
        description: 'Metodología ágil Scrum: roles, eventos, artefactos y principios para la gestión efectiva de proyectos.',
        color: '#22c55e',
        category: 'Metodologías',
        file: '/certificados/Cert-Scrum-Fundamentals.pdf',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.08 },
    }),
};

function Certificates() {
    const navigate = useNavigate();

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        navigate('/');
        // Wait for Home to render, then scroll to education
        setTimeout(() => {
            const el = document.getElementById('education');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 150);
    };

    return (
        <section className="certificates-page">
            <motion.button
                className="certificates-page__back btn-outline"
                onClick={handleBack}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                <FaArrowLeft /> Volver
            </motion.button>

            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Mis <span className="highlight">Certificados</span>
            </motion.h2>

            <motion.p
                className="certificates-page__subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Formación continua en desarrollo web, programación, seguridad y metodologías ágiles.
            </motion.p>

            <div className="certificates-grid">
                {certificatesData.map((cert, index) => (
                    <motion.div
                        key={index}
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
                            >
                                {cert.icon}
                            </div>
                            <span
                                className="certificate-card__category"
                                style={{ background: `${cert.color}15`, color: cert.color }}
                            >
                                {cert.category}
                            </span>
                        </div>

                        <h3 className="certificate-card__title">{cert.title}</h3>
                        <p className="certificate-card__institution">{cert.institution}</p>
                        <p className="certificate-card__description">{cert.description}</p>

                        <div className="certificate-card__footer">
                            <div className="certificate-card__status">
                                <FaCertificate style={{ color: cert.color }} />
                                <span>Certificado obtenido</span>
                            </div>
                            <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-card__view-btn"
                                style={{ color: cert.color }}
                            >
                                Ver certificado <FaExternalLinkAlt />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;

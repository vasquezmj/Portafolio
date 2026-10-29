import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import {
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlineEye,
  HiOutlineSparkles,
  HiOutlineOfficeBuilding,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import profilePhoto from '../assets/images/profile-photo.png';
import './Navbar.css';

const ROLES = [
  'Desarrollador de Software',
  'Soluciones Web',
  'Análisis de Datos & TI',
];

const navLinks = [
  { id: 'about', label: 'Inicio & Perfil', icon: <HiOutlineUser />, type: 'section' },
  { id: 'demos', label: 'Showroom Demos', icon: <HiOutlineSparkles />, badge: 'En vivo', type: 'section' },
  { id: 'projects', label: 'Proyectos', icon: <HiOutlineBriefcase />, type: 'section' },
  { id: 'experience', label: 'Experiencia', icon: <HiOutlineOfficeBuilding />, type: 'section' },
  { id: 'skills', label: 'Habilidades', icon: <HiOutlineLightBulb />, type: 'section' },
  { id: 'education', label: 'Educación', icon: <HiOutlineAcademicCap />, type: 'section' },
  { id: '/certificados', label: 'Certificados (12)', icon: <HiOutlineBadgeCheck />, type: 'route' },
  { id: 'contact', label: 'Contacto & Cotizar', icon: <HiOutlineMail />, type: 'section' },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/vasquezmj', label: 'GitHub' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/mauricio-vasquez-lor%C3%ADa', label: 'LinkedIn' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/50670037962?text=Hola%20Mauricio%2C%20vi%20tu%20portafolio%20web%20y%20me%20gustar%C3%ADa%20conversar.', label: 'WhatsApp' },
  { icon: <FaEnvelope />, href: 'mailto:vasquezmj22@gmail.com', label: 'Email' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const activeLink =
    location.pathname === '/certificados'
      ? '/certificados'
      : location.pathname.startsWith('/demos')
        ? 'demos'
        : activeSection;

  // Typewriter effect for role text
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let delay = isDeleting ? 35 : 75;

    if (!isDeleting && displayText === currentRole) {
      delay = 2200;
    } else if (isDeleting && displayText === '') {
      delay = 180;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Scroll spy: only active on home page
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navLinks
      .filter((link) => link.type === 'section')
      .map((link) => link.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const handleNav = (link) => {
    setMobileOpen(false);

    if (link.type === 'route') {
      navigate(link.id);
      return;
    }

    if (isHome) {
      setActiveSection(link.id);
      const el = document.getElementById(link.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(link.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveSection(link.id);
      }, 120);
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Sticky Top Header Bar for Tablet & Mobile (<= 1080px) */}
      <header className="mobile-topbar">
        <button
          type="button"
          className="mobile-topbar__brand"
          onClick={() => handleNav({ id: 'about', type: 'section' })}
        >
          <img
            src={profilePhoto}
            alt=""
            className="mobile-topbar__avatar"
            width="36"
            height="36"
          />
          <div className="mobile-topbar__text">
            <strong>Mauricio Vásquez</strong>
            <span>Desarrollador & TI</span>
          </div>
        </button>

        <div className="mobile-topbar__actions">
          <button
            type="button"
            className="mobile-topbar__demos-btn"
            onClick={() => handleNav({ id: 'demos', type: 'section' })}
          >
            <HiOutlineSparkles aria-hidden="true" />
            <span>Demos</span>
          </button>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Overlay for mobile & tablet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav
        className={`sidebar ${mobileOpen ? 'sidebar--open' : ''}`}
        aria-label="Navegación principal"
      >
        {/* Profile Section */}
        <div className="sidebar__profile">
          <div className="sidebar__avatar-wrapper">
            <img
              src={profilePhoto}
              alt="Mauricio Vásquez Loría"
              className="sidebar__avatar"
              width="96"
              height="96"
              fetchPriority="high"
            />
            <span
              className="sidebar__status-dot"
              title="Disponible para proyectos y oportunidades laborales"
            />
          </div>
          <h2 className="sidebar__name">Mauricio Vásquez</h2>
          <p className="sidebar__role" aria-live="polite">
            {displayText}
            <span className="sidebar__cursor" aria-hidden="true">|</span>
          </p>
          <span className="sidebar__availability">
            <span className="sidebar__availability-dot" aria-hidden="true" />
            Disponible · Cartago, CR
          </span>
        </div>

        {/* CTA Button */}
        <div className="sidebar__cta-group">
          <a
            href="/Mauricio-Vasquez-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent sidebar__cta"
          >
            <HiOutlineEye aria-hidden="true" /> Ver Currículum (PDF)
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="sidebar__nav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={`sidebar__nav-link ${activeLink === link.id ? 'sidebar__nav-link--active' : ''}`}
                onClick={() => handleNav(link)}
              >
                <span className="sidebar__nav-icon" aria-hidden="true">
                  {link.icon}
                </span>
                <span className="sidebar__nav-label">{link.label}</span>
                {link.badge && (
                  <span className="sidebar__nav-badge">{link.badge}</span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="sidebar__social">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__social-link"
              aria-label={social.label}
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

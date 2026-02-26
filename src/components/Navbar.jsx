import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineUser, HiOutlineBriefcase, HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineMail, HiDownload } from 'react-icons/hi';
import profilePhoto from '../assets/images/profile-photo.png';
import './Navbar.css';

const navLinks = [
  { id: 'about', label: 'Sobre mí', icon: <HiOutlineUser /> },
  { id: 'projects', label: 'Proyectos', icon: <HiOutlineBriefcase /> },
  { id: 'skills', label: 'Habilidades', icon: <HiOutlineLightBulb /> },
  { id: 'education', label: 'Educación', icon: <HiOutlineAcademicCap /> },
  { id: 'contact', label: 'Contacto', icon: <HiOutlineMail /> },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/mauriciovasquez', label: 'GitHub' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/mauricio-vasquez-lor%C3%ADa', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:vasquezmj22@gmail.com', label: 'Email' },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    setActiveLink(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay for mobile */}
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
      >
        {/* Profile Section */}
        <div className="sidebar__profile">
          <div className="sidebar__avatar-wrapper">
            <img
              src={profilePhoto}
              alt="Mauricio Vásquez Loría"
              className="sidebar__avatar"
            />
            <span className="sidebar__status-dot" />
          </div>
          <h3 className="sidebar__name">Mauricio Vásquez</h3>
          <p className="sidebar__role">Desarrollador Frontend</p>
        </div>

        {/* CTA Button */}
        <a
          href="/cv-mauricio-vasquez.pdf"
          download
          className="btn-accent sidebar__cta"
        >
          <HiDownload /> Descargar CV
        </a>

        {/* Navigation Links */}
        <ul className="sidebar__nav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`sidebar__nav-link ${activeLink === link.id ? 'sidebar__nav-link--active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                <span className="sidebar__nav-icon">{link.icon}</span>
                {link.label}
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

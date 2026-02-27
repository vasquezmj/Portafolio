import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineUser, HiOutlineBriefcase, HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineMail, HiOutlineEye } from 'react-icons/hi';
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
  { icon: <FaGithub />, href: 'https://github.com/vasquezmj', label: 'GitHub' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/mauricio-vasquez-lor%C3%ADa', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:vasquezmj22@gmail.com', label: 'Email' },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  // Typewriter effect for role text
  const roles = ['Desarrollador de Software', 'Soporte TI'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Switch to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Scroll spy: only active on home page
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navLinks.map((link) => link.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
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

  const handleNav = (id) => {
    setMobileOpen(false);
    if (isHome) {
      setActiveLink(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home, then scroll after page load
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveLink(id);
      }, 100);
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
          <p className="sidebar__role">
            {displayText}<span className="sidebar__cursor">|</span>
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="/Mauricio-Vasquez-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent sidebar__cta"
        >
          <HiOutlineEye /> Ver CV
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

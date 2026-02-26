import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import heroIllustration from '../assets/images/hero-illustration.png';
import './Hero.css';

function Hero() {
    return (
        <section id="about" className="hero section">
            <motion.div
                className="hero__header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="hero__title">
                    Soy <span className="highlight">Mauricio Vásquez Loría</span>
                </h1>
                <div className="hero__badges">
                    <span className="hero__badge">
                        <FaMapMarkerAlt /> Cartago, CR
                    </span>
                    <span className="hero__badge">
                        <FaEnvelope /> vasquezmj22@gmail.com
                    </span>
                </div>
            </motion.div>

            <motion.div
                className="hero__content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="hero__text-col">
                    <h2 className="hero__subtitle">Un poco sobre mí</h2>
                    <p className="hero__description">
                        Soy Desarrollador Web enfocado en crear interfaces claras, funcionales
                        y orientadas a resultados. Trabajo principalmente con React y tecnologías
                        frontend modernas, cuidando tanto la experiencia de usuario como la calidad
                        del código.
                    </p>
                    <p className="hero__description">
                        Me interesa construir soluciones reales, optimizar procesos y aprender
                        continuamente nuevas herramientas que aporten valor a los proyectos.
                    </p>
                </div>
                <div className="hero__image-col">
                    <img
                        src={heroIllustration}
                        alt="Ilustración de desarrollo web"
                        className="hero__illustration"
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;

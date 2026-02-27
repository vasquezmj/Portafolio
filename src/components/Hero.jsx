import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import hero3D from '../assets/images/hero-3d.png';
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
                    <span className="highlight">Soy</span> Mauricio Vásquez Loría
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
                        Desarrollador de software y técnico en soporte TI con pasión por crear
                        experiencias digitales que realmente funcionen. Me especializo en construir
                        interfaces modernas con <strong>React</strong>, <strong>JavaScript</strong> y
                        tecnologías frontend de última generación.
                    </p>
                    <p className="hero__description">
                        Combino mis habilidades en desarrollo web con una base sólida en
                        infraestructura tecnológica, lo que me permite entender los proyectos
                        de principio a fin — desde la arquitectura hasta cada pixel en pantalla.
                    </p>
                    <p className="hero__description hero__description--highlight">
                        💡 Siempre buscando el siguiente reto que me permita crecer y aportar valor real.
                    </p>
                </div>
                <div className="hero__image-col">
                    <img
                        src={hero3D}
                        alt="Ilustración 3D de desarrollo web"
                        className="hero__illustration"
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;

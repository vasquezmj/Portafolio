import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__copy">
                    © {currentYear} Mauricio Vásquez Loría. Hecho con <FaHeart className="footer__heart" /> y React.
                </p>
                <div className="footer__links">
                    <a
                        href="https://github.com/mauriciovasquez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mauricio-vasquez-lor%C3%ADa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="mailto:vasquezmj22@gmail.com"
                        className="footer__link"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

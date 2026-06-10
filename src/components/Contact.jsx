import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic (can be connected to a backend or service)
        const mailtoLink = `mailto:vasquezmj22@gmail.com?subject=Contacto desde portafolio - ${formData.name}&body=${encodeURIComponent(formData.message)}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <section id="contact" className="contact section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="highlight">Contáctame</span>
            </motion.h2>

            <div className="contact__wrapper">
                <motion.div
                    className="contact__info"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="contact__info-title">Hablemos</h3>
                    <p className="contact__info-text">
                        ¿Tienes un proyecto en mente o una oportunidad interesante?
                        No dudes en contactarme. Estoy abierto a nuevas colaboraciones
                        y oportunidades profesionales.
                    </p>
                    <div className="contact__details">
                        <div className="contact__detail-item">
                            <span className="contact__detail-icon"><FaEnvelope /></span>
                            <div>
                                <span className="contact__detail-label">Email</span>
                                <a href="mailto:vasquezmj22@gmail.com" className="contact__detail-value">
                                    vasquezmj22@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="contact__detail-item">
                            <span className="contact__detail-icon"><FaMapMarkerAlt /></span>
                            <div>
                                <span className="contact__detail-label">Ubicación</span>
                                <span className="contact__detail-value">Cartago, Costa Rica</span>
                            </div>
                        </div>
                        <div className="contact__detail-item">
                            <span className="contact__detail-icon"><FaLinkedinIn /></span>
                            <div>
                                <span className="contact__detail-label">LinkedIn</span>
                                <a
                                    href="https://www.linkedin.com/in/mauricio-vasquez-lor%C3%ADa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__detail-value"
                                >
                                    /in/mauriciovasquez
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    className="contact__form card-dark"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div className="contact__field">
                        <label htmlFor="name" className="contact__label">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="contact__input"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="email" className="contact__label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="contact__input"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="message" className="contact__label">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            className="contact__input contact__textarea"
                            placeholder="¿En qué puedo ayudarte?"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-accent contact__submit">
                        <FaPaperPlane /> Enviar mensaje
                    </button>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact;

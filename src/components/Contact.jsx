import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaPaperPlane,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaPhoneAlt,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './Contact.css';

function Contact({ prefilledSubject }) {
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    inquiryType: 'Cotizar página o aplicación web',
    message: prefilledSubject
      ? `Hola Mauricio, probé tu Showroom y me interesa: "${prefilledSubject}". Me gustaría conversar sobre cómo implementarlo.`
      : '',
  }));
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedState, setSubmittedState] = useState(null);
  const formRef = useRef(null);

  // Progressive enhancement & fallback for :user-invalid + ARIA sync
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const dirtyState = new WeakMap();
    const supportsUserInvalid =
      typeof CSS !== 'undefined' && CSS.supports && CSS.supports('selector(:user-invalid)');

    const syncFieldValidity = (input) => {
      if (!input || typeof input.checkValidity !== 'function') return;
      if (supportsUserInvalid) {
        const isUserInvalid = input.matches(':user-invalid');
        input.setAttribute('aria-invalid', isUserInvalid ? 'true' : 'false');
      } else {
        const isValid = input.checkValidity();
        input.classList.toggle('user-invalid-fallback', !isValid);
        input.classList.toggle('user-valid-fallback', isValid);
        if (!isValid) {
          input.setAttribute('aria-invalid', 'true');
        } else {
          input.removeAttribute('aria-invalid');
        }
      }
    };

    const handleBlur = (e) => {
      const input = e.target;
      if (!input.checkValidity) return;
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(input, state);
      if (state.hasInteracted || supportsUserInvalid) {
        syncFieldValidity(input);
      }
    };

    const handleInput = (e) => {
      const input = e.target;
      if (!input.checkValidity) return;
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(input, state);
      if (state.hasBlurred || input.hasAttribute('aria-invalid')) {
        syncFieldValidity(input);
      }
    };

    form.addEventListener('blur', handleBlur, true);
    form.addEventListener('input', handleInput);
    return () => {
      form.removeEventListener('blur', handleBlur, true);
      form.removeEventListener('input', handleInput);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('vasquezmj22@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `${formData.inquiryType} - ${formData.name}`;
    const body = [
      `Nombre: ${formData.name}`,
      `Email de contacto: ${formData.email}`,
      `Motivo: ${formData.inquiryType}`,
      '',
      'Mensaje:',
      formData.message,
    ].join('\n');

    setSubmittedState({
      name: formData.name,
      email: formData.email,
      mailtoUrl: `mailto:vasquezmj22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      whatsappUrl: `https://wa.me/50670037962?text=${encodeURIComponent(body)}`,
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-header">
        <span className="section-eyebrow">
          <HiOutlineMail aria-hidden="true" /> Contacto Directo
        </span>
        <h2 className="section-title">
          ¿Listo para trabajar <span className="highlight">juntos</span>?
        </h2>
        <p className="section-subtitle">
          Ya sea que busques desarrollar una página o sistema para tu negocio, o sumar un
          desarrollador comprometido a tu equipo técnico.
        </p>
      </div>

      <div className="contact__wrapper">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="contact__info-title">Canales de Respuesta Rápida</h3>
          <p className="contact__info-text">
            Respondo en menos de 24 horas. Puedes escribirme por formulario, copiar mi correo o
            iniciar un chat directo en WhatsApp.
          </p>

          <div className="contact__details">
            <div className="contact__detail-item">
              <span className="contact__detail-icon" aria-hidden="true">
                <FaEnvelope />
              </span>
              <div className="contact__detail-body">
                <span className="contact__detail-label">Correo Electrónico</span>
                <div className="contact__email-row">
                  <a href="mailto:vasquezmj22@gmail.com" className="contact__detail-value">
                    vasquezmj22@gmail.com
                  </a>
                  <button
                    type="button"
                    className="contact__copy-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copiar dirección de correo"
                  >
                    {copiedEmail ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                    <span>{copiedEmail ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="contact__detail-item">
              <span className="contact__detail-icon contact__detail-icon--wa" aria-hidden="true">
                <FaWhatsapp />
              </span>
              <div className="contact__detail-body">
                <span className="contact__detail-label">WhatsApp / Teléfono (Costa Rica)</span>
                <a
                  href="https://wa.me/50670037962?text=Hola%20Mauricio%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail-value"
                >
                  +506 7003-7962 (Abrir chat directo)
                </a>
              </div>
            </div>

            <div className="contact__detail-item">
              <span className="contact__detail-icon" aria-hidden="true">
                <FaLinkedinIn />
              </span>
              <div className="contact__detail-body">
                <span className="contact__detail-label">LinkedIn Profesional</span>
                <a
                  href="https://www.linkedin.com/in/mauricio-vasquez-lor%C3%ADa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail-value"
                >
                  linkedin.com/in/mauricio-vasquez-loría
                </a>
              </div>
            </div>

            <div className="contact__detail-item">
              <span className="contact__detail-icon" aria-hidden="true">
                <FaMapMarkerAlt />
              </span>
              <div className="contact__detail-body">
                <span className="contact__detail-label">Ubicación & Modalidad</span>
                <span className="contact__detail-value">
                  Cartago, Costa Rica · Presencial / Híbrido / Remoto
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          className="contact__form card-dark"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="contact__field">
            <label htmlFor="inquiryType" className="contact__label">
              ¿Cómo puedo ayudarte?
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              className="contact__input"
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option value="Cotizar página o aplicación web">
                Cotizar página o aplicación web (Cliente)
              </option>
              <option value="Oportunidad laboral / Reclutamiento">
                Oportunidad laboral / Reclutamiento
              </option>
              <option value="Consultoría de Datos / Power BI / Soporte TI">
                Consultoría de Datos / Power BI / Soporte TI
              </option>
              <option value="Otro motivo">Otro motivo</option>
            </select>
          </div>

          <div className="contact__field">
            <label htmlFor="name" className="contact__label">
              Nombre completo
            </label>
            <span id="name-hint" className="contact__hint">
              Tu nombre o el de tu empresa / organización.
            </span>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className="contact__input"
              placeholder="Ej. Laura Gómez."
              aria-describedby="name-hint"
              aria-errormessage="name-error"
              value={formData.name}
              onChange={handleChange}
              minLength={2}
              required
            />
            <div id="name-error" className="contact__error-msg">
              <span aria-hidden="true">⚠</span> Por favor ingresa tu nombre (mínimo 2 caracteres).
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="email" className="contact__label">
              Correo electrónico
            </label>
            <span id="email-hint" className="contact__hint">
              Formato esperado: nombre@empresa.com
            </span>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              className="contact__input"
              placeholder="nombre@empresa.com."
              aria-describedby="email-hint"
              aria-errormessage="email-error"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div id="email-error" className="contact__error-msg">
              <span aria-hidden="true">⚠</span> Ingresa un correo electrónico válido para poder
              responderte.
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="message" className="contact__label">
              Detalles del proyecto o propuesta
            </label>
            <span id="message-hint" className="contact__hint">
              Cuéntame brevemente qué necesitas o el rol para el que me contactas.
            </span>
            <textarea
              id="message"
              name="message"
              className="contact__input contact__textarea"
              placeholder="Escribe tu mensaje aquí."
              rows="4"
              aria-describedby="message-hint"
              aria-errormessage="message-error"
              value={formData.message}
              onChange={handleChange}
              minLength={10}
              required
            />
            <div id="message-error" className="contact__error-msg">
              <span aria-hidden="true">⚠</span> Escribe al menos 10 caracteres con los detalles de
              tu mensaje.
            </div>
          </div>

          <div className="contact__actions">
            <button type="submit" className="btn-accent contact__submit">
              <FaPaperPlane aria-hidden="true" /> Preparar Envío de Mensaje
            </button>
          </div>

          {submittedState && (
            <div className="contact__ready-box" role="status" aria-live="polite">
              <strong>¡Mensaje listo, {submittedState.name}! Elige cómo enviarlo ahora:</strong>
              <div className="contact__ready-buttons">
                <a
                  href={submittedState.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent contact__wa-send"
                >
                  <FaWhatsapp aria-hidden="true" /> Enviar por WhatsApp (Recomendado)
                </a>
                <a href={submittedState.mailtoUrl} className="btn-outline">
                  <FaEnvelope aria-hidden="true" /> Abrir en App de Correo
                </a>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;

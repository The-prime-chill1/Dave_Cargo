import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaSnapchat,
} from 'react-icons/fa';
import styles from './Contact.module.scss';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            CONTACT
            <span style={{ color: 'var(--accent)' }}> US</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Ready to ship? Have a question? Our team is on hand in the UK and Nigeria.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Info panel */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className={styles.infoTitle}>Reach Us Directly</h3>

            <div className={styles.contactGroup}>
              <span className={styles.groupLabel}>🇬🇧 United Kingdom</span>
              {['+44 7312 014000', '+44 7484 130810', '+44 7378 232002'].map(p => (
                <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className={styles.contactLink}>
                  <FaPhone /> {p}
                </a>
              ))}
            </div>

            <div className={styles.contactGroup}>
              <span className={styles.groupLabel}>🇳🇬 Nigeria</span>
              {['+234 907 145 4179', '+234 706 337 7767'].map(p => (
                <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className={styles.contactLink}>
                  <FaPhone /> {p}
                </a>
              ))}
            </div>

            <div className={styles.contactGroup}>
              <span className={styles.groupLabel}>Online</span>
              <a href="mailto:davecargoandlogistics@gmail.com" className={styles.contactLink}>
                <FaEnvelope /> davecargoandlogistics@gmail.com
              </a>
              <a href="https://wa.me/447312014000" target="_blank" rel="noreferrer" className={styles.contactLink}>
                <FaWhatsapp /> WhatsApp Chat
              </a>
            </div>

            <div className={styles.socials}>
              <a href="https://instagram.com/davecargoandlogistics" target="_blank" rel="noreferrer" className={styles.social}>
                <FaInstagram /> @davecargoandlogistics
              </a>
              <a href="https://snapchat.com/add/davecargo002" target="_blank" rel="noreferrer" className={styles.social}>
                <FaSnapchat /> @davecargo002
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className={styles.formWrap}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div className={styles.thankYou}>
                <span>✅</span>
                <h4>Message Received!</h4>
                <p>We'll get back to you within a few hours. For urgent enquiries, WhatsApp us directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className={styles.field}>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+44 ..." />
                </div>
                <div className={styles.field}>
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us what you need to ship..." required />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { FaWhatsapp, FaInstagram, FaSnapchat, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './Footer.module.scss';

const navGroups = [
  {
    title: 'Services',
    links: ['Air Freight', 'Sea Freight', 'Vehicle Shipping', 'Commercial Cargo', 'Door-to-Door', 'Container Shipping'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Shipping Rates', 'Promotions', 'Guidelines', 'Locations', 'Contact'],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <img src="/dave-logo.jpg" alt="Dave Cargo" />
              <div>
                <strong>Dave Cargo</strong>
                <small>UK & Logistics Limited</small>
              </div>
            </div>
            <p className={styles.tagline}>
              Your trusted bridge between the United Kingdom and Nigeria.
              Safe. Fast. Reliable.
            </p>
            <div className={styles.socials}>
              <a href="https://wa.me/447312014000" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={styles.wa}>
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/davecargoandlogistics" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://snapchat.com/add/davecargo002" target="_blank" rel="noreferrer" aria-label="Snapchat">
                <FaSnapchat />
              </a>
              <a href="mailto:davecargoandlogistics@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map(g => (
            <div key={g.title} className={styles.linkGroup}>
              <h4>{g.title}</h4>
              <ul>
                {g.links.map(l => (
                  <li key={l}><a href="#services">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4>Contact</h4>
            <div className={styles.contactItem}>
              <FaPhone />
              <div>
                <span>UK Office</span>
                <a href="tel:+447312014000">+44 7312 014000</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaPhone />
              <div>
                <span>Nigeria Office</span>
                <a href="tel:+2349071454179">+234 907 145 4179</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope />
              <div>
                <span>Email</span>
                <a href="mailto:davecargoandlogistics@gmail.com">davecargoandlogistics@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Dave Cargo UK & Logistics Limited. All rights reserved.</p>
          <p>Registered in England & Wales · UK → Nigeria Freight Specialists</p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/447312014000"
        target="_blank"
        rel="noreferrer"
        className={styles.waFloat}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}

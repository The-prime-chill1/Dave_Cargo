import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { locations } from '../../data';
import styles from './Locations.module.scss';

export default function Locations() {
  return (
    <section className={styles.section} id="locations">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Find Us</p>
          <h2 className="section-title section-title--dark">
            OUR
            <span style={{ color: 'var(--secondary)' }}> OFFICES</span>
          </h2>
          <p className="section-subtitle">
            We're on the ground in the UK and Nigeria — ready to serve you at both ends of your shipment.
          </p>
        </div>

        <div className={styles.grid}>
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              className={`${styles.card} ${loc.primary ? styles.primary : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className={styles.flag}>{loc.country}</div>
              <h3 className={styles.locName}>{loc.name}</h3>

              <div className={styles.infoRow}>
                <FaMapMarkerAlt className={styles.infoIcon} />
                <p className={styles.address}>{loc.address}</p>
              </div>

              <div className={styles.phones}>
                {loc.phones.map(p => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className={styles.phone}>
                    <FaPhone /> {p}
                  </a>
                ))}
              </div>

              <a
                href={`https://wa.me/${loc.phones[0].replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className={styles.waBtn}
              >
                <FaWhatsapp /> WhatsApp This Office
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

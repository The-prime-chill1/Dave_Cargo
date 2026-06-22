import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { allowed, restricted } from '../../data';
import styles from './Guidelines.module.scss';

export default function Guidelines() {
  return (
    <section className={styles.section} id="guidelines">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Shipping Rules</p>
          <h2 className="section-title">
            WHAT YOU CAN
            <span style={{ color: 'var(--accent)' }}> & CAN'T SHIP</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Please review our guidelines before booking to ensure a smooth shipment.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Allowed */}
          <motion.div
            className={`${styles.card} ${styles.allowed}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardHead}>
              <div className={`${styles.headIcon} ${styles.okIcon}`}><FaCheck /></div>
              <h3>Allowed Items</h3>
            </div>
            <ul>
              {allowed.map(item => (
                <li key={item}>
                  <FaCheck className={styles.ok} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Restricted */}
          <motion.div
            className={`${styles.card} ${styles.restricted}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardHead}>
              <div className={`${styles.headIcon} ${styles.noIcon}`}><FaTimes /></div>
              <h3>Restricted Items</h3>
            </div>
            <ul>
              {restricted.map(item => (
                <li key={item}>
                  <FaTimes className={styles.no} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <p className={styles.note}>
          Unsure about an item? <a href="https://wa.me/447312014000" target="_blank" rel="noreferrer">Ask us on WhatsApp</a> before booking.
        </p>
      </div>
    </section>
  );
}

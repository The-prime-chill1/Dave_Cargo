import { motion } from 'framer-motion';
import {
  FaShieldAlt, FaClock, FaMapMarkerAlt,
  FaHandshake, FaPoundSign, FaGlobeAfrica,
} from 'react-icons/fa';
import { whyUs } from '../../data';
import styles from './WhyUs.module.scss';

const iconMap = { FaShieldAlt, FaClock, FaMapMarkerAlt, FaHandshake, FaPoundSign, FaGlobeAfrica };

export default function WhyUs() {
  return (
    <section className={styles.why} id="why-us">
      <div className="container">
        <div className={styles.grid}>
          {/* Left copy */}
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Why Dave Cargo</p>
            <h2 className="section-title">
              THE SMARTER WAY
              <br />
              <span style={{ color: 'var(--accent)' }}>TO SHIP HOME</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We're not just another shipping company. We're Nigerians who understand
              what it means to send care packages home — and we've built a service
              that delivers on every promise.
            </p>
            <a
              href="https://wa.me/447312014000"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: '2rem', display: 'inline-flex' }}
            >
              Start Shipping Today
            </a>
          </motion.div>

          {/* Right grid */}
          <div className={styles.featGrid}>
            {whyUs.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  className={styles.feat}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className={styles.featIcon}><Icon /></div>
                  <div>
                    <h4 className={styles.featTitle}>{item.title}</h4>
                    <p className={styles.featDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

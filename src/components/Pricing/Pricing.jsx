import { motion } from 'framer-motion';
import { FaBox, FaBoxOpen, FaPlane, FaWhatsapp, FaArchive } from 'react-icons/fa';
import { rates } from '../../data';
import styles from './Pricing.module.scss';

const iconMap = { FaBarrel: FaArchive, FaBox, FaBoxOpen, FaPlane };

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Pricing() {
  return (
    <section className={styles.pricing} id="rates">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Transparent Pricing</p>
          <h2 className="section-title">
            SHIPPING
            <span style={{ color: 'var(--accent)' }}> RATES</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Simple, honest pricing with no hidden fees. What you see is what you pay.
          </p>
        </div>

        <div className={styles.grid}>
          {rates.map((rate, i) => {
            const Icon = iconMap[rate.icon] || FaBox;
            return (
              <motion.div
                key={rate.title}
                className={`${styles.card} ${rate.popular ? styles.popular : ''}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                {rate.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.iconWrap}><Icon /></div>
                <h3 className={styles.cardTitle}>{rate.title}</h3>
                {rate.perKg ? (
                  <div className={styles.perKg}>
                    <span className={styles.bigPrice}>£4.80</span>
                    <span className={styles.perKgLabel}>per kg</span>
                  </div>
                ) : (
                  <ul className={styles.optionList}>
                    {rate.options.map(opt => (
                      <li key={opt.label} className={styles.option}>
                        <span className={styles.optLabel}>{opt.label}</span>
                        <span className={styles.optPrice}>{opt.price}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href="https://wa.me/447312014000"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.bookBtn} ${rate.popular ? styles.bookBtnPrimary : ''}`}
                >
                  <FaWhatsapp /> Book Now
                </a>
              </motion.div>
            );
          })}
        </div>
        <p className={styles.note}>
          * Prices include UK collection. Nigeria delivery charges apply per destination.
          Contact us for bulk or custom cargo quotes.
        </p>
      </div>
    </section>
  );
}

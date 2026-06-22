import { motion } from 'framer-motion';
import { FaGift, FaBox, FaStar, FaTags, FaUsers } from 'react-icons/fa';
import { promotions } from '../../data';
import styles from './Promotions.module.scss';

const iconMap = { FaGift, FaBox, FaStar, FaTags, FaUsers };

export default function Promotions() {
  return (
    <section className={styles.promos} id="promotions">
      <div className={styles.bg} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.header}>
          <p className="section-label">Limited Time</p>
          <h2 className="section-title">
            SPECIAL
            <span style={{ color: 'var(--accent)' }}> PROMOTIONS</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Save more when you ship more. Take advantage of our exclusive deals.
          </p>
        </div>

        <div className={styles.grid}>
          {promotions.map((promo, i) => {
            const Icon = iconMap[promo.icon] || FaGift;
            return (
              <motion.div
                key={promo.title}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -6 }}
                style={{ '--promo-color': promo.color }}
              >
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <h3 className={styles.promoTitle}>{promo.title}</h3>
                <p className={styles.promoDesc}>{promo.desc}</p>
                <div className={styles.tag}>Claim Offer →</div>
                <div className={styles.glow} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

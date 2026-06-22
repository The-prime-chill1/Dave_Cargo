import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaPlaneDeparture, FaShip, FaCar, FaBoxes, FaHome, FaCube,
} from 'react-icons/fa';
import { services } from '../../data';
import styles from './Services.module.scss';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  FaPlaneDeparture: FaPlaneDeparture,
  FaShip: FaShip,
  FaCar: FaCar,
  FaBoxes: FaBoxes,
  FaHome: FaHome,
  FaCube: FaCube,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Services() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-header', {
        opacity: 0, y: 30, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.services} id="services">
      <div className="container">
        <div className={`${styles.header} svc-header`}>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">
            OUR SHIPPING
            <span style={{ color: 'var(--accent)' }}> SERVICES</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            From a single parcel to a full container — we move your cargo safely from
            the UK to Nigeria on time, every time.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.div
                key={svc.id}
                className={styles.card}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div
                  className={styles.iconWrap}
                  style={{ '--card-color': svc.color }}
                >
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.description}</p>
                <a
                  href="https://wa.me/447312014000"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.learnMore}
                >
                  Learn More →
                </a>
                <div className={styles.glow} style={{ '--card-color': svc.color }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

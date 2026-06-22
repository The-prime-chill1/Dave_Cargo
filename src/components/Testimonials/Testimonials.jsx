import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Customer Stories</p>
          <h2 className="section-title section-title--dark">
            WHAT OUR
            <span style={{ color: 'var(--secondary)' }}> CUSTOMERS SAY</span>
          </h2>
        </div>

        <div className={styles.sliderWrap}>
          <button onClick={prev} className={styles.navBtn} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className={styles.slider}>
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className={styles.card}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.text}>{testimonials[idx].text}</p>
                <div className={styles.stars}>
                  {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {testimonials[idx].name.charAt(0)}
                  </div>
                  <div>
                    <strong>{testimonials[idx].name}</strong>
                    <span>{testimonials[idx].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} className={styles.navBtn} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

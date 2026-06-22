import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { process } from '../../data';
import styles from './Process.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef();
  const lineRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the progress line
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.8,
          },
        }
      );

      // Animate each step
      gsap.utils.toArray('.process-step').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
          duration: 0.7,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.process} id="process">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">How It Works</p>
          <h2 className="section-title">
            THE SHIPPING
            <span style={{ color: 'var(--accent)' }}> PROCESS</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Five simple steps from booking to your doorstep in Nigeria.
          </p>
        </div>

        <div className={styles.timeline}>
          {/* Central line */}
          <div className={styles.lineTrack}>
            <div ref={lineRef} className={styles.lineFill} />
          </div>

          {process.map((step, i) => (
            <div
              key={step.step}
              className={`${styles.step} process-step ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.card}>
                <div className={styles.stepNum}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              <div className={styles.dot} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlane, FaShip, FaGlobeAfrica, FaTruck } from 'react-icons/fa';
import styles from './About.module.scss';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: '+', label: 'Happy Customers' },
  { value: 3,   suffix: 'yrs', label: 'In Operation' },
  { value: 99,  suffix: '%',   label: 'On-Time Rate' },
  { value: 3,   suffix: '',    label: 'UK & Nigeria Offices' },
];

export default function About() {
  const sectionRef = useRef();
  const countersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal content
      gsap.from('.about-reveal', {
        opacity: 0, y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      // Counter animation
      countersRef.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
            onUpdate() { el.innerText = Math.round(el.innerText); },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: visual */}
          <div className={`${styles.visual} about-reveal`}>
            <div className={styles.imgWrap}>
              <div className={styles.imgInner}>
                <div className={styles.imgPlaceholder}>
                  <FaGlobeAfrica className={styles.globeIcon} />
                  <span>UK → Nigeria</span>
                </div>
              </div>
              <div className={styles.badge1}>
                <FaPlane />
                <span>Air Freight<br /><strong>3–7 Days</strong></span>
              </div>
              <div className={styles.badge2}>
                <FaShip />
                <span>Sea Freight<br /><strong>4–6 Weeks</strong></span>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className={styles.copy}>
            <p className={`section-label about-reveal`}>About Us</p>
            <h2 className={`section-title about-reveal`}>
              YOUR TRUSTED BRIDGE
              <br />
              <span style={{ color: 'var(--accent)' }}>UK TO NIGERIA</span>
            </h2>
            <p className={`${styles.body} about-reveal`}>
              Dave Cargo UK & Logistics Limited is a premier freight forwarding company
              dedicated to connecting the United Kingdom and Nigeria with seamless,
              door-to-door shipping solutions.
            </p>
            <p className={`${styles.body} about-reveal`}>
              From a single bag to a full 40ft container — we handle personal shipments,
              commercial cargo, vehicles, electronics, and household goods with the same
              level of professionalism and care. With offices in Dagenham, Lagos, and
              Ibadan, we're on the ground on both ends of every shipment.
            </p>

            <div className={`${styles.pillars} about-reveal`}>
              {['Reliability', 'Speed', 'Transparency', 'Trust'].map(v => (
                <span key={v} className={styles.pill}>{v}</span>
              ))}
            </div>

            {/* Stats */}
            <div className={`${styles.stats} about-reveal`}>
              {stats.map((s, i) => (
                <div key={s.label} className={styles.stat}>
                  <strong>
                    <span ref={el => countersRef.current[i] = el}>{s.value}</span>
                    {s.suffix}
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

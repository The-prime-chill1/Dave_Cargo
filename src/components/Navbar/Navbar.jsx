import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Rates', href: '#rates' },
  { label: 'Promotions', href: '#promotions' },
  { label: 'Track', href: '#tracking' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#hero" className={styles.logo} onClick={() => handleNav('#hero')}>
            <img src="/dave-logo.jpg" alt="Dave Cargo" />
            <span className={styles.logoText}>
              <strong>Dave Cargo</strong>
              <small>UK & Logistics Limited</small>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.label}>
                <a onClick={() => handleNav(l.href)} href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/447312014000"
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            <FaWhatsapp />
            <span>WhatsApp Us</span>
          </a>

          {/* Mobile Toggle */}
          <button className={styles.toggle} onClick={() => setOpen(v => !v)} aria-label="Menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ul>
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a onClick={() => handleNav(l.href)} href={l.href}>{l.label}</a>
                </motion.li>
              ))}
            </ul>
            <a href="https://wa.me/447312014000" target="_blank" rel="noreferrer" className={styles.mobileCta}>
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

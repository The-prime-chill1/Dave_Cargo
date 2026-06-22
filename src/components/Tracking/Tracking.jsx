import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaCheckCircle, FaClock, FaShip, FaPlane, FaTruck, FaHome } from 'react-icons/fa';
import styles from './Tracking.module.scss';

const mockResult = {
  number: 'DCL-2024-00419',
  status: 'In Transit',
  origin: 'Dagenham, UK',
  destination: 'Lagos, Nigeria',
  eta: '28 Jun 2026',
  steps: [
    { icon: FaCheckCircle, label: 'Collected from UK', done: true, date: '20 Jun' },
    { icon: FaShip,        label: 'Departed UK Port',  done: true, date: '22 Jun' },
    { icon: FaPlane,       label: 'Cleared Customs',   done: false, date: '26 Jun' },
    { icon: FaTruck,       label: 'Arrived Nigeria',   done: false, date: '27 Jun' },
    { icon: FaHome,        label: 'Delivered',          done: false, date: '28 Jun' },
  ],
};

export default function Tracking() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!query.trim()) { setError('Please enter a tracking number.'); return; }
    setError('');
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult({ ...mockResult, number: query.toUpperCase() });
    }, 1200);
  };

  const activeStep = mockResult.steps.findIndex(s => !s.done);

  return (
    <section className={styles.tracking} id="tracking">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Live Tracking</p>
          <h2 className="section-title">
            TRACK YOUR
            <span style={{ color: 'var(--accent)' }}> SHIPMENT</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Enter your tracking number to see the real-time status of your cargo.
          </p>
        </div>

        {/* Search bar */}
        <div className={styles.searchWrap}>
          <div className={styles.inputGroup}>
            <FaSearch className={styles.inputIcon} />
            <input
              type="text"
              placeholder="e.g. DCL-2024-00419"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              className={styles.input}
            />
            <button onClick={handleSearch} className={styles.searchBtn} disabled={loading}>
              {loading ? <span className={styles.spinner} /> : 'Track'}
            </button>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>

        {/* Result */}
        <AnimatePresence>
          {result && (
            <motion.div
              className={styles.result}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.resultHead}>
                <div>
                  <span className={styles.resultLabel}>Tracking Number</span>
                  <strong className={styles.resultNum}>{result.number}</strong>
                </div>
                <div className={styles.statusBadge}>
                  <FaClock /> {result.status}
                </div>
              </div>

              <div className={styles.meta}>
                <div><span>Origin</span><strong>{result.origin}</strong></div>
                <div><span>Destination</span><strong>{result.destination}</strong></div>
                <div><span>Est. Delivery</span><strong>{result.eta}</strong></div>
              </div>

              {/* Progress bar */}
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${(activeStep / result.steps.length) * 100}%` }}
                />
              </div>

              {/* Steps */}
              <div className={styles.steps}>
                {result.steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={i}
                      className={`${styles.stepItem} ${step.done ? styles.done : ''} ${i === activeStep ? styles.active : ''}`}
                    >
                      <div className={styles.stepIcon}><Icon /></div>
                      <span className={styles.stepLabel}>{step.label}</span>
                      <span className={styles.stepDate}>{step.date}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className={styles.hint}>
          Don't have a tracking number? <a href="https://wa.me/447312014000" target="_blank" rel="noreferrer">Contact us on WhatsApp</a>
        </p>
      </div>
    </section>
  );
}

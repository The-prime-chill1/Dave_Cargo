import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Text, Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { FaPaperPlane, FaSearch } from 'react-icons/fa';
import styles from './Hero3D.module.scss';

// ── Animated Globe ────────────────────────────────────────
function Globe() {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) meshRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    if (glowRef.current) {
      glowRef.current.rotation.y = -clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Core globe */}
      <Sphere ref={meshRef} args={[2.2, 64, 64]}>
        <meshPhongMaterial
          color="#001F54"
          emissive="#0057D9"
          emissiveIntensity={0.15}
          specular="#FFFFFF"
          shininess={40}
          transparent
          opacity={0.95}
          wireframe={false}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere args={[2.22, 24, 24]}>
        <meshBasicMaterial
          color="#0057D9"
          wireframe
          transparent
          opacity={0.12}
        />
      </Sphere>

      {/* Glow ring */}
      <Torus ref={glowRef} args={[2.6, 0.04, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#F5B700" transparent opacity={0.7} />
      </Torus>

      {/* Second ring */}
      <Torus args={[2.9, 0.025, 16, 100]} rotation={[Math.PI / 3, 0.3, 0]}>
        <meshBasicMaterial color="#0057D9" transparent opacity={0.35} />
      </Torus>

      {/* UK marker */}
      <Sphere args={[0.1, 16, 16]} position={[-0.55, 1.55, 1.6]}>
        <meshBasicMaterial color="#F5B700" />
      </Sphere>

      {/* Nigeria marker */}
      <Sphere args={[0.1, 16, 16]} position={[0.4, -0.3, 2.1]}>
        <meshBasicMaterial color="#00B894" />
      </Sphere>
    </group>
  );
}

// ── Animated Airplane ──────────────────────────────────────
function Airplane() {
  const groupRef = useRef();
  const t = useRef(0);

  useFrame(({ clock }) => {
    t.current = clock.getElapsedTime() * 0.25;
    const radius = 3.8;
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(t.current) * radius;
      groupRef.current.position.y = Math.sin(t.current * 0.5) * 0.8 + 0.5;
      groupRef.current.position.z = Math.sin(t.current) * radius;
      // Face direction of travel
      groupRef.current.rotation.y = -t.current + Math.PI / 2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Fuselage */}
      <mesh>
        <cylinderGeometry args={[0.08, 0.08, 0.7, 12]} />
        <meshPhongMaterial color="#e8f0ff" shininess={80} />
      </mesh>
      {/* Nose */}
      <mesh position={[0, 0.42, 0]}>
        <coneGeometry args={[0.08, 0.22, 12]} />
        <meshPhongMaterial color="#e8f0ff" />
      </mesh>
      {/* Wings */}
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.03, 0.2]} />
        <meshPhongMaterial color="#c8d8f8" />
      </mesh>
      {/* Tail */}
      <mesh position={[0, -0.28, 0]}>
        <boxGeometry args={[0.3, 0.03, 0.12]} />
        <meshPhongMaterial color="#c8d8f8" />
      </mesh>
      {/* Tail fin */}
      <mesh position={[0, -0.2, -0.08]}>
        <boxGeometry args={[0.04, 0.22, 0.15]} />
        <meshPhongMaterial color="#c8d8f8" />
      </mesh>
      {/* Engine glow */}
      <pointLight color="#F5B700" intensity={0.4} distance={1.5} />
    </group>
  );
}

// ── Cargo Container ────────────────────────────────────────
function CargoContainer({ position, color = '#0057D9', scale = 1 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.3 * (position[0] > 0 ? 1 : -1);
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.7 + position[0]) * 0.15;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={ref} position={position} scale={scale}>
        <Box args={[0.6, 0.35, 0.4]}>
          <meshPhongMaterial color={color} shininess={60} />
        </Box>
        {/* Stripes */}
        <Box args={[0.61, 0.06, 0.41]} position={[0, 0.1, 0]}>
          <meshBasicMaterial color="#F5B700" transparent opacity={0.8} />
        </Box>
        <Box args={[0.61, 0.06, 0.41]} position={[0, -0.1, 0]}>
          <meshBasicMaterial color="#F5B700" transparent opacity={0.5} />
        </Box>
      </group>
    </Float>
  );
}

// ── Route Line ─────────────────────────────────────────────
function RouteLine() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const angle = t * Math.PI;
      const x = Math.cos(angle + Math.PI * 0.55) * 2.3;
      const y = Math.sin(angle) * 0.8 + 0.6;
      const z = Math.sin(angle + 0.2) * 2.3;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#F5B700" transparent opacity={0.55} linewidth={2} />
    </line>
  );
}

// ── Particles ──────────────────────────────────────────────
function Particles() {
  const points = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) points.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#4488ff" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// ── Scene ──────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-6, 4, -4]} intensity={0.8} color="#0057D9" />
      <pointLight position={[6, -4, 4]} intensity={0.5} color="#F5B700" />

      <Stars radius={80} depth={50} count={3000} factor={4} fade speed={0.5} />
      <Particles />
      <Globe />
      <RouteLine />
      <Airplane />

      <CargoContainer position={[-4, 1.5, -1]} color="#001F54" scale={1.1} />
      <CargoContainer position={[4, -1, -2]} color="#0057D9" scale={0.85} />
      <CargoContainer position={[-3.5, -1.8, 1.5]} color="#F5B700" scale={0.7} />
      <CargoContainer position={[3.2, 2, 1]} color="#001F54" scale={0.9} />
    </>
  );
}

// ── Hero Overlay ───────────────────────────────────────────
export default function Hero3D() {
  return (
    <section className={styles.hero} id="hero">
      {/* 3D Canvas */}
      <div className={styles.canvas}>
        <Canvas
          camera={{ position: [0, 1.5, 9], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay gradient */}
      <div className={styles.overlay} />

      {/* Hero content */}
      <div className={styles.content}>
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            🇬🇧 UK &rarr; 🇳🇬 Nigeria Specialists
          </motion.span>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            FAST & RELIABLE
            <br />
            <span className={styles.accent}>SHIPPING</span>
            <br />
            BETWEEN THE
            <br />
            UK & NIGERIA
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Door-to-door freight forwarding solutions for personal and commercial cargo.
            Air freight in 3–7 days. Sea freight in 4–6 weeks.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="https://wa.me/447312014000" target="_blank" rel="noreferrer" className="btn-primary">
              <FaPaperPlane /> Get a Quote
            </a>
            <a href="#tracking" className="btn-outline">
              <FaSearch /> Track Shipment
            </a>
          </motion.div>

          <motion.div
            className={styles.metrics}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { value: '3–7 Days', label: 'Air Freight' },
              { value: '4–6 Weeks', label: 'Sea Freight' },
              { value: '100%', label: 'Door Delivery' },
            ].map(m => (
              <div key={m.label} className={styles.metric}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.scrollDot} />
      </motion.div>
    </section>
  );
}

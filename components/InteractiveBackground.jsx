"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  size: 2 + (index % 4),
  delay: (index % 9) * 0.4
}));

export default function InteractiveBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink noise">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,13,29,0.95),rgba(5,7,13,0.78)_42%,rgba(4,18,24,0.92))]" />
      <div className="absolute inset-0 bg-radial-grid bg-[length:26px_26px] opacity-[0.11]" />
      <motion.div
        className="absolute -left-32 top-8 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 130, 40, 0], y: [0, 70, 160, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-40 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/14 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -120, -40, 0], y: [0, 120, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.22, 0.92, 1], opacity: [0.45, 0.75, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-100/65 shadow-[0_0_18px_rgba(103,232,249,0.55)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={reduceMotion ? undefined : { opacity: [0.18, 0.8, 0.18], y: [-8, 12, -8] }}
          transition={{ duration: 5 + (particle.id % 5), repeat: Infinity, delay: particle.delay }}
        />
      ))}
    </div>
  );
}

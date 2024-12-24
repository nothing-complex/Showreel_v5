import React from 'react';
import { motion } from 'framer-motion';

const FilmGrain = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-30"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
      }}
      animate={{
        opacity: [0.25, 0.35, 0.25],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  );
};

export default FilmGrain;

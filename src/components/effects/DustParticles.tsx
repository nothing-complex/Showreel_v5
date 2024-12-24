import React from 'react';
import { motion } from 'framer-motion';
import { generateParticleProps } from '../../utils/particleUtils';

const DustParticles = () => {
  const particles = Array.from({ length: 80 }); // Reduced number of particles

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-cream/20 blur-[1px]" // Increased size, reduced opacity, added blur
          {...generateParticleProps()}
        />
      ))}
    </div>
  );
};

export default DustParticles;

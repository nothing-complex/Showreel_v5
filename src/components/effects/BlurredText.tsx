import React from 'react';
import { motion } from 'framer-motion';

interface BlurredTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const BlurredText = ({ children, className = '', intensity = 'medium' }: BlurredTextProps) => {
  const blurIntensity = {
    low: '0.25px',
    medium: '0.75px',
    high: '1.5px',
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        filter: `blur(${blurIntensity.low})`,
        transition: { duration: 0.3 },
      }}
      style={{
        filter: `blur(${blurIntensity[intensity]})`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlurredText;
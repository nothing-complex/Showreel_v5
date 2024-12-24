import React from 'react';
import { motion } from 'framer-motion';

interface FlickerProps {
  children: React.ReactNode;
}

const Flicker = ({ children }: FlickerProps) => {
  return (
    <motion.div
      animate={{
        opacity: [1, 0.9, 1, 0.95, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        times: [0, 0.2, 0.4, 0.6, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Flicker;
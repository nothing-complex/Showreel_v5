import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../styles/colors';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`bg-gradient-to-r from-[${colors.coral}] via-[${colors.skyBlue}] to-[${colors.sage}] 
        text-transparent bg-clip-text ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
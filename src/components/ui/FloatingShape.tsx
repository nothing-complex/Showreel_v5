import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../styles/colors';

interface FloatingShapeProps {
  color: keyof typeof colors;
  size: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  delay?: number;
}

const FloatingShape = ({ color, size, left, right, top, bottom, delay = 0 }: FloatingShapeProps) => {
  return (
    <motion.div
      className="absolute rounded-full mix-blend-screen filter blur-xl"
      style={{
        backgroundColor: colors[color],
        width: size,
        height: size,
        left,
        right,
        top,
        bottom,
      }}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
      }}
    />
  );
};

export default FloatingShape;
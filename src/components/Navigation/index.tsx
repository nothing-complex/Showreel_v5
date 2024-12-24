import React from 'react';
import { motion } from 'framer-motion';
import BlurredText from '../effects/BlurredText';
import Flicker from '../effects/Flicker';
import NavItems from './NavItems';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

const Navigation = () => {
  const { isVisible, opacity, backgroundOpacity } = useScrollVisibility();

  return (
    <motion.nav
      style={{ opacity }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 px-8 py-6"
    >
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: backgroundOpacity }}
      />
      
      <Flicker>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <BlurredText intensity="low">
            <motion.span
              className="text-cream font-archivo-narrow font-bold text-2xl tracking-wider cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              LK
            </motion.span>
          </BlurredText>

          <NavItems />
        </div>
      </Flicker>
    </motion.nav>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import BlurredText from '../effects/BlurredText';

const HeroTitle = () => {
  return (
    <motion.div
      id="hero-title"
      className="text-center px-4 relative min-h-screen flex flex-col justify-between pb-12"
      initial={{ filter: 'blur(10px)', y: 20 }}
      animate={{ filter: 'blur(2px)', y: 0 }}
      transition={{ duration: 1.2 }}
      whileHover={{ filter: 'blur(1px)' }}
    >
      <motion.div
        animate={{
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BlurredText>
          <h1 className="font-archivo-narrow font-bold text-7xl md:text-9xl mb-6 text-cream tracking-wider relative">
            <motion.span
              className="absolute -left-1 top-0 text-red-500/30 select-none"
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              LUKA KAUZLARIC
            </motion.span>
            <motion.span
              className="absolute -left-0.5 top-0 text-blue-500/30 select-none"
              animate={{ x: [2, -2, 2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              LUKA KAUZLARIC
            </motion.span>
            LUKA KAUZLARIC
          </h1>
        </BlurredText>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px bg-cream/60 mx-auto mb-6"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <BlurredText className="text-cream text-xl md:text-3xl font-light tracking-widest">
            DIRECTOR OF PHOTOGRAPHY & COLOURIST
          </BlurredText>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-auto"
      >
        <BlurredText className="text-cream text-base md:text-2xl font-light tracking-widest">
        </BlurredText>
      </motion.div>
    </motion.div>
  );
};

export default HeroTitle;

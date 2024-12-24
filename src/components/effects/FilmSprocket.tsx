import React from 'react';
import { motion } from 'framer-motion';

interface FilmSprocketProps {
  side: 'left' | 'right';
}

const FilmSprocket = ({ side }: FilmSprocketProps) => {
  const sprocketHoles = Array.from({ length: 20 });
  
  return (
    <motion.div
      className={`absolute top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-24 flex flex-col justify-evenly gap-10 items-center z-20 
        ${side === 'left' ? 'left-0' : 'right-0'} backdrop-blur-xl`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.0625 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/80" />
      {sprocketHoles.map((_, index) => (
        <motion.div
          key={index}
          className="w-6 h-4 sm:w-8 sm:h-6 md:w-10 md:h-7 lg:w-12 lg:h-8 rounded-lg border-2 sm:border-4 border-cream/60 relative z-10"
          animate={{
            y: [0, 2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
};

export default FilmSprocket;

import React from 'react';
import { motion } from 'framer-motion';
import BlurredText from '../effects/BlurredText';

const clients = [
  'DELL',
  'JABRA',
  'AMAZON',
  'SHELL',
  'MARABOU',
  'GETTY',
  'VML',
  'PHILIPS',
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <BlurredText intensity="medium">
        <motion.div
          className="flex space-x-16 items-center"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 31.25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 w-32 relative opacity-70 
                hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <span className="text-cream font-archivo-narrow text-lg tracking-wider">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </BlurredText>
    </div>
  );
};

export default LogoCarousel;
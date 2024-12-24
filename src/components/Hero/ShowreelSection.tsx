import React from 'react';
import FilmGrain from '../effects/FilmGrain';
import BlurredText from '../effects/BlurredText';
import { motion } from 'framer-motion';

const ShowreelSection: React.FC = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10 mix-blend-overlay opacity-50">
        <FilmGrain />
      </div>

      <div className="flex flex-col items-center justify-start pt-32 z-20">
        <motion.div 
          className="w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <BlurredText className="text-cream font-archivo-narrow font-bold text-7xl md:text-9xl tracking-wider">
            SHOWREEL
          </BlurredText>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4"
        >
          <BlurredText className="text-cream text-lg md:text-xl font-light tracking-widest">
            VISUAL STORYTELLING
          </BlurredText>
        </motion.div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 mt-8">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://player.vimeo.com/video/900084461?h=7c1c48f8f1&controls=1&title=1&byline=1&portrait=1"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Showreel 2024 - Luka Kauzlaric"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowreelSection;
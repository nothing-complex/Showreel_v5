import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Flicker from './effects/Flicker';
import BlurredText from './effects/BlurredText';
import FilmGrain from './effects/FilmGrain';
import FilmSprocket from './effects/FilmSprocket';

const Hero = () => {
  return (
    <section className="flex flex-col min-h-screen bg-black">
      {/* Hero Title Section */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <FilmSprocket side="left" />
        <FilmSprocket side="right" />
        
        <div className="absolute inset-0 z-10 mix-blend-overlay opacity-50">
          <FilmGrain />
        </div>
        
        <Flicker>
          <motion.div
            id="hero-title"
            className="text-center px-4 relative"
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
          </motion.div>
        </Flicker>

      </div>

      {/* Showreel Video Section */}
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-10 mix-blend-overlay opacity-50">
          <FilmGrain />
        </div>
        
        <div className="relative w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/900084461?h=7c1c48f8f1&background=1&autoplay=1&loop=1&muted=1"
            className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            frameBorder="0"
            allow="fullscreen"
            title="Showreel 2024 - Luka Kauzlaric"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

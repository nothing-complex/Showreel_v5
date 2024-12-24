import React from 'react';
import HeroTitle from './HeroTitle';
import ShowreelSection from './ShowreelSection';
import FilmGrain from '../effects/FilmGrain';
import FilmSprocket from '../effects/FilmSprocket';
import Flicker from '../effects/Flicker';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-black">
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <FilmSprocket side="left" />
        <FilmSprocket side="right" />
        
        <div className="absolute inset-0 z-10 mix-blend-overlay opacity-50">
          <FilmGrain />
        </div>
        
        <Flicker>
          <HeroTitle />
        </Flicker>

      </div>

      <ShowreelSection />
    </section>
  );
};

export default Hero;

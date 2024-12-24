import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import FilmGrain from './components/effects/FilmGrain';
import DustParticles from './components/effects/DustParticles';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <FilmGrain />
      <DustParticles />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
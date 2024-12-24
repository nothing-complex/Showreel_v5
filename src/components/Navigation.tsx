import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, User, Film, Mail } from 'lucide-react';
import BlurredText from './effects/BlurredText';
import Flicker from './effects/Flicker';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(
    scrollY,
    [0, 100],
    [1, 0.8]
  );

  const backgroundOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.8]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { icon: Camera, label: 'WORK' },
    { icon: User, label: 'ABOUT' },
    { icon: Film, label: 'SHOWREEL' },
    { icon: Mail, label: 'CONTACT' },
  ];

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
          <BlurredText>
            <motion.span
              className="text-cream font-archivo-narrow font-bold text-2xl tracking-wider cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              LUKA KAUZLARIC
            </motion.span>
          </BlurredText>

          <ul className="flex space-x-8">
            {navItems.map(({ icon: Icon, label }) => (
              <li key={label}>
                <BlurredText>
                  <motion.button
                    className="flex items-center space-x-2 text-cream/80 hover:text-cream transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon size={16} className="opacity-80" />
                    <span className="font-archivo-narrow font-bold text-sm tracking-wider">
                      {label}
                    </span>
                  </motion.button>
                </BlurredText>
              </li>
            ))}
          </ul>
        </div>
      </Flicker>
    </motion.nav>
  );
}

export default Navigation;
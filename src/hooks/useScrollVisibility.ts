import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useScrollVisibility = () => {
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

  return {
    isVisible,
    opacity,
    backgroundOpacity,
  };
};
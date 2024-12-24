import { TargetAndTransition, Transition } from 'framer-motion';

interface ParticleProps {
  initial: {
    x: number;
    y: number;
    scale: number;
  };
  animate: TargetAndTransition;
  transition: Transition;
}

export const generateParticleProps = (): ParticleProps => {
  const randomDirection = Math.random() > 0.5 ? 1 : -1;
  const randomDistance = Math.random() * 60 + 20;
  const startY = Math.random() * window.innerHeight;

  return {
    initial: {
      x: Math.random() * window.innerWidth,
      y: startY,
      scale: Math.random() * 2 + 0.5,
    },
    animate: {
      y: [startY, startY + (randomDirection * randomDistance)],
      x: [null as any, (Math.random() - 0.5) * 40],
      opacity: [0, 0.6, 0],
    },
    transition: {
      duration: Math.random() * 8 + 4,
      repeat: Infinity,
      delay: Math.random() * 4,
      ease: "easeInOut",
    },
  };
};

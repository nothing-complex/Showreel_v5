export const filmGrainAnimation = {
  animate: {
    opacity: [0.2, 0.25, 0.2],
    backgroundPosition: ['0% 0%', '100% 100%'],
  },
  transition: {
    duration: 0.25,
    repeat: Infinity,
    repeatType: 'reverse' as const,
  },
};
export const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 2,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
      },
    }),
  };
  
  export const slideInFromLeft = {
    hidden: { opacity: 0, x: -100, scale: 0.95 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 2,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
      },
    }),
  };
  
  export const slideInFromRight = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 2,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
      },
    }),
  };
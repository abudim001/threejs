export const transition = { type: "spring", duration: 1 }; // Increased base duration for smoother transitions

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -300 : direction === "right" ? 300 : 0, // Slide further out for better visibility
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 30, damping: 10, duration: 1.5 }, // Slower and smoother motion
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", ease: "easeInOut", duration: 1 }, // Smooth fade-out
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 40,
    restDelta: 0.001,
    duration: 1, // Adjusted for smoothness
  },
  exit: { 
    x: -300, // Smooth slide out to the left
    opacity: 0,
    transition: { type: "spring", stiffness: 30, damping: 10, duration: 1.5 }, // Slow and smooth
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 40,
    restDelta: 0.001,
    duration: 1,
    delay: 0.2,
    delayChildren: 0.2,
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { type: "spring", stiffness: 30, damping: 10, duration: 1.5 }, // Slow and smooth
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { 
    x: -300, // Smooth slide out to the left
    opacity: 0,
    transition: { type: "spring", stiffness: 30, damping: 10, duration: 1.5 }, // Slower and smoother
  },
};

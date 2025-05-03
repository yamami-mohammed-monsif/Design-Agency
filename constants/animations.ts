export const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for the testimonial carousel
export const testimonialCarouselVariants = {
  // For individual testimonial card slides
  slide: {
    initial: {
      opacity: 0,
      x: 100,
    },
    active: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
  },

  // For navigation controls and indicators
  controls: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
      },
    },
  },
};

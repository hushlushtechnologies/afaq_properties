export const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  micro: 0.2,
  hover: 0.35,
  reveal: 0.7,
  cinematic: 1.1,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
  },
};

export const fadeInUp = fadeUp;

export const fadeInDown = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
  },
};

export const maskUp = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
  },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

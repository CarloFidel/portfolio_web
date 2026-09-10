import type { Variants } from "motion";

export const FADE_IN: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.1,
      duration: 0.5,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.5,
      duration: 0.7,
    },
  },
}
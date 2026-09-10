import type { Variants } from "motion/react"

export const MOBILE_MENU_CONTAINER_VARIANTS: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    overflow: "hidden",
  },
  visible: {
    height: "auto",
    opacity: 1,
    overflow: "hidden",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      mass: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    overflow: "hidden",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      mass: 0.2,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
}

export const MOBILE_MENU_ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.1,
      duration: 0.1,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.1,
      duration: 0.7,
    },
  },
}


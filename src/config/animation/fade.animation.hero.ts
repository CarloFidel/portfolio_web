import type { Variants } from "motion";

export const fadeEfectHero = (duration: number, delay = 0.1): Variants => ({
    hidden: { opacity: 0, scale: 0.98, filter: 'brightness(5) blur(8px) contrast(2) saturate(1)' },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            duration: duration,
            delay: delay,
            ease: "easeIn",
        },
        filter: 'brightness(1)'
    },
    exit: {
        opacity: 0,
        transition: {
            type: "tween",
            duration: duration,
            ease: "easeOut",
        },
    },
})

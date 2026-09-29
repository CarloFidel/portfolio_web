import type { Variants } from "motion"


export const fadeEfectTitle = (duration: number, delay = 100): Variants => ({
    hidden: { opacity: 0, translateX: -10 },
    visible: {
        opacity: 1,
        translateX: 0,
        transition: {
            type: "tween",
            duration: duration,
            delay: delay,
            ease: "easeOut",
        },
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
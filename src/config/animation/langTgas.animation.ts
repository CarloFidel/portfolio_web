import type { Variants } from "motion"


export const langTags = (duration: number, delay = 100): Variants => ({
    hidden: { opacity: 0, translateY: -10 },
    visible: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: "tween",
            duration: duration,
            delay: delay,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        translateY: -10,
        transition: {
            type: "tween",
            duration: duration,
            ease: "easeOut",
        },
    },
})
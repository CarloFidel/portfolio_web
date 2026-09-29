import type { Variants } from "motion";

export const headerTransY = (duration: number, delay = 100): Variants => ({
    hidden: {
        translateY: -60,
        opacity: 0
    },
    visible: {
        translateY: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: duration,
            delay: delay,
            ease: "linear",
        },
    },
})

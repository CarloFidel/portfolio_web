import type { Variants } from "motion"

export const fadeEfectHero = (duration: number, delay = 100): Variants => ({
    hidden: { opacity: 0, scale: 0.99},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            duration: duration,
            delay: delay,
            ease: "easeIn",
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

export const fadeEfectTitle = (duration: number, delay = 100): Variants => ({
    hidden: { opacity: 0, scale: 0.99, translateY: -20 },
    visible: {
        opacity: 1,
        scale: 1,
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
        transition: {
            type: "tween",
            duration: duration,
            ease: "easeOut",
        },
    },
})
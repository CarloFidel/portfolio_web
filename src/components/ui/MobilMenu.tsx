import { AnimatePresence, motion } from 'motion/react'

interface MobilMenuProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    NAV_LINKS: { href: string; label: string }[];
}



export const MobilMenu = ({ menuOpen, setMenuOpen, NAV_LINKS }: MobilMenuProps) => {

    const containerVariants = {
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
                type: "spring" as const,
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
                type: "spring" as const,
                stiffness: 120,
                damping: 10,
                mass: 0.2,

                staggerChildren: 0.2,
                staggerDirection: -1,
            },
        },
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10,
                mass: 0.1,

                duration: 0.1,
                //ease: "easeOut" as const,
            },
            delay: 0.1,
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10,
                mass: 0.1,

                duration: 0.7,
                //ease: "easeIn" as const,
            },
        },
    }


    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div className="md:hidden border-t border-border bg-transparent"
                    initial='hidden'
                    animate='visible'
                    exit={'exit'}
                    variants={containerVariants}
                >
                    {NAV_LINKS.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            className="block px-6 py-4 text-sm text-muted text-center font-light tracking-widest uppercase  border-b border-border leading-2.5"
                            onClick={() => setMenuOpen(false)}
                            variants={itemVariants}              >
                            {link.label}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

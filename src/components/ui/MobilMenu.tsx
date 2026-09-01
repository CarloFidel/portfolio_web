import { AnimatePresence, motion } from 'motion/react'

interface MobilMenuProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    NAV_LINKS: { href: string; label: string }[];
}



export const MobilMenu = ({ menuOpen, setMenuOpen, NAV_LINKS }: MobilMenuProps) => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.04,
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
                duration: 0.3,
                ease: "easeOut" as const,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2,
                ease: "easeIn" as const,
            },
        },
    }


    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div className="md:hidden border-t border-border bg-background"
                    initial='hidden'
                    animate='visible'
                    exit={'exit'}
                    variants={containerVariants}
                >
                    {NAV_LINKS.map((link, index) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            className="block px-6 py-4 text-sm text-muted font-light tracking-widest uppercase  border-b border-border leading-2.5"
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

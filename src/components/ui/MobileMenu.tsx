import { AnimatePresence, motion } from 'motion/react'
import {
    MOBILE_MENU_CONTAINER_VARIANTS,
    MOBILE_MENU_ITEM_VARIANTS,
} from '../../config/animation/mobilMenu.animations.config'

interface MobilMenuProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    NAV_LINKS: { href: string; label: string }[];
}



export const MobileMenu = ({ menuOpen, setMenuOpen, NAV_LINKS }: MobilMenuProps) => {

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div className="md:hidden border-t border-border"
                    initial='hidden'
                    animate='visible'
                    exit={'exit'}
                    variants={MOBILE_MENU_CONTAINER_VARIANTS}
                >
                    {NAV_LINKS.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            className="block px-6 py-4 text-sm text-title bg-background/50 text-center font-light uppercase border-b border-border leading-2.5"
                            onClick={() => setMenuOpen(false)}
                            variants={MOBILE_MENU_ITEM_VARIANTS}              >
                            {link.label}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

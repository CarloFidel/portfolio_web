import { use } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import { IMG_PATHS } from '../../constants/assets.constants'
import { ThemeContext } from '../../contexts/theme/Theme.context'
import { fadeEfectHero, fadeEfectTitle } from '../../utility/fadeEfect'

export const HeroSection = () => {

    const themeContext = use(ThemeContext)
    const { theme } = themeContext


    return (
        <section className='md:flex flex-col-reverse'>
            <motion.div className='pt-18 md:pt-0 lg:relative'
                variants={fadeEfectTitle(1.5, 0.2)}
                initial="hidden"
                animate="visible"
                exit="exit"

            >
                <h1 className='font-serif text-5xl lg:absolute lg:bottom-100 left-8 lg:max-w-1/3 text-center text-title md:text-7xl lg:text-8xl leading-none'>Music that lives inside the silence.</h1>
                <p className="text-gray-200">
                    Film Composer / Singer-songwriter
                </p>

            </motion.div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    variants={fadeEfectHero(0.5, 0.1)}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className='md:hidden pb-2 font-extralight w-full aspect-video bg-cover mask-l-from-34 mask-b-from-54 mask-r-from-34 mask-t-from-50 flex justify-center items-end' style={{
                        backgroundImage: `url(${theme === 'dark'
                            ? IMG_PATHS.HERO_IMAGE_PHONE
                            : IMG_PATHS.HERO_IMAGE_PHONE_LIGHT
                            })`,
                    }}
                >
                    <p className="text-gray-200">
                        Film Composer / Singer-songwriter
                    </p>
                </motion.div>
            </AnimatePresence>
            <motion.div
                key={theme}
                variants={fadeEfectHero(0.5, 0.1)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className='hidden bg-cover w-full aspect-video md:block md:mask-b-from-80 md:mask-t-from-80 md:mask-r-from-65 md:mask-l-from-65 lg:mask-l-to-700 lg:mask-r-to-2000 lg:mask-t-from-50% lg:mask-b-from-70%' style={{
                    backgroundImage: `url(${theme === 'dark'
                        ? IMG_PATHS.HERO_IMAGE_PHONE
                        : IMG_PATHS.HERO_IMAGE_PHONE_LIGHT
                        })`,
                }}>

            </motion.div>

        </section>
    )

}
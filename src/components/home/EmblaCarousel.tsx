import useEmblaCarousel from 'embla-carousel-react'
import { CustomCard } from '../common/CustomCard'
import { SELECTED_WORKS } from '../../constants/data.constants'
import { MdKeyboardArrowRight } from "react-icons/md";

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()



    return (
        <div className="flex flex-col embla items-center" >
            <div className="overflow-hidden lg:w-10/11" ref={emblaRef}>
                <div className="flex touch-pan-y pich-zoom gap-8">
                    {
                        SELECTED_WORKS.map((film) => (

                            <div key={film.id} className="flex flex-[0_0_55%] gap-12 border border-border rounded-2xl p-4 shrink-0 ">
                                <CustomCard title={film.title} url={film.img} size='large' type="vertical" />
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <h2 className="text-3xl font-serif tet-satrt w-full text-title">{film.title}</h2>
                                    <p className="text-foreground max-w-2xs">{film.largeDescription}</p>
                                    <p className="text-left w-full">Directed by {film.director}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>

            {/* Optional: Add navigation controls here */}
            <div className='flex w-full justify-center gap-4 py-4'>
                <MdKeyboardArrowRight size={20} color='#6f6b66' className='rotate-180 cursor-pointer border border-muted rounded-full' stroke='#6f6b66' onClick={goToPrev} />
                <MdKeyboardArrowRight size={20} color='#6f6b66' className='cursor-pointer border border-muted rounded-full' stroke='#6f6b66' onClick={goToNext} />

            </div>
        </div>
    )
}

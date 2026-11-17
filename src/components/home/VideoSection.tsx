import { POSTERS } from "../../constants/data.constants"
import { VideoPlayer } from "../ui/VideoPlayer"

const poster = POSTERS.find((poster) => poster.title === 'Hvíla')
const url = poster?.img
const title = poster?.title

interface Props {
    headerTitle: string
    videoUrl: string
    footerText: string
}


export const VideoSection = ({ headerTitle, videoUrl, footerText }: Props) => {
    return (
        <section className="w-full px-4 md:px-0">
            <h2 className='font-serif text-4xl md:text-7xl text-title mt-4'>
                {headerTitle}
            </h2>
            <figure className="relative w-full mt-4 flex flex-col justify-center">
                <VideoPlayer videoUrl={videoUrl} />
                <figcaption className="mt-3 text-sm text-muted w-full text-center">
                    {footerText}
                    <span className="block text-center text-muted text-[11px] mt-2"> Music by Carlo Fidel Taboada.</span>
                </figcaption>
                <div className="absolute top-7 right-2 w-fit  opacity-80 rounded-2xl backdrop-blur-2xl ">
                    <img
                        src={url}
                        title={title}
                        className=" block w-15 h-full object-contain rounded-2xl shadow-2xl
                        transition-transform duration-700
                         group-hover:scale-105"

                    />

                </div>
            </figure>

        </section>)
}

import { POSTERS, type PosterTitle } from "../../constants/data.constants"
import { VideoPlayer } from "../ui/VideoPlayer"

interface Props {
    headerTitle: string
    videoUrl: string
    footerText: string
    workTitle: PosterTitle
}



export const VideoSection = ({ headerTitle, videoUrl, footerText, workTitle }: Props) => {

    const poster = POSTERS.find((poster) => poster.title === workTitle)
    const url = poster?.img
    const title = poster?.title

    return (
        <section className="w-full px-4 md:px-0 mt-8">
            <h2 className='font-serif text-3xl md:text-7xl text-title'>
                {headerTitle.toUpperCase()}
            </h2>
            <figure className="relative w-full mt-2 flex flex-col justify-center">
                <VideoPlayer videoUrl={videoUrl} />
                <figcaption className="mt-3 text-sm text-muted w-full text-center">
                    {footerText}
                    <span className="block text-center text-muted text-[11px] mt-2"> Music by Carlo Fidel Taboada.</span>
                </figcaption>
                <div className="absolute top-2 right-2 w-fit  opacity-80 rounded-2xl backdrop-blur-2xl ">
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

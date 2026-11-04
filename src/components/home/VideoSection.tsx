import { MEDIA_PATHS } from "../../constants/assets.constants"
import { VideoPlayer } from "../ui/VideoPlayer"

export const VideoSection = () => {
    return (
        <section className="">
            <h2 className='font-serif text-4xl md:text-7xl text-title '>
                Scoring

            </h2>
            <div className="rounded-2xl w-fit mask-b-from-70% mask-t-from-65%">
                <VideoPlayer videoUrl={MEDIA_PATHS.VIDEO_LANDING} />
            </div>
        </section>)
}

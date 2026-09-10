import { IMG_PATHS } from "../../constants/assets.constants"
import { CustomForm } from "../common/CustomForm"

export const FormSection = () => {
    return (
        <section className="flex flex-col gap-4 px-6 md:px-10 max-w-6xl mx-auto" >
            <h2 className='font-serif text-3xl text-start'>
                Let's make something
                worth remembering.
            </h2>
            <p className="text-muted text-start mb-8">
                Available for feature films, shorts, documentaries, and interactive projects.
            </p>
            <div>
                <CustomForm className="w-full" />
                <div className='hidden bg-cover w-full h-200 scale-90 md:block mask-b-from-2 mask-t-from-60% mask-r-from-1.5 mask-l-from-40' style={{ backgroundImage: `url(${IMG_PATHS.HERO_IMAGE_WEB})` }}></div>
            </div>
        </section>
    )
}

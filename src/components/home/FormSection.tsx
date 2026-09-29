import { CustomForm } from "../common/CustomForm"

export const FormSection = () => {
    return (
        <section className="flex flex-col gap-4 px-6 md:px-10 max-w-6xl mx-auto" id="contact">
            <h2 className='font-serif text-5xl md:text-5xl text-title text-center'>
                Let's make something
                worth remembering.
            </h2>

            <div className="grid grid-cols-2 justify-center items-center">
                <CustomForm className="w-full" />
                <div className='hidden bg-cover aspect-square md:block mask-b-from-2 mask-t-from-60% mask-r-from-1.5 mask-l-from-40'
                >
                </div>
            </div>
        </section>
    )
}

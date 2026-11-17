import { CustomForm } from "../common/CustomForm"

export const FormSection = () => {
    return (
        <section className="flex flex-col gap-4 px-6 md:px-10 w-full justify-center items-center mt-8" id="contact">
            <h2 className='font-serif text-5xl md:text-5xl text-title text-center'>
                Let's make some music
            </h2>

            <CustomForm className="w-full" />
        </section>
    )
}

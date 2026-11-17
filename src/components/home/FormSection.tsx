import { CustomForm } from "../common/CustomForm"

export const FormSection = () => {
    return (
        <section className="flex flex-col gap-4 px-6 md:px-10 w-full justify-center items-center mt-12" id="contact">
            <h2 className='font-serif text-3xl md:text-7xl text-title text-center'>
                LET'S MAKE SOME MUSIC
            </h2>

            <CustomForm className="w-full" />
        </section>
    )
}

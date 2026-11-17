import { useSendForm } from "../../hooks/useSendForm"
import { getAxiosError } from "../../service/getAxiosError"
import { errorMessageMapperContactForm } from "../../utility/error.message.mapper"
import { CustomForm } from "../common/CustomForm"
import { Loader } from "../ui/Loader"

export const FormSection = () => {
    const { mutate, isPending, errorMessage, isError } = useSendForm()

    const errorMessageFromServer = errorMessageMapperContactForm(getAxiosError(errorMessage))
    
    return (
        <section className="relative flex flex-col gap-4 px-6 md:px-10 w-full justify-center items-center mt-12" id="contact">
            <h2 className='font-serif text-3xl md:text-7xl text-title text-center'>
                LET'S MAKE SOME MUSIC
            </h2>

            <CustomForm className="w-full" mutate={mutate} />
            {
                isPending && (
                    <div className='absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-2xl flex justify-center items-center'>
                        <Loader />
                    </div>
                )

            }
            {
                isError && (
                    <div className='absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md flex justify-center items-center'>
                        <p className='text-white text-2xl font-light'>{errorMessageFromServer}</p>
                    </div>
                )
            }
        </section>
    )
}

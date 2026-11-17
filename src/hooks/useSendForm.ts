import { useEffect, useState } from "react"
import { useMutationContactForm } from "./useMutationContactForm"
import { getAxiosError } from "../service/getAxiosError"
import { errorMessageMapperContactForm } from "../utility/error.message.mapper"

export const useSendForm = () => {
    const { mutate, isError, isPending, isSuccess, error, data } = useMutationContactForm()
    const [showPopUp, setShowPopUp] = useState(true)
  
  
    useEffect(() => {
      if (!isSuccess || !data) return
    }, [isSuccess, data])
  
    useEffect(() => {
      if (isError) {
        setShowPopUp(true)
      }
    }, [isError])
  
    const errorMessageFromServer = getAxiosError(error)
    const errorMessage = errorMessageMapperContactForm(errorMessageFromServer)
  
    return {
        mutate,
        isError,
        isPending,
        isSuccess,
        errorMessage,
        showPopUp,
        setShowPopUp
    }
}
import { useState } from "react"
import { IMCFormFields } from "../../components/forms/IMCForm/defaultValues"
import { Result } from "../../types/models"

const useIMC = () => {

    const [answer, setAnswer] = useState<Result>()

    const imcFunction = (data: IMCFormFields) => {

        const result = parseInt(data.weight) / Math.pow(parseInt(data.height), 2)

        if (result > 25) {
            setAnswer(`${data.name}, estás por encima del peso ideal`)
        } else if (result < 20) {
            setAnswer(`${data.name}, estás por debajo del peso ideal`)
        } else {
            setAnswer(`${data.name}, tenés el peso ideal`)
        }
    }

    return { imcFunction, answer }

}
export { useIMC }
import { IMCFormFields } from "../../components/forms/IMCForm/defaultValues"
import { Result } from "../../types/models"

const useIMC = () => {

    const imc = (data: IMCFormFields) => {
        const result = parseInt(data.weight) / Math.pow(parseInt(data.height), 2)
        var showResult: Result = ``;

        if (result > 25) {
            showResult = `${data.name}, estás por encima del peso ideal`
        } else if (result < 20) {
            showResult = `${data.name}, estás por debajo del peso ideal`
        } else {
            showResult = `${data.name}, tenés el peso ideal`
        }

        return showResult
    }

    return { imc }

}
export { useIMC }
import * as yup from 'yup'
import { FORM_VALIDATIONS } from '../../../constants/formValidations'


export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED),
    age: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED),
    height: yup
        .number()
        .required(FORM_VALIDATIONS.REQUIRED),
    weight: yup
        .number()
        .required(FORM_VALIDATIONS.REQUIRED)
})
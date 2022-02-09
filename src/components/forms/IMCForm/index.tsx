import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form"
import { defaultValues, IMCFormFields } from './defaultValues'
import { validationSchema } from "./validationSchema"
import "./styless.css"
import { useIMC } from '../../../hooks/useIMC';

type Props = {
    handleIMC: (data: IMCFormFields) => void;
}

const IMCForm: FC<Props> = ({ handleIMC }) => {


    const { handleSubmit, register, formState } = useForm<IMCFormFields>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: IMCFormFields) => {
        handleIMC(data)
    }

    return (
        <div className="container">
            <div className="imc-form">
                <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" {...register('name')} placeholder="ej.: Ayelén" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="number" {...register('age')} placeholder="ej.: 25" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Estatura</Form.Label>
                        <Form.Control type="text" {...register('height')} placeholder="ej.: 1.60" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Peso</Form.Label>
                        <Form.Control type="text" {...register('weight')} placeholder="ej.: 65" />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Calcular
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export { IMCForm }
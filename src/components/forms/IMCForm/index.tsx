import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form"
import { defaultValues } from './defaultValues'
import { validationSchema } from "./validationSchema"
import "./styless.css"
import { useIMC } from '../../../hooks/useIMC';
import { DataUser, Result } from '../../../types/models';



const IMCForm: FC = () => {

    const { imc } = useIMC()

    const { handleSubmit, register } = useForm<{}>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: DataUser) => {
        console.log(data)
        imc(data)
    }
    return (
        <div className="container">
            <div className="imc-form">
                <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" {...register('name')} placeholder="ej.: Ayelén" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="age" {...register('age')} placeholder="ej.: 25" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Estatura</Form.Label>
                        <Form.Control type="height" {...register('height')} placeholder="ej.: 1.60" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Peso</Form.Label>
                        <Form.Control type="weight" placeholder="ej.: 65" />
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
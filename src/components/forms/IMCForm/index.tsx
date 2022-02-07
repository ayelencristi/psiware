import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import "./styless.css"

const IMCForm: FC = () => {
    return (
        <div className="container">
            <div className="imc-form">
                <Form className="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="ej.: Ayelén" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="age" placeholder="ej.: 25" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Estatura</Form.Label>
                        <Form.Control type="height" placeholder="ej.: 1.60" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
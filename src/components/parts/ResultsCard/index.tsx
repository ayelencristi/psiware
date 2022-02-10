import { FC } from "react";
import { Card } from "react-bootstrap";
import { Result } from "../../../types/models";

type Props = {
    data: Result;
}

const ResultsCard: FC<Props> = ({ data }) => {
    return (
        <div className="container">
            <div className="imc-form">
                <Card className="form">
                    <h4 className="logo">Resultado IMC</h4>
                    <Card.Body>{data}</Card.Body>
                </Card>
            </div>
        </div>
    )
}

export { ResultsCard }
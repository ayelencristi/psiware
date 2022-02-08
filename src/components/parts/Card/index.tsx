import { useState } from "react"
import { Card } from "react-bootstrap"
import { useIMC } from "../../../hooks/useIMC"

type Props = {
    result?= fx()
}

const ResultCard = () => {

    return (
        <Card>
            <h2>Resultado IMC</h2>
            <Card.Body>{ }</Card.Body>
        </Card>
    )
}

export { ResultCard }
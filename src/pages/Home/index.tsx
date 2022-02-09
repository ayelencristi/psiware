import { FC } from "react"
import { IMCForm } from "../../components/forms"
import { IMCFormFields } from "../../components/forms/IMCForm/defaultValues"
import { Wrapper } from "../../components/layout"
import { ResultsCard } from "../../components/parts"
import { useIMC } from "../../hooks/useIMC"

const HomePage: FC = () => {
    const { answer, imcFunction } = useIMC();

    const handleIMC = (data: IMCFormFields) => {
        imcFunction(data)
    }

    return (
        <Wrapper>
            <div className="row">
                <div className="col-md-6"><IMCForm handleIMC={handleIMC} /></div>
                <div className="col-md-6"><ResultsCard data={answer} /></div>
            </div>
        </Wrapper>

    )
}

export { HomePage } 
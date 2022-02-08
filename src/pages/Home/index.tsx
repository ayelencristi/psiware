import { FC } from "react"
import { IMCForm } from "../../components/forms"
import { Wrapper } from "../../components/layout"
import { ResultCard } from "../../components/parts"

const HomePage: FC = () => {
    return (
        <Wrapper>
            <IMCForm />
            <ResultCard />
        </Wrapper>
    )
}

export { HomePage } 
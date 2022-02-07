import { FC } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"

const Wrapper: FC = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export { Wrapper }
import { FC } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "./styless.css"

const NavBar: FC = () => {
    return (
        <Navbar className="nav-bar" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <h1 className="logo">Cáculo del IMC</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export { NavBar }
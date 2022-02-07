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
                <Nav className="mr-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/results">Resultados</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export { NavBar }
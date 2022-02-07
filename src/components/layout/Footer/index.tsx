import { FC } from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Footer: FC = () => {
    return (
        <Navbar className="nav-bar" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <p className="logo">Ayelén Cristi</p>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export { Footer }
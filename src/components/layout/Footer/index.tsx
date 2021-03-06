import { FC } from 'react'
import "./styless.css"

const Footer: FC = () => {
    return (
        <footer>
            <div className='footer'>
                <div className="nav-footer">
                    <a className='logo' href="https://ayelencristi.github.io/portfolio/">About me!</a>
                </div>
            </div>
            <p className="hecho-con-amor">Hecho con ❤️ por Aye</p>
        </footer>
    )
}

export { Footer }
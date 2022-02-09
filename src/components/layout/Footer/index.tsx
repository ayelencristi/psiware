import { FC } from 'react'
import "./styless.css"

const Footer: FC = () => {
    return (
        <footer>
            <div className='footer'>
                <div className="nav-footer">
                    <a className='logo' href="https://ayelencristi.github.io/portfolio/">Hacé click y conocé un poco más sobre mí!</a>
                </div>
            </div>
            <p className="hecho-con-amor">Hecho con ❤️ por Aye</p>
        </footer>
    )
}

export { Footer }
import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={style.NavBarContainer}>
            <Link to = "/" className={style.Link}>
                <div className={style.logo}>
                    <h1>LogoClaudiaHuertas</h1>
                </div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Inicio</Link>
                    </li>
                    <li>
                        <Link to = "/servicios">Servicios</Link>
                    </li>
                    <li>
                        <Link to = "/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to = "/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to = "/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;
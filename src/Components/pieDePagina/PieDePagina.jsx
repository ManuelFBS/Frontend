import style from './PieDePagina.module.css'
import { Link } from 'react-router-dom'
import { MdFacebook } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import React from 'react'

const PieDePagina = () => {
    
    return (
        <div className={style.containerFooter}>
        <div className={style.footer}>
          <div className={style.footerSocial}>
            <img src="./images/logo-nav.png" alt="" />
            <span>Claudia Huertas Psicologa</span>
            <div className={style.socials}>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><MdFacebook /></a>
              <Link to={"/"}><TiSocialLinkedinCircular /></Link>
              <Link to={"/"}><AiFillTwitterCircle /></Link>
              <a href="https://github.com/Freetzen/WeDevelop" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
  
          <div className={style.footerNavigation}>
            <h4>Secciones</h4>
            <div className={style.link}>
            <a href="#" onClick={() => window.scrollTo(0, 0)}>Inicio</a>
              <Link to={"/servicios"}>Servicios</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/contacto"}>Contacto</Link>
            </div>
          </div>
  
          <div className={style.footerContact}>
            <h4>Contactanos</h4>
            <div className={style.contact}>
              <p><IoLocationSharp className={style.icon} />Medellin, Colombia</p>
              <p><MdOutlineAlternateEmail className={style.icon} />correo@gmail.com</p>
              <p><FaPhoneAlt className={style.icon} />+57 1234567890</p>
            </div>
          </div>
  
        </div>
        <footer>Todos los Derechos Reservados</footer>
      </div>
    )
}

export default PieDePagina;
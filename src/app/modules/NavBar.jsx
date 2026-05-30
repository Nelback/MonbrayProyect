
import "./Start.css"

import { use, useEffect, useState } from "react"

import { Bebas_Neue, Inter } from 'next/font/google'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const bebasNeue = Bebas_Neue({ 
  weight: ["400"],
  subsets: ['latin'],
  variable: '--font-bebas'
})
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '700', '900']
})

export function NavBar({start, nosotros, productos, display, desplegar}) {

const [scrolled, setScroll] = useState(false)

useEffect(() => {

  const handleScroll = () => {
    setScroll(window.scrollY > 50)
  };

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)

}, [])

const [mobile, setMobile] = useState(false)

useEffect (() => {
  if (window.matchMedia("(max-width: 768px)").matches) {
   setMobile(true)
  }
},[])

function navClass() {
  if (display) return "displayed";
  if (mobile) return "mobile";
  else if (scrolled) return "scrolled";
  else ""
}

function changeImg() {
  if (mobile) return "/assets/start/logo_fucsia.png";
  else if (scrolled) return "/assets/start/logo_fucsia.png";
  else return "/assets/start/logo_white.png";

}






    return (
        <header className={`${inter.variable} ${bebasNeue.variable}`}>
        <nav className={navClass()}>
          <ul>
            <li>
              <img src={changeImg()}/>
            </li>
            <li onClick={start}>Inicio</li>
            <li onClick={nosotros}>Productos</li>
            <li onClick={productos}>Nosotros</li>
            <li><a href="#footer">Contactos</a></li>
            <li>
              <img src="/assets/start/carrito.png" alt="Carrito" className="carrito" />
            </li>
            <li>
              <button className="btnRosa">Comprar Ahora</button>
            </li>
          </ul>
        </nav>


      <nav className="navUnico">
        {display ? (<IoMdArrowDropup size={50} onClick={desplegar} style={{zIndex:"99"}}/>): (<IoMdArrowDropdown size={50} color="white" onClick={desplegar} style={{zIndex:"99"}}/>)}
      
      </nav>
      </header>

    )
}
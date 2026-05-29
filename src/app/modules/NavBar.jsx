
import "./Start.css"

import { use, useEffect, useState } from "react"

import { Bebas_Neue, Inter } from 'next/font/google'

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

export function NavBar({start, nosotros, productos}) {

const [scrolled, setScroll] = useState(false)

useEffect(() => {

  const handleScroll = () => {
    setScroll(window.scrollY > 50)
  };

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)

}, [])


    return (
        <header className={`${inter.variable} ${bebasNeue.variable}`}>
        <nav className={scrolled ? "scrolled": ""}>
          <ul>
            <li>
              <img src={scrolled ? "/assets/start/logo_fucsia.png": "/assets/start/logo_white.png"}/>
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
      </header>
    )
}
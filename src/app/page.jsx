"use client";
import { Start } from "./modules/start";
import { NavBar } from "./modules/NavBar";
import { Nosotros } from "./modules/Nosotros";
import { Footer } from "./modules/footer";
import { Productos } from "./modules/Productos";
import React from "react";
import { useState } from "react";
import "./page.css"

export default function HomePage() {





const [pagina, setPagina] = useState("start")

function startF(){
  setPagina("start")
  window.scrollTo(0, 0)
}
function nosotrosF() {
  setPagina("nosotros")
  window.scrollTo(0, 0)
}
function productosF() {
  setPagina("productos")
  window.scrollTo(0, 0)
}



  return (
    
    <html>
      <head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
      <body>

        <NavBar 
          start={startF} 
        nosotros={nosotrosF} 
        productos={productosF} 
        />


        <Start style={{ display: pagina === "start" ? "block" : "none" }} />
         
        <Nosotros  style={{ display: pagina === "nosotros" ? "block" : "none" }}/> 
         
       <Productos  style={{ display: pagina === "productos" ? "block" : "none" }}/>

      <Footer/>


      </body>
    </html>
  );
}
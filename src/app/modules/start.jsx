"use client";

import React from "react";
import { useState } from "react";
import "./Start.css";
import { NavBar } from "./NavBar";
import { Footer } from "./footer";

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



export function Start({style}) {


  return (

 <div style={style} className="page-enter">


      <main>
        <section className="sect1" id="inicio">
                    <div className="txtContent">
                        <h1 className="titulo1">Forever Young</h1>
                        <p>Nuestra colección más reciente, que resaltan</p>
                        <p>la belleza de ser mujer, sin importar la etapa.</p>
                        <p>Siempre bellas, Siempre Monbray</p>
                    </div>
        </section>

        {/* segunda seccion con fondo blanco */}

        <section className="sect2">
          <div>
            <p className="colorFucc">NUESTRA COLECCIÓN</p> <br />
            <span id="titu">ESMALTES DE GEL <b>PREMIUM</b></span>
            <br /><br />
            <p>Descubre nuestra exclusiva linea de esmaltes de gel con colores vibrantes y draderos.</p>
            <p>Fórmula de alta calidad para un acabado profeisonal</p>
            <br /><br /><br /><br />
            <div className="esmaltePadre">

              <div className="esmalte">
                <div className="imgContent"><img src="" alt="imagen de esmalte" /></div>

                <div className="smalteFoot">
                  <span>Esmalte N1</span> <br />
                  <button className="btnRosa addCar">Añadir al carrito</button>
                </div>
                
              </div>

              <div className="esmalte">
                <div className="imgContent"><img src="" alt="imagen de esmalte" /></div>

                <div className="smalteFoot">
                  <span>Esmalte N1</span> <br />
                  <button className="btnRosa addCar">Añadir al carrito</button>
                </div>
                
              </div>

                          <div className="esmalte">
                <div className="imgContent"><img src="" alt="imagen de esmalte" /></div>

                <div className="smalteFoot">
                  <span>Esmalte N1</span> <br />
                  <button className="btnRosa addCar">Añadir al carrito</button>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* tercera seccion fondo fuccia */}

        <section className="sect3">
          <img src="/assets/start/home/image_banner.png" alt="" />
          <div className="backPink">
            <p className="colorFucc">SOBRE NOSOTROS</p>
            <span>NUESTRA <b>MISIÓN</b></span>
         
            <p className="content">Ofrecer productos de belleza que inspiran confianza y creatividad. En Mobray, creemos que cada mujer merece sentirese bella y segura de sí misma.</p>
            <p className="content">Acompañarte en cada momento para que luzcas tu mejor versión con estilo y sofisticación. Nuestros productos están diseñados pensando en ti, en tus necesidades y en tu estilo de vida.</p>
            <button className="btnRosa">Conoce más</button>
          </div>
        </section>

      {/* cuarta seccion con fondo blanco */}
        <section className="sect4">
          <div className="encabezado">
            <p>NUESTROS VALORES</p>
          <span>LO QUE NOS <b>DEFINE</b></span>
          </div>

          <div className="valores">
            
            <div className="valor">
              <div className="tarjeta">
                <p><b>pasion por la belleza</b></p>
                <p className="content">Cada producto está creado con amor y dedicación para realzar tu belleza natural.</p>
              </div>

              <div className="tarjeta">
                <p><b>Calidad premium</b></p>
                <p className="content">Utilizamos solo los mejores Ingredientes para garantizar resultados profesionales.</p>
              </div>

              <div className="tarjeta">
                <p><b>Innovación constante</b></p>
                <p className="content">Siempre a la vanguardia de las últimas tendencias en belleza y moda.</p>
              </div>
          </div>

          </div>
        </section>

        <section className="sect5">
          <p><b>POR QUÉ ELEGIRNOS</b></p>
          <span>CALIDAD QUE SE <b>SIENTE</b></span>

          <div className="contTarjetas">
            
            <div className="tarjeta">
              <img src="/assets/start/home/icon_1.png" alt="" />
              <p><b>Duración de 21+ días</b></p>
              <p>Nuestros esmaltes de gel duran más de 3 semanas sin perder brillo ni color.</p>
            </div>

            <div className="tarjeta">
              <img src="/assets/start/home/icon_2.png" alt="" />
              <p><b>Fórmula hidratante</b></p>
              <p>Ingredientes que cuidan tus uñas mientras lucen espectaculares.</p>
            </div>


            <div className="tarjeta">
              <img src="/assets/start/home/icon_3.png" alt="" />
              <p><b>Acabado brillante</b></p>
              <p>Brillo intenso que perdura desde el primer día hasta el último.</p>
            </div>

            <div className="tarjeta">
              <img src="/assets/start/home/icon_4.png" alt="" />
              <p><b>Protección UV</b></p>
              <p>Fórmula que protege el color de los rayos ultravioleta.</p>
            </div>

            <div className="tarjeta">
              <img src="/assets/start/home/icon_5.png" alt="" />
              <p><b>+50 Tonos</b></p>
              <p>Una amplia gama de colores para cada ocasión y estilo.</p>
            </div>

            <div className="tarjeta">
              <img src="/assets/start/home/icon_6.png" alt="" />
              <p><b>Secado Rápido</b></p>
              <p>Secado en segundos con lámpara LED/UV para mayor comodidad.</p>
            </div>
          </div>
          <div className="centerCard">
            <img src="/assets/start/home/icono_7.png" width={60}/>
            <div className="content">
            <p><b>+10,000 clientes satisfechas</b></p>
            <p>Únete a nuestra comunidad</p>
            </div>

          </div>
        </section>

        <section className="sect6">
          <div className="panelIzq">
            <span>ESTAMOS AQUÍ PARA AYUDARTE</span>
            <button className="btnRosa">Contáctanos</button>
          </div>
        <img src="/assets/start/home/image_banner2.png" alt="" />
        </section>

      </main>

    </div>

  );
}


import "./Nosotros.css"

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

// Las clases están enumeradas con el número de forma duplicada ej: nro: 2 = 22; nro 1 = 11 Porque sino se parece mucho a otro css y por alguna razón se mezcla


export function Nosotros({style}) {

    return (

        <div style={style} className="page-enter" id="inicio3">



    {/* seccion numero 1 portada de la pagina  */}

        <section className="sect11" id="inicio">
            <div className="rightCard">
                <img src="/assets/start/logo_white.png" alt="" />
                <p className="text">Somos una marca venezolana desde productos de belleza fundada en 2021, con sede principal en Maracay</p> <br />
                <p className="text">Nacimos con la visión de ofrecer <b>productos que inspiran confianza y creatividad,</b> acompañando a cada mujer para que luzca su mejor versión con estilo y sofisticación, y a las profesionales del manicure a ofrecer calidad.</p>
           
            </div>

        </section>
        
        {/* cinta de color fucsia */}
         <p className="cintaMedio">Con presencia de 23 estados de Venezuela + Colombia</p>

        {/* segunda sección, en split img y texto */}

        <section className="sect22">
            <img src="/assets/nosotros/image_banner_1.png" alt="" />
            
            <div className="contenidoTexto">
                <p className="fucsia"><b>MISIÓN</b></p> <br />
                <p className="content">Ofrecer productos de belleza que inspiran confianza y creatividad. En Monbray, creemos que cada mujer merece sentirse bella y segura de sí misma.</p>
            </div>
            
        </section>


    {/* tercera sección split invertido al anterior */}


        <section className="sect33">
            <div className="contenidoTexto2">
                <p className="fucsia"><b>VISIÓN</b></p>
                <p className="content">ser la marca de bellza de referencia en Venezuela y Latinoamérica, expandiendo sus líneas hacia maquillaje, cuidado de la piel y más categorías beauty para 2026.</p>
            </div>
            <img src="/assets/nosotros/image_banner_2.png" alt="" />
        </section>


        {/* ultimas dos partes de la página */}

        <section className="sect44">
            <div className="contenido">
                <span><b>PASIÓN</b></span>
                <p>Cada producto es creado con amor y dedicación para realzar la belleza natural.</p> <hr />
                <span><b>CALIDAD</b></span>
                <p>Solo los mejores ingredientes para resultados profesionales.</p> <hr />
                <span><b>INNOVACIÓN</b></span>
                <p>Siempre a la vanguardia de las últimas tendencias en belleza y moda.</p>
            </div>
        </section>

        <section className="imagenes">
        <img src="/assets/nosotros/image_1.png" alt="" />
        <img src="/assets/nosotros/image_2.png" alt="" />
        <img src="/assets/nosotros/image_3.png" alt="" />
        <img src="/assets/nosotros/image_4.png" alt="" />
        </section>
        

        </div>

    )
}
import "./footer.css"

export function Footer() {

    return(
        <footer id="footer">

            <div>
                <img src="/assets/start/logo_white.png" alt="" /> <br /><br />
                <p>Av.Bolivar, Maracay 2103, Aragua</p> <br /> <br />
                <span></span>  <p>+(58) 000.000.000</p> <br /> <br />
                <p>contacto@monbraycom</p>
            </div>
            <div>
                <p><b>Productos</b></p><br /> <br /><br />
                <p>Colección Mocha mousse</p>
            </div>
            <p><b>Nosotros</b></p>

            <div className="contacto">
                <button><b>Contáctanos</b></button>
            </div>

        </footer>
    )
}
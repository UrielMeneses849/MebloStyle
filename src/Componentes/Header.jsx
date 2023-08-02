import "../Estilos/Header/Header.css"
export default function Header(){

    return(
        <header>
            <nav>
            <div className="menu-movil">
            <img className="menu"
             alt="menu"
             src="./images/menu.svg" />
            </div>

            <div className="content1">
             <img className="menu"
             alt="menu"
             src="./images/menu.svg" />   Menu

            <img className="menu"
             alt="menu"
             src="./images/tienda.svg" />   Tienda
             </div>

            <div className="content2">
                MEBLOSTYLE
            </div>

            <div className="content3">
            <img className="menu"
             alt="menu"
             src="./images/buscar.svg" />
             <img className="menu"
             alt="menu"
             src="./images/carrito.svg" />
            </div>
            </nav>
            <hr />
        </header>
        
    )
}
import "../Estilos/Home/Home.css"

export default function Home(){

    return(
        <div className="container">
        <div className="izquierdo">
        <b>Cammy Armchair</b>
        <p><i>Silla con forrado color crema ideal para habitaciones con mucha luz, elegante y comodo.</i></p>
        <button>Comprar</button>
        </div>

        <div className="derecho">
            <img src="./images/silla1.png" alt="" className="silla" />
        </div>
        </div>
    )
}
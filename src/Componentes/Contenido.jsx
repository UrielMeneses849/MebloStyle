import { Container, Typography } from "@mui/material";

export default function Contenido(){

    return(
        <Container sx={{width: "100%", display: "flex" , margin: "20px auto"}} maxWidth= 'xl' className="Content">
        <div className="textos">
        <Typography variant="h5" component={"div"} sx={{fontSize: 40}}  className= "tituloT">  Conoce nuestra venta de accesorios
        </Typography>
        <Typography variant="body2" sx={{width: "90%", mt: "40px", fontSize: 20, lineHeight: 1.8}} >
        ¡Bienvenido/a a nuestra sección de venta de accesorios para muebles!
        En nuestro catálogo, encontrarás una amplia gama de accesorios cuidadosamente seleccionados para complementar y realzar la belleza de tus muebles. 
        Desde pequeños detalles decorativos hasta elementos funcionales, tenemos todo lo que necesitas para darle un toque único y personalizado a tu hogar.

        ¿Buscas acentuar el estilo de tu sala de estar? Descubre nuestra colección de cojines y fundas decorativas, disponibles en una variedad de colores y diseños, 
        perfectos para agregar un toque de elegancia y comodidad a tus sofás y sillones.
        </Typography>
        </div>
        <div className="imag">
        <img src="./images/sillon4.png" alt="" className="imagen"/>
        </div>
        </Container>
    )
}
import "../Estilos/Info/Info.css"


import { Box, Container, Grid, Typography } from "@mui/material";
export default function Info(){

    return(
        <div className="contenedorInfo">
<Box sx={{ml: 3, mt: 1, color: "#121212", fontSize: 38, fontFamily: "Roboto"}} component={"h2"}> ¿Por que escogernos? </Box>
    <Container sx={{borderRadius: 4, p: 2, mt: 0.5, backgroundColor: "#121212"}} maxWidth="xm">
    <Grid container spacing={4} sx={{mt: 1}}>
    
      {/* En grid se trabaja a base de 12 columnas y se toman 6 aqui en este ej */}
        <Grid item
        lg={4}
        sm={6}>
        <Typography variant="h5">Envio gratis <i className="uil uil-truck"></i> </Typography>
          <p>Tenemos envios gratis a toda la republica mexicana en compras ssuperiores a los $5,000</p>
        </Grid>

        <Grid item 
        lg={4}
        sm={6}>
        <Typography variant="h5">El mejor precio <i className="uil uil-pricetag-alt"></i> </Typography>
          <p>Tenemos los mejores precios en el mercado en piezas únicas con los mejores diseños </p>
        </Grid>

        <Grid item 
        lg={4}
        sm={6}>
        <Typography variant="h5">El mejor precio <i className="uil uil-calender"></i> </Typography>
                  <p>Conoce nuestra garantía de 1 año que cubre defectos de fabrica, y que el producto se rompa. </p>
        </Grid>
    </Grid>
    </Container>
        </div>
    )
}
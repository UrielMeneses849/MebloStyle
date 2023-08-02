import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";

export default function Cards() {
    return(
    <div className="Cards">
        <Box sx={{ml: 3, mt: 10, color: "#121212", fontSize: 34, fontFamily: "Roboto"}} component={"h2"}> Productos Populares </Box>
        <Container sx={{width: "100%", display: "flex", justifyContent: "space-between", flexWrap: "wrap",}} maxWidth= 'xl'>
    {/* CARD 1 */}
        <Card sx={{
            m: 4,
            transition: "0.3s",
            "&:hover": {
            transform: "scale(1.01)"
            },maxWidth: 605, margin: "40px auto",borderRadius:5}}>
        
            {/* Imagen del card */}
            <CardMedia component={"img"} image="./images/sillon1.png" height="390"/>

            {/* Contenido del card */}
            <CardContent>
                <Typography variant="h5" component={"div"} sx={{fontSize: 25}}>  Sillon - Cama Gris</Typography>
                <Typography variant="body2" sx={{p: "30px 10px 20px 0", width: "100%"}} >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", }}>
            <Button size='small' variant="contained" sx={{m: "0 auto 20px", width: "80%"}}>Comprar</Button>
        
            </CardActions>
        </Card>

    {/* CARD 2 */}

    <Card sx={{
            m: 4,
            transition: "0.3s",
            "&:hover": {
            transform: "scale(1.01)"
            },maxWidth: 505, margin: "40px auto", borderRadius:5}} >
        
            {/* Imagen del card */}
            <CardMedia component={"img"} image="./images/cama.png" height="390"/>

            {/* Contenido del card */}
            <CardContent>
                <Typography variant="h5" component={"div"} sx={{fontSize: 25}}>  Cama - Edredon blanco</Typography>
                <Typography variant="body2" sx={{m: "30px 10px 30px 0", width: "100%"}} >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
            </CardContent>
            <CardActions>
            <Button size='small' variant="contained" sx={{m: "0 auto 20px", width: "80%"}}>Comprar</Button>
            </CardActions>
        </Card>

        {/* Card 3 */}
        
        <Card sx={{
            m: 4,
            transition: "0.3s",
            "&:hover": {
            transform: "scale(1.01)"
            },maxWidth: 400, margin: "40px auto", borderRadius:5}} >
        
            {/* Imagen del card */}
            <CardMedia component={"img"} image="./images/cama2.png" height="390"/>

            {/* Contenido del card */}
            <CardContent>
                <Typography variant="h5" component={"div"} sx={{fontSize: 25}}>  Cama - Cobertor + accesorios</Typography>
                <Typography variant="body2" sx={{m: "30px 10px 30px 0", width: "100%"}} >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
            </CardContent>
            <CardActions>
            <Button size='small' variant="contained" sx={{m: "0 auto 20px", width: "80%"}}>Comprar</Button>
            </CardActions>
        </Card>

            {/* Card 4 */}
        
            <Card sx={{
            m: 4,
            transition: "0.3s",
            "&:hover": {
            transform: "scale(1.01)"
            },maxWidth: 400, margin: "40px auto", borderRadius:5}} >
        
            {/* Imagen del card */}
            <CardMedia component={"img"} image="./images/sillon2.png" height="390"/>

            {/* Contenido del card */}
            <CardContent>
                <Typography variant="h5" component={"div"} sx={{fontSize: 25}}>  Sillon - Gris</Typography>
                <Typography variant="body2" sx={{m: "30px 10px 30px 0", width: "100%"}} >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
            </CardContent>
            <CardActions>
            <Button size='small' variant="contained" sx={{m: "0 auto 20px", width: "80%"}}>Comprar</Button>
            </CardActions>
        </Card>
        
        {/* Card 5 */}

        <Card sx={{
            m: 4,
            transition: "0.3s",
            "&:hover": {
            transform: "scale(1.01)"
            },maxWidth: 400, margin: "40px auto", borderRadius:5}} >
        
            {/* Imagen del card */}
            <CardMedia component={"img"} image="./images/sillon3.png" height="390"/>

            {/* Contenido del card */}
            <CardContent>
                <Typography variant="h5" component={"div"} sx={{fontSize: 25}}>  Sillon - Blanco</Typography>
                <Typography variant="body2" sx={{m: "30px 10px 30px 0", width: "100%"}} >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
            </CardContent>
            <CardActions>
            <Button size='small' variant="contained" sx={{m: "0 auto 20px", width: "80%"}}>Comprar</Button>
        
            </CardActions>
        </Card>
        </Container>

    </div>
    )}
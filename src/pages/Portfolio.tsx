import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import '../components/Title.css'
import '../styles/global.css'
import { Box, Container, Grid, Typography } from "@mui/material";
import { PortfolioPage } from "../components/PortfolioPage";

export function Portfolio(){
    return(
        <>
        <Header/>

            <Box sx={{mb:8}} className='page-title'>
                <Typography component={"h1"}>Portfólio</Typography>
            </Box>
            <PortfolioPage />
            <Container sx={{mb:8}} className='animate__animated animate__fadeInUp page-content'>
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, md: 12}}>
                        
                    </Grid>
                        
                    <Grid size={{xs: 12, md: 4}}></Grid>
                </Grid>
            </Container>

        <Footer/>
        </>
    )
}


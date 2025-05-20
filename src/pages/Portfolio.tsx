import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import '../components/Title.css'
import '../styles/global.css'
import { Box, Typography } from "@mui/material";
import { PortfolioPage } from "../components/PortfolioPage";

export function Portfolio(){
    return(
        <>
        <Header/>

            <Box sx={{mb:8}} className='page-title'>
                <Typography component={"h1"}>Portfólio</Typography>
            </Box>
            <PortfolioPage />

        <Footer/>
        </>
    )
}


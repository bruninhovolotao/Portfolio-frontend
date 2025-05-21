import React from 'react';
import '../components/Title.css'
import '../styles/global.css'
import { Box, Grid, Typography } from "@mui/material";
import { api } from '../services/api';
import { Link as LinkRouter } from "react-router-dom"

interface Projeto{
    id: number;
    titulo: string;
    slug: string;
    descricao?: string
    conteudo?: string;
    categoria?: string;
    thumbnail?: string;
}

export function PortfolioPage(){

    // CARREGAR LISTAS DE PROJETOS
    
        const [ projetos, setProjetos ] = React.useState<Projeto[]>([]);
    
        async function handleProjects(){
            try {
                
                const response = await api.get("/projetos")
                setProjetos(response.data.data)
                console.log(response.data.data)
    
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                console.log("Erro ao carregar os projetos.", error)
                console.log(error.response?.data?.dados)
            }
        }
    
          React.useEffect(()=>{
            handleProjects();
        },[]);

    return(
        <>
        <Box component={"section"} className="section-projetos" id="projetos">
            
            <Grid container sx={{position:"relative"}} data-aos="fade-up">    
                {projetos.map((projeto) => (
                    <Grid key={projeto.id} size={{xs: 12, md: 3, sm: 6}}>
                        <Box className='section-projetos-content' sx={{height:`100%`}}>
                        <LinkRouter to={`/projetos/${projeto.slug}`}><img src={projeto.thumbnail} alt={projeto.titulo} loading="lazy" width={`100%`} height={`100%`} />
                        <Typography component={"h4"}>{projeto.titulo}</Typography></LinkRouter>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            
        </Box>
        </>
    )
}


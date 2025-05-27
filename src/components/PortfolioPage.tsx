import React from 'react';
import '../components/Title.css'
import '../styles/global.css'
import { Box, Grid, Skeleton, Typography } from "@mui/material";
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
        const [ loading, setLoading ] = React.useState(true);
        console.log('loading:' + loading)

    
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
            finally{
                setLoading(false)
            }
        }
    
          React.useEffect(()=>{
            handleProjects();
        },[]);



    return(
        <>
            <Grid container>
                {loading ? Array.from({ length: 8 }).map((_, index) => (
                    <Grid key={index} size={{xs: 12, md: 3, sm: 6}}>
                        <Box className='section-projetos-content' sx={{height:`100%`, margin:'1px'}}>
                            <Skeleton animation='wave' variant="rectangular" height='16em' />
                        </Box>
                    </Grid>  
                      
                )) : (
                <Box component={"section"} className="section-projetos" id="projetos">
                    <Grid container sx={{position:"relative"}} data-aos="fade-in">
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
                )}
            </Grid>  
                
            
        </>
    )
}


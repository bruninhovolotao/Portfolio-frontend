/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Grid, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { TitlePortfolio } from "../components/TitlePortfolio";


interface Projeto {
  id: number;
  titulo: string;
  slug: string;
  descricao: string;
  categoria: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  conteudo: any;
  thumbnail?: string;
  usuario: {
    nome: string;
  };
}

export function PortfolioDetalhe(){

    const { slug } = useParams();
    const [projeto, setProjeto] = useState<Projeto | null>(null);

    useEffect(() => {
        async function carregarProjeto(){
            try {
                const response = await api.get(`projetos/${slug}`);
                setProjeto(response.data.data);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                const mensagem = error.response.data;
                console.log(mensagem)
            }
        }

        carregarProjeto();
    }, [slug])

    if(!projeto) return 
    



    return(
        <>
        <Header/>
            <TitlePortfolio />
            
            <Container sx={{mb:8}} className='page-content'>
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, md: 12}}>
                        <Typography component={"p"} dangerouslySetInnerHTML={{ __html: projeto.conteudo }}></Typography>
                    </Grid>
                        
                    <Grid size={{xs: 12, md: 4}}></Grid>
                </Grid>
            </Container>
        
                <Footer/>
        </>
    )
}
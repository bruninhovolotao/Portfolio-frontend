import '../components/Title.css'
import '../styles/global.css'
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

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

export function TitlePortfolio(){

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
            <Box className='page-title-portfolio' sx={{backgroundImage:`url(${projeto.thumbnail})`}}>
                <Typography component={"h1"}>{projeto.titulo}</Typography>
            </Box>
        </>
    )
}


import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { SidebarPainel } from "./Sidebar";
import React from "react";
import '../painel/PortfolioPainel.css';
import { api } from "../services/api";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link as LinkRouter } from "react-router-dom"


interface Projeto{
    id: number;
    titulo: string;
    descricao?: string
    conteudo?: string;
    categoria?: string;
    thumbnail?: string;
    slug: string;
}

export function PortfolioPainel(){

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
        <Grid container>
            <Grid size={2} component={"aside"}>
                <SidebarPainel />
            </Grid>

            <Grid size={10} component={"main"} sx={{padding: 2}} className="painel-content">
                <Grid>
                    <Grid className="painel-content-title">
                        <Typography component={"h1"}>Portfólio</Typography>
                        <LinkRouter to="/painel/portfolio/adicionar"><Button variant="contained" disableElevation startIcon={<AddIcon />}>Adicionar</Button></LinkRouter>
                    </Grid>    
                        <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Título</TableCell>
                                <TableCell align="right">Categoria</TableCell>
                                <TableCell align="right">Ação</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {projetos.map((projeto) => (
                                <TableRow key={projeto.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell className="thumbnail"><LinkRouter to={`/painel/portfolio/editar/${projeto.id}`}><img src={projeto.thumbnail} alt={projeto.titulo} loading="lazy" width={`100%`} height={`100%`} /></LinkRouter></TableCell>
                                    <TableCell><LinkRouter to={`/painel/portfolio/editar/${projeto.id}`}>{projeto.titulo}</LinkRouter></TableCell>
                                    <TableCell align="right">{projeto.categoria}</TableCell>
                                    <TableCell align="right"><LinkRouter to=""><DeleteIcon /></LinkRouter></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                </Grid>
            </Grid>
        
        </Grid>
        
        </>
    )
}
import { Grid, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { SidebarPainel } from "./Sidebar";
import React from "react";
import '../painel/PortfolioPainel.css'
import { api } from "../services/api";
import DeleteIcon from '@mui/icons-material/Delete';

interface Projeto{
    id: number;
    titulo: string;
    descricao?: string
    conteudo?: string;
    categoria?: string;
    thumbnail?: string;
}

export function BlogPainel(){

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
                    <Typography component={"h1"}>Blog</Typography>
                        
                        <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Título</TableCell>
                                <TableCell align="right">Categoria</TableCell>
                                <TableCell align="right">Ação</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {projetos.map((projeto) => (
                                <TableRow key={projeto.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row"><Link href="">{projeto.titulo}</Link></TableCell>
                                    <TableCell align="right">{projeto.categoria}</TableCell>
                                    <TableCell align="right"><Link href=""><DeleteIcon /></Link></TableCell>
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
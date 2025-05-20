import { Button, Grid, TextField, Typography } from "@mui/material";
import { SidebarPainel } from "./Sidebar";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import '../painel/PortfolioPainel.css';
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";
import { Editor } from "../components/Editor";


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export function EditarPortfolio() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [conteudo, setConteudo] = useState("");
  const [categoria, setCategoria] = useState("");
  
  useEffect(() => {
    async function carregarProjeto(){

        const token = localStorage.getItem('token')
        const response = await api.get(`/projetos/id/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const projeto = response.data.data;
        setTitulo(projeto.titulo);
        setDescricao(projeto.descricao);
        setConteudo(projeto.conteudo);
        setCategoria(projeto.categoria);
        setThumbnail(projeto.thumbnail)
    }
    carregarProjeto();
  }, [id])
  
  async function handleEditPortfolio(e: React.FormEvent) {
  e.preventDefault();

  try {

  const token = localStorage.getItem("token");

  if(!token){
      alert("Você precisa estar logado!")
      return;
  }

  console.log(token)

  await api.put(`/projetos/${id}`,{
    titulo,
    descricao,
    categoria,
    conteudo,
    thumbnail
  },{
    headers: { Authorization: `Bearer ${token}` }
  })

  alert("Portfólio atualizado com sucesso!")
  navigate("/painel/portfolio")
 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
      const mensagem = error.response.data.mensagem || "Erro ao atualizar portfólio.";
      console.error(mensagem);
      alert(mensagem);
      
    }

}

  return(
    <>
      <Grid container>
            <Grid size={2} component={"aside"}>
                <SidebarPainel />
            </Grid>

            <Grid size={10} component={"main"} sx={{padding: 2}} className="painel-content">
                <Grid>
                    <Typography component={"h1"}>Editar Portfólio</Typography>
 
                    <form onSubmit={handleEditPortfolio}>
                    <TextField label="Título" variant="outlined" sx={{width:'100%', mb: 2}} value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    <TextField label="Descrição" variant="outlined" sx={{width:'100%', mb: 2}} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    
                    <Editor value={conteudo} onChange={setConteudo} />

                    <Grid container direction="row" justifyContent="space-between">
                      <Grid size={4}>
                        <TextField label="Categoria" variant="outlined" sx={{width:'100%'}} value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                      </Grid>
                      <Grid size={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography sx={{marginRight:2}} component={"p"}>Selecionar capa:</Typography>
                        <Button component="label" role={undefined} disableElevation variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Selecionar 
                          <VisuallyHiddenInput
                            type="file"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                const file = e.target.files[0];
                                setThumbnail(file); // Aqui você armazena o File em vez do nome
                              }
                            }}
                            multiple={false}
                          /></Button>
                      </Grid>
                      <Grid size={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Button type="submit" variant="contained" color="success" disableElevation startIcon={<SaveAltIcon />}>Salvar</Button>
                      </Grid>
                    </Grid>

                </form>
                </Grid>
            </Grid>
        
        </Grid>     
    </>
  )
}

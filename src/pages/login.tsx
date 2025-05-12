import { Button, Container, Grid, TextField } from "@mui/material";
import '../pages/login.css'
import { useNavigate } from "react-router-dom";
import { api } from "../services/api"
import { useState } from "react";

export function Login() {

    const[ emailOuUsername, setEmailOuUsername ] = useState(""); 
    const [ senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e: React.FormEvent){
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                emailOuUsername,
                senha
            })
            

            const { token, usuario } = response.data.dados

            localStorage.setItem("token", token)
            localStorage.setItem("usuario", JSON.stringify(usuario))

            alert("Login realizado com sucesso!")
            navigate("/")

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            const mensagem = error.response.data.mensagem
            alert(mensagem)
            
        }

    }


    return(
        <>
        <div className="login">
            <Container>
                <Grid container className="login-content">
                    <Grid className="login-form">
                        <img src="/assets/logo-bruninho-volotao-black.png" alt="Logo Bruninho Volotão" width={230} height={60}/>
                        
                        <form onSubmit={handleLogin}>
                            <TextField label="Login" variant="outlined" sx={{width: '100%', mb:2}} value={emailOuUsername} onChange={(e) => setEmailOuUsername(e.target.value)} />
                            <TextField label="Senha" variant="outlined" sx={{width: '100%', mb:2}} type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                            <Button type="submit" variant="contained" sx={{width: '100%'}} disableElevation>Entrar</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    )
}
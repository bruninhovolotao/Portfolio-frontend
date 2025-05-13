import { Button, TextField } from "@mui/material";
import '../pages/login.css'
import '../pages/login.css'
import { useNavigate } from "react-router-dom";
import { api } from "../services/api"
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Logo } from "../components/Logo";


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export function Login() {

    const[ emailOuUsername, setEmailOuUsername ] = useState(""); 
    const [ senha, setSenha] = useState("");
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');

    const validateInputs = () => {
        const password = document.getElementById('password') as HTMLInputElement;
        const name = document.getElementById('name') as HTMLInputElement;

        let isValid = true;


        if (!password.value || password.value.length < 5) {
        setPasswordError(true);
        setPasswordErrorMessage('A senha deve ter pelo menos 5 caracteres.');
        isValid = false;
        } else {
        setPasswordError(false);
        setPasswordErrorMessage('');
        }

        if (!name.value || name.value.length < 1) {
        setNameError(true);
        setNameErrorMessage('Usuário é obrigatório.');
        isValid = false;
        } else {
        setNameError(false);
        setNameErrorMessage('');
        }

        return isValid;
    };

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

            navigate("/painel")

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            const mensagem = error.response.data.mensagem
            alert(mensagem)
            
        }

    }

  return (
    <>
      <CssBaseline enableColorScheme />
      
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            className="login-content"
          >
            <FormControl>
                <Logo />
              <TextField
                label="Usuário"
                variant="outlined"
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="username"
                value={emailOuUsername}
                onChange={(e) => setEmailOuUsername(e.target.value)}
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'} />
              
            </FormControl>
            <FormControl>
              <TextField
                label="Senha"
                variant="outlined"
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                value={senha} onChange={(e) => setSenha(e.target.value)}
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Entrar
            </Button>
          </Box>
        </Card>
      </SignUpContainer>
      </>
  );
}

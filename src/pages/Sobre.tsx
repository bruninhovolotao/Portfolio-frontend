import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import '../components/Title.css';
import '../styles/global.css';
import { Box, Container, Grid, Typography } from "@mui/material";

export function Sobre(){
    return(
        <>
        <Header/>

            <Box sx={{mb:8}} className='page-title'>
                <Typography component={"h1"}>SOBRE</Typography>
            </Box>
            <Container sx={{mb:8}} className='animate__animated animate__fadeInUp page-content'>
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, md: 8}}>
                        Profissional graduado em Publicidade e Propaganda. Experiência em desenvolvimento de projetos audiovisuais desde 2011, iniciando a carreira como web designer e designer gráfico, e a partir de 2014, trabalha como videomaker na filmagem e edição de vídeos e, também, com fotografia.
                        <br/><br/>
                        Iniciou a carreira como aprendiz no setor bancário, no Banco do Brasil.
                        <br/><br/>
                        Posteriormente trabalhou no segmento de tecnologia, nos setores de atendimento, suporte e desenvolvimento de Web Sites, ganhando destaque no atendimento a clientes conhecidos, como o melhores hotéis do Rio de Janeiro. 
                        <br/><br/>
                        Ao ingressar na faculdade de publicidade e propaganda, na Universidade Veiga de Almeida, aprimorou os conhecimentos nos trabalhos audiovisuais, tendo destaque em vários trabalhos, e muitos deles, sendo veiculados em alguns veículos de comunicação da Região dos Lagos, no Rio de Janeiro.
                        <br/><br/>
                        É o tipo de profissional que busca atentamente por ideias que consiga comunicar de forma efetiva, artística e sensível ao mesmo tempo. Preocupado e dedicado em realizar todos os processos com responsabilidade para que cada projeto tenha resultados excelentes.</Grid>
                    <Grid size={{xs: 12, md: 4}}>Foto</Grid>
                </Grid>
            </Container>

        <Footer/>
        </>
    )
}


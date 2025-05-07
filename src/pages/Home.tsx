import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Projeto } from "../components/ProjetosCards";
import '../pages/Home.css'
import '../components/Projetos.css'
import '../styles/global.css'
import 'animate.css';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


const projetos = [
    {
      titulo: "Central Park Brazil",
      descricao: "Vídeo institucional",
      capaUrl: "assets/central-park-brazil.webp",
    },
    {
      titulo: "AUTO POSTO JARDIM SÃO PAULO",
      descricao: "Website Institucional",
      capaUrl: "assets/logo-posto-jardim-sao-paulo.webp",
    },
    {
      titulo: "WEBSÉRIE 88",
      descricao: "Vídeos Institucionais",
      capaUrl: "assets/webserie-88.webp",
    },
    {
      titulo: "TRACKER CLUB",
      descricao: "Logo",
      capaUrl: "assets/logo-tracker.webp",
    },
  ];

export function Home(){
    return(
        <>
        <Header />
        <Box component={"section"} className="section-hero">
            <Container>
                <Grid>
                    <Typography component={"h1"} className="animate__animated animate__fadeInRight animate__faster">Transformando ideias</Typography>
                    <Typography component={"h2"} className="animate__animated animate__fadeInRight animate__fast">em realidade visual.</Typography>
                    <Typography component={"p"} className="animate__animated animate__fadeInRight animate__delay">Front-End Developer | React | JavaScript | TypeScript | HTML | CSS</Typography>
                    <Link href="#projetos" className="animate__animated animate__fadeIn animate__delay-1s"><button>VEJA MEU PORTFÓLIO</button></Link>
                </Grid>
            </Container>
        </Box>

        <Box component={"section"} className="section-sobre">
            <Container>
                <Grid container>
                    <Grid size={{xs: 12, md: 8}} className="section-sobre-content">
                        <Typography component={"h2"} className="animate__animated animate__fadeInLeft animate__faster">Bruninho Volotão</Typography>
                        <Typography component={"p"} className="animate__animated animate__fadeInLeft animate__fast">
                            Profissional graduado em Publicidade e Propaganda. Experiência em desenvolvimento de projetos audiovisuais desde 2011, iniciando a carreira como webdesigner e designer gráfico, e a partir de 2014, trabalha como videomaker na filmagem e edição de vídeos e, também, com fotografia.
                        </Typography>
                        <Link href="/sobre" className="animate__animated animate__fadeIn animate__delay-1s"><button>MAIS SOBRE MIM</button></Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>

        <Box component={"section"} className="section-projetos" id="projetos">
            <Typography component={"h3"}>Portfólio</Typography>
            <Grid container sx={{position:"relative"}}>    
                {projetos.map((proj, i) => (
                    <Projeto key={i} {...proj} />
                ))}
            </Grid>
            <Link href="#" className="animate__animated animate__fadeIn animate__delay-3s"><button>MEU PORTFÓLIO COMPLETO</button></Link>
        </Box>
        <Footer />
        </>
    )
}
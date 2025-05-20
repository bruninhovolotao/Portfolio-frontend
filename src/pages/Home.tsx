import { Box, Container, Grid, Link, Tooltip, Typography } from "@mui/material";
import '../pages/Home.css'
import '../components/Projetos.css'
import '../styles/global.css'
import 'animate.css';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaGithub, FaWordpress, FaNodeJs, FaFigma  } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMysql, SiAxios, SiAdobephotoshop, SiAdobepremierepro, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PortfolioCard } from "../components/PortfolioCard";



export function Home(){

    useEffect(() => {
        AOS.init({
            duration: 800, // duração da animação
            once: true, // anima apenas uma vez
            easing: 'ease-out-cubic',
        });
    }, []);

  

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
                        <Typography component={"h2"} data-aos="fade-right">Bruninho Volotão</Typography>
                        <Typography component={"p"} data-aos="fade-right">
                            Profissional graduado em Publicidade e Propaganda. Experiência em desenvolvimento de projetos audiovisuais desde 2011, iniciando a carreira como webdesigner e designer gráfico, e a partir de 2014, trabalha como videomaker na filmagem e edição de vídeos e, também, com fotografia.
                        </Typography>
                        <Link href="/sobre" className="animate__animated animate__fadeIn animate__delay-1s"><button>MAIS SOBRE MIM</button></Link>
                    </Grid>
                        <Grid container spacing={2} size={{xs: 12, md: 4}} data-aos="fade-left" className="section-sobre-grid">
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="HMTL"><FaHtml5/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="CSS"><FaCss3/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="JAVASCRIPT"><SiJavascript/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="TYPESCRIPT"><SiTypescript/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="GIT"><FaGitAlt/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="GITHUB"><FaGithub/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="NODE JS"><FaNodeJs/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="REACT"><FaReact/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="EXPRESS"><SiExpress/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="POSTGRESQL"><BiLogoPostgresql/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="MYSQL"><SiMysql/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="WORDPRESS"><FaWordpress/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="FIGMA"><FaFigma/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="AXIOS"><SiAxios/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="PHOTOSHOP"><SiAdobephotoshop/></Tooltip></Grid>
                        <Grid size={{xs: 2, md:3}} className="section-sobre-icon"><Tooltip title="PREMIERE"><SiAdobepremierepro/></Tooltip></Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>

        <PortfolioCard/>
        
        <Footer />
        </>
    )
}
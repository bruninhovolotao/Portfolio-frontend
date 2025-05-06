import '../components/Footer.css'
import { Grid, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
  return (
    <footer>
      <Link href="#"><img src="/assets/logo-bruninho-volotao-site.webp" alt="Logo Bruninho Volotão" width={230} height={60}/></Link>
      <Grid container spacing={2}>
        <Grid><Link href="https://www.instagram.com/bruninhovolotao/" target="_blank"><InstagramIcon /></Link></Grid>
        <Grid><Link href="https://www.linkedin.com/in/bruninhovolotao/" target="_blank"><LinkedInIcon /></Link></Grid>
        <Grid><Link href="https://www.youtube.com/bruninhovolotao" target="_blank"><YouTubeIcon /></Link></Grid>
        <Grid><Link href="https://github.com/bruninhovolotao" target="_blank"><GitHubIcon /></Link></Grid>
      </Grid>
      
      <Typography>&copy; {new Date().getFullYear()} / Bruninho Volotão. Todos os direitos reservados.</Typography>
    </footer>
  );
}



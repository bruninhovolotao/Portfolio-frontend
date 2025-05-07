import { Box, Button, ButtonGroup, Link, Toolbar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import { useEffect, useState } from "react";
import '../components/Header.css'

export function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // passa de 50px? aplica fundo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

      <>

      <AppBar className="AppBar" component="nav" elevation={0}
        sx={{ transition: "background-color 0.3s ease", backgroundColor: scrolled ? "#333" : "transparent", color: scrolled ? "#000000" : "#ffffff",
      }}
      >
        <Toolbar>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href="/"><img src="/assets/logo-bruninho-volotao-site.webp" alt="Logo Bruninho Volotão" width={230} height={60}/></Link>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'column'}} className='menu-header'>
            <ButtonGroup variant="text" aria-label="Basic button group">
              <Link href="/"><Button>Home</Button></Link>
              <Link href="/sobre"><Button>Sobre</Button></Link>
              <Link href="/o-que-faco"><Button>O que faço</Button></Link>
              <Link href="/portfolio"><Button>Portfólio</Button></Link>
              <Link href="/blog"><Button>Blog</Button></Link>
              <Link href="/contato"><Button>Contato</Button></Link>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>

      </>
  );
}

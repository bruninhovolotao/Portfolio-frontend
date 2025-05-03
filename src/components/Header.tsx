import { Box, Button, Link, Toolbar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import { useEffect, useState } from "react";


const navItems = ['Home', 'Sobre', 'O que faço', 'Portfólio', 'Blog', 'Contato'];

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
            <Link href="#"><img src="/assets/logo-bruninho-volotao-site.webp" alt="Logo Bruninho Volotão" width={230} height={60}/></Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      </>
  );
}

import { Box, Button, ButtonGroup, Toolbar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import { useEffect, useState } from "react";
import '../components/Header.css'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ImageIcon from '@mui/icons-material/Image';
import BookIcon from '@mui/icons-material/Book';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as LinkRouter } from "react-router-dom"

export function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // passa de 50px? aplica fundo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type Anchor = 'top' | 'left' | 'bottom' | 'right';

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="menu-mobile">
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkRouter to="/"><HomeIcon/><Button>Home</Button></LinkRouter>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkRouter to="/sobre"><PersonIcon/><Button>Sobre</Button></LinkRouter>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkRouter to="/o-que-faco"><WorkIcon/><Button>o que faço</Button></LinkRouter>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkRouter to="/portfolio"><ImageIcon/><Button>Portfólio</Button></LinkRouter>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkRouter to="/blog"><BookIcon/><Button>Blog</Button></LinkRouter>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkRouter to="/contato"><WhatsAppIcon/><Button>Contato</Button></LinkRouter>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        
      </List>
      
    </Box>
  );

  return (

      <>

      <AppBar className="AppBar" component="nav" elevation={0}
        sx={{ transition: "background-color 0.3s ease", backgroundColor: scrolled ? "#333" : "transparent", color: scrolled ? "#000000" : "#ffffff",
      }}
      >
        <Toolbar>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            <LinkRouter to="/"><img src="/assets/logo-bruninho-volotao-site.webp" alt="Logo Bruninho Volotão" width={230} height={60}/></LinkRouter>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'column'}} className='menu-header'>
            <ButtonGroup variant="text" aria-label="Basic button group">
              <LinkRouter to="/"><Button>Home</Button></LinkRouter>
              <LinkRouter to="/sobre"><Button>Sobre</Button></LinkRouter>
              <LinkRouter to="/o-que-faco"><Button>O que faço</Button></LinkRouter>
              <LinkRouter to="/portfolio"><Button>Portfólio</Button></LinkRouter>
              <LinkRouter to="/blog"><Button>Blog</Button></LinkRouter>
              <LinkRouter to="/contato"><Button>Contato</Button></LinkRouter>
            </ButtonGroup>
          </Box>

          <Box className='menu-mobile-btn'>
            {(['right'] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button aria-label="Mobile Menu" onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Box>

        </Toolbar>
      </AppBar>

      </>
  );
}
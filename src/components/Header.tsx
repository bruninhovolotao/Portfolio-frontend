import { Box, Button, ButtonGroup, Link, Toolbar } from "@mui/material";
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
                <Link href="/"><HomeIcon/><Button>Home</Button></Link>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link href="/sobre"><PersonIcon/><Button>Sobre</Button></Link>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link href="/"><WorkIcon/><Button>o que faço</Button></Link>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link href="/"><ImageIcon/><Button>Portfólio</Button></Link>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link href="/"><BookIcon/><Button>Blog</Button></Link>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link href="/"><WhatsAppIcon/><Button>Contato</Button></Link>
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

          <Box className='menu-mobile-btn'>
            {(['right'] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
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
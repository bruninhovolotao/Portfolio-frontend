import { Box } from "@mui/material";
import '../painel/Sidebar.css'
import { Logo } from "../components/Logo";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import { Link as LinkRouter } from "react-router-dom"

export function SidebarPainel(){
    return(
        <>
        
        <Box className="painel-sidebar">
            <LinkRouter to="/"><Logo/></LinkRouter>

            <List>
            <ListItem disablePadding>
                <LinkRouter to={"/painel"}>
                    <ListItemButton className="button">
                    <ListItemIcon className="icon">
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                </LinkRouter>
            </ListItem>

            <ListItem disablePadding>
                <LinkRouter to="/painel/portfolio">
                    <ListItemButton className="button">
                    <ListItemIcon className="icon">
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </ListItemButton>
                </LinkRouter>
            </ListItem>

            <ListItem disablePadding>
                <LinkRouter to="/painel/blog">
                    <ListItemButton className="button">
                        <ListItemIcon className="icon">
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                    </ListItemButton>
                </LinkRouter>
                </ListItem>
            </List>
        </Box>
        </>
    )
}
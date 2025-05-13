import { Box, Grid, Link } from "@mui/material";
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

export function SidebarPainel(){
    return(
        <>
        <Grid container>
            <Grid size={2} component={"aside"}>
                <Box className="painel-sidebar">
            <Logo/>

            <List>
            <ListItem disablePadding>
                <Link href="/painel">
                    <ListItemButton className="button">
                    <ListItemIcon className="icon">
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                </Link>
            </ListItem>

            <ListItem disablePadding>
                <Link href="/painel/portfolio">
                    <ListItemButton className="button">
                    <ListItemIcon className="icon">
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </ListItemButton>
                </Link>
            </ListItem>

            <ListItem disablePadding>
                <Link href="/painel/blog">
                    <ListItemButton className="button">
                        <ListItemIcon className="icon">
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                    </ListItemButton>
                </Link>
                </ListItem>
            </List>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}
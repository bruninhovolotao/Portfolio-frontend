import { Grid, Typography } from "@mui/material";
import { SidebarPainel } from "../painel/Sidebar";

export function Painel() {
  return(
    <>
      <Grid container>
            <Grid size={2} component={"aside"}>
                <SidebarPainel />
            </Grid>

            <Grid size={10} component={"main"} sx={{padding: 2}} className="painel-content">
                <Grid>
                    <Typography component={"h1"}>Seja bem-vindo!</Typography>
                        
                        
                </Grid>
            </Grid>
        
        </Grid>     
    </>
  )
}

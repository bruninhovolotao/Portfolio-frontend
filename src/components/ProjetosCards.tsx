import { Box, Grid, Link, Typography } from "@mui/material";

interface Props {
  titulo: string;
  descricao: string;
  capaUrl: string;
}

export function Projeto({ titulo, capaUrl }: Props) {
  return (
    <>
      <Grid size={{xs: 12, md: 3, sm: 6}}>
        <Box className='section-projetos-content' sx={{height:`100%`}}>
          <Link href="#"><img srcSet={capaUrl} src={capaUrl} alt={titulo} loading="lazy" width={`100%`} height={`100%`} />
          <Typography component={"h4"}>{titulo}</Typography></Link>
        </Box>
      </Grid>
    </>
  );
}

import { Grid, Typography } from "@mui/material";

interface Props {
  titulo: string;
  descricao: string;
  capaUrl: string;
}

export function Projeto({ titulo, capaUrl }: Props) {
  return (
    <>
      <Grid size={{xs: 6, md: 3}}>   
          <img srcSet={capaUrl} src={capaUrl} alt={titulo} loading="lazy" width={`100%`} height={`100%`}/>
          <Typography component={"h4"}>{titulo}</Typography>
      </Grid>
    </>
  );
}

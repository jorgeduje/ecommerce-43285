import { Box, Grid } from "@mui/material";

const ProbandoMui = () => {
  return (
    <Box>
      <h1>Material ui</h1>

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <h2
            style={{ width: "100%", height: "300px", backgroundColor: "red" }}
          >
            Caja uno
          </h2>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h2
            style={{ width: "100%", height: "300px", backgroundColor: "blue" }}
          >
            Caja Dos
          </h2>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h2
            style={{ width: "100%", height: "300px", backgroundColor: "green" }}
          >
            Caja Tres
          </h2>
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "300px",
          height: "300px",
          backgroundColor: { xs: "red", sm: "blue", md: "steelblue" },
          border:{ xs:"4px solid black", md:"10px solid black"},
          display: {xs:"block", md:"none"}
        }}
        
      >
        hola
      </Box>

      <div style={{ width: "300px", height: "300px", backgroundColor: "peru" }}>
        chau
      </div>
    </Box>
  );
};

export default ProbandoMui;

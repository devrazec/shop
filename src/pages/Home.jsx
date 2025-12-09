import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";

export function Home() {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        p: 4,
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Material UI Column */}
      <Grid item xs={12} md={6}>
        <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
          <CardActionArea component={Link} to="/materialui">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src="/shop/img/pic2.png"
                alt="Material UI"
                sx={{
                  width: 600, objectFit: "contain",
                }}
              />

              <Typography variant="h5" fontWeight="600">
                Material UI
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* PrimeReact Column */}
      <Grid item xs={12} md={6}>
        <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
          <CardActionArea component={Link} to="/primereact">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src="/shop/img/pic1.png"
                alt="Primereact"
                sx={{
                  width: 600, objectFit: "contain",
                }}
              />
              <Typography variant="h5" fontWeight="600">
                PrimeReact
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

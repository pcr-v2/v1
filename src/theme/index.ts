import { createTheme, Theme } from "@mui/material";

// Create a theme instance.

const theme = createTheme({
  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 375,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

export default theme;

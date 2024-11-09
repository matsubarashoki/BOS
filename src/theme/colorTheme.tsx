import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";
import { teal } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    baseColor: PaletteColor;
    subColor: PaletteColor;
  }
  interface PaletteOptions {
    baseColor?: PaletteColorOptions;
    subColor?: PaletteColorOptions;
  }
}

export const colorTheme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    // background: {
    //   paper: "#e0f2f1",
    // },
    baseColor: {
      main: "#009688",
    },
    subColor: {
      main: "#e0f2f1",
    },
    primary: {
      main: teal[500],
      light: teal[300],
      contrastText: "#ebfaf9",
    },
    secondary: {
      main: "#007bb2",
      light: "#00b0ff",
    },
  },
});

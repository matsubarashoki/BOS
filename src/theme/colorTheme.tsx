import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";
import { teal } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    baseColor: PaletteColor;
  }
  interface PaletteOptions {
    baseColor?: PaletteColorOptions;
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
    background: {
      default: "#e0f2f1",
    },
    baseColor: {
      main: "#009688",
    },
    primary: {
      main: teal[500],
    },
    secondary: {
      main: teal[300],
    },
  },
});

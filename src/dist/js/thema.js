import { createMuiTheme } from "@material-ui/core/styles";

// Pick colors on https://material.io/resources/color/#!/

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#88ffff",
      main: "#0052cc",
      dark: "#009faf",
      contrastText: "#000",
      color: "#fff",
    },
    secondary: {
      main: "#F86967",
      color: "#fff",
    },
    grey: {
      50: "#fafafa",
      100: "#f7f7f7",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
  },
});

import { createTheme } from "@mui/material";

const Theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn",
  },
  palette: {
    background: {
      default: "#f0efeb",
      paper: "#fff"
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default Theme;

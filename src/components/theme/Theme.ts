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
      default: "#e5e5e5",
      paper: "#fff"
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default Theme;

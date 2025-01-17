import { createTheme } from "@mui/material";

const Theme = createTheme({
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

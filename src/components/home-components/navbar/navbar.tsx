"use client";

import {
  AppBar,
  Typography,
  Box,
  TextField,
  Link as MuiLink,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import NavbarLinks from "./navbarLinks";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        backgroundColor: "white",
        position: "fixed",
        zIndex: "10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          paddingY: "10px",
          paddingX: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1120px",
        }}
      >
        <MuiLink component={Link} href="/" sx={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "black", cursor: "pointer" }}
          >
            NEST+
          </Typography>
        </MuiLink>

        <NavbarLinks />

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="جستجو" variant="standard" />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;

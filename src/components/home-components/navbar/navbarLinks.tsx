import { Box, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavbarLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <MuiLink
        component={Link}
        href="/categories"
        sx={{ textDecoration: "none", cursor: "pointer", color: "black" }}
      >
        گروه بندی محصولات
      </MuiLink>

      <MuiLink
        component={Link}
        href="/cart"
        sx={{ textDecoration: "none", cursor: "pointer", color: "black" }}
      >
        سبد خرید
      </MuiLink>

      <MuiLink
        component={Link}
        href="/profile"
        sx={{ textDecoration: "none", cursor: "pointer", color: "black" }}
      >
        پروفایل
      </MuiLink>
    </Box>
  );
};

export default NavbarLinks;

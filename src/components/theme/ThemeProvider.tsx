"use client";

import rtlPlugin from "stylis-plugin-rtl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { prefixer } from "stylis";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Theme from "./Theme";


const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <NextThemesProvider  {...props}>
    <AppRouterCacheProvider
      key="muirtl"
      options={{
        stylisPlugins: [prefixer, rtlPlugin],
      }}
    >
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
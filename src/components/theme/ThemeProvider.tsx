"use client";

import rtlPlugin from "stylis-plugin-rtl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { prefixer } from "stylis";
import { PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import Theme from "./Theme";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
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
  );
};

export default ThemeProvider;

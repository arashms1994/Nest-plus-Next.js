import AuthBG from "@/components/auth-components/AuthBG";
import { Box } from "@mui/material";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        zIndex:"-10"
      }}
    >
      <AuthBG/>
      {children}
    </Box>
  );
}

export default layout;
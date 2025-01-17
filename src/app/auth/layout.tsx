import AuthPic from "@/components/auth-components/AuthPic";
// import { MaterialUISwitch } from "@/components/theme-toggle/MaterialUISwitch";
import { Box, Stack } from "@mui/material";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center" sx={{ width: "100%", height: "100%" }}>{children}</Stack>
      <AuthPic />
    </Box>
  );
}

export default layout;

{
  /* <Stack sx={{ position: "absolute" }}>
  <MaterialUISwitch />
</Stack> */
}

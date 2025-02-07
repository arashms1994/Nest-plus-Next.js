"use client";

import { loginAction } from "@/actions/auth/Login";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Stack,
  TextField,
  Typography,
  Link as MuiLink,
  Button,
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import Link from "next/link";
import React, { useActionState } from "react";

const LoginForm = () => {
  // =========== States =============
  const [state, action, pending] = useActionState(loginAction, {
    message: "",
    success: false,
    errors:{}
  });
  const [showPassword, setShowPassword] = React.useState(false);
  console.log(state);

  // =========== Handle Fns =============
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form action={action}>
      <Typography variant="h5">ورود</Typography>
      <Stack gap={3}>
        <input hidden name="role" defaultValue={1}></input>
        <TextField
          error={!!state?.errors?.email}
          helperText={state?.errors?.email}
          size="small"
          fullWidth
          name="email"
          label="ایمیل یا نام کاربری"
          variant="standard"
          type="email"
        />
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            رمز عبور
          </InputLabel>
          <Input
            name="password"
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <MuiLink
            color="success"
            component={Link}
            href="/auth/forget"
            sx={{ textDecoration: "none", fontSize: 12 }}
          >
            رمز عبور خود را فراموش کرده ام.
          </MuiLink>

          <FormControlLabel
            control={<Checkbox />}
            label="مرا به خاطر بسپار."
            sx={{ margin: "0", fontSize: "12px" }}
          />
        </Stack>
        <Button
          type="submit"
          disabled={pending}
          disableElevation
          variant="contained"
          sx={{ color: "white", backgroundColor: "black" }}
        >
          ورود
        </Button>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          gap={1}
          marginTop={1}
        >
          <Typography variant="body1">حساب کاربری ندارید؟</Typography>
          <MuiLink
            color="success"
            component={Link}
            href="/auth/register"
            sx={{ textDecoration: "none", fontSize: 20 }}
          >
            ثبت نام
          </MuiLink>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;

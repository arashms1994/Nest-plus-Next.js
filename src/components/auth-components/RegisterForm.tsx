"use client";

import { register } from "@/actions/auth/Register";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Link as MuiLink,
  Button,
  Checkbox,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
} from "@mui/material";
import Link from "next/link";
import React, { useActionState } from "react";

const RegisterForm = () => {
  // =========== States =============
  const [state, action, pending] = useActionState(register, undefined);
  const [showPassword, setShowPassword] = React.useState(false);

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
      <Typography variant="h5">ثبت نام</Typography>
      <Stack gap={3}>
        <TextField
          error={!!state?.errors?.firstName}
          helperText={state?.errors?.firstName}
          fullWidth
          size="small"
          name="firstName"
          label="نام"
          variant="standard"
          maxRows={4}
          multiline
        />
        <TextField
          error={!!state?.errors?.lastName}
          helperText={state?.errors?.lastName}
          size="small"
          fullWidth
          name="lastName"
          label="نام خانوادگی"
          variant="standard"
          maxRows={4}
          multiline
        />
        <TextField
          error={!!state?.errors?.email}
          helperText={state?.errors?.email}
          size="small"
          fullWidth
          name="email"
          label="ایمیل"
          variant="standard"
          maxRows={4}
          multiline
          type="email"
        />
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
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

        <FormControlLabel
          control={<Checkbox />}
          label="قوانین و مقررات را میپذیرم."
          sx={{ margin: "0", fontSize: "12px" }}
        />

        <Button
          type="submit"
          disabled={pending}
          disableElevation
          variant="contained"
          sx={{ color: "white", backgroundColor: "black" }}
        >
          ثبت نام
        </Button>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          gap={1}
          marginTop={1}
        >
          <Typography variant="body1">قبلا ثبت نام کرده‌اید؟</Typography>
          <MuiLink
            color="success"
            component={Link}
            href="/auth/login"
            sx={{ textDecoration: "none", fontSize: 20 }}
          >
            ورود
          </MuiLink>
        </Stack>
      </Stack>
    </form>
  );
};

export default RegisterForm;

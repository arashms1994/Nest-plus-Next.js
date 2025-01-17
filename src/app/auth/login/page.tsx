"use client";
import { LoginAction } from "@/actions/Login";
import { Label } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useActionState } from "react";

type Props = {};

function Register({}: Props) {
  const [state, action, pending] = useActionState(LoginAction, undefined);

  return (
    <Card sx={{ width: 450 }} elevation={8}>
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <form action={action}>
          <Typography variant="h5">ورود</Typography>
          <Stack gap={3}>
            <TextField
              error={!!state?.errors?.email}
              helperText={state?.errors?.email}
              size="small"
              fullWidth
              name="email"
              label="ایمیل یا نام کاربری"
              variant="standard"
              maxRows={4}
              multiline
              type="email"
            />
            <TextField
              error={!!state?.errors?.password}
              helperText={state?.errors?.password?.map((e: string) => (
                <Box component="span" display="block" key={e}>
                  {e}
                </Box>
              ))}
              size="small"
              fullWidth
              name="password"
              type="password"
              label="کلمه عبور"
              variant="standard"
              maxRows={4}
              multiline
            />
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

              <Typography variant="caption">
                <Checkbox {...Label} />
                مرا به خاطر بسپار.
              </Typography>
            </Stack>
            <Button
              type="submit"
              disabled={pending}
              disableElevation
              variant="contained"
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
      </CardContent>
    </Card>
  );
}

export default Register;

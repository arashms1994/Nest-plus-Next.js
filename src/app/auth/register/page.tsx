"use client";
import { RegisterAction } from "@/actions/Register";
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
  const [state, action, pending] = useActionState(RegisterAction, undefined);

  return (
    <Card sx={{ width: 450 }} elevation={8}>
      <CardContent
        sx={{
          padding: 4,
        }}
      >
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
            <Typography variant="caption">
              <Checkbox {...Label} />
              قوانین و مقررات را میپذیرم.
            </Typography>
            <Button
              type="submit"
              disabled={pending}
              disableElevation
              variant="contained"
            >
              ثبت نام
            </Button>
            <Stack direction="row" justifyContent="center" alignItems="center" textAlign="center" gap={1} marginTop={1}>
            <Typography variant="body1">قبلا ثبت نام کرده‌اید؟</Typography>
            <MuiLink color="success" component={Link} href="/auth/login" sx={{textDecoration:"none", fontSize:20}}>
              ورود
            </MuiLink>
          </Stack>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}

export default Register;

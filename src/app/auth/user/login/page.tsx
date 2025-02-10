import LoginForm from "@/components/auth-components/user/LoginForm";
import { Card, CardContent } from "@mui/material";

// type Props = {};

function Login() {
  return (
    <Card sx={{ width: 450 }} elevation={8}>
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <LoginForm />
      </CardContent>
    </Card>
  );
}

export default Login;

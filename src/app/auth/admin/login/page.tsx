import AdminLoginForm from "@/components/auth-components/admin/AdminLoginForm";
import { Card, CardContent } from "@mui/material";

// type Props = {};

function Login() {
  return (
    <Card sx={{ width: 420, position:"absolute"}} elevation={8}>
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <AdminLoginForm />
      </CardContent>
    </Card>
  );
}

export default Login;

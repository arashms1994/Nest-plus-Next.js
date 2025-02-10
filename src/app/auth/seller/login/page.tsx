import SellerLoginForm from "@/components/auth-components/seller/SellerLoginForm";
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
        <SellerLoginForm />
      </CardContent>
    </Card>
  );
}

export default Login;

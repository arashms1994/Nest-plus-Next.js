import SellerRegisterForm from "@/components/auth-components/seller/SellerRegisterForm";
import { Card, CardContent } from "@mui/material";

type Props = {};

function Register({}: Props) {
  return (
    <Card sx={{ width: 450 }} elevation={8}>
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <SellerRegisterForm />
      </CardContent>
    </Card>
  );
}

export default Register;

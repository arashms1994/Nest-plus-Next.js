import AdminRegisterForm from "@/components/auth-components/admin/AdminRegisterForm";
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
        <AdminRegisterForm />
      </CardContent>
    </Card>
  );
}

export default Register;

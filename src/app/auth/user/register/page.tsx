import RegisterForm from "@/components/auth-components/user/RegisterForm";
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
        <RegisterForm />
      </CardContent>
    </Card>
  );
}

export default Register;

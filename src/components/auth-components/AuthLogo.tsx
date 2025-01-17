import { Box} from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const AuthLogo: React.FC<Props> = ({ src, alt }) => {
  return (
    <Box component="div" sx={{ width: "46px", height: "46px", position: "absolute", margin:"10px" }}>
      <Image src={src} alt={alt} layout="fill" objectFit="fill" />
    </Box>
  );
};

export default AuthLogo;

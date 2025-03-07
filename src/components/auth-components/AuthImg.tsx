import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const AuthImg: React.FC<Props> = ({ src, alt }) => {
  return (
    <Box component="div" sx={{ width: "100%", height: "100%"}}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="fill"
      />
    </Box>
  );
};

export default AuthImg;

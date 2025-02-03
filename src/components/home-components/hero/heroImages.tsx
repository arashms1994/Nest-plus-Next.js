import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const HeroImg: React.FC<Props> = ({ src, alt }) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1120px",
        width: "100%",
        height: "536px",
        position: "relative",
      }}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </Box>
  );
};

export default HeroImg;

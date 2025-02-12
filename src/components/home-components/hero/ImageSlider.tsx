"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "/hero-img/Beige and Brown Minimalist New Style Collection Banner.jpg",
  "/hero-img/Green and Yellow Simple Clean Shoes Sale Banner.jpg",
  "/hero-img/White Classy and Refined Real Estate Banner.jpg",
];

const ImageSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    mode: "free-snap",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1920,
        mx: "auto",
      }}
    >
      <Box ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <Box key={index} className="keen-slider__slide">
            <Box
              alt={`Slide ${index + 1}`}
              component="img"
              src={src}
              sx={{
                width: "100%",
                height: 450,
                objectFit: "fill",
                boxShadow: 3,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;

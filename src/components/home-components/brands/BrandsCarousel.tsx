"use client";

import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import { IBrand } from "@/type/serverTypes";

interface IBrandsCarouselProps {
  brands: IBrand[];
}

const animation = { duration: 8000, easing: (t: number) => t };

export default function BrandsCarousel({ brands }: IBrandsCarouselProps) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    range: { align: true },
    slides: { perView: 5, spacing: 5 },
    created(s) {
      s.moveToIdx(3, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
  });

  const handleMouseEnter = () => {
    slider.current?.animator.stop();
  };

  const handleMouseLeave = () => {
    slider.current?.moveToIdx(
      slider.current.track.details.abs + 3,
      true,
      animation
    );
  };

  return (
    <div
      ref={sliderRef}
      className="keen-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {brands.map((brand) => (
        <Link key={brand.titleEn} href={"/brand/" + brand.slug}>
          <Card className="w-36 h-44 keen-slider__slide border-none shadow-none">
            <CardContent className="flex aspect-square items-center justify-center">
              <img src={brand.logo} alt={brand.titleEn} />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

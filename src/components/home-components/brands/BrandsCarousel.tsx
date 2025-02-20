"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IBrand } from "@/type/serverTypes";

interface IBrandsCarouselProps {
  brands: IBrand[];
}

export function BrandsCarousel(brands: IBrandsCarouselProps) {
  return (
    <Carousel className="w-full max-w-sm" opts={{loop:true}}>
      <CarouselContent className="-ml-1">
        {brands.brands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="pl-1 md:basis-1/3 lg:basis-1/3 w-full h-full "
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={brand.logo} alt={brand.titleEn} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

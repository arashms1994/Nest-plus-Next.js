import ProductCard from "@/components/product-components/product-card/productCard";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/providers/CartProvider";
import React from "react";

const Cart = () => {
  const { items } = useCartStore((state) => state);

  return (
    <Card className="pt-3 flex justify-center items-center">
      <CardContent>
        {!items?.length ? (
          <div className="flex flex-col justify-center items-center">
            {" "}
            <h1 className="text-center text-lg font-semibold">
              سبد خرید خالی است
            </h1>
          </div>
        ) : (
          items.map((item) => (
            <ProductCard
              key={item.product.id}
              product={{ ...item.product, bestSeller: item.productSeller }}
              productSeller={item.productSeller}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Cart;

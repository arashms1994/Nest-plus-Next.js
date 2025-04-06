"use client";

import { IProduct, SellerInfo } from "@/type/serverTypes";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/providers/CartProvider";

type AddToCartButtonProps = {
  product: IProduct;
  productSeller: SellerInfo;
};

export const AddToCartButton = ({ product, productSeller }: AddToCartButtonProps) => {
  const items = useCartStore((state) => state.items);
  const incrementItemCount = useCartStore((state) => state.incrementItemCount);
  const decrementItemCount = useCartStore((state) => state.decrementItemCount);

  const existingItem = items.find(
    (item) =>
      item.productSeller.id === productSeller.id && item.product.id === product.id
  );
  const quantity = existingItem?.quantity || 0;

  const buttonStyles = "bg-black text-white flex items-center justify-center w-10";
  const buttonStyles1 = "bg-black text-white flex items-center justify-center w-full";

  return (
    <div className="flex gap-3 items-center justify-center">
      {quantity > 0 ? (
        <>
          <Button
            className={buttonStyles}
            onClick={() => decrementItemCount(productSeller.id, product.id)}
          >
            -
          </Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button
            className={buttonStyles}
            onClick={() => incrementItemCount({ product, productSeller })}
          >
            +
          </Button>
        </>
      ) : (
        <Button
          className={buttonStyles1}
          onClick={() => incrementItemCount({ product, productSeller })}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};
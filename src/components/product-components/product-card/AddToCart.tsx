"use client";

import { IProduct, SellerInfo } from "@/type/serverTypes";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/providers/CartProvider";

type AddToCartButtonProps = {
  product: IProduct;
  productSeller: SellerInfo;
};

export const AddToCartButton = ({
  product,
  productSeller,
}: AddToCartButtonProps) => {
  const { items, incrementItemCount, decrementItemCount } = useCartStore(
    (state) => ({
      items: state.items,
      incrementItemCount: state.incrementItemCount,
      decrementItemCount: state.decrementItemCount,
    })
  );

  const existingItem = items.find(
    (item) =>
      item.productSeller.id === productSeller.id &&
      item.product.id === product.id
  );

  const quantity = existingItem?.quantity || 0;

  return (
    <div className="flex items-center space-x-2">
      {quantity > 0 ? (
        <>
          <Button onClick={() => decrementItemCount(productSeller.id)}>
            -
          </Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button
            onClick={() => incrementItemCount({ product, productSeller })}
          >
            +
          </Button>
        </>
      ) : (
        <Button onClick={() => incrementItemCount({ product, productSeller })}>
          Add to Cart
        </Button>
      )}
    </div>
  );
};

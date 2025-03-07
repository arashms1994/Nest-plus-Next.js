"use client";

import { CartStore, createCartStore } from "@/store/cart";
import { createContext, useRef, useContext } from "react";
import type { ReactNode } from "react";
import { useStore } from "zustand";

export type CartStoreApi = ReturnType<typeof createCartStore>;

export const CartStoreContext = createContext<CartStoreApi | undefined>(
  undefined
);

export interface CartStoreProviderProps {
  children: ReactNode;
}

export const CartStoreProvider = ({ children }: CartStoreProviderProps) => {
  const storeRef = useRef<CartStoreApi | null>(null);

  if (!storeRef.current) {
    storeRef.current = createCartStore();
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be used within CartStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};

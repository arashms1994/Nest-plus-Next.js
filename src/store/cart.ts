import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { IProduct, SellerInfo } from "@/type/serverTypes";

type OrderItem = { product: IProduct; productSeller: SellerInfo };
type OrderItemWithQuantity = OrderItem & { quantity: number };

export type CartState = {
  items: OrderItemWithQuantity[];
};

export type CartActions = {
  decrementItemCount: (sellerId: string) => void;
  incrementItemCount: (orderItem: OrderItem) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  items: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(
    persist(
      (set) => ({
        ...initState,
        decrementItemCount: (sellerId) =>
          set((state) => decrement(state, sellerId)),
        incrementItemCount: (orderItem) =>
          set((state) => increment(state, orderItem)),
      }),
      {
        name: "cart-storage",
        storage: {
          getItem: (key) => {
            const storedValue = sessionStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : null;
          },
          setItem: (key, value) => {
            sessionStorage.setItem(key, JSON.stringify(value));
          },
          removeItem: (key) => {
            sessionStorage.removeItem(key);
          },
        },
      }
    )
  );
};

function increment(state: CartState, orderItem: OrderItem): CartState {
  const isExist = state.items.some(
    (item) =>
      item.productSeller.id === orderItem.productSeller.id &&
      item.product.id === orderItem.product.id
  );
  if (isExist) {
    return {
      ...state,
      items: state.items.map((item) =>
        item.productSeller.id === orderItem.productSeller.id &&
        item.product.id === orderItem.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  }
  return {
    ...state,
    items: [...state.items, { ...orderItem, quantity: 1 }],
  };
}

function decrement(state: CartState, sellerId: string): CartState {
  const item = state.items.find((item) => item.productSeller.id === sellerId);
  if (!item) return state;
  const shouldRemove = item.quantity <= 1;
  if (shouldRemove) {
    return {
      ...state,
      items: state.items.filter((item) => item.productSeller.id !== sellerId),
    };
  }
  return {
    ...state,
    items: state.items.map((item) =>
      item.productSeller.id === sellerId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  };
}

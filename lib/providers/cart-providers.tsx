"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ProductCard, WithImage } from "../types/product";

type CartType = {
  products: WithImage<ProductCard>[];
  setProducts: Dispatch<SetStateAction<WithImage<ProductCard>[]>>;
};

const CartContext = createContext<CartType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<WithImage<ProductCard>[]>([]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

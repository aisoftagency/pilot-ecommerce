"use client";

import { create } from "zustand";
import type { Product } from "../lib/products";

export type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  addItem: (product, quantity = 1) => {
    set((state) => {
      const index = state.items.findIndex((i) => i.id === product.id);
      if (index === -1) {
        return { items: [...state.items, { ...product, quantity }] };
      }
      const next = [...state.items];
      next[index] = { ...next[index], quantity: next[index].quantity + quantity };
      return { items: next };
    });
  },
  removeItem: (productId) => {
    set((state) => ({ items: state.items.filter((i) => i.id !== productId) }));
  },
  clear: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
}));



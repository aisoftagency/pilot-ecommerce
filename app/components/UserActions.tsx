"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cart";

export function UserActions() {
  const items = useCartStore(s => s.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const openCart = useCartStore(s => s.openCart);

  return (
    <button aria-label="Open cart" onClick={openCart} className="flex items-center relative">
      <ShoppingCart className="w-7 h-7 text-gray-700" />
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 px-1 flex items-center justify-center">
        {cartCount}
      </span>
    </button>
  );
} 
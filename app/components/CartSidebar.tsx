"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCartStore } from "../store/cart";

export function CartSidebar() {
  const items = useCartStore(s => s.items);
  const isOpen = useCartStore(s => s.isOpen);
  const closeCart = useCartStore(s => s.closeCart);
  const removeItem = useCartStore(s => s.removeItem);
  const clear = useCartStore(s => s.clear);

  const entries = items;
  const subtotal = entries.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl border-l transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button aria-label="Close cart" onClick={closeCart}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-9rem)]">
          {entries.length === 0 ? (
            <div className="text-sm text-gray-600">Your cart is empty.</div>
          ) : (
            entries.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-16 h-16 relative bg-gray-50">
                  <Image src={item.imageUrl} alt={item.name} fill sizes="64px" className="object-contain" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium line-clamp-1">{item.name}</div>
                  <div className="text-xs text-gray-600">Qty: {item.quantity}</div>
                </div>
                <div className="text-sm font-medium">${(item.price * item.quantity)}</div>
                <button
                  className="text-xs text-red-600 hover:underline ml-2"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-700">Subtotal</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-md text-sm" onClick={clear}>
              Clear
            </button>
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm">
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}



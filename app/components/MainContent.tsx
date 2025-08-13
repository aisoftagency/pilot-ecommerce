"use client";

import Link from "next/link";
import { products } from "../lib/products";
import { HeroCarousel } from "./HeroCarousel";
import Image from "next/image";
import { useCartStore } from "../store/cart";

export function MainContent() {
  const addItem = useCartStore(s => s.addItem);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero Carousel */}
      <HeroCarousel />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map(prod => (
          <div key={prod.id} className="border rounded-md bg-white p-4 shadow-sm flex flex-col">
            <Link href={'/products/' + prod.id} className="block">
              <Image src={prod.imageUrl} alt="Missing image" width={400} height={400} className="object-contain w-full h-64 bg-gray-50"/>
              <div className="mt-3 text-lg font-medium">{prod.name}</div>
            </Link>
            <div className="mt-1 text-gray-700">${prod.price}</div>
            <button
              className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
              onClick={() => addItem(prod, 1)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
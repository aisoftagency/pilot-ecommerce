"use client";

import Link from "next/link";
import { Product } from "../lib/products";
import { HeroCarousel } from "./HeroCarousel";
import Image from "next/image";
import { useCartStore } from "../store/cart";
import { useEffect, useState } from "react";

export function MainContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const addItem = useCartStore(s => s.addItem);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <HeroCarousel />
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          <p className="mt-2 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <HeroCarousel />
        <div className="text-center py-8">
          <p className="text-red-600">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero Carousel */}
      <HeroCarousel />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map(prod => (
          <div key={prod.id} className="border rounded-md bg-white p-4 flex flex-col">
            <Link href={'/products/' + prod.id} className="block">
              <Image 
                src={prod.imageUrl} 
                alt={prod.name} 
                width={400} 
                height={400} 
                className="object-contain w-full h-64 bg-gray-50"
              />
              <div className="mt-3 text-lg font-medium">{prod.name}</div>
            </Link>
            <div className="mt-1 text-gray-700 font-semibold">${prod.price}</div>
            <button
              className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
              onClick={() => addItem(prod, 1)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {products.length === 0 && !loading && !error && (
        <div className="text-center py-8">
          <p className="text-gray-600">No products found.</p>
        </div>
      )}
    </main>
  );
}

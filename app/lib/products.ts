export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
  description?: string;
};

// Fetch products from API
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products', {
      cache: 'no-store' // Always fetch fresh data
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Get product by ID (for individual product pages)
export async function getProductById(id: string): Promise<Product | undefined> {
  try {
    const response = await fetch(`/api/products/${id}`, {
      cache: 'no-store' // Always fetch fresh data
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return undefined;
      }
      throw new Error('Failed to fetch product');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return undefined;
  }
}

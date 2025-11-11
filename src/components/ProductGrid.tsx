import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "./ProductCard";
import { Loader2 } from "lucide-react";

interface ProductGridProps {
  title?: string;
  searchQuery?: string;
  limit?: number;
}

export const ProductGrid = ({ title = "Bestsellers", searchQuery, limit = 8 }: ProductGridProps) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(limit, searchQuery);
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [searchQuery, limit]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">{title}</h2>
          <p className="text-center text-muted-foreground">No products found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 tracking-wider">
          {title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From discovery to loyalty, these are your most-loved products, best sellers, and newest drops.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

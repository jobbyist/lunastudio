import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const defaultVariant = node.variants.edges[0]?.node;
    if (!defaultVariant) return;

    const cartItem = {
      product,
      variantId: defaultVariant.id,
      variantTitle: defaultVariant.title,
      price: defaultVariant.price,
      quantity: 1,
      selectedOptions: defaultVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: node.title,
      position: "top-center",
    });
  };

  const imageUrl = node.images.edges[0]?.node.url || "/placeholder.svg";
  const price = node.priceRange.minVariantPrice;

  return (
    <Link to={`/product/${node.handle}`} className="group">
      <div className="bg-background rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <div className="aspect-[3/4] bg-muted overflow-hidden">
          <img
            src={imageUrl}
            alt={node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-4 space-y-3">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {node.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-primary">
              {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
            </span>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-primary/90"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

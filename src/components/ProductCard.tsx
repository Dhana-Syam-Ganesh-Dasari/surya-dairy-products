import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, getItemQuantity, incrementQuantity, decrementQuantity } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const quantityInCart = getItemQuantity(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="card-product flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square bg-cream overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-cream-dark animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 badge-leaf">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="mb-4">
          <span className="text-xl font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-muted-foreground ml-2">
            {product.unit}
          </span>
        </div>

        {/* Quantity Controls / Add to Cart */}
        {quantityInCart > 0 ? (
          <div className="flex items-center justify-between bg-accent rounded-lg p-1">
            <button
              onClick={() => decrementQuantity(product.id)}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-semibold text-lg text-foreground min-w-[40px] text-center">
              {quantityInCart}
            </span>
            <button
              onClick={() => incrementQuantity(product.id)}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

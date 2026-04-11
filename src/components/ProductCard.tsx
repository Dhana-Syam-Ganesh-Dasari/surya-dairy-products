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
      <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-5">
        <h3 className="font-display font-semibold text-sm sm:text-lg text-foreground mb-0.5 sm:mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 line-clamp-2 flex-1 hidden sm:block">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="mb-2 sm:mb-4">
          <span className="text-base sm:text-xl font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground ml-1 sm:ml-2">
            {product.unit}
          </span>
        </div>

        {/* Quantity Controls / Add to Cart */}
        {quantityInCart > 0 ? (
          <div className="flex items-center justify-between bg-accent rounded-lg p-0.5 sm:p-1">
            <button
              onClick={() => decrementQuantity(product.id)}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <span className="font-semibold text-sm sm:text-lg text-foreground min-w-[30px] sm:min-w-[40px] text-center">
              {quantityInCart}
            </span>
            <button
              onClick={() => incrementQuantity(product.id)}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="btn-primary w-full flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-3"
          >
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

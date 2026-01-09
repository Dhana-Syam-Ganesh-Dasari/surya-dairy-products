import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedProduct, formatPrice } from "@/data/products";
import { businessInfo } from "@/data/businessInfo";
import { useCart } from "@/context/CartContext";

const HeroSection = () => {
  const featuredProduct = getFeaturedProduct();
  const { addToCart } = useCart();

  return (
    <section className="relative gradient-hero overflow-hidden">
      <div className="container-dairy py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <span className="badge-leaf mb-4 inline-block">
              🌿 100% Pure & Natural
            </span>
            <h1 className="section-heading mb-6 leading-tight">
              Fresh & Pure Dairy Products{" "}
              <span className="text-gradient-primary">
                Straight from Our Farm
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {businessInfo.tagline}. Experience the authentic taste of
              farm-fresh dairy, delivered to your doorstep with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/shop"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="btn-outline-primary inline-flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Right - Featured Product */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative max-w-md mx-auto lg:ml-auto">
              {/* Decorative circles */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-leaf/10 rounded-full blur-2xl" />

              {/* Product Card */}
              <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50 p-6">
                <div className="aspect-square rounded-2xl overflow-hidden bg-cream mb-4">
                  <img
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    className="w-full h-full object-cover animate-bounce-subtle"
                  />
                </div>

                <h3 className="font-display font-semibold text-xl mb-2">
                  {featuredProduct.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {featuredProduct.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(featuredProduct.price)}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      {featuredProduct.unit}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(featuredProduct)}
                    className="btn-primary py-2 px-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          className="absolute bottom-full w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48h1440V0C1200 32 960 48 720 48S240 32 0 0v48z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductsPreviewProps {
  limit?: number;
  showTitle?: boolean;
}

const ProductsPreview = ({ limit = 4, showTitle = true }: ProductsPreviewProps) => {
  const displayProducts = products.slice(0, limit);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-dairy">
        {showTitle && (
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 md:mb-12">
            <div>
              <span className="badge-leaf mb-4 inline-block">Our Products</span>
              <h2 className="section-heading">
                Fresh <span className="text-gradient-primary">Dairy Products</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="btn-outline-primary inline-flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {displayProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;

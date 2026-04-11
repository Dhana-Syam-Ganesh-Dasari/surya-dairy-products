import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="gradient-hero py-12 md:py-20">
        <div className="container-dairy text-center">
          <span className="badge-leaf mb-4 inline-block animate-fade-in">
            🛒 Shop Fresh
          </span>
          <h1 className="section-heading mb-4 animate-fade-in-up">
            Our <span className="text-gradient-primary">Dairy Products</span>
          </h1>
          <p className="section-subheading animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Browse our selection of farm-fresh dairy products. All products are made with love and 
            delivered fresh to your doorstep.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container-dairy">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Info */}
      <section className="py-12 md:py-16 bg-accent">
        <div className="container-dairy">
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border/50 text-center">
            <h2 className="font-display font-semibold text-2xl md:text-3xl mb-4">
              How to Order?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Simply add products to your cart, adjust quantities as needed, and click 
              "Order via WhatsApp" to send us your order directly. We'll confirm availability 
              and delivery details right away!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
                <span className="text-lg">1️⃣</span>
                <span>Add to Cart</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
                <span className="text-lg">2️⃣</span>
                <span>Review Order</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
                <span className="text-lg">3️⃣</span>
                <span>WhatsApp Order</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
                <span className="text-lg">4️⃣</span>
                <span>Fresh Delivery!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

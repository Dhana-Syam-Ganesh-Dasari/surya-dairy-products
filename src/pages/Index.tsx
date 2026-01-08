import HeroSection from "@/components/HeroSection";
import ProductsPreview from "@/components/ProductsPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import FarmFeatures from "@/components/FarmFeatures";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsPreview limit={4} />
      <WhyChooseUs />
      <FarmFeatures />
      <Testimonials />
    </div>
  );
};

export default Index;

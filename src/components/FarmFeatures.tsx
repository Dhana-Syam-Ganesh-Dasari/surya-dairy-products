import { Sparkles, Scissors, Package, Cog, LucideIcon } from "lucide-react";
import { farmFeatures } from "@/data/businessInfo";
import HeroFarmImage from "@/assets/hero-farm.jpg";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Scissors,
  Package,
  Cog,
};

const FarmFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background overflow-hidden">
      <div className="container-dairy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={HeroFarmImage}
                alt="Surya Dairy Farm"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  🌅 Our Beautiful Farm
                </span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block px-4 py-2 bg-background/10 rounded-full text-sm font-medium mb-4">
              What Makes Us Different
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 leading-tight">
              Modern Technology, <br />
              <span className="text-primary">Traditional Values</span>
            </h2>
            <p className="text-background/70 mb-8 text-lg">
              We combine cutting-edge dairy technology with time-honored traditions to bring you the 
              purest and freshest products possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {farmFeatures.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <div
                    key={feature.title}
                    className="p-4 rounded-xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors duration-300"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-background/60">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmFeatures;

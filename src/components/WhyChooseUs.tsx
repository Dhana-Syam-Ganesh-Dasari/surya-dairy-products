import { Award, Heart, Leaf, ShieldCheck, LucideIcon } from "lucide-react";
import { whyChooseUs } from "@/data/businessInfo";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Heart,
  Leaf,
  ShieldCheck,
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-dairy">
        <div className="text-center mb-12 md:mb-16">
          <span className="badge-leaf mb-4 inline-block">Why Choose Us</span>
          <h2 className="section-heading mb-4">
            Quality You Can <span className="text-gradient-primary">Trust</span>
          </h2>
          <p className="section-subheading">
            We take pride in delivering the finest dairy products with uncompromising quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="card-feature animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

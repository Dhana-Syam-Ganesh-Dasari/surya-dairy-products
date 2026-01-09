import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { businessInfo, whyChooseUs, farmFeatures } from "@/data/businessInfo";
import { Award, Heart, Leaf, ShieldCheck, Sparkles, Scissors, Package, Cog, LucideIcon } from "lucide-react";

const iconMapWhy: Record<string, LucideIcon> = {
  Award,
  Heart,
  Leaf,
  ShieldCheck,
};

const iconMapFarm: Record<string, LucideIcon> = {
  Sparkles,
  Scissors,
  Package,
  Cog,
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative gradient-hero py-12 md:py-20">
        <div className="container-dairy text-center">
          <span className="badge-leaf mb-4 inline-block animate-fade-in">
            🌿 Our Story
          </span>
          <h1 className="section-heading mb-4 animate-fade-in-up">
            About <span className="text-gradient-primary">{businessInfo.name}</span>
          </h1>
          <p className="section-subheading animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            A family tradition of quality dairy products, passed down through generations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-dairy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/hero-farm.jpg"
                  alt="Our Farm"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="badge-leaf mb-4 inline-block">Our Journey</span>
              <h2 className="section-heading text-3xl md:text-4xl mb-6">
                From Farm to <span className="text-gradient-primary">Your Table</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Kumari Dairy Milk started as a humble family farm with just a few cows and buffalos and 
                  a passion for quality. Today, we're proud to serve thousands of families with 
                  the freshest dairy products.
                </p>
                <p>
                  Our commitment to purity and quality has never wavered. Every product that 
                  leaves our farm is made with the same love and care that our grandparents 
                  instilled in us decades ago.
                </p>
                <p>
                  We believe in sustainable farming practices, happy animals, and bringing the 
                  authentic taste of farm-fresh dairy to every home.
                </p>
              </div>
              <Link
                to="/shop"
                className="btn-primary inline-flex items-center gap-2 mt-8"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container-dairy">
          <div className="text-center mb-12">
            <span className="badge-leaf mb-4 inline-block">Our Values</span>
            <h2 className="section-heading mb-4">
              What We <span className="text-gradient-primary">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMapWhy[item.icon];
              return (
                <div
                  key={item.title}
                  className="card-feature bg-card animate-fade-in-up"
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

      {/* Modern Equipment */}
      <section className="py-16 md:py-24">
        <div className="container-dairy">
          <div className="text-center mb-12">
            <span className="badge-leaf mb-4 inline-block">Our Technology</span>
            <h2 className="section-heading mb-4">
              Modern <span className="text-gradient-primary">Equipment</span>
            </h2>
            <p className="section-subheading">
              We invest in the best technology to ensure quality and hygiene at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {farmFeatures.map((feature, index) => {
              const IconComponent = iconMapFarm[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-dairy text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Ready to Taste the Difference?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Order now and experience the freshness of farm-direct dairy products.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

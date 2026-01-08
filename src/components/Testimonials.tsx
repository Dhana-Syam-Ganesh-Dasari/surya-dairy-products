import { Star } from "lucide-react";
import { testimonials } from "@/data/businessInfo";

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container-dairy">
        <div className="text-center mb-12 md:mb-16">
          <span className="badge-leaf mb-4 inline-block">Testimonials</span>
          <h2 className="section-heading mb-4">
            What Our <span className="text-gradient-primary">Customers Say</span>
          </h2>
          <p className="section-subheading">
            Don't just take our word for it - hear from our happy customers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 animate-fade-in-up hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Star } from "lucide-react";
import { testimonials } from "@/data/businessInfo";

const Testimonials = () => {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 gradient-section overflow-hidden">
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

        <div className="relative w-full overflow-hidden">
          <div className="testimonial-slider flex w-max gap-6 md:gap-8 hover:[animation-play-state:paused]">
            {repeatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[320px] md:w-[360px] flex-shrink-0 bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 animate-fade-in-up hover:shadow-lg transition-shadow duration-300"
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
      </div>

      <style>{`
        .testimonial-slider {
          animation: scrollTestimonials 30s linear infinite;
        }

        @keyframes scrollTestimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { getWhatsAppContactUrl } from "@/data/whatsappTemplate";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="gradient-hero py-12 md:py-20">
        <div className="container-dairy text-center">
          <span className="badge-leaf mb-4 inline-block animate-fade-in">
            📞 Get in Touch
          </span>
          <h1 className="section-heading mb-4 animate-fade-in-up">
            Contact <span className="text-gradient-primary">Us</span>
          </h1>
          <p className="section-subheading animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Have questions or want to place an order? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container-dairy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Details */}
            <div className="animate-fade-in-up">
              <h2 className="font-display font-semibold text-2xl md:text-3xl mb-8">
                Reach Out to Us
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${businessInfo.contact.phone.replace(/\s/g, "")}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {businessInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-leaf-light flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href={getWhatsAppContactUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${businessInfo.contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {businessInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      {businessInfo.address.street}<br />
                      {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: {businessInfo.workingHours.weekdays}<br />
                      Sat - Sun: {businessInfo.workingHours.weekends}
                    </p>
                    <p className="text-sm text-primary mt-1">{businessInfo.workingHours.note}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Map & CTA */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* Map placeholder */}
              <div className="bg-cream rounded-2xl h-64 md:h-80 flex items-center justify-center mb-8 border border-border/50">
                <div className="text-center p-6">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">Visit Our Farm</h3>
                  <p className="text-muted-foreground text-sm">
                    {businessInfo.address.street}, {businessInfo.address.city}
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8">
                <h3 className="font-display font-semibold text-xl mb-3">
                  Quick Order via WhatsApp
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  The fastest way to place an order! Just message us on WhatsApp and we'll 
                  take care of the rest.
                </p>
                <a
                  href={getWhatsAppContactUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container-dairy">
          <div className="text-center mb-12">
            <span className="badge-leaf mb-4 inline-block">FAQ</span>
            <h2 className="section-heading mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do I place an order?",
                a: "Simply add products to your cart and click 'Order via WhatsApp'. This will send us a message with your order details, and we'll confirm availability and delivery.",
              },
              {
                q: "What areas do you deliver to?",
                a: "We currently deliver to Kaikaluru and surrounding areas. Contact us for specific location availability.",
              },
              {
                q: "What are your delivery timings?",
                a: "We deliver fresh products every morning between 6 AM - 9 AM. Evening deliveries are available on request.",
              },
              {
                q: "How do I pay for my order?",
                a: "We accept cash on delivery, UPI payments, and bank transfers. Payment details will be shared when you place your order.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

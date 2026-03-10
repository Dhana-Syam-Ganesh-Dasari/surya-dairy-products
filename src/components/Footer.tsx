import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Milk, Instagram } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { getWhatsAppContactUrl } from "@/data/whatsappTemplate";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-dairy py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Milk className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold">{businessInfo.name}</h3>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Fresh & pure dairy products straight from our farm to your doorstep. 
              Quality you can trust, taste you'll love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              
              <li className="flex items-start gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>{businessInfo.contact.phone}</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>{businessInfo.contact.email}</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  {businessInfo.address.street}, {businessInfo.address.city}, {businessInfo.address.state}
                </span>
              </li>

              <li className="flex items-start gap-3 text-sm text-background/70">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p>Mon-Fri: {businessInfo.workingHours.weekdays}</p>
                  <p>Sat-Sun: {businessInfo.workingHours.weekends}</p>
                </div>
              </li>

              {/* Instagram */}
              <li className="flex items-start gap-3 text-sm text-background/70">
                <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Follow us on Instagram
                </a>
              </li>

            </ul>
          </div>

          {/* WhatsApp Order */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Order Now</h4>
            <p className="text-background/70 text-sm mb-4">
              Have questions or want to place an order? Reach out to us on WhatsApp!
            </p>
            <a
              href={getWhatsAppContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
            <p>Made with ❤️ for fresh dairy lovers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
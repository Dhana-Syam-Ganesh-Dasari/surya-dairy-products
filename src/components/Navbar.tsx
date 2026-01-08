import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Menu, X, Milk } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { businessInfo } from "@/data/businessInfo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <nav className="container-dairy">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Milk className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-display font-semibold text-foreground leading-tight">
                {businessInfo.name}
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Fresh from Farm</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary
                  ${isActive(link.path) ? "text-primary" : "text-foreground/70"}
                  after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 
                  after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300
                  hover:after:scale-x-100 hover:after:origin-left
                  ${isActive(link.path) ? "after:scale-x-100" : ""}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side - Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-accent transition-colors duration-300 group"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300
                    ${isActive(link.path) 
                      ? "bg-primary text-primary-foreground" 
                      : "text-foreground hover:bg-accent"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

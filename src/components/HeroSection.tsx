import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { useCart } from "@/context/CartContext";
import AllProductsImage from "@/assets/All Products.jpg";

const HeroSection: React.FC = () => {
  const { addToCart } = useCart(); // kept but not used (logic untouched)

  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* Single-file styles for milk-wave buttons (hover only) */}
      <style>{`
        .milk-wave-btn{
          position:relative;
          overflow:hidden;
          border-radius:999px;
          isolation:isolate;
        }

        .milk-wave-btn .mw-text{
          position:relative;
          z-index:3;
          display:inline-flex;
          align-items:center;
          gap:.5rem;
          white-space:nowrap;
          text-shadow: 0 1px 0 rgba(0,0,0,.12);
        }

        /* Hidden by default, visible ONLY on hover */
        .milk-wave-btn .mw-liquid{
          position:absolute;
          inset:0;
          z-index:1;
          opacity:0;
          transition:opacity .25s ease;
          pointer-events:none;
        }

        /* milk wave rising container */
        .milk-wave-btn .mw-blob-wrap{
          position:absolute;
          top:-84px;
          left:0;
          width:100%;
          height:220px;
          transition:top .55s ease;
        }

        /* wave blobs */
        .milk-wave-btn .mw-blob1,
        .milk-wave-btn .mw-blob2{
          position:absolute;
          width:220%;
          height:220%;
          left:50%;
          top:0;
          transform:translate(-50%,-70%);
          border-radius:45%;
        }

        .milk-wave-btn .mw-blob1{
          background:rgba(255,255,255,0.88);
          animation:milkRotate 6s linear infinite;
          opacity:.9;
        }

        .milk-wave-btn .mw-blob2{
          background:rgba(255,255,255,0.58);
          border-radius:40%;
          animation:milkRotate 11s linear infinite reverse;
          opacity:.75;
        }

        /* subtle milk sheen */
        .milk-wave-btn .mw-sheen{
          position:absolute;
          inset:-55%;
          background:radial-gradient(circle at 40% 30%,
            rgba(255,255,255,0.9) 0%,
            rgba(255,255,255,0.55) 18%,
            rgba(255,255,255,0.18) 42%,
            rgba(255,255,255,0) 66%);
          z-index:2;
          opacity:.7;
        }

        /* Hover-only appearance */
        .milk-wave-btn:hover .mw-liquid{
          opacity:1;
        }

        .milk-wave-btn:hover .mw-blob-wrap{
          top:-125px;
        }

        /* Ensure text is always crisp */
        .milk-wave-btn{
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes milkRotate{
          0%{transform:translate(-50%,-70%) rotate(0deg);}
          100%{transform:translate(-50%,-70%) rotate(360deg);}
        }

        /* Responsive: buttons full width on small screens */
        @media (max-width:640px){
          .milk-wave-btn{ width:100%; }
        }
      `}</style>

      <div className="container-dairy py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <span className="badge-leaf mb-4 inline-block">🌿 100% Pure & Natural</span>

            <h1 className="section-heading mb-6 leading-tight">
              Fresh & Pure Dairy Products{" "}
              <span className="text-gradient-primary">Straight from Our Farm</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {businessInfo.tagline}. Experience the authentic taste of farm-fresh
              dairy, delivered to your doorstep with care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/shop"
                className="milk-wave-btn btn-primary inline-flex items-center justify-center gap-2 px-7 py-3"
              >
                <span className="mw-liquid" aria-hidden="true">
                  <span className="mw-blob-wrap">
                    <span className="mw-blob1" />
                    <span className="mw-blob2" />
                  </span>
                  <span className="mw-sheen" />
                </span>

                <span className="mw-text">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                to="/about"
                className="milk-wave-btn btn-outline-primary inline-flex items-center justify-center px-7 py-3"
              >
                <span className="mw-liquid" aria-hidden="true">
                  <span className="mw-blob-wrap">
                    <span className="mw-blob1" />
                    <span className="mw-blob2" />
                  </span>
                  <span className="mw-sheen" />
                </span>

                <span className="mw-text">Learn About Us</span>
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-leaf/10 rounded-full blur-2xl" />

              <div className="relative rounded-3xl shadow-xl overflow-hidden border border-border/50 group animate-bounce-subtle">
                <img
                  src={AllProductsImage}
                  alt="All Products"
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          className="absolute bottom-full w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48h1440V0C1200 32 960 48 720 48S240 32 0 0v48z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
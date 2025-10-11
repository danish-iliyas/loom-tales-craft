import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/collection", label: "Collection" },
    { path: "/about", label: "About Us" },
    { path: "/faqs", label: "FAQs" },
    { path: "/contact", label: "Contact" },
  ];

  const whatsappNumber = "+911234567890";

  const isHomePage = location.pathname === "/";

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? "bg-transparent" 
        : "bg-brown/95 backdrop-blur-sm border-b border-brown-light/20"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <h1 className={`font-display text-3xl font-bold transition-colors group-hover:text-white/80 ${
              isHomePage ? "text-white drop-shadow-lg" : "text-accent"
            }`}>
              Loom Tales
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-body font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? isHomePage 
                      ? "bg-white/20 text-white backdrop-blur-sm" 
                      : "bg-primary text-primary-foreground"
                    : isHomePage
                    ? "text-white hover:text-white/80 hover:bg-white/10 backdrop-blur-sm drop-shadow-lg"
                    : "text-accent hover:text-accent-dark hover:bg-brown-light/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className={`${
                isHomePage
                  ? "border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-brown drop-shadow-lg"
                  : "border-accent text-accent hover:bg-accent hover:text-brown"
              }`}
            >
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button asChild className={`${
              isHomePage 
                ? "bg-white hover:bg-white/90 text-brown drop-shadow-lg"
                : "bg-primary hover:bg-primary-dark"
            }`}>
              <Link to="/book-appointment">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isHomePage 
                ? "text-white hover:text-white/80 drop-shadow-lg"
                : "text-accent hover:text-accent-dark"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md font-body font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-accent hover:bg-brown-light/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-brown w-full"
                >
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary-dark w-full">
                  <Link to="/book-appointment" onClick={() => setIsOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Search,
  ShoppingCart,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Your 7 navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/collection", label: "Collection" },
    { path: "/about", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/faqs", label: "FAQs" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-24 relative">
          
          {/* Left: Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Empty div on the left for desktop to balance the layout */}
          <div className="hidden lg:flex" />

          {/* Center: Logo & Nav (Desktop) */}
          <div className="hidden lg:flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/" className="flex items-center space-x-2 group">
             <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-800 tracking-wider">
  THE QALEENKAAR
</h1>

            </Link>
            <nav className="flex items-center space-x-6 mt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    font-serif text-sm uppercase tracking-widest transition-colors
                    ${isActive(link.path) ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: Logo (Mobile) */}
          <div className="lg:hidden flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <Link to="/">
                <h1 className="font-serif text-2xl font-medium text-gray-800 tracking-wider">
                  THE QALEENKAAR
                </h1>
             </Link>
          </div>

          {/* ✅ MOVED: Right Icons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-5">
            <button className="text-gray-700 hover:text-gray-900" aria-label="My Account">
              <User className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative text-gray-700 hover:text-gray-900" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
                0
              </span>
            </Link>
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="font-serif text-sm mr-1">INR</span>
              <span className="font-serif text-lg">₹</span>
            </button>
          </div>

           {/* Right: Mobile Icons (Cart) */}
           <div className="lg:hidden">
             <Link to="/cart" className="relative text-gray-700 hover:text-gray-900 p-2">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
                  0
                </span>
              </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="lg:hidden py-4 bg-white border-t border-gray-200 shadow-lg animate-fade-in-down">
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-md font-serif uppercase tracking-widest ${
                  isActive(link.path)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile menu icons */}
            <div className="flex justify-around pt-4 border-t border-gray-200 mt-2">
              <Link to="/profile" onClick={() => setIsOpen(false)} className="flex flex-col items-center text-gray-700 hover:text-gray-900">
                <User className="w-5 h-5" />
                <span className="text-xs mt-1">Profile</span>
              </Link>
              <button className="flex flex-col items-center text-gray-700 hover:text-gray-900">
                <Search className="w-5 h-5" />
                <span className="text-xs mt-1">Search</span>
              </button>
              <button className="flex flex-col items-center text-gray-700 hover:text-gray-900">
                <span className="font-serif text-lg">₹</span>
                <span className="text-xs mt-1">INR</span>
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
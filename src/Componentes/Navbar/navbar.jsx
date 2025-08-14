import Logo from "../../assets/logo1.png";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import Image1 from "../../assets/9.jpeg";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`shadow-lg sticky top-0 z-50 text-xl transparent
    ${
      isScrolled
        ? "shadow-lg bg-white/30 backdrop-blur-md border border-white/40"
        : "bg-transparent"
    }
  `}
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between py-4 relative">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Amber Logo"
            className="h-16 md:h-20 lg:h-24"
          />
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 rounded-2xl transition-all duration-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium text-sm lg:text-base hover:text-white transition-colors ${
              isActive
                ? "text-sky-800 border-b-2 border-sky-700"
                : "text-sky-800 border-b-2 border-transparent"
            }`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium text-sm lg:text-base hover:text-white transition-colors ${
              isActive
                ? "text-sky-800 border-b-2 border-sky-900"
                : "text-sky-800 border-b-2 border-transparent"
            }`
          }
        >
          ABOUT US
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `font-medium text-sm lg:text-base hover:text-white transition-colors ${
              isActive
                ? "text-sky-800 border-b-2 border-sky-900"
                : "text-sky-800 border-b-2 border-transparent"
            }`
          }
        >
          PRODUCTS
        </NavLink>
        <NavLink
          to="/partner"
          className={({ isActive }) =>
            `font-medium text-sm lg:text-base hover:text-white transition-colors ${
              isActive
                ? "text-sky-800 border-b-2 border-sky-900"
                : "text-sky-800 border-b-2 border-transparent"
            }`
          }
        >
          PARTNER WITH US
        </NavLink>
      </div>

      {/* Right: Contact Us */}
      <div className="hidden md:block">
        <NavLink
          to="/contact"
          className="px-4 py-2 bg-sky-800 text-white rounded-full hover:bg-sky-900 transition-colors"
        >
          CONTACT US
        </NavLink>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden absolute right-4 top-4">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isMobileMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
          <Link to="/" className="block px-3 py-3" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
          <Link to="/about" className="block px-3 py-3" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
          <Link to="/product" className="block px-3 py-3" onClick={() => setIsMobileMenuOpen(false)}>PRODUCTS</Link>
          <Link to="/partner" className="block px-3 py-3" onClick={() => setIsMobileMenuOpen(false)}>PARTNER WITH US</Link>
          <Link to="/contact" className="block px-3 py-3" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
        </div>
      </div>
    )}
  </div>
</nav>

  );
};

export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Menu, X, Cake } from "lucide-react";
import "../assets/style.css"; // external stylesheet for brand styles

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const navLinks = ["Home", "About", "Contact"];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          {/* Optional subtle icon, uses existing CSS color if defined */}
          <Cake className="h-6 w-6 text-current" />

          {/* Brand text, styled with your external CSS */}
          <span className="brand-logo">
            <span className="brand-logo2">EveryThing</span> By BaliQuity
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="nav-link"
            >
              {link}
            </a>
          ))}
          <button onClick={scrollToContact} className="btn-primary">
            Place an Order
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden icon-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="mobile-menu animate-slide-down"
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 icon-btn"
          >
            <X className="h-7 w-7" />
          </button>

          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="nav-link"
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => {
              scrollToContact();
              setMenuOpen(false);
            }}
            className="btn-primary mt-8 text-2xl"
          >
            Place an Order
          </button>
        </div>
      )}
    </header>
  );
}

/* =============================================================
   NAVBAR — Sara Life Insurance
   Design: Sticky, transparent-to-white on scroll, mobile hamburger
   ============================================================= */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";
  const navBg = scrolled || !isHome ? "bg-white shadow-md" : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-[#1a365d]" : "text-white";
  const logoColor = scrolled || !isHome ? "text-[#1a365d]" : "text-white";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2 font-bold text-lg ${logoColor} transition-colors`}>
            <div className="w-8 h-8 bg-[#d69e2e] rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-['Playfair_Display'] font-bold">Sara Life Insurance</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors font-['Inter'] ${
                    isActive
                      ? "text-[#d69e2e] font-semibold"
                      : `${textColor} hover:text-[#d69e2e]`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/quote" className="btn-gold ml-4 text-sm py-2 px-5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-md ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav lg:hidden bg-white border-t border-gray-100 ${mobileOpen ? "open" : ""}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#d69e2e] font-semibold bg-blue-50"
                    : "text-[#1a365d] hover:text-[#d69e2e] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/quote" className="btn-gold mt-2 text-center text-sm">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}

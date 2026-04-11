/* =============================================================
   FOOTER — Sara Life Insurance
   Design: Dark navy, 4-column layout, gold accents
   ============================================================= */
import { Link } from "wouter";
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2040] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#d69e2e] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-['Playfair_Display'] font-bold text-lg">Sara Life Insurance</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Independent life insurance agent helping families protect what matters most. Free consultations, no-obligation quotes, and personalized coverage plans.
            </p>
            <p className="text-gray-400 text-xs">
              License #: <span className="text-gray-300">[YOUR LICENSE NUMBER]</span><br />
              Licensed in <span className="text-gray-300">[YOUR STATE]</span>
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d69e2e] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] font-semibold text-base mb-5 text-[#d69e2e]">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Me", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Get a Quote", href: "/quote" },
                { label: "Book a Call", href: "/book" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#d69e2e] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h4 className="font-['Playfair_Display'] font-semibold text-base mb-5 text-[#d69e2e]">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Blog & Articles", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Term Life Insurance", href: "/services#term" },
                { label: "Whole Life Insurance", href: "/services#whole" },
                { label: "Final Expense", href: "/services#final" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#d69e2e] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] font-semibold text-base mb-5 text-[#d69e2e]">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d69e2e] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">[YOUR PHONE NUMBER]</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#d69e2e] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:sara@sarainsurance.com" className="text-gray-300 text-sm hover:text-[#d69e2e] transition-colors">
                    sara@sarainsurance.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d69e2e] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">[YOUR CITY], [YOUR STATE]</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#d69e2e] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon–Fri: 9am – 6pm</p>
                  <p className="text-gray-400 text-xs">Sat: 10am – 2pm</p>
                </div>
              </li>
            </ul>
            <Link href="/book" className="btn-gold mt-6 text-sm py-2.5 w-full justify-center">
              Book a Free Call
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © {year} Sara Life Insurance. All rights reserved. | Licensed Independent Agent
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-gray-400 hover:text-[#d69e2e] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#d69e2e] text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

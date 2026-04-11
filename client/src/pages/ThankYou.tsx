/* =============================================================
   THANK YOU PAGE — Sara Life Insurance
   Post-form submission confirmation
   ============================================================= */
import { Link } from "wouter";
import { CheckCircle, Calendar, Mail, Video, Home, Facebook, Twitter, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20 flex-1 bg-[#f7f8fc] flex items-center">
        <div className="container mx-auto px-4 lg:px-8 py-20 max-w-2xl text-center">
          {/* Checkmark */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-bold text-[#1a365d] mb-3">
            Thanks! We Received Your Request.
          </h1>
          <p className="text-gray-600 leading-relaxed mb-10">
            I'll be in touch within 1 business day. In the meantime, here's what happens next:
          </p>

          {/* Steps */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 text-left">
            <div className="space-y-6">
              {[
                { icon: Mail, step: "1", title: "Check Your Email", desc: "You'll receive a confirmation email shortly with a summary of your request." },
                { icon: CheckCircle, step: "2", title: "Sara Reviews Your Info", desc: "Sara will review your information and prepare personalized coverage options for you." },
                { icon: Video, step: "3", title: "Connect on Zoom", desc: "You'll connect with Sara on a free Zoom call to review your options and finalize your coverage." },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a365d] flex items-center justify-center flex-shrink-0 text-[#d69e2e] font-bold text-sm">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a365d] text-sm mb-0.5">{s.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link href="/book" className="btn-gold">
              <Calendar className="w-5 h-5" />
              Book a Call Now
            </Link>
            <Link href="/" className="btn-navy">
              <Home className="w-5 h-5" />
              Return to Homepage
            </Link>
          </div>

          {/* Social Share */}
          <div>
            <p className="text-gray-400 text-sm mb-3">Know someone who needs life insurance? Share Sara's website:</p>
            <div className="flex justify-center gap-3">
              {[
                { icon: Facebook, label: "Share on Facebook", color: "bg-blue-600" },
                { icon: Twitter, label: "Share on Twitter", color: "bg-sky-500" },
                { icon: Linkedin, label: "Share on LinkedIn", color: "bg-blue-700" },
              ].map(({ icon: Icon, label, color }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center hover:opacity-80 transition-opacity`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

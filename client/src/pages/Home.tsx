/* =============================================================
   HOMEPAGE — Sara Life Insurance
   Design: Corporate Modernism meets Warm Trust
   Sections: Hero, Trust Bar, Why Insurance, Services, How It Works,
             Testimonials, Final CTA
   ============================================================= */
import { Link } from "wouter";
import { Shield, TrendingUp, Heart, Clock, CheckCircle, Star, ArrowRight, Phone, Calendar, Users, Award, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663368367743/8QihdGFBc98MfQRykrPuzF/hero-family-iramqCsawRycAE2HLBEsjE.webp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f2040 0%, #1a365d 50%, #2b6cb0 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2040]/90 via-[#1a365d]/70 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <span className="section-label">Licensed Independent Agent</span>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Protect Your<br />
              <span className="text-[#d69e2e]">Family's Future</span><br />
              Today
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              Get personalized life insurance coverage from a licensed independent agent. Free consultation, no-obligation quotes, and plans tailored to your family's needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/quote" className="btn-gold text-base px-8 py-3.5">
                Get Free Quote
              </Link>
              <Link href="/book" className="btn-outline-white text-base px-8 py-3.5">
                <Calendar className="w-5 h-5" />
                Book a Free Call
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {["100% Free Consultation", "No Medical Exam Options", "Multiple A-Rated Carriers"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#d69e2e] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Award, label: "Licensed Agent", sub: "State Certified" },
              { icon: Shield, label: "A-Rated Carriers", sub: "Top Insurers" },
              { icon: FileText, label: "No-Obligation Quotes", sub: "100% Free" },
              { icon: Users, label: "Personalized Plans", sub: "Tailored to You" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#2b6cb0]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1a365d] text-sm leading-tight">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LIFE INSURANCE MATTERS ── */}
      <section className="py-20 bg-[#f7f8fc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Why It Matters</span>
            <h2 className="section-title">Life Insurance Protects<br />What You've Built</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Life insurance isn't just a policy — it's a promise to your family that they'll be taken care of, no matter what happens.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Protect Your Loved Ones",
                desc: "Ensure your spouse, children, and dependents are financially secure if something happens to you. Replace lost income and cover everyday expenses.",
                color: "bg-red-50",
                iconColor: "text-red-500",
              },
              {
                icon: Shield,
                title: "Cover Major Debts",
                desc: "Pay off your mortgage, car loans, and other debts so your family isn't left struggling. Keep the home they grew up in.",
                color: "bg-blue-50",
                iconColor: "text-[#2b6cb0]",
              },
              {
                icon: TrendingUp,
                title: "Build Long-Term Wealth",
                desc: "Whole life policies build cash value over time, creating a financial asset you can borrow against or use for retirement.",
                color: "bg-amber-50",
                iconColor: "text-[#d69e2e]",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover">
                <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-5`}>
                  <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Coverage Options</span>
            <h2 className="section-title">Insurance Plans for Every Stage of Life</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Term Life Insurance",
                emoji: "🛡️",
                price: "From ~$15/mo",
                desc: "Affordable coverage for a set period — 10, 20, or 30 years. Perfect for young families, homeowners, and income replacement.",
                features: ["$100K–$2M+ coverage", "10–30 year terms", "Lowest monthly cost", "Simple approval process"],
                href: "/services#term",
                highlight: false,
              },
              {
                title: "Whole Life Insurance",
                emoji: "🏦",
                price: "From ~$50/mo",
                desc: "Lifetime coverage that never expires, with a cash value component that grows over time. A financial asset and protection in one.",
                features: ["Lifetime coverage", "Cash value growth", "Fixed premiums forever", "Tax-advantaged savings"],
                href: "/services#whole",
                highlight: true,
              },
              {
                title: "Final Expense Insurance",
                emoji: "🌿",
                price: "From ~$20/mo",
                desc: "Designed for seniors ages 50–85. Covers funeral costs and end-of-life expenses. No medical exam required.",
                features: ["$5K–$25K coverage", "No medical exam", "Guaranteed acceptance options", "Ages 50–85"],
                href: "/services#final",
                highlight: false,
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className={`rounded-xl overflow-hidden border transition-all duration-200 card-hover ${
                  svc.highlight
                    ? "border-[#d69e2e] shadow-lg ring-2 ring-[#d69e2e]/20"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                {svc.highlight && (
                  <div className="bg-[#d69e2e] text-[#1a365d] text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <div className="p-7">
                  <div className="text-3xl mb-3">{svc.emoji}</div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-1">{svc.title}</h3>
                  <p className="text-[#d69e2e] font-semibold text-sm mb-3">{svc.price}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#2b6cb0] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-md font-semibold text-sm transition-colors ${
                      svc.highlight
                        ? "bg-[#d69e2e] text-[#1a365d] hover:bg-[#b7851f]"
                        : "bg-[#1a365d] text-white hover:bg-[#0f2040]"
                    }`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-navy inline-flex">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-[#1a365d]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title-white">Getting Covered Is Easier<br />Than You Think</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: FileText, title: "Get a Free Quote", desc: "Fill out our 2-minute quote form to see estimated rates based on your age, health, and coverage needs." },
              { step: "02", icon: Calendar, title: "Book a Zoom Call", desc: "Schedule a free 20–30 minute consultation at a time that works for you. No office visit required." },
              { step: "03", icon: Users, title: "Review Your Options", desc: "Sara compares rates from multiple A-rated carriers and presents the best options for your situation." },
              { step: "04", icon: CheckCircle, title: "Get Covered", desc: "Choose your plan, complete the application, and get your coverage in place — often within days." },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="text-[#d69e2e] font-['Playfair_Display'] font-bold text-5xl leading-none mb-4 opacity-60">
                  {s.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-[#d69e2e]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/quote" className="btn-gold text-base px-8 py-3.5">
              Start with a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-[#f7f8fc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">Families Who Found Peace of Mind</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael & Jennifer T.",
                location: "Austin, TX",
                initials: "MJ",
                text: "Sara made the whole process so easy. We got term life coverage for both of us in under a week. She explained everything clearly and never pressured us. Highly recommend!",
                plan: "Term Life — $500K",
              },
              {
                name: "Robert K.",
                location: "Chicago, IL",
                initials: "RK",
                text: "I was skeptical at first, but Sara's Zoom consultation was incredibly helpful. She compared rates from 5 different carriers and saved me over $40/month vs. what I was quoted elsewhere.",
                plan: "Whole Life — $250K",
              },
              {
                name: "Dorothy M.",
                location: "Phoenix, AZ",
                initials: "DM",
                text: "At 72, I thought I couldn't get affordable coverage. Sara found me a final expense policy that fits my budget perfectly. The application was simple and no medical exam was needed.",
                plan: "Final Expense — $15K",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 card-hover">
                <div className="stars mb-4">★★★★★</div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1a365d] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a365d] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location} · {t.plan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-[#0f2040] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #d69e2e 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="section-label">Take the First Step</span>
          <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Family?
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Get a free, no-obligation quote in minutes. Or book a Zoom call with Sara to discuss your options — it's completely free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-gold text-base px-8 py-3.5">
              Get My Free Quote
            </Link>
            <Link href="/book" className="btn-outline-white text-base px-8 py-3.5">
              <Phone className="w-5 h-5" />
              Book a Free Call
            </Link>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            No spam. No pressure. Just honest advice.
          </p>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}

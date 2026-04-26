/* =============================================================
   SERVICES PAGE — Sara Siblini | Primerica Life Insurance Company of Canada
   Sections: Term Life, Financial Needs Analysis, Family Income Protection
   Canadian context: Ontario, FSRA, Primerica Canada
   NOTE: Only products Sara offers are shown. Whole Life, Final Expense,
         Disability, and Critical Illness are NOT offered and must not appear.
   ============================================================= */
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { CheckCircle, XCircle, ArrowRight, BarChart2, Home as HomeIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";

const DISCLAIMER = "Life insurance products are offered through Primerica Life Insurance Company of Canada. Coverage is subject to underwriting approval. This website is for informational purposes only and does not constitute a binding quote or offer of coverage. Rates vary based on age, health, and coverage amount.";

export default function Services() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader
          title="Life Insurance Services"
          subtitle="Explore your coverage options through Primerica Life Insurance Company of Canada. Every plan is explained clearly so you can make a confident decision."
          breadcrumbs={[{ label: "Services" }]}
        />

        {/* Anchor Nav */}
        <div className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex gap-0 overflow-x-auto">
              {[
                { label: "Term Life", href: "#term" },
                { label: "Financial Needs Analysis", href: "#fna" },
                { label: "Family Income Protection", href: "#fip" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-5 py-4 text-sm font-semibold text-gray-600 hover:text-[#1a365d] border-b-2 border-transparent hover:border-[#d69e2e] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── TERM LIFE ── */}
        <section id="term" className="py-20 bg-white scroll-mt-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-label">Most Affordable</span>
                <h2 className="section-title">Term Life Insurance</h2>
                <div className="gold-divider" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Term life insurance provides coverage for a specific period — typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive a tax-free death benefit. It's the most straightforward and affordable type of life insurance available through Primerica Canada.
                </p>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1a365d] mb-3">Who It's For</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Term life is ideal for young families, homeowners with a mortgage, parents with young children, and anyone who needs substantial coverage at the lowest possible cost. It's designed to replace your income during your peak earning years.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Coverage Amount", value: "$100K – $2M+" },
                    { label: "Term Lengths", value: "10, 15, 20, 25, 30 years" },
                    { label: "Starting Price", value: "Rates vary — get a free quote" },
                    { label: "Medical Exam", value: "Sometimes required" },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#f7f8fc] rounded-lg p-4">
                      <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                      <p className="font-semibold text-[#1a365d] text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-[#1a365d] text-sm mb-2 flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> Pros</h4>
                    <ul className="space-y-1.5">
                      {["Lowest monthly premiums", "Simple and easy to understand", "High coverage amounts available", "Convertible to permanent coverage"].map(p => (
                        <li key={p} className="text-sm text-gray-600 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d] text-sm mb-2 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400" /> Cons</h4>
                    <ul className="space-y-1.5">
                      {["Coverage ends at term expiration", "No cash value accumulation", "Premiums increase at renewal", "May need medical exam"].map(c => (
                        <li key={c} className="text-sm text-gray-600 flex items-start gap-1.5"><span className="text-red-400 mt-0.5">✗</span>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href="/quote" className="btn-gold">Get a Term Life Quote <ArrowRight className="w-4 h-4" /></Link>
              </div>
              <div className="bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] rounded-2xl p-8 text-white">
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">Is Term Life Right for You?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">You may be a great fit for term life if you:</p>
                <ul className="space-y-3">
                  {[
                    "Have a mortgage or large debts",
                    "Have young children who depend on your income",
                    "Want maximum coverage at the lowest cost",
                    "Need coverage for a specific period (e.g., until kids are grown)",
                    "Are between ages 20–55",
                    "Want simple, straightforward coverage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-blue-100">
                      <CheckCircle className="w-4 h-4 text-[#d69e2e] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-blue-200 text-xs">Rates vary based on age, health, and coverage amount. Book a free consultation for a personalised quote.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINANCIAL NEEDS ANALYSIS ── */}
        <section id="fna" className="py-20 bg-[#f7f8fc] scroll-mt-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="bg-gradient-to-br from-[#d69e2e] to-[#b7851f] rounded-2xl p-8 text-white order-2 lg:order-1">
                <BarChart2 className="w-10 h-10 text-white/80 mb-4" />
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">What the FNA Covers</h3>
                <ul className="space-y-3">
                  {[
                    "Your current income and expenses",
                    "Outstanding debts and liabilities",
                    "Mortgage and housing costs",
                    "Children's education funding needs",
                    "Existing coverage gaps",
                    "Recommended coverage amount",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-amber-50">
                      <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/30">
                  <p className="text-amber-100 font-semibold text-sm mb-1">Cost to You</p>
                  <p className="text-white text-2xl font-bold">100% Free</p>
                  <p className="text-amber-200 text-xs mt-1">No obligation. No pressure. Just honest advice.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="section-label">Complimentary Service</span>
                <h2 className="section-title">Financial Needs Analysis</h2>
                <div className="gold-divider" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  A Financial Needs Analysis (FNA) is a thorough, personalised review of your family's financial situation. It helps determine the right type and amount of life insurance coverage so your family is fully protected — without over-insuring or under-insuring.
                </p>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1a365d] mb-3">How It Works</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  The FNA is conducted during your free Zoom consultation. Sara walks you through a structured analysis of your income, debts, dependants, and goals. At the end, you'll have a clear picture of exactly how much coverage your family needs — and why.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Duration", value: "20–30 minutes" },
                    { label: "Format", value: "Zoom video call" },
                    { label: "Cost", value: "100% Free" },
                    { label: "Obligation", value: "None" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-4 border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                      <p className="font-semibold text-[#1a365d] text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/book" className="btn-gold">Book Your Free FNA <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAMILY INCOME PROTECTION ── */}
        <section id="fip" className="py-20 bg-white scroll-mt-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-label">Protecting What Matters Most</span>
                <h2 className="section-title">Family Income Protection</h2>
                <div className="gold-divider" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Family Income Protection planning ensures that if you were no longer here, your family could maintain their standard of living. It goes beyond a simple death benefit — it's a comprehensive plan to replace your income, cover your mortgage, and fund your children's future.
                </p>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1a365d] mb-3">What It Covers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Using the Primerica approach, Sara helps you calculate the exact coverage needed to replace your income for the years your family would need it most — typically until your youngest child finishes school or your mortgage is paid off.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Income Replacement", value: "Years of income protected" },
                    { label: "Mortgage Protection", value: "Full balance covered" },
                    { label: "Education Funding", value: "Per-child planning" },
                    { label: "Debt Coverage", value: "All major liabilities" },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#f7f8fc] rounded-lg p-4">
                      <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                      <p className="font-semibold text-[#1a365d] text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/book" className="btn-gold">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              </div>
              <div className="bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] rounded-2xl p-8 text-white">
                <HomeIcon className="w-10 h-10 text-[#d69e2e] mb-4" />
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">Is Family Income Protection Right for You?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">This planning approach is especially important if you:</p>
                <ul className="space-y-3">
                  {[
                    "Have a spouse or partner who depends on your income",
                    "Have children at home",
                    "Carry a mortgage or significant debts",
                    "Are the primary or sole income earner",
                    "Want your family to stay in their home",
                    "Want to fund your children's education",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-blue-100">
                      <CheckCircle className="w-4 h-4 text-[#d69e2e] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ── */}
        <section className="py-10 bg-[#f7f8fc]">
          <div className="container mx-auto px-4 lg:px-8">
            <p className="text-gray-500 text-xs leading-relaxed text-center max-w-3xl mx-auto border border-gray-200 rounded-lg p-5 bg-white">
              {DISCLAIMER}
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-[#1a365d]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-4">Not Sure Which Option Is Right for You?</h2>
            <p className="text-blue-200 max-w-lg mx-auto mb-8 leading-relaxed">
              Let Sara walk you through a free Financial Needs Analysis — no pressure, no obligation, just honest advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote" className="btn-gold">Get a Free Quote</Link>
              <Link href="/book" className="btn-outline-white">Book a Free Consultation</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

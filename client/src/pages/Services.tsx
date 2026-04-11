/* =============================================================
   SERVICES PAGE — Sara Life Insurance
   Sections: Term Life, Whole Life, Final Expense, Comparison Table
   ============================================================= */
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";

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
          subtitle="Explore your coverage options. Every plan is explained clearly so you can make a confident decision."
          breadcrumbs={[{ label: "Services" }]}
        />

        {/* Anchor Nav */}
        <div className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex gap-0 overflow-x-auto">
              {[
                { label: "Term Life", href: "#term" },
                { label: "Whole Life", href: "#whole" },
                { label: "Final Expense", href: "#final" },
                { label: "Compare Plans", href: "#compare" },
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
                  Term life insurance provides coverage for a specific period — typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive a tax-free death benefit. It's the most straightforward and affordable type of life insurance.
                </p>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1a365d] mb-3">Who It's For</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Term life is ideal for young families, homeowners with a mortgage, parents with young children, and anyone who needs substantial coverage at the lowest possible cost. It's designed to replace your income during your peak earning years.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Coverage Amount", value: "$100K – $2M+" },
                    { label: "Term Lengths", value: "10, 15, 20, 25, 30 years" },
                    { label: "Starting Price", value: "~$15–$30/month" },
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
                  <p className="text-[#d69e2e] font-semibold text-sm mb-1">Example Rate</p>
                  <p className="text-white text-2xl font-bold">~$18/month</p>
                  <p className="text-blue-200 text-xs mt-1">Healthy 30-year-old, $500K, 20-year term</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHOLE LIFE ── */}
        <section id="whole" className="py-20 bg-[#f7f8fc] scroll-mt-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="bg-gradient-to-br from-[#d69e2e] to-[#b7851f] rounded-2xl p-8 text-white order-2 lg:order-1">
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">Is Whole Life Right for You?</h3>
                <p className="text-amber-100 text-sm leading-relaxed mb-6">Whole life may be the right choice if you:</p>
                <ul className="space-y-3">
                  {[
                    "Want lifetime coverage that never expires",
                    "Want to build tax-advantaged cash value",
                    "Have a lifelong dependent (e.g., special needs child)",
                    "Want to leave a guaranteed inheritance",
                    "Are looking for estate planning tools",
                    "Want fixed premiums that never increase",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-amber-50">
                      <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/30">
                  <p className="text-amber-100 font-semibold text-sm mb-1">Example Rate</p>
                  <p className="text-white text-2xl font-bold">~$65/month</p>
                  <p className="text-amber-200 text-xs mt-1">Healthy 35-year-old, $100K whole life policy</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="section-label">Lifetime Coverage</span>
                <h2 className="section-title">Whole Life Insurance</h2>
                <div className="gold-divider" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whole life insurance provides permanent coverage that never expires, as long as premiums are paid. It also builds cash value over time — a savings component you can borrow against or withdraw from during your lifetime.
                </p>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1a365d] mb-3">How Cash Value Works</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  A portion of each premium payment goes into a cash value account that grows at a guaranteed rate. Over time, this becomes a significant financial asset. You can borrow against it tax-free, use it to pay premiums, or withdraw it in retirement.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Coverage Amount", value: "$25K – $1M+" },
                    { label: "Coverage Duration", value: "Lifetime (permanent)" },
                    { label: "Starting Price", value: "~$50–$100/month" },
                    { label: "Cash Value", value: "Yes — grows over time" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-4 border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                      <p className="font-semibold text-[#1a365d] text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/quote" className="btn-gold">Get a Whole Life Quote <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL EXPENSE ── */}
        <section id="final" className="py-20 bg-white scroll-mt-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-label">For Seniors Ages 50–85</span>
                <h2 className="section-title">Final Expense Insurance</h2>
                <div className="gold-divider" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Final expense insurance is a type of whole life policy designed specifically for seniors. It covers funeral costs, burial expenses, and other end-of-life costs so your family doesn't have to worry about finances during an already difficult time.
                </p>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1a365d] mb-3">No Medical Exam Required</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Most final expense policies require only a few health questions — no medical exam, no blood draw, no waiting for lab results. Some plans offer guaranteed acceptance with no health questions at all, making coverage accessible even with pre-existing conditions.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Coverage Amount", value: "$5,000 – $25,000" },
                    { label: "Eligible Ages", value: "50 – 85 years old" },
                    { label: "Starting Price", value: "~$20–$60/month" },
                    { label: "Medical Exam", value: "Not required" },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#f7f8fc] rounded-lg p-4">
                      <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                      <p className="font-semibold text-[#1a365d] text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-xl p-5 mb-8">
                  <h4 className="font-semibold text-[#1a365d] text-sm mb-2">Did You Know?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The average funeral in the United States costs between <strong>$7,000 and $12,000</strong>. Final expense insurance ensures your family can cover these costs without dipping into savings or going into debt.
                  </p>
                </div>
                <Link href="/quote" className="btn-gold">Get a Final Expense Quote <ArrowRight className="w-4 h-4" /></Link>
              </div>
              <div className="bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] rounded-2xl p-8 text-white">
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4">Types of Final Expense Plans</h3>
                <div className="space-y-5">
                  {[
                    { name: "Level Benefit", desc: "Full death benefit from day one. Best for those in good health. Lowest premiums." },
                    { name: "Graded Benefit", desc: "Partial benefit in years 1–2, full benefit after. For those with some health issues." },
                    { name: "Guaranteed Issue", desc: "No health questions. Accepted regardless of health. Higher premiums, 2-year waiting period." },
                  ].map((plan) => (
                    <div key={plan.name} className="border-l-2 border-[#d69e2e] pl-4">
                      <p className="font-semibold text-[#d69e2e] text-sm mb-1">{plan.name}</p>
                      <p className="text-blue-100 text-sm leading-relaxed">{plan.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-[#d69e2e] font-semibold text-sm mb-1">Example Rate</p>
                  <p className="text-white text-2xl font-bold">~$35/month</p>
                  <p className="text-blue-200 text-xs mt-1">Healthy 65-year-old, $10K final expense policy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section id="compare" className="py-20 bg-[#f7f8fc] scroll-mt-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Side by Side</span>
              <h2 className="section-title">Compare All Three Plans</h2>
              <div className="gold-divider mx-auto" />
            </div>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
              <table className="w-full comparison-table">
                <thead>
                  <tr>
                    <th className="text-left">Feature</th>
                    <th>Term Life</th>
                    <th>Whole Life</th>
                    <th>Final Expense</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Coverage Duration", "10–30 years", "Lifetime", "Lifetime"],
                    ["Coverage Amount", "$100K – $2M+", "$25K – $1M+", "$5K – $25K"],
                    ["Starting Price", "~$15–$30/mo", "~$50–$100/mo", "~$20–$60/mo"],
                    ["Cash Value", "No", "Yes", "Small"],
                    ["Medical Exam", "Sometimes", "Sometimes", "Not required"],
                    ["Best Age Range", "20–55", "Any age", "50–85"],
                    ["Premium Changes", "Fixed (may increase at renewal)", "Fixed forever", "Fixed forever"],
                    ["Best For", "Young families, income replacement", "Wealth building, estate planning", "Seniors, burial costs"],
                  ].map(([feature, term, whole, final]) => (
                    <tr key={feature}>
                      <td className="font-semibold text-[#1a365d] text-sm">{feature}</td>
                      <td className="text-center text-sm text-gray-700">{term}</td>
                      <td className="text-center text-sm text-gray-700">{whole}</td>
                      <td className="text-center text-sm text-gray-700">{final}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-6">Not sure which plan is right for you? Let Sara help you decide — for free.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/quote" className="btn-gold">Get a Free Quote</Link>
                <Link href="/book" className="btn-navy">Book a Free Consultation</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

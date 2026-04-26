/* =============================================================
   FAQ PAGE — Sara Siblini | Primerica Life Insurance Company of Canada
   Canadian context: Ontario, FSRA, Primerica Canada
   NOTE: Only term life insurance is offered. No Whole Life, Final Expense,
         Disability, Critical Illness, or multi-carrier comparisons.
   ============================================================= */
import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";

const FAQS = [
  {
    q: "How much does term life insurance cost?",
    a: "The cost of term life insurance varies based on your age, health, coverage amount, and term length. Rates are generally very affordable for younger, healthy applicants. The best way to find out your personalised rate is to get a free quote — it takes less than 2 minutes. All rates are in Canadian dollars (CAD) and are subject to underwriting approval by Primerica Life Insurance Company of Canada.",
  },
  {
    q: "Do I need a medical exam to get covered?",
    a: "Not always. Many term life policies can be approved without a full medical exam through a simplified underwriting process. Whether an exam is required depends on your age, health, and the coverage amount you're applying for. Sara will walk you through what to expect during your free consultation.",
  },
  {
    q: "How long does it take to get approved?",
    a: "Approval times vary based on the underwriting process. Simplified issue policies can be approved more quickly, while policies requiring full medical underwriting may take several weeks. Once approved, your coverage is active upon your first premium payment. Sara will keep you informed throughout the process.",
  },
  {
    q: "What happens if I miss a premium payment?",
    a: "Most life insurance policies include a grace period after a missed payment, during which your coverage remains active. If you don't pay within the grace period, your policy may lapse. If your policy lapses, you may be able to reinstate it within a certain timeframe, though you may need to re-qualify medically. Sara can help you understand your specific policy terms.",
  },
  {
    q: "Can I get life insurance if I have a pre-existing condition?",
    a: "In many cases, yes. Coverage eligibility and rates for applicants with pre-existing conditions depend on the nature and severity of the condition, and are subject to underwriting review by Primerica Life Insurance Company of Canada. Sara will help you understand your options during your free consultation.",
  },
  {
    q: "What is term life insurance?",
    a: "Term life insurance provides coverage for a specific period — typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive a tax-free death benefit. It is the most straightforward and affordable type of life insurance, designed to replace your income and protect your family during your peak earning years. Primerica Canada specialises in term life insurance.",
  },
  {
    q: "Is the life insurance death benefit taxable in Canada?",
    a: "In most cases, life insurance death benefits are received income-tax-free by your beneficiaries in Canada. However, tax rules can be complex and depend on your specific situation. Sara always recommends consulting a qualified tax advisor for advice tailored to your circumstances.",
  },
  {
    q: "How much life insurance do I need?",
    a: "A common starting point is 10–12 times your annual income, but the right amount depends on your specific situation — including your debts, mortgage, income, and the number of dependants you have. Sara will conduct a complimentary Financial Needs Analysis (FNA) during your free Zoom consultation to help you determine the right coverage amount for your family.",
  },
  {
    q: "Can I change my coverage later?",
    a: "Many term life policies include options to adjust or convert your coverage as your needs change. Sara will review your coverage regularly to make sure it continues to meet your family's needs as your life circumstances evolve.",
  },
  {
    q: "Why should I work with Sara instead of buying directly online?",
    a: "Working with a Licensed Life Insurance Representative like Sara means you get personalised guidance through the process — from determining the right coverage amount to completing your application. Sara conducts a complimentary Financial Needs Analysis to ensure your coverage is tailored to your family's specific situation. Her consultation is free and there is no obligation to purchase.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Honest answers to the most common life insurance questions — in the context of Primerica Canada coverage in Ontario."
          breadcrumbs={[{ label: "FAQ" }]}
        />

        <section className="py-16 bg-[#f7f8fc]">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-semibold text-[#1a365d] text-sm leading-relaxed pr-2">
                      {i + 1}. {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#d69e2e] flex-shrink-0 mt-0.5 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className={`accordion-content ${openIndex === i ? "open" : ""}`}>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-12 bg-[#1a365d] rounded-2xl p-8 text-center text-white">
              <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                Every situation is unique. Book a free 20-minute Zoom call with Sara and get personalised answers about Primerica Canada coverage for your family.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book" className="btn-gold">Book a Free Call</Link>
                <Link href="/contact" className="btn-outline-white text-sm">Send a Message</Link>
              </div>
            </div>

            {/* Compliance disclaimer */}
            <p className="mt-8 text-gray-400 text-xs text-center leading-relaxed">
              Sara Siblini | Licensed Life Insurance Representative | Primerica Life Insurance Company of Canada | FSRA Lic. #NUV56 | Licensed in Ontario, Canada. The information on this page is for general educational purposes only and does not constitute financial or legal advice.
            </p>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

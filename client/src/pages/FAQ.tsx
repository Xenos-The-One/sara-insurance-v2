/* =============================================================
   FAQ PAGE — Sara Life Insurance
   Accordion-style FAQ with 10 questions
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
    q: "How much does life insurance cost?",
    a: "The cost of life insurance varies widely based on your age, health, the type of policy, and the coverage amount you choose. A healthy 30-year-old can get a $500,000 term life policy for as little as $18–$25 per month. Whole life and final expense policies cost more due to their permanent nature and added benefits. The best way to find out your exact rate is to get a free quote — it takes less than 2 minutes.",
  },
  {
    q: "Do I need a medical exam to get covered?",
    a: "Not always. Many term life policies under $500,000 can be approved without a medical exam through a process called 'simplified issue' or 'accelerated underwriting.' Final expense insurance typically requires no medical exam at all — just a few health questions. Guaranteed issue policies have no health questions whatsoever. I'll help you find the right option based on your health situation.",
  },
  {
    q: "How long does it take to get approved?",
    a: "Approval times vary by policy type. No-exam policies can be approved in as little as 24–48 hours. Policies requiring a medical exam typically take 2–6 weeks for full underwriting. Final expense and guaranteed issue policies are often approved the same day. Once approved, your coverage is active immediately upon your first premium payment.",
  },
  {
    q: "What happens if I miss a premium payment?",
    a: "Most life insurance policies include a 30-day grace period after a missed payment. During this time, your coverage remains active. If you don't pay within the grace period, your policy may lapse. Whole life policies with accumulated cash value may use that value to cover premiums temporarily. If your policy lapses, you may be able to reinstate it within a certain timeframe, though you may need to re-qualify medically.",
  },
  {
    q: "Can I get life insurance if I have a pre-existing condition?",
    a: "Yes, in most cases. Many carriers will still approve applicants with common conditions like high blood pressure, diabetes, or a history of cancer, though your premiums may be higher. For more serious conditions, guaranteed issue final expense policies are available with no health questions — making coverage accessible to nearly everyone. I work with multiple carriers and can find the best option for your specific health situation.",
  },
  {
    q: "What is the difference between term and whole life insurance?",
    a: "Term life insurance provides coverage for a specific period (10–30 years) and is the most affordable option. It pays a death benefit if you pass away during the term but has no cash value. Whole life insurance provides permanent, lifetime coverage and builds cash value over time that you can borrow against. Term is best for income replacement and debt coverage; whole life is better for estate planning and long-term wealth building.",
  },
  {
    q: "Is life insurance taxable?",
    a: "In most cases, life insurance death benefits are received income-tax-free by your beneficiaries. The cash value growth in a whole life policy is also tax-deferred. However, there are some exceptions — for example, if the policy is owned by an employer or if the estate is very large. For most families, life insurance is one of the most tax-efficient financial tools available. I always recommend consulting a tax advisor for your specific situation.",
  },
  {
    q: "How much life insurance do I need?",
    a: "A common rule of thumb is 10–12 times your annual income. A more detailed approach is the DIME method: add up your Debt, Income replacement (10 years), Mortgage balance, and Education costs for your children. For example, if you earn $60,000/year, have a $200,000 mortgage, and $50,000 in other debts, you might need $850,000 or more in coverage. I'll help you calculate the right amount on your free consultation call.",
  },
  {
    q: "Can I change my coverage later?",
    a: "Yes. Many term policies include a conversion option that lets you convert to a permanent policy without a new medical exam. You can also apply for additional coverage as your needs change. Some policies allow you to add riders (such as a child rider or disability waiver) at any time. If your health improves, you may even be able to qualify for better rates by applying for a new policy. I'll review your coverage annually to make sure it still fits your needs.",
  },
  {
    q: "Why should I use an independent agent instead of buying directly?",
    a: "When you buy directly from an insurance company, you only see their products at their prices. As an independent agent, I'm not tied to any single carrier — I compare rates and coverage from dozens of A-rated companies to find you the best deal. My consultation is free (I'm paid by the carrier, not by you), and I have no incentive to push you toward a plan that doesn't fit. You get expert guidance, personalized options, and ongoing support — all at no extra cost.",
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
          subtitle="Honest answers to the most common life insurance questions."
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
                Every situation is unique. Book a free 20-minute Zoom call with Sara and get personalized answers to all your questions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book" className="btn-gold">Book a Free Call</Link>
                <Link href="/contact" className="btn-outline-white text-sm">Send a Message</Link>
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

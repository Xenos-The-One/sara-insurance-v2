/* =============================================================
   BOOK A CALL PAGE — Sara Life Insurance
   Design: Corporate Modernism meets Warm Trust
   Navy (#1a365d) + Gold (#d69e2e) palette, Playfair Display + Inter
   Inline Calendly embed via VITE_CALENDLY_URL env var.
   Falls back to a setup prompt if the URL is not yet configured.
   ============================================================= */
import { Link } from "wouter";
import { Calendar, MessageSquare, Video, CheckCircle, Clock, DollarSign, Shield, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "";

const CALENDLY_CONFIGURED =
  CALENDLY_URL &&
  CALENDLY_URL !== "[SARA TO FILL IN — Calendly URL]" &&
  CALENDLY_URL.startsWith("https://calendly.com/");

const EMBED_URL = CALENDLY_CONFIGURED
  ? `${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=1e40af`
  : `https://calendly.com/YOUR_USERNAME/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=1e40af`;

export default function Book() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader
          title="Book Your Free Financial Needs Analysis"
          subtitle="30 minutes · No obligation · Ontario residents only"
          breadcrumbs={[{ label: "Book a Call" }]}
        />

        {/* ── HOW TO BOOK ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <span className="section-label">Simple Process</span>
              <h2 className="section-title">How to Book Your Call</h2>
              <div className="gold-divider mx-auto" />
            </div>

            {/* FNA Description */}
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-gray-600 leading-relaxed">
                A Financial Needs Analysis (FNA) is a complimentary conversation where I take the time to understand your family's situation and help you determine how much coverage you actually need — and what you can afford. There's no pressure and nothing to buy. Just clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                {
                  step: "1",
                  icon: Calendar,
                  title: "Choose a Time",
                  desc: "Pick a date and time that works for your schedule using the calendar below.",
                },
                {
                  step: "2",
                  icon: MessageSquare,
                  title: "Answer a Few Questions",
                  desc: "The booking form will ask about your coverage goals so Sara can prepare personalized options before the call.",
                },
                {
                  step: "3",
                  icon: Video,
                  title: "Meet on Zoom",
                  desc: "You'll receive a Zoom link by email. Join from your phone, tablet, or computer — no downloads needed.",
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="relative inline-block mb-5">
                    <div className="w-16 h-16 rounded-full bg-[#1a365d] flex items-center justify-center mx-auto">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#d69e2e] flex items-center justify-center text-xs font-bold text-[#1a365d]">
                      {s.step}
                    </div>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1a365d] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS + CALENDLY ── */}
        <section className="py-16 bg-[#f7f8fc]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Benefits */}
              <div className="lg:col-span-1">
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-6">What You'll Get</h3>
                <div className="space-y-4">
                  {[
                    { icon: DollarSign, title: "100% Free", desc: "No cost to you, ever. Sara is compensated by Primerica Life Insurance Company of Canada." },
                    { icon: Shield, title: "No Obligation", desc: "You're under no pressure to purchase anything." },
                    { icon: Clock, title: "30 Minutes", desc: "A focused Financial Needs Analysis, respectful of your time." },
                    { icon: Video, title: "Done on Zoom", desc: "No office visit required. Meet from anywhere in Ontario." },
                    { icon: CheckCircle, title: "A Clear Picture", desc: "Walk away knowing exactly what coverage your family needs and what it costs." },
                  ].map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1a365d] flex items-center justify-center flex-shrink-0">
                        <b.icon className="w-4 h-4 text-[#d69e2e]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a365d] text-sm">{b.title}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#1a365d] rounded-xl p-5 text-white">
                  <h4 className="font-['Playfair_Display'] font-bold mb-2">What to Expect on the Call</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Sara will walk you through a Financial Needs Analysis — a structured conversation about your income, dependants, debts, and goals. You'll leave with a clear understanding of how much coverage makes sense for your family and what it would cost through Primerica Canada.
                  </p>
                </div>
              </div>

              {/* Calendly Embed */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-[#1a365d] px-6 py-4">
                    <h3 className="font-['Playfair_Display'] font-bold text-white text-lg">Schedule Your Free 30-Minute Call</h3>
                    <p className="text-blue-200 text-sm">All times shown in your local timezone</p>
                  </div>

                  {/* ── Compliance Note — appears above the calendar widget ── */}
                  <div className="px-6 pt-4 pb-2">
                    <p className="text-xs text-gray-500 leading-relaxed border-l-2 border-[#d69e2e] pl-3">
                      This consultation is with Sara Siblini, Licensed Life Insurance Representative, Primerica Life Insurance Company of Canada | FSRA Lic. #NUV56 | Ontario, Canada
                    </p>
                  </div>

                  {CALENDLY_CONFIGURED ? (
                    /* ── LIVE EMBED — Calendly widget.js reads data-url and renders inline ── */
                    <div
                      className="calendly-inline-widget w-full"
                      data-url={EMBED_URL}
                      style={{ minWidth: "320px", height: "700px" }}
                    />
                  ) : (
                    /* ── PLACEHOLDER — shown until VITE_CALENDLY_URL is set ── */
                    <div
                      id="calendly-embed"
                      className="min-h-[500px] flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-blue-50 to-indigo-50"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#1a365d] flex items-center justify-center mb-5">
                        <Calendar className="w-10 h-10 text-[#d69e2e]" />
                      </div>
                      <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-3">
                        Calendly Booking Calendar
                      </h4>
                      <p className="text-gray-600 text-sm max-w-sm leading-relaxed mb-4">
                        To activate the live booking calendar, add your Calendly URL to the <strong>VITE_CALENDLY_URL</strong> environment variable in Settings → Secrets.
                      </p>
                      <div className="bg-white rounded-lg border border-gray-200 p-3 text-left text-xs text-gray-500 font-mono max-w-xs w-full mb-5">
                        VITE_CALENDLY_URL=https://calendly.com/your-username
                      </div>
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold text-sm inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Set Up Calendly
                      </a>
                    </div>
                  )}

                  {/* ── Post-booking instructions — appears below the calendar widget ── */}
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      After booking, you'll receive a Calendly confirmation email with a link to your appointment. If you need to reschedule, you can do so directly from that email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ TEASER ── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <p className="text-gray-600 mb-4">Have questions before booking?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/faq" className="btn-navy">View FAQ</Link>
              <Link href="/quote" className="btn-gold">Get a Quote First</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

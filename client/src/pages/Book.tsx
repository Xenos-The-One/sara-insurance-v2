/* =============================================================
   BOOK A CALL PAGE — Sara Life Insurance
   Calendly embed placeholder, how-to-book steps, benefits
   ============================================================= */
import { Link } from "wouter";
import { Calendar, MessageSquare, Video, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";

export default function Book() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader
          title="Book Your Free Consultation"
          subtitle="Choose a time that works for you. Your 20–30 minute Zoom call with Sara is completely free and no-obligation."
          breadcrumbs={[{ label: "Book a Call" }]}
        />

        {/* ── HOW TO BOOK ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Simple Process</span>
              <h2 className="section-title">How to Book Your Call</h2>
              <div className="gold-divider mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { step: "1", icon: Calendar, title: "Choose a Time", desc: "Pick a date and time that works for your schedule using the calendar below." },
                { step: "2", icon: MessageSquare, title: "Answer a Few Questions", desc: "The booking form will ask about your budget, health, and goals so Sara can tailor the call to you." },
                { step: "3", icon: Video, title: "Meet on Zoom", desc: "You'll receive a Zoom link by email. Join from your phone, tablet, or computer — no downloads needed." },
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
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-6">Benefits of Booking</h3>
                <div className="space-y-4">
                  {[
                    { icon: DollarSign, title: "100% Free", desc: "No cost to you, ever. Sara is compensated by Primerica Canada." },
                    { icon: Shield, title: "No Obligation", desc: "You're under no pressure to buy anything." },
                    { icon: Clock, title: "20–30 Minutes", desc: "Quick, focused, and respectful of your time." },
                    { icon: Video, title: "Done on Zoom", desc: "No office visit. Meet from anywhere." },
                    { icon: CheckCircle, title: "Clear Plan", desc: "Walk away knowing exactly what coverage you need and what it costs." },
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
                  <h4 className="font-['Playfair_Display'] font-bold mb-2">What to Expect</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    The booking form will ask about your budget, current health, and coverage goals. This helps Sara prepare personalized options before the call so you get the most out of your time together.
                  </p>
                </div>
              </div>

              {/* Calendly Embed */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-[#1a365d] px-6 py-4">
                    <h3 className="font-['Playfair_Display'] font-bold text-white text-lg">Schedule Your Call</h3>
                    <p className="text-blue-200 text-sm">All times shown in your local timezone</p>
                  </div>
                  {/* ── CALENDLY EMBED PLACEHOLDER ── */}
                  {/* REPLACE THIS DIV with your actual Calendly embed code:
                      <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME" style="min-width:320px;height:700px;"></div>
                      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                  */}
                  <div
                    id="calendly-embed"
                    className="min-h-[500px] flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-blue-50 to-indigo-50"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#1a365d] flex items-center justify-center mb-5">
                      <Calendar className="w-10 h-10 text-[#d69e2e]" />
                    </div>
                    <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-3">
                      Calendly Booking Widget
                    </h4>
                    <p className="text-gray-600 text-sm max-w-sm leading-relaxed mb-6">
                      Replace this placeholder with your Calendly embed code. See the README for instructions on how to add your booking calendar.
                    </p>
                    <div className="bg-white rounded-lg border border-gray-200 p-4 text-left text-xs text-gray-500 font-mono max-w-sm w-full">
                      {`<!-- Paste your Calendly code here -->`}<br />
                      {`<div class="calendly-inline-widget"`}<br />
                      {`  data-url="https://calendly.com/YOUR_USERNAME"`}<br />
                      {`  style="min-width:320px;height:700px;">`}<br />
                      {`</div>`}
                    </div>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold mt-6 text-sm"
                    >
                      Set Up Calendly →
                    </a>
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

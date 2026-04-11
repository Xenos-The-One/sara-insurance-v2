/* =============================================================
   ABOUT PAGE — Sara Life Insurance
   ============================================================= */
import { Link } from "wouter";
import { CheckCircle, Heart, BookOpen, Star, Award, Users, Laptop, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";

const AGENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663368367743/8QihdGFBc98MfQRykrPuzF/hero-consultation-E55AjJXGjGAwtJzk7xXQa6.webp";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader
          title="About Sara"
          subtitle="Licensed independent life insurance agent dedicated to helping families get the protection they deserve."
          breadcrumbs={[{ label: "About" }]}
        />

        {/* ── BIO SECTION ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Headshot */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* REPLACE WITH YOUR REAL PHOTO */}
                  <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#d69e2e] shadow-2xl">
                    <img
                      src={AGENT_IMG}
                      alt="Sara — Licensed Life Insurance Agent"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-[#1a365d] text-white rounded-xl px-4 py-3 shadow-lg text-center">
                    <p className="text-[#d69e2e] font-bold text-lg leading-none">100%</p>
                    <p className="text-xs text-blue-200 mt-0.5">Free Consult</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <span className="section-label">Meet Your Agent</span>
                <h2 className="section-title">Hi, I'm Sara</h2>
                <div className="gold-divider" />
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I'm a licensed life insurance agent passionate about helping families get the protection they need — without the confusion, pressure, or hidden fees that come with traditional insurance sales.
                  </p>
                  <p>
                    My consultation is <strong className="text-[#1a365d]">100% free</strong> — I'm paid by the insurance carrier, not by you. That means I have no reason to push you toward a plan that doesn't fit your needs or budget.
                  </p>
                  <p>
                    As an <strong className="text-[#1a365d]">independent agent</strong>, I work with multiple A-rated carriers to find the best rates and coverage for your specific situation. I'm not locked into one company's products.
                  </p>
                  <p>
                    Everything is done via <strong className="text-[#1a365d]">Zoom video call</strong> — no office visit needed, no awkward in-home sales presentations. Just a relaxed, informative conversation at a time that works for you.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link href="/quote" className="btn-gold">Get a Free Quote</Link>
                  <Link href="/book" className="btn-navy">Book a Zoom Call</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT I STAND FOR ── */}
        <section className="py-20 bg-[#f7f8fc]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <span className="section-label">My Values</span>
              <h2 className="section-title">What I Stand For</h2>
              <div className="gold-divider mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Honesty First",
                  desc: "I'll always give you my honest assessment of what coverage you need — even if that means recommending a less expensive plan. Your trust matters more than any commission.",
                  color: "bg-red-50",
                  iconColor: "text-red-500",
                },
                {
                  icon: BookOpen,
                  title: "Education Over Sales",
                  desc: "My goal is to educate you so you can make a confident, informed decision. I'll explain every option in plain English — no jargon, no pressure.",
                  color: "bg-blue-50",
                  iconColor: "text-[#2b6cb0]",
                },
                {
                  icon: Star,
                  title: "Genuine Care",
                  desc: "I got into this business because I've seen firsthand what happens to families who aren't protected. Every client I work with becomes part of my professional family.",
                  color: "bg-amber-50",
                  iconColor: "text-[#d69e2e]",
                },
              ].map((v) => (
                <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover">
                  <div className={`w-14 h-14 rounded-xl ${v.color} flex items-center justify-center mb-5`}>
                    <v.icon className={`w-7 h-7 ${v.iconColor}`} />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY WORK WITH ME ── */}
        <section className="py-20 bg-[#1a365d]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <span className="section-label">My Credentials</span>
              <h2 className="section-title-white">Why Work With Me</h2>
              <div className="gold-divider mx-auto" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Licensed & Certified",
                  desc: "State-licensed life insurance agent. License #[YOUR LICENSE NUMBER]. Fully compliant and regulated.",
                },
                {
                  icon: Users,
                  title: "Multiple Carriers",
                  desc: "I work with dozens of A-rated insurance carriers to find you the best rate — not just one company's products.",
                },
                {
                  icon: Laptop,
                  title: "100% Convenient",
                  desc: "Everything is done via Zoom. No office visits, no in-home sales calls. Work with me from anywhere.",
                },
                {
                  icon: DollarSign,
                  title: "Zero Fees to You",
                  desc: "My consultation and services are completely free to you. I'm compensated by the carrier, not by charging you.",
                },
              ].map((c) => (
                <div key={c.title} className="bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#d69e2e]/20 flex items-center justify-center mb-4">
                    <c.icon className="w-6 h-6 text-[#d69e2e]" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="section-title mb-4">Ready to Get Protected?</h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
              Let's find the right coverage for your family. It starts with a free, no-pressure conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote" className="btn-gold">Get My Free Quote</Link>
              <Link href="/book" className="btn-navy">Book a Zoom Call</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

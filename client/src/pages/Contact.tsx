/* =============================================================
   CONTACT PAGE — Sara Life Insurance
   Two-column: contact info + form, map placeholder
   ============================================================= */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // EmailJS placeholder — configure with your EmailJS credentials
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
    setTimeout(() => {
      navigate("/thankyou");
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader
          title="Get in Touch"
          subtitle="Have a question? Ready to get started? Reach out — Sara typically responds within 1 business day."
          breadcrumbs={[{ label: "Contact" }]}
        />

        <section className="py-16 bg-[#f7f8fc]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Contact Info */}
              <div>
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a365d] mb-6">Contact Information</h2>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Phone, label: "Phone", value: "[SARA TO FILL IN — business phone]", href: "#" },
                    { icon: Mail, label: "Email", value: "[SARA TO FILL IN — business email]", href: "#" },
                    { icon: MapPin, label: "Location", value: "Toronto, Ontario, Canada", href: undefined },
                    { icon: Clock, label: "Office Hours", value: "Mon–Fri: 9am–6pm | Sat: 10am–2pm", href: undefined },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-[#1a365d] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#d69e2e]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="font-semibold text-[#1a365d] text-sm hover:text-[#2b6cb0] transition-colors">{value}</a>
                        ) : (
                          <p className="font-semibold text-[#1a365d] text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mb-8">
                  <p className="font-semibold text-[#1a365d] text-sm mb-3">Follow Sara</p>
                  <div className="flex gap-3">
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
                        className="w-10 h-10 rounded-full bg-[#1a365d] hover:bg-[#d69e2e] flex items-center justify-center transition-colors"
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                {/* REPLACE THIS DIV with your Google Maps embed:
                    <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300" ... />
                */}
                <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-100 h-52 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-40" />
                    <p className="text-sm">Map Placeholder</p>
                    <p className="text-xs">Replace with Google Maps embed</p>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a365d] mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input required className="form-input" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input required type="email" className="form-input" value={form.email} onChange={e => update("email", e.target.value)} placeholder="jane@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="(416) 555-1234" />
                  </div>
                  <div>
                    <label className="form-label">Subject *</label>
                    <select required className="form-input" value={form.subject} onChange={e => update("subject", e.target.value)}>
                      <option value="">Select a subject...</option>
                      <option value="General Question">General Question</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Policy Question">Policy Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="form-input resize-none"
                      value={form.message}
                      onChange={e => update("message", e.target.value)}
                      placeholder="Tell me how I can help you..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gold w-full justify-center text-base py-3.5 disabled:opacity-60"
                  >
                    {sending ? (
                      <><span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message</>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    I typically respond within 1 business day. For faster service, <Link href="/book" className="text-[#2b6cb0] hover:underline">book a call</Link>.
                  </p>
                </form>
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

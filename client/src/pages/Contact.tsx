/* =============================================================
   CONTACT PAGE — Sara Life Insurance
   Two-column: contact info + form, map placeholder
   EmailJS integration: reads credentials from VITE_ env vars
   ============================================================= */
import { useState } from "react";
import { Link } from "wouter";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";
import { EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/emailjs-config";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [caslConsent, setCaslConsent] = useState(false);
  const [caslError, setCaslError] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  // Extract first name from full name for the success message
  const firstName = form.name.trim().split(" ")[0] || "there";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // CASL validation
    if (!caslConsent) {
      setCaslError(true);
      return;
    }
    setCaslError(false);
    setSubmitState("sending");
    setErrorMsg("");

    try {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

      const templateParams = {
        from_name:    form.name,
        from_email:   form.email,
        phone:        form.phone || "Not provided",
        subject:      form.subject,
        message:      form.message,
        casl_consent: "Yes — consented at time of submission",
        submitted_at: new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" }),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, templateParams);

      setSubmitState("success");
    } catch (err: unknown) {
      console.error("[EmailJS] Contact form send failed:", err);
      const message = err instanceof Error ? err.message : "Unknown error";
      setErrorMsg(
        `Something went wrong sending your message. Please email [SARA TO FILL IN — email] directly or try again. (${message})`
      );
      setSubmitState("error");
    }
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

                {/* ── Success State ── */}
                {submitState === "success" ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      Thank you, {firstName}! I've received your message and will be in touch within 24 hours. — Sara Siblini
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link href="/book" className="btn-gold justify-center">
                        Book a Free Call
                      </Link>
                      <button
                        onClick={() => { setSubmitState("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setCaslConsent(false); setCaslError(false); }}
                        className="btn-navy justify-center"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* ── Error Banner ── */}
                    {submitState === "error" && (
                      <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm leading-relaxed">{errorMsg}</p>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Your Name *</label>
                        <input
                          required
                          className="form-input"
                          value={form.name}
                          onChange={e => update("name", e.target.value)}
                          placeholder="Jane Smith"
                          disabled={submitState === "sending"}
                        />
                      </div>
                      <div>
                        <label className="form-label">Email Address *</label>
                        <input
                          required
                          type="email"
                          className="form-input"
                          value={form.email}
                          onChange={e => update("email", e.target.value)}
                          placeholder="jane@example.com"
                          disabled={submitState === "sending"}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={form.phone}
                        onChange={e => update("phone", e.target.value)}
                        placeholder="(416) 555-1234"
                        disabled={submitState === "sending"}
                      />
                    </div>
                    <div>
                      <label className="form-label">Subject *</label>
                      <select
                        required
                        className="form-input"
                        value={form.subject}
                        onChange={e => update("subject", e.target.value)}
                        disabled={submitState === "sending"}
                      >
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
                        disabled={submitState === "sending"}
                      />
                    </div>
                    {/* ── CASL Consent Checkbox ── */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={caslConsent}
                          onChange={e => { setCaslConsent(e.target.checked); if (e.target.checked) setCaslError(false); }}
                          disabled={submitState === "sending"}
                          className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1a365d] accent-[#1a365d] flex-shrink-0"
                        />
                        <span className="text-xs text-gray-600 leading-relaxed">
                          I consent to being contacted by Sara Siblini regarding life insurance information and to receive electronic communications related to my inquiry. I understand I may withdraw consent at any time.
                        </span>
                      </label>
                      {caslError && (
                        <p className="text-red-600 text-xs mt-1.5 ml-7">Please check this box to continue.</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitState === "sending"}
                      className="btn-gold w-full justify-center text-base py-3.5 disabled:opacity-60"
                    >
                      {submitState === "sending" ? (
                        <><span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2" /> Sending...</>
                      ) : (
                        <><Send className="w-5 h-5" /> Send Message</>
                      )}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      I typically respond within 1 business day. For faster service,{" "}
                      <Link href="/book" className="text-[#2b6cb0] hover:underline">book a call</Link>.
                    </p>
                  </form>
                )}
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

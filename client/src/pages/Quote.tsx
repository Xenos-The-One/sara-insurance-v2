/* =============================================================
   QUOTE CALCULATOR — Sara Life Insurance
   Multi-step form with estimate logic per spec
   EmailJS integration: sends Sara a notification when a
   prospect completes the form and sees their estimate.
   Credentials are read from VITE_ environment variables.
   ============================================================= */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import emailjs from "@emailjs/browser";
import { CheckCircle, ArrowRight, ArrowLeft, Calculator, Calendar, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PageHeader from "@/components/PageHeader";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_QUOTE_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  CALENDLY_URL,
} from "@/lib/emailjs-config";

// ── Quote Estimate Logic ──
const BASE_RATES: Record<string, Record<string, number>> = {
  "20-29": { Excellent: 0.07, Good: 0.09, Fair: 0.12, Poor: 0.16 },
  "30-39": { Excellent: 0.10, Good: 0.13, Fair: 0.17, Poor: 0.22 },
  "40-49": { Excellent: 0.17, Good: 0.21, Fair: 0.28, Poor: 0.36 },
  "50-59": { Excellent: 0.30, Good: 0.38, Fair: 0.50, Poor: 0.65 },
  "60-69": { Excellent: 0.55, Good: 0.70, Fair: 0.90, Poor: 1.20 },
  "70+":   { Excellent: 1.00, Good: 1.30, Fair: 1.70, Poor: 2.20 },
};

function getAgeGroup(age: number): string {
  if (age < 30) return "20-29";
  if (age < 40) return "30-39";
  if (age < 50) return "40-49";
  if (age < 60) return "50-59";
  if (age < 70) return "60-69";
  return "70+";
}

function calcEstimate(age: number, health: string, coverageK: number, tobacco: boolean) {
  const group = getAgeGroup(age);
  let rate = BASE_RATES[group]?.[health] ?? 0.10;
  if (tobacco) rate *= 2.0;
  const base = rate * coverageK;
  const low = Math.round(base * 0.85);
  const high = Math.round(base * 1.15);
  return { low, high };
}

const COVERAGE_OPTIONS = [
  { label: "$50,000",    value: 50 },
  { label: "$100,000",   value: 100 },
  { label: "$250,000",   value: 250 },
  { label: "$500,000",   value: 500 },
  { label: "$1,000,000", value: 1000 },
  { label: "Custom",     value: -1 },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  tobacco: string;
  health: string;
  coverageType: string;
  coverageAmount: number;
  customAmount: string;
  termLength: string;
}

const INITIAL: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  dob: "", gender: "", tobacco: "", health: "",
  coverageType: "", coverageAmount: 250, customAmount: "",
  termLength: "20",
};

export default function Quote() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null);
  const [emailStatus, setEmailStatus] = useState<"pending" | "sent" | "failed">("pending");
  const [emailError, setEmailError] = useState("");

  const update = (field: keyof FormData, value: string | number) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const getAge = () => {
    if (!form.dob) return 30;
    const birth = new Date(form.dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return Math.max(18, Math.min(99, age));
  };

  const handleSubmit = () => {
    const age = getAge();
    const coverageK = form.coverageAmount === -1
      ? (parseInt(form.customAmount) || 250)
      : form.coverageAmount;
    const est = calcEstimate(age, form.health, coverageK, form.tobacco === "yes");
    setEstimate(est);
    setSubmitted(true);
    setEmailStatus("pending");
  };

  // Send EmailJS notification when the results screen mounts
  useEffect(() => {
    if (!submitted || !estimate) return;

    const sendNotification = async () => {
      try {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

        const coverageK = form.coverageAmount === -1
          ? (parseInt(form.customAmount) || 250)
          : form.coverageAmount;

        const templateParams = {
          first_name:      form.firstName,
          last_name:       form.lastName,
          full_name:       `${form.firstName} ${form.lastName}`,
          from_email:      form.email,
          phone:           form.phone || "Not provided",
          date_of_birth:   form.dob,
          age:             getAge().toString(),
          gender:          form.gender,
          tobacco:         form.tobacco === "yes" ? "Yes" : "No",
          health:          form.health,
          coverage_type:   form.coverageType,
          coverage_amount: `$${(coverageK * 1000).toLocaleString("en-CA")} CAD`,
          term_length:     form.coverageType === "Term Life" ? `${form.termLength} years` : "N/A",
          estimate_low:    `$${estimate.low}`,
          estimate_high:   `$${estimate.high}`,
          submitted_at:    new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" }),
        };

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_QUOTE_TEMPLATE_ID, templateParams);
        setEmailStatus("sent");
      } catch (err: unknown) {
        console.error("[EmailJS] Quote notification failed:", err);
        const message = err instanceof Error ? err.message : "Unknown error";
        setEmailError(message);
        setEmailStatus("failed");
      }
    };

    sendNotification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  const canNext1 = form.firstName && form.lastName && form.email && form.phone;
  const canNext2 = form.dob && form.gender && form.tobacco && form.health;
  const canSubmit = form.coverageType && (form.coverageAmount !== -1 || form.customAmount);

  const stepLabels = ["About You", "Health & Lifestyle", "Coverage Details"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader
          title="Get Your Free Personalized Quote"
          subtitle="Takes less than 2 minutes. Rates shown are estimates — I'll confirm exact pricing on your consultation call."
          breadcrumbs={[{ label: "Quote Calculator" }]}
        />

        <section className="py-16 bg-[#f7f8fc]">
          <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
            {!submitted ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Progress Bar */}
                <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    {stepLabels.map((label, i) => {
                      const num = i + 1;
                      const active = step === num;
                      const done = step > num;
                      return (
                        <div key={label} className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                            done ? "bg-green-500 text-white" : active ? "bg-[#1a365d] text-white" : "bg-gray-200 text-gray-500"
                          }`}>
                            {done ? <CheckCircle className="w-4 h-4" /> : num}
                          </div>
                          <span className={`text-xs font-medium hidden sm:block ${active ? "text-[#1a365d]" : "text-gray-400"}`}>{label}</span>
                          {i < 2 && <div className={`h-px flex-1 mx-2 ${done ? "bg-green-400" : "bg-gray-200"} hidden sm:block w-8`} />}
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-[#d69e2e] h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${((step - 1) / 2) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Step {step} of 3 — {stepLabels[step - 1]}</p>
                </div>

                <div className="p-8">
                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d]">Tell Us About Yourself</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label">First Name *</label>
                          <input className="form-input" value={form.firstName} onChange={e => update("firstName", e.target.value)} placeholder="Jane" />
                        </div>
                        <div>
                          <label className="form-label">Last Name *</label>
                          <input className="form-input" value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="Smith" />
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Email Address *</label>
                        <input className="form-input" type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input className="form-input" type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="(416) 555-1234" />
                      </div>
                      <p className="text-xs text-gray-400">Your information is kept private and never sold. I'll only use it to follow up about your quote.</p>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d]">Health & Lifestyle</h3>
                      <div>
                        <label className="form-label">Date of Birth *</label>
                        <input className="form-input" type="date" value={form.dob} onChange={e => update("dob", e.target.value)} max={new Date().toISOString().split("T")[0]} />
                      </div>
                      <div>
                        <label className="form-label">Gender *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Male", "Female"].map(g => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => update("gender", g)}
                              className={`py-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                                form.gender === g ? "border-[#1a365d] bg-[#1a365d] text-white" : "border-gray-200 text-gray-600 hover:border-[#2b6cb0]"
                              }`}
                            >{g}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Tobacco User? *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {[{ label: "No", value: "no" }, { label: "Yes", value: "yes" }].map(opt => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => update("tobacco", opt.value)}
                              className={`py-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                                form.tobacco === opt.value ? "border-[#1a365d] bg-[#1a365d] text-white" : "border-gray-200 text-gray-600 hover:border-[#2b6cb0]"
                              }`}
                            >{opt.label}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Overall Health *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Excellent", "Good", "Fair", "Poor"].map(h => (
                            <button
                              key={h}
                              type="button"
                              onClick={() => update("health", h)}
                              className={`py-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                                form.health === h ? "border-[#1a365d] bg-[#1a365d] text-white" : "border-gray-200 text-gray-600 hover:border-[#2b6cb0]"
                              }`}
                            >{h}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d]">Coverage Details</h3>
                      <div>
                        <label className="form-label">Coverage Type *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Term Life", "Family Income Protection"].map(t => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => update("coverageType", t)}
                              className={`py-3 px-2 rounded-lg border-2 text-xs font-semibold transition-all text-center ${
                                form.coverageType === t ? "border-[#1a365d] bg-[#1a365d] text-white" : "border-gray-200 text-gray-600 hover:border-[#2b6cb0]"
                              }`}
                            >{t}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Coverage Amount *</label>
                        <div className="grid grid-cols-3 gap-2">
                          {COVERAGE_OPTIONS.map(opt => (
                            <button
                              key={opt.label}
                              type="button"
                              onClick={() => update("coverageAmount", opt.value)}
                              className={`py-2.5 rounded-lg border-2 text-xs font-semibold transition-all ${
                                form.coverageAmount === opt.value ? "border-[#d69e2e] bg-[#d69e2e] text-[#1a365d]" : "border-gray-200 text-gray-600 hover:border-[#d69e2e]"
                              }`}
                            >{opt.label}</button>
                          ))}
                        </div>
                        {form.coverageAmount === -1 && (
                          <div className="mt-3">
                            <label className="form-label">Custom Amount (CAD $)</label>
                            <input className="form-input" type="number" value={form.customAmount} onChange={e => update("customAmount", e.target.value)} placeholder="e.g. 750000" />
                          </div>
                        )}
                      </div>
                      {form.coverageType === "Term Life" && (
                        <div>
                          <label className="form-label">Term Length</label>
                          <div className="grid grid-cols-5 gap-2">
                            {["10", "15", "20", "25", "30"].map(t => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => update("termLength", t)}
                                className={`py-2.5 rounded-lg border-2 text-xs font-semibold transition-all ${
                                  form.termLength === t ? "border-[#1a365d] bg-[#1a365d] text-white" : "border-gray-200 text-gray-600 hover:border-[#2b6cb0]"
                                }`}
                              >{t} yr</button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                    {step > 1 ? (
                      <button onClick={() => setStep(s => s - 1)} className="flex items-center gap-2 text-gray-500 hover:text-[#1a365d] text-sm font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                    ) : <div />}
                    {step < 3 ? (
                      <button
                        onClick={() => setStep(s => s + 1)}
                        disabled={step === 1 ? !canNext1 : !canNext2}
                        className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                      >
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                      >
                        <Calculator className="w-4 h-4" /> Calculate My Estimate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* ── CONFIRMATION PANEL ── */
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>

                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a365d] mb-3">
                  Thanks, {form.firstName}! Your quote request is on its way.
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  I'll review your information and reach out within 24 hours with your personalized quote. In the meantime, want to skip the wait? Book a free 30-minute Financial Needs Analysis call directly:
                </p>

                {/* EmailJS send-failure notice (non-blocking) */}
                {emailStatus === "failed" && (
                  <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-left">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Something went wrong. Please try again or call [SARA TO FILL IN — phone]. ({emailError})
                    </p>
                  </div>
                )}

                {/* Estimate summary card */}
                {estimate && (
                  <div className="bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] rounded-xl p-6 mb-6 text-left">
                    <p className="text-blue-200 text-xs mb-1">Your Estimated Monthly Rate (CAD)</p>
                    <p className="text-[#d69e2e] font-['Playfair_Display'] text-3xl font-bold mb-4">
                      ${estimate.low} – ${estimate.high}
                      <span className="text-lg text-blue-200 font-normal">/month</span>
                    </p>
                    <div className="grid grid-cols-3 gap-3 text-sm border-t border-white/20 pt-4">
                      <div>
                        <p className="text-blue-300 text-xs">Coverage Type</p>
                        <p className="text-white font-semibold text-xs">{form.coverageType}</p>
                      </div>
                      <div>
                        <p className="text-blue-300 text-xs">Coverage Amount</p>
                        <p className="text-white font-semibold text-xs">
                          ${form.coverageAmount === -1 ? parseInt(form.customAmount || "0").toLocaleString("en-CA") : (form.coverageAmount * 1000).toLocaleString("en-CA")} CAD
                        </p>
                      </div>
                      <div>
                        <p className="text-blue-300 text-xs">Health Rating</p>
                        <p className="text-white font-semibold text-xs">{form.health}</p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  ⚠️ This estimate is for illustrative purposes only and does not constitute a binding quote or offer of insurance. Actual rates are subject to full underwriting by Primerica Life Insurance Company of Canada and may differ. All amounts shown are in Canadian dollars (CAD).
                </p>

                <div className="space-y-3">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full justify-center text-base py-3.5 inline-flex items-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Free Call
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setStep(1); setForm(INITIAL); setEstimate(null); setEmailStatus("pending"); }}
                    className="w-full py-3 text-sm text-gray-500 hover:text-[#1a365d] transition-colors"
                  >
                    Start Over
                  </button>
                </div>

                <p className="text-xs text-gray-400 mt-6 leading-relaxed">
                  Sara Siblini | Licensed Life Insurance Representative | Primerica Life Insurance Company of Canada | FSRA Lic. #NUV56
                </p>
              </div>
            )}

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {["🔒 Your data is private", "✅ No obligation", "📞 Free consultation"].map(item => (
                <div key={item} className="text-center text-xs text-gray-500 bg-white rounded-lg p-3 border border-gray-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

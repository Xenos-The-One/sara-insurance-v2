/* =============================================================
   PRIVACY POLICY — Sara Siblini | Primerica Life Insurance Company of Canada
   PIPEDA-compliant. Ontario, Canada. Content per Prompt 5 spec.
   Visual layout preserved — text content only replaced.
   ============================================================= */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader title="Privacy Policy — Sara Siblini Insurance" breadcrumbs={[{ label: "Privacy Policy" }]} />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-gray-700 space-y-6">
              <p className="text-gray-500 text-xs">Last updated: [SARA TO FILL IN — date when site goes live]</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">Who We Are</h2>
              <p>This website is operated by Sara Siblini, Licensed Life Insurance Representative with Primerica Life Insurance Company of Canada, FSRA Licence #NUV56, serving Ontario, Canada.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">What Information We Collect</h2>
              <p>When you use the quote calculator or contact form on this website, we may collect: your name, email address, phone number, age, and whether you are a tobacco user. This information is used solely to prepare a life insurance needs analysis and to contact you about your inquiry.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">How We Use Your Information</h2>
              <p>Your information is used to: respond to your inquiry, prepare a personalized Financial Needs Analysis (FNA), and contact you about life insurance coverage options available through Primerica Life Insurance Company of Canada. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">Email Communication</h2>
              <p>When you submit a form on this site, your information is transmitted via EmailJS (emailjs.com) and logged to a secure spreadsheet accessible only to Sara Siblini. You may receive follow-up communication from Sara at the email or phone number you provided.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">Your Rights Under PIPEDA</h2>
              <p>Under Canada's <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA), you have the right to: access the personal information we hold about you, request correction of inaccurate information, and request deletion of your information. To exercise these rights, contact: [SARA TO FILL IN — business email address]</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">Cookies</h2>
              <p>This website may use analytics cookies to understand how visitors use the site. No personal information is stored in cookies.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">Changes to This Policy</h2>
              <p>We may update this policy from time to time. The "Last updated" date above will reflect any changes.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">Contact</h2>
              <p>
                Sara Siblini<br />
                Licensed Life Insurance Representative<br />
                Primerica Life Insurance Company of Canada<br />
                FSRA Lic. #NUV56 | Ontario, Canada<br />
                Email: [SARA TO FILL IN — business email address]<br />
                Phone: [SARA TO FILL IN — business phone number]
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

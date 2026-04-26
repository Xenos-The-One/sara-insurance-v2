/* =============================================================
   TERMS OF SERVICE — Sara Siblini | Primerica Life Insurance Company of Canada
   Canadian context: Ontario law, FSRA, Primerica Canada
   ============================================================= */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader title="Terms of Service" breadcrumbs={[{ label: "Terms of Service" }]} />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-gray-700 space-y-6">
              <p className="text-gray-500 text-xs">Last updated: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>

              <p>Welcome to the website of Sara Siblini, Licensed Life Insurance Representative with Primerica Life Insurance Company of Canada. By accessing or using this website and services, you agree to be bound by these Terms of Service. Please read them carefully.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">1. Acceptance of Terms</h2>
              <p>By using this website, you confirm that you are at least 18 years of age and agree to comply with these Terms of Service and all applicable laws and regulations of Ontario and Canada. If you do not agree with any part of these terms, you may not use our services.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">2. Services Description</h2>
              <p>Sara Siblini provides life insurance consulting services as a Licensed Life Insurance Representative with Primerica Life Insurance Company of Canada (FSRA Lic. #NUV56), licensed in Ontario. Services include free consultations, illustrative quote estimates, and coverage recommendations through Primerica Canada.</p>
              <p>Quote estimates provided on this website are for illustrative purposes only and do not constitute a binding offer or guarantee of coverage. Actual rates are determined by Primerica Life Insurance Company of Canada following full underwriting. All amounts are in Canadian dollars (CAD).</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">3. No Insurance Advice</h2>
              <p>The content on this website is for general informational purposes only and does not constitute professional insurance, financial, legal, or tax advice. Always consult with a qualified professional before making insurance decisions. While we strive to provide accurate information, we make no warranties about the completeness, accuracy, or reliability of any content.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">4. Consultations and Appointments</h2>
              <p>Free consultations are offered as a courtesy service. We reserve the right to reschedule or cancel appointments with reasonable notice. By booking a consultation, you agree to provide accurate information about your health and financial situation. Providing false information may invalidate any coverage obtained.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">5. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Sara Siblini and is protected by applicable Canadian intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by Ontario and Canadian law, Sara Siblini shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or services. Our total liability shall not exceed the amount paid by you for our services (which, in most cases, is zero, as our consultations are free).</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites, including Primerica Canada and scheduling tools. We are not responsible for the content, privacy practices, or terms of these third-party sites. Visiting these links is at your own risk.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">8. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes arising from these terms shall be resolved in the courts of Ontario, Canada.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes constitutes your acceptance of the new terms.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">10. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:<br />
              Sara Siblini | Licensed Life Insurance Representative<br />
              Primerica Life Insurance Company of Canada<br />
              FSRA Lic. #NUV56 | Toronto, Ontario, Canada<br />
              Email: [SARA TO FILL IN — business email]<br />
              Phone: [SARA TO FILL IN — business phone]</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

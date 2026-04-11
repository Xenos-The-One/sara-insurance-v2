/* =============================================================
   TERMS OF SERVICE — Sara Life Insurance
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
              <p className="text-gray-500 text-xs">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

              <p>Welcome to Sara Life Insurance. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">1. Acceptance of Terms</h2>
              <p>By using this website, you confirm that you are at least 18 years of age and agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">2. Services Description</h2>
              <p>Sara Life Insurance provides life insurance consulting services, including free consultations, quote estimates, and policy recommendations. We are an independent insurance agent licensed in [YOUR STATE]. We do not sell insurance directly — we facilitate the purchase of insurance from licensed carriers.</p>
              <p>Quote estimates provided on this website are for informational purposes only and do not constitute a binding offer or guarantee of coverage. Actual rates are determined by the insurance carrier following full underwriting.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">3. No Insurance Advice</h2>
              <p>The content on this website is for general informational purposes only and does not constitute professional insurance, financial, legal, or tax advice. Always consult with a qualified professional before making insurance decisions. While we strive to provide accurate information, we make no warranties about the completeness, accuracy, or reliability of any content.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">4. Consultations and Appointments</h2>
              <p>Free consultations are offered as a courtesy service. We reserve the right to reschedule or cancel appointments with reasonable notice. By booking a consultation, you agree to provide accurate information about your health and financial situation. Providing false information may invalidate any coverage obtained.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">5. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Sara Life Insurance and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Sara Life Insurance shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for our services (which, in most cases, is zero, as our consultations are free).</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites, including insurance carriers and scheduling tools. We are not responsible for the content, privacy practices, or terms of these third-party sites. Visiting these links is at your own risk.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">8. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of [YOUR STATE], without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of [YOUR STATE].</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes constitutes your acceptance of the new terms.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">10. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:<br />
              Email: sara@sarainsurance.com<br />
              Phone: [YOUR PHONE NUMBER]</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

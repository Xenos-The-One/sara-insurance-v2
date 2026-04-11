/* =============================================================
   PRIVACY POLICY — Sara Life Insurance
   ============================================================= */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHeader title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-gray-700 space-y-6">
              <p className="text-gray-500 text-xs">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

              <p>Sara Life Insurance ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">1. Information We Collect</h2>
              <p><strong>Personal Information:</strong> When you submit a quote request, book a consultation, or contact us, we may collect your name, email address, phone number, date of birth, and health information necessary to provide insurance quotes.</p>
              <p><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on pages.</p>
              <p><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">2. How We Use Your Information</h2>
              <p>We use the information we collect to: provide and improve our services; respond to your inquiries and quote requests; schedule and conduct consultations; send you relevant information about insurance products (with your consent); comply with legal obligations; and analyze website usage to improve user experience.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">3. Email Marketing</h2>
              <p>If you opt in to receive communications from us, we may send you educational content, insurance tips, and promotional materials. You may unsubscribe at any time by clicking the "unsubscribe" link in any email or by contacting us directly. We will not send you marketing emails without your explicit consent.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">4. Third-Party Tools and Services</h2>
              <p>We use the following third-party tools that may collect or process your data:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Calendly:</strong> Used for scheduling consultations. Subject to Calendly's Privacy Policy.</li>
                <li><strong>EmailJS:</strong> Used for processing contact form submissions. Subject to EmailJS's Privacy Policy.</li>
                <li><strong>Google Analytics:</strong> Used for website analytics. Subject to Google's Privacy Policy.</li>
              </ul>
              <p>We do not sell your personal information to third parties. We may share your information with insurance carriers as necessary to provide you with quotes and coverage, with your consent.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">5. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also request that we stop processing your data for marketing purposes. To exercise these rights, please contact us at sara@sarainsurance.com.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">7. Children's Privacy</h2>
              <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date. Your continued use of our website after any changes constitutes your acceptance of the new policy.</p>

              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a365d] mt-8">9. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:<br />
              Email: sara@sarainsurance.com<br />
              Phone: [YOUR PHONE NUMBER]<br />
              Address: [YOUR CITY], [YOUR STATE]</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

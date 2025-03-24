import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Header with back button */}
      <div className="py-6 px-4 bg-[#121212] border-b border-[#333333]">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center text-[#22c55e] hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-white text-center">SynaplyAI Terms of Service</h1>
        <p className="text-gray-400 mb-4 text-center">Last Updated: March 2025</p>
        <div className="section-title-line mb-8"></div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">1. Introduction</h2>
          <p className="mb-4 text-gray-300">
            Welcome to SynaplyAI. By accessing or using our platform, you agree to be bound by these Terms of Service ("Terms"). 
            Please read them carefully. If you do not agree with any part of these Terms, you may not access or use SynaplyAI.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">2. Definitions</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>SynaplyAI</strong> – refers to the AI content creation platform operated by IntraWeb Technologies.</li>
            <li><strong>User</strong> – refers to any individual or entity that accesses or uses SynaplyAI.</li>
            <li><strong>AI-generated content</strong> – refers to any text, images, or other materials created by SynaplyAI's AI models.</li>
            <li><strong>Service</strong> – refers to the SynaplyAI platform and any associated software, content, and features.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">3. Use of the Platform</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>You must be at least 18 years old to use SynaplyAI.</li>
            <li>You are responsible for the accuracy and legality of the content you generate using SynaplyAI.</li>
            <li>You agree not to use SynaplyAI to create or distribute:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Illegal, harmful, or offensive content.</li>
                <li>Content that infringes on intellectual property rights.</li>
                <li>Misinformation, hate speech, or violent content.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">4. AI-Generated Content Disclaimer</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>AI-generated content is produced based on models trained on external data.</li>
            <li>SynaplyAI does not guarantee the accuracy, reliability, or legality of AI-generated content.</li>
            <li>Users assume full responsibility for verifying and approving AI-generated content before use.</li>
            <li>SynaplyAI is not liable for any harm or damages arising from reliance on AI-generated content.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">5. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>AI-generated content remains the property of the user unless otherwise stated.</li>
            <li>By using SynaplyAI, you grant SynaplyAI a non-exclusive, royalty-free license to use AI-generated content for platform improvement and performance enhancement.</li>
            <li>SynaplyAI retains the right to use aggregated and anonymized data for analytical purposes.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">6. Data Privacy and Security</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>All user data is encrypted in transit and at rest.</li>
            <li>SynaplyAI enforces strict tenant isolation to prevent cross-tenant data exposure.</li>
            <li>SynaplyAI complies with GDPR, HIPAA, and SOC 2 standards.</li>
            <li>Users are responsible for securing their login credentials. SynaplyAI is not liable for unauthorized access resulting from user negligence.</li>
          </ul>
          
          <div className="bg-[#1a1a1a] p-4 rounded-md border-l-4 border-[#22c55e] mt-4 mb-4">
            <p className="text-white font-bold">Privacy Policy:</p>
            <p className="text-gray-300">For detailed information about how we collect, use, and protect your data, please see our <Link href="/privacy-policy" className="text-[#22c55e] hover:underline">Privacy Policy</Link>.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">7. Payment and Subscription Terms</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>SynaplyAI operates on a token-based pricing model.</li>
            <li>Overage fees apply if the user exceeds their token limit.</li>
            <li>Payment is due on a monthly or annual basis, depending on the selected subscription plan.</li>
            <li>Failure to pay overages within 30 days may result in service suspension or termination.</li>
            <li>Billing disputes must be reported within 30 days. SynaplyAI's internal usage tracking will be considered the definitive source of truth.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">8. Service Level Agreement (SLA)</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>SynaplyAI guarantees 99.9% uptime excluding:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Scheduled maintenance.</li>
                <li>Outages caused by third-party services (e.g., OpenAI).</li>
                <li>Force majeure events (e.g., natural disasters, cyberattacks).</li>
              </ul>
            </li>
            <li>If SynaplyAI fails to meet uptime commitments, the user may be eligible for a pro-rated refund.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">9. Prohibited Activities</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Attempting to reverse-engineer SynaplyAI's models or platform.</li>
            <li>Using automated scripts to extract data or bypass usage limits.</li>
            <li>Violating any applicable laws or regulations while using SynaplyAI.</li>
            <li>Attempting to hack, disrupt, or otherwise interfere with SynaplyAI infrastructure.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">10. Termination of Service</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>SynaplyAI reserves the right to terminate user accounts without notice for:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Violation of these Terms.</li>
                <li>Fraudulent activity.</li>
                <li>Misuse of AI-generated content.</li>
                <li>Failure to pay overage fees.</li>
              </ul>
            </li>
            <li>Upon termination, user access will be revoked, and data will be deleted within 30 days.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">11. Limitation of Liability</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>SynaplyAI is provided "as-is" without warranty of any kind.</li>
            <li>SynaplyAI is not liable for:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Loss of revenue, profit, or data.</li>
                <li>Indirect, incidental, or consequential damages.</li>
                <li>Damages exceeding the total amount paid by the user in the past 12 months.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">12. Indemnification</h2>
          <p className="mb-4 text-gray-300">
            You agree to indemnify and hold SynaplyAI harmless from any claims, damages, or liabilities resulting from:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Your use or misuse of the platform.</li>
            <li>AI-generated content produced through your account.</li>
            <li>Violation of third-party rights or intellectual property.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">13. Dispute Resolution</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Disputes will be resolved through binding arbitration in New Jersey.</li>
            <li>No class actions permitted; disputes must be handled individually.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">14. Governing Law</h2>
          <p className="mb-4 text-gray-300">
            These Terms are governed by the laws of the State of New Jersey, without regard to conflict of law principles.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">15. Changes to Terms of Service</h2>
          <p className="mb-4 text-gray-300">
            SynaplyAI may update these Terms at any time with 30 days' notice. Continued use of the platform after the update constitutes acceptance of the new Terms.
          </p>
          
          <div className="bg-[#1a1a1a] p-4 rounded-md mt-6">
            <p className="text-gray-300">
              <span className="font-bold text-white">Questions or Concerns?</span> If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-[#22c55e] mt-2">legal@synaplyai.io</p>
          </div>
        </section>
      </div>

      <footer className="bg-[#121212] border-t border-[#333333] py-8 text-center text-gray-400">
        <div className="container mx-auto">
          <p className="mb-4">© {new Date().getFullYear()} SynaplyAI. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
            <Link href="/privacy-policy" className="hover:text-[#22c55e] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
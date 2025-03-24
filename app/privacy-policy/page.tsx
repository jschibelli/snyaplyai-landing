import Link from 'next/link';

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-2 text-white text-center">SynaplyAI Privacy Policy</h1>
        <p className="text-gray-400 mb-4">Last Updated: March 2025</p>
        <div className="section-title-line mb-8"></div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">1. Introduction</h2>
          <p className="mb-4 text-gray-300">
            SynaplyAI ("we", "our", or "us") is committed to protecting your privacy and handling your data responsibly. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, 
            website, or services (collectively, the "Services").
          </p>
          <p className="mb-4 text-gray-300">
            By accessing or using our Services, you agree to the collection and use of information in accordance with this policy. 
            We encourage you to read this Privacy Policy carefully and contact us if you have any questions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">2. Data We Collect</h2>
          <p className="mb-4 text-gray-300">We may collect the following types of information:</p>
          <h3 className="text-xl font-semibold mb-2 text-white">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>Identity information (name, username, company name)</li>
            <li>Contact information (email address, phone number, mailing address)</li>
            <li>Account credentials (password and security questions)</li>
            <li>Professional information (job title, department, industry)</li>
            <li>Payment details (credit card information, billing address)</li>
            <li>Profile information (preferences, feedback, survey responses)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">2.2 Content and Usage Data</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>AI-generated content and prompts submitted to our Services</li>
            <li>Files, documents, and media uploaded to our platform</li>
            <li>Collaboration data (comments, edits, shared content)</li>
            <li>Usage patterns and feature interaction data</li>
            <li>Performance metrics and analytics related to your use of our Services</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">2.3 Technical Information</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Device information (device type, operating system, browser type)</li>
            <li>Connection data (IP address, access times, browser settings)</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Location data (if enabled on your device)</li>
            <li>Log data (error reports, performance data, hardware settings)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">3. How We Use Your Data</h2>
          <p className="mb-4 text-gray-300">We use the collected data for various purposes, including:</p>
          
          <h3 className="text-xl font-semibold mb-2 text-white">3.1 Service Provision and Enhancement</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>To provide, maintain, and improve our Services</li>
            <li>To enable features such as collaborative editing and real-time synchronization</li>
            <li>To authenticate users and secure account access</li>
            <li>To personalize your experience based on preferences and usage patterns</li>
            <li>To develop new features and functionality based on user feedback</li>
            <li>To ensure compatibility with various devices and browsers</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">3.2 Communication and Support</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>To respond to inquiries, support requests, and feedback</li>
            <li>To send service-related notifications and updates</li>
            <li>To deliver information about new features, services, and promotions</li>
            <li>To solicit feedback and conduct user research</li>
            <li>To provide technical support and troubleshooting assistance</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">3.3 Analytics and Improvement</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>To analyze usage patterns and trends across our platform</li>
            <li>To measure the effectiveness of features and user interfaces</li>
            <li>To detect and prevent technical issues, errors, and bugs</li>
            <li>To improve AI model performance and accuracy through training</li>
            <li>To generate anonymized and aggregated insights about content creation</li>
            <li>To optimize system performance and resource allocation</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">4. Data Sharing and Third Parties</h2>
          <p className="mb-4 text-gray-300">We take your privacy seriously and limit data sharing to specific circumstances:</p>
          
          <h3 className="text-xl font-semibold mb-2 text-white">4.1 Service Providers</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>AI processing partners (OpenAI, Anthropic) for content generation</li>
            <li>Cloud hosting providers (AWS, Google Cloud) for infrastructure</li>
            <li>Payment processors (Stripe) for subscription and billing management</li>
            <li>Analytics services (Google Analytics) for usage monitoring</li>
            <li>Customer support platforms for issue resolution</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">4.2 Legal and Business Transfers</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>In response to a legal request or court order</li>
            <li>To comply with applicable laws and regulations</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>In connection with a merger, acquisition, or business transfer</li>
            <li>To enforce our terms of service and prevent misuse</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">4.3 With Your Consent</h3>
          <p className="text-gray-300 mb-4">
            We may share information with third parties when you have given explicit consent to do so. You can withdraw this consent at any time.
          </p>
          
          <div className="bg-[#1a1a1a] p-4 rounded-md border-l-4 border-[#22c55e] mb-4">
            <p className="text-white font-bold">Our Commitment:</p>
            <p className="text-gray-300">We do not sell your personal data to third parties for marketing or advertising purposes.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">5. Data Retention and Deletion</h2>
          
          <h3 className="text-xl font-semibold mb-2 text-white">5.1 Retention Periods</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>Account information: Retained for the duration of your account plus 30 days after deletion</li>
            <li>Content data: Stored according to your subscription plan terms</li>
            <li>Payment information: Kept in accordance with financial regulations (typically 7 years)</li>
            <li>Usage analytics: Retained in anonymized form for up to 24 months</li>
            <li>Communication records: Stored for up to 36 months for support purposes</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">5.2 Data Deletion</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>You may request complete deletion of your data at any time</li>
            <li>Account deletion will remove personal information within 30 days</li>
            <li>Content data will be permanently deleted from primary systems within 30 days</li>
            <li>Backup systems may retain data for up to 90 days for disaster recovery</li>
            <li>Some anonymized aggregate data may be retained for analytics purposes</li>
            <li>Data required for legal compliance may be retained as required by law</li>
          </ul>
          
          <p className="text-gray-300">
            To request data deletion, contact us at privacy@synaplyai.com or through your account settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">6. User Rights</h2>
          <p className="mb-4 text-gray-300">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          
          <h3 className="text-xl font-semibold mb-2 text-white">6.1 Access and Portability</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>Right to access personal data we hold about you</li>
            <li>Right to receive your data in a structured, machine-readable format</li>
            <li>Right to transfer your data to another service provider</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">6.2 Rectification and Erasure</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>Right to correct inaccurate or incomplete personal data</li>
            <li>Right to request deletion of your personal data</li>
            <li>Right to request restriction of processing your data</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">6.3 Objection and Consent</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>Right to object to processing of your personal data</li>
            <li>Right to withdraw consent at any time</li>
            <li>Right to opt out of marketing communications</li>
            <li>Right to not be subject to automated decision-making</li>
          </ul>
          
          <p className="text-gray-300">
            To exercise any of these rights, please contact us at privacy@synaplyai.com. We will respond to all 
            legitimate requests within 30 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">7. Security and Data Protection</h2>
          
          <h3 className="text-xl font-semibold mb-2 text-white">7.1 Technical Safeguards</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>End-to-end encryption for data in transit using TLS 1.3</li>
            <li>AES-256 encryption for all data at rest</li>
            <li>Regular security patching and vulnerability assessments</li>
            <li>Network monitoring and intrusion detection systems</li>
            <li>Role-based access control for internal systems</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">7.2 Organizational Controls</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>Employee security training and awareness programs</li>
            <li>Background checks for all staff with data access</li>
            <li>Multi-factor authentication for all internal tools</li>
            <li>Regular security audits and penetration testing</li>
            <li>Formal incident response and recovery procedures</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">7.3 Tenant Isolation</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Strict logical separation between customer accounts</li>
            <li>Isolated database schemas for customer data</li>
            <li>Custom encryption keys per tenant</li>
            <li>Robust access controls to prevent unauthorized cross-tenant access</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">8. International Compliance</h2>
          
          <h3 className="text-xl font-semibold mb-2 text-white">8.1 Cross-Border Transfers</h3>
          <p className="mb-4 text-gray-300">
            Our services are operated primarily from the United States. If you access our Services from outside the United States,
            be aware that your information may be transferred to, stored, and processed in the United States. By using our Services,
            you consent to the transfer and processing of your information in the United States.
          </p>
          
          <h3 className="text-xl font-semibold mb-2 text-white">8.2 Compliance Frameworks</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li><strong>GDPR Compliance:</strong> For users in the European Economic Area, we serve as a data controller and/or processor under the General Data Protection Regulation.</li>
            <li><strong>CCPA/CPRA Compliance:</strong> We honor the rights of California residents under the California Consumer Privacy Act and California Privacy Rights Act.</li>
            <li><strong>HIPAA Compliance:</strong> For customers in healthcare, we can sign Business Associate Agreements and maintain HIPAA-compliant environments.</li>
            <li><strong>SOC 2 Type II:</strong> Our systems and processes are regularly audited for security, availability, processing integrity, confidentiality, and privacy.</li>
          </ul>
          
          <p className="text-gray-300">
            For specific inquiries about our compliance with particular regulations or standards, please contact our compliance team at compliance@synaplyai.com.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">9. Breach Notification Policy</h2>
          <h3 className="text-xl font-semibold mb-2 text-white">9.1 Detection and Response</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>We maintain a 24/7 security operations center</li>
            <li>Automated alerts for suspicious activity or unauthorized access</li>
            <li>Dedicated incident response team ready to address potential breaches</li>
            <li>Detailed forensic investigation protocols for security incidents</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-white">9.2 Notification Process</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>In the event of a confirmed data breach affecting personal information, we will:</li>
            <li>Notify affected users within 72 hours of confirmation</li>
            <li>Provide details about what information was affected</li>
            <li>Explain actions taken to contain and remediate the breach</li>
            <li>Offer guidance on steps users can take to protect themselves</li>
            <li>Notify relevant regulatory authorities as required by law</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">10. Changes to Privacy Policy</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>SynaplyAI may update this Privacy Policy periodically to reflect changes in our practices or for legal reasons.</li>
            <li>We will provide notice of any material changes 30 days before they become effective.</li>
            <li>Updates will be posted on our website and notification will be sent to registered users.</li>
            <li>Your continued use of our Services after the effective date constitutes acceptance of the updated Privacy Policy.</li>
            <li>Previous versions of this policy will remain accessible in our policy archive.</li>
          </ul>
          
          <div className="bg-[#1a1a1a] p-4 rounded-md mt-6">
            <p className="text-gray-300">
              <span className="font-bold text-white">Questions or Concerns?</span> If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-[#22c55e] mt-2">privacy@synaplyai.io</p>
          </div>
        </section>
      </div>

      <footer className="bg-[#121212] border-t border-[#333333] py-8 text-center text-gray-400">
        <div className="container mx-auto">
          <p className="mb-4">© {new Date().getFullYear()} SynaplyAI. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
            <Link href="/terms-of-service" className="hover:text-[#22c55e] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
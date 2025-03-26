import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faThreads, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-10">
      <ul className="space-y-4">
        <li><Link href="/privacy-policy" className="hover:underline hover:text-[#22c55e] transition-colors">Privacy Policy</Link></li>
        <li><Link href="/terms-of-service" className="hover:underline hover:text-[#22c55e] transition-colors">Terms of Service</Link></li>
      </ul>
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://www.linkedin.com/company/synaplyai" target="_blank" className="social-link" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
        </a>
        <a href="#" className="social-link" aria-label="Threads">
          <FontAwesomeIcon icon={faThreads} className="w-5 h-5" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61574741668484" target="_blank" className="social-link" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
        </a>
      </div>
      
      {/* AI Content Disclaimer */}
      <div className="max-w-2xl mx-auto mt-8 text-xs text-gray-400 px-4">
        SynaplyAI generates content using machine learning models. Output may contain inaccuracies and should be verified before use. SynaplyAI is not responsible for decisions made based on AI-generated content. By using SynaplyAI, you agree to our <Link href="/terms-of-service" className="text-gray-400 hover:text-[#22c55e] underline">Terms of Service</Link> and <Link href="/privacy-policy" className="text-gray-400 hover:text-[#22c55e] underline">Privacy Policy</Link>.
      </div>
      
      <div className="text-gray-400 text-sm mt-6">
        © {currentYear} SynaplyAI. All rights reserved.
      </div>
    </footer>
  );
}
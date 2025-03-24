import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faThreads, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-10">
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Product Overview</a></li>
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Terms of Service</a></li>
      </ul>
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="social-link" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
        </a>
        <a href="#" className="social-link" aria-label="Threads">
          <FontAwesomeIcon icon={faThreads} className="w-5 h-5" />
        </a>
        <a href="#" className="social-link" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
        </a>
      </div>
      <div className="text-gray-400 text-sm mt-8">
        © {currentYear} SynaplyAI. All rights reserved.
      </div>
    </footer>
  );
}
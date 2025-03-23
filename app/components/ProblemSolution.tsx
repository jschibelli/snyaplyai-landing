import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faGlobe, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function ProblemSolution() {
  return (
    <section className="py-10">
      <h2 className="section-title text-center">AI Content Creation – Without the Limitations</h2>
      <div className="section-title-line"></div>
      <div className="problem-solution-section grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="problem bg-[#1e1e1e] p-8 rounded-xl shadow-lg transition-transform transform hover:translate-y-[-4px]">
          <h3 className="text-white font-bold text-lg mb-4">Problem</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faFileAlt} className="text-[#22c55e] text-2xl" />
              <span className="text-gray-300">AI-generated content is inconsistent and hard to control.</span>
            </li>
            <li className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faGlobe} className="text-[#22c55e] text-2xl" />
              <span className="text-gray-300">Collaborative editing introduces conflicts and state loss.</span>
            </li>
            <li className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faShieldAlt} className="text-[#22c55e] text-2xl" />
              <span className="text-gray-300">Compliance and governance gaps create legal exposure.</span>
            </li>
          </ul>
        </div>
        <div className="solution bg-[#1e1e1e] p-8 rounded-xl shadow-lg transition-transform transform hover:translate-y-[-4px]">
          <h3 className="text-white font-bold text-lg mb-4">Solution</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faGlobe} className="text-[#22c55e] text-2xl" />
              <span className="text-gray-300"><strong className="text-white">Adaptive AI Models</strong> – Consistent content output across multiple models.</span>
            </li>
            <li className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faFileAlt} className="text-[#22c55e] text-2xl" />
              <span className="text-gray-300"><strong className="text-white">Real-Time Conflict Resolution</strong> – Vector clocks maintain state integrity.</span>
            </li>
            <li className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faShieldAlt} className="text-[#22c55e] text-2xl" />
              <span className="text-gray-300"><strong className="text-white">Built-In Compliance</strong> – Multi-stage filtering + audit trail.</span>
            </li>
          </ul>
          <blockquote className="mt-4 italic text-gray-400">"Reduce content production time by 30% with AI-assisted editing."</blockquote>
        </div>
      </div>
    </section>
  );
}
/* globals.css */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faGlobe, faSyncAlt, faChartLine, faUsers, faLock, faBolt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

export default function CoreFeatures() {
  const features = [
    {
      title: "AI Model Access",
      description: "Supports OpenAI (GPT-4o) + Anthropic (Claude 3.7).",
      icon: faFileAlt
    },
    {
      title: "Conflict Resolution",
      description: "Vector-clock-based detection + operational transforms.",
      icon: faGlobe
    },
    {
      title: "Event Sourcing",
      description: "Real-time state handling + snapshot-based rollback.",
      icon: faSyncAlt
    },
    {
      title: "Token-Based Pricing",
      description: "Predictable usage tracking + tiered cost structure.",
      icon: faChartLine
    },
    {
      title: "Collaborative Editing",
      description: "Multi-user document editing with real-time sync.",
      icon: faUsers
    },
    {
      title: "Governance & Compliance",
      description: "Multi-stage filtering + SHA-256 logging.",
      icon: faLock
    },
    {
      title: "Real-Time Collaboration",
      description: "Real-time collaboration with audit-level tracking.",
      icon: faBolt
    },
    {
      title: "Audit-Level Tracking",
      description: "Governance-first AI model handling with audit-level tracking.",
      icon: faClipboardCheck
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title text-center">Core Features</h2>
      <div className="section-title-line"></div>
      <p className="section-subtext text-center">
        Our enterprise platform offers powerful capabilities designed for modern AI content creation and collaboration.
      </p>
      
      <div className="grid-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="flex items-center mb-1">
              <div className="feature-icon mr-4">
                <FontAwesomeIcon icon={feature.icon} size="lg" />
              </div>
              <h3 className="feature-title mb-0">{feature.title}</h3>
            </div>
            <p className="feature-description mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
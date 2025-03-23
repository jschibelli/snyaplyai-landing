import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function BusinessImpact() {
  const impacts = [
    {
      highlight: "25% Lower AI Content Costs",
      text: "Token-based pricing cuts excess spend.",
      icon: faDollarSign
    },
    {
      highlight: "98% Conflict Resolution Accuracy",
      text: "Consistent multi-user state.",
      icon: faChartLine
    },
    {
      highlight: "30% Faster Time-to-Market",
      text: "AI-assisted suggestions + state sync.",
      icon: faRocket
    },
    {
      highlight: "99.9% Uptime",
      text: "Redis-based state handling + failover support.",
      icon: faShieldAlt
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Deliver Measurable Business Results</h2>
      <div className="section-title-line"></div>
      <p className="section-subtext text-center">
        Our platform delivers tangible ROI across cost, performance, and reliability metrics.
      </p>
      
      <div className="grid-container">
        {impacts.map((impact, index) => (
          <div key={index} className="business-result">
            <div className="result-icon">
              <FontAwesomeIcon icon={impact.icon} size="2x" />
            </div>
            <div>
              <span className="result-highlight">{impact.highlight} → </span>
              <span className="result-text">{impact.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
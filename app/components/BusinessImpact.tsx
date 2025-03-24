"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { CTAButton } from './CTAButton';

export default function BusinessImpact() {
  // Track which metric is being hovered
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  
  const impacts = [
    {
      highlight: "25% Lower AI Content Costs",
      text: "Token-based pricing cuts excess spend.",
      icon: faDollarSign,
      tooltip: "Based on internal testing across multi-model content generation scenarios."
    },
    {
      highlight: "98.7% Conflict Resolution Accuracy", // Updated from 98% to 98.7%
      text: "Consistent multi-user state.",
      icon: faChartLine,
      tooltip: "Independent verification through multi-node distributed testing environment."
    },
    {
      highlight: "30% Faster Time-to-Market",
      text: "AI-assisted suggestions + state sync.",
      icon: faRocket,
      tooltip: "AI-assisted content suggestions and real-time sync improved workflow efficiency by 30%."
    },
    {
      highlight: "99.9% Uptime",
      text: "Redis-based state handling + failover support.",
      icon: faShieldAlt,
      tooltip: "Redundant infrastructure with automatic failover provides enterprise-grade reliability."
    }
  ];

  return (
    <section className="py-10 px-8 max-w-7xl mx-auto">
      <h2 className="section-title">Deliver Measurable Business Results</h2>
      <div className="section-title-line"></div>
      <p className="section-subtext text-center">
        Our platform delivers tangible ROI across cost, performance, and reliability metrics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {impacts.map((impact, index) => (
          <div 
            key={index} 
            className="business-result relative"
            onMouseEnter={() => setHoveredMetric(index)}
            onMouseLeave={() => setHoveredMetric(null)}
          >
            <div className="result-icon">
              <FontAwesomeIcon icon={impact.icon} size="2x" />
            </div>
            <div>
              <span className="result-highlight">{impact.highlight} → </span>
              <span className="result-text">{impact.text}</span>
            </div>
            
            {/* Tooltip that appears on hover */}
            {hoveredMetric === index && (
              <motion.div 
                className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ maxWidth: "calc(100% - 20px)", margin: "0 10px" }}
              >
                <p className="text-sm">{impact.tooltip}</p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-800"></div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <CTAButton 
          text="Join the Beta" 
          href="/signup" 
          variant="primary"
          ariaLabel="Join our beta program"
        />
      </div>
    </section>
  );
}
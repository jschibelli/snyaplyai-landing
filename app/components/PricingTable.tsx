"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';

export default function PricingSection() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Sample pricing tiers - replace with actual data
  const pricingTiers = [
    {
      name: "Basic",
      price: "$19",
      period: "per user/month",
      features: ["5 AI projects", "Basic collaboration", "Email support"],
      className: "free"
    },
    {
      name: "Professional",
      price: "$49",
      period: "per user/month",
      features: ["Unlimited AI projects", "Advanced collaboration", "Priority support", "API access"],
      popular: true,
      className: "pro"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: ["Custom integrations", "Dedicated instance", "24/7 support", "Advanced security"],
      className: "enterprise"
    }
  ];

  const handleEarlyAccess = () => {
    // Logic for signup would go here
    setShowConfirmation(true);
    
    // Hide confirmation after 5 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing
        </motion.h2>
        
        {/* Changed from grid to pricing-container class for better mobile support */}
        <motion.div 
          className="pricing-container md:grid md:grid-cols-3 md:gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`pricing-card ${tier.className}`}
              style={{ height: "320px" }}
            >
              {tier.popular && <div className="most-popular">Most Popular</div>}
              <h3 className="plan-title">{tier.name}</h3>
              <div className="plan-cost">
                <span>{tier.price}</span>
                <span className="text-gray-300 text-base ml-1">{tier.period}</span>
              </div>
              <ul className="space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="plan-feature">
                    <span className="plan-feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        
        {/* Add scroll indicator for mobile */}
        <div className="md:hidden flex justify-center mb-6">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
        
        {/* Single CTA with secondary style as requested */}
        <motion.div 
          className="flex flex-col items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CTAButton 
            variant="secondary"
            text="Secure Early Access" 
            onClick={handleEarlyAccess}
            ariaLabel="Secure early access to SynaplyAI pricing"
          />
          
          {/* Added urgency subtext as requested in change request item #5 */}
          <p className="text-sm text-gray-300 mt-2 italic max-w-md text-center">
            Priority invites will be sent on a first-come, first-served basis.
          </p>
          
          {/* Confirmation message */}
          {showConfirmation && (
            <motion.div
              className="mt-4 p-4 bg-green-100 text-green-800 rounded text-center max-w-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              You've secured early access. We'll notify you when the beta is live.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
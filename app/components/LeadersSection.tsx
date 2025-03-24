import React from 'react';

const LeadersSection = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 leaders-section relative">
      {/* Background with gradient and hexagonal pattern - same as FinalCTA */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.95)] to-[rgba(10,10,10,1)] z-0"
        style={{ 
          boxShadow: '0 -12px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Hexagonal pattern overlay */}
        <div 
          className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] bg-repeat opacity-15 z-0"
          style={{ backgroundSize: '60px 60px' }}
        ></div>
        
        {/* Soft vertical fade at top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-12">
          Powered by Industry-Leading Technology
        </h2>

        {/* Three Column Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8 mb-12">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-0 md:px-4 column">
            <p className="text-white text-base md:text-lg font-medium">
              <strong>OpenAI</strong> - GPT-4o provides best-in-class content generation and real-time suggestions.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-0 md:px-4 column">
            <p className="text-white text-base md:text-lg font-medium">
              <strong>Redis</strong> - State handling ensures fast conflict resolution and consistent multi-user state.
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-0 md:px-4 column">
            <p className="text-white text-base md:text-lg font-medium">
              <strong>Claude 3.7</strong> - Delivers nuanced, context-aware AI generation with adaptive responses.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-6">
          <p className="text-xl md:text-2xl mb-6 cta-text">
            Join the Beta and experience the future of AI-driven content creation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 cta-buttons">
            <button 
              className="text-white text-base cta-button-primary"
            >
              Join the Beta
            </button>
            <button 
              className="text-white text-base cta-button-secondary"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Exclusive Access Line */}
        <p className="text-center exclusive-text">
          Be among the first to experience AI-driven content creation — limited early access available.
        </p>
      </div>
    </section>
  );
};

export default LeadersSection;
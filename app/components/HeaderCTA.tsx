export default function HeaderCTA() {
  return (
    <div className="header-container header-animation py-24">
      <h1 className="hero-heading">Create, Collaborate, and Scale with AI</h1>
      <div className="section-title-line"></div>
      <p className="mt-4 text-lg">Enterprise-grade AI content creation with real-time collaboration and adaptive AI handling.</p>
      <div className="mt-6 space-x-4">
        <button className="primary-cta" aria-label="Join the SynaplyAI Beta">
          Join the Beta
        </button>
        <button className="secondary-cta" aria-label="Start Free Trial">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}
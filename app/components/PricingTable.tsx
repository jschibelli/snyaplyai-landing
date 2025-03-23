export default function PricingTable() {
  const plans = [
    {
      tier: "Free",
      price: "$0",
      features: "25K tokens, GPT-4o (low priority)",
      popular: false
    },
    {
      tier: "Pro",
      price: "$49/month",
      features: "250K tokens, faster processing, Claude 3.5",
      popular: true
    },
    {
      tier: "Business",
      price: "$199/month",
      features: "2M tokens, priority queue, conflict resolution",
      popular: false
    },
    {
      tier: "Enterprise",
      price: "$5K+/month",
      features: "Custom token limits, SLA, dedicated models",
      popular: false
    }
  ];

  return (
    <section className="py-10">
      <h2 className="section-title">Pricing Plans</h2>
      <div className="section-title-line"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card min-h-[320px] p-6 rounded-lg border ${plan.popular ? 'bg-green-50 border-green-500' : ''}`}
          >
            {plan.popular && <span className="text-green-600 font-bold">Most Popular</span>}
            <h3 className="font-bold text-xl mt-2">{plan.tier}</h3>
            <p className="text-2xl font-bold my-4">{plan.price}</p>
            <p>{plan.features}</p>
            <div className="flex-center mt-4">
              <button className={plan.popular ? "primary-cta w-full" : "secondary-cta w-full"}>
                {plan.tier === "Free" ? "Start Free" : "Choose Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
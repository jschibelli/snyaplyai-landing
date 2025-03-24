import CheckIcon from '/assets/icons/check.svg';
import SpeedIcon from '/assets/icons/speed.svg';
import ConflictIcon from '/assets/icons/conflict.svg';
import UptimeIcon from '/assets/icons/uptime.svg';

export default function SocialProof() {
  const testimonials = [
    {
      text: "SynaplyAI transformed our content creation workflow — real-time collaboration and AI-assisted editing saved us hours each week.",
      author: "Marketing Director, Fortune 500 Company"
    },
    {
      text: "The token-based pricing keeps our costs predictable while scaling our content operations.",
      author: "VP of Content, Enterprise Tech"
    }
  ];

  return (
    <section className="py-10  max-w-7xl mx-auto">
      <h2 className="section-title text-center">Trusted by Industry Leaders</h2>
      <div className="section-title-line"></div>
      <p className="section-subtext text-center">
        See how leading companies are leveraging SynaplyAI to transform their content operations.
      </p>
      
      <div className="grid-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">
              {testimonial.text}
            </p>
            <p className="testimonial-author">— {testimonial.author}</p>
          </div>
        ))}
      </div>
      
      <p className="text-center mt-8 text-lg">
        Join companies like OpenAI, Redis, and Anthropic in redefining AI-driven content creation.
      </p>
    </section>
  );
}
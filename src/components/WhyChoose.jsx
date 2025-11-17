export default function WhyChoose() {
  const bullets = [
    {
      title: 'AI-Powered Automation',
      desc: 'Reduce manual data entry by 80% with intelligent PDF extraction and automated order processing.'
    },
    {
      title: 'Multi-Provider Flexibility',
      desc: 'Use LocTracker, Wialon, WebEye, or mix providers within one fleet.'
    },
    {
      title: 'Improve Driver Performance',
      desc: 'Reduce fuel costs by up to 15% with eco-driving monitoring and AI coaching.'
    },
    {
      title: 'Scale Effortlessly',
      desc: 'Multi-tenant architecture designed for growth — from 10 to 10,000 vehicles.'
    },
    {
      title: 'Secure & Compliant',
      desc: 'Enterprise-grade security, encryption, and complete audit trails.'
    },
    {
      title: 'European Market Ready',
      desc: 'VIES VAT validation, tachograph compliance, and regional integrations.'
    }
  ]

  return (
    <section className="bg-gray-50 py-16 sm:py-24" id="why">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Choose TAFI?</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bullets.map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

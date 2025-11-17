export default function Features() {
  const featureGroups = [
    {
      title: 'Real-Time Fleet Tracking & Management',
      emoji: '🚛',
      items: [
        'Multi-Provider GPS Integration (LocTracker, Wialon, WebEye)',
        'Live Fleet Visualization on interactive maps',
        'Smart Vehicle Management with VIN decoding',
        'Free Truck Detection for new orders',
        'Driver-Vehicle Assignment with audit history',
      ],
    },
    {
      title: 'Intelligent Order Management',
      emoji: '📦',
      items: [
        'AI-Powered PDF Extraction via Google Gemini',
        'Multi-Stop Support up to 10 stops',
        'Smart Dispatch via GPS, email, app, Telegram, TMS',
        'Order Approval Workflow & validation',
        'Real-Time Order Tracking & proof-of-delivery',
      ],
    },
    {
      title: 'Eco-Driving & Performance',
      emoji: '🌱',
      items: [
        '20+ Driving Metrics (fuel, idling, braking, speeding, RPM)',
        'AI Coaching System via Telegram',
        'Driver Leaderboards & performance rating',
        'Automated daily/weekly coaching reports',
        'Fuel Consumption analytics & trends',
      ],
    },
  ]

  return (
    <section className="relative bg-white py-16 sm:py-24" id="features">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Key Features</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">A snapshot of what you can do with TAFI. Built to scale from 10 to 10,000 vehicles.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featureGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="text-2xl mb-3">{group.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{group.title}</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

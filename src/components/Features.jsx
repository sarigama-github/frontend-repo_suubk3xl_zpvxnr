import { motion } from 'framer-motion'

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
    <section className="relative bg-white py-20 sm:py-28" id="features">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Key Features</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">A snapshot of what you can do with TAFI. Built to scale from 10 to 10,000 vehicles.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featureGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition bg-white"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

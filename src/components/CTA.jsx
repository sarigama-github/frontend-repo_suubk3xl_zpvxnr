export default function CTA() {
  return (
    <section id="get-started" className="relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white py-16 sm:py-24 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Get Started Today</h2>
            <p className="mt-3 text-emerald-50 max-w-2xl">Transform your fleet operations with real-time tracking, AI-powered automation, and logistics that scale with you.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-emerald-700 font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition">Start Free Trial</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-emerald-800/40 ring-1 ring-white/30 text-white font-semibold px-5 py-3 hover:bg-emerald-800/60 transition">Request Demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

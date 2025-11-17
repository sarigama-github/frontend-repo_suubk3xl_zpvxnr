import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-3xl">
          <span className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-300/90 bg-emerald-300/10 ring-1 ring-emerald-300/30 px-3 py-1 rounded-full mb-6">
            The Complete Fleet Management & Logistics Platform
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
            Transform Your Fleet Operations with Intelligence
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed">
            TAFI is the all-in-one fleet management platform that combines real-time tracking, AI-powered automation, and comprehensive logistics management. Built for modern transportation companies who demand efficiency, compliance, and growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3 shadow-lg shadow-emerald-500/30 transition">Start Free Trial</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 ring-1 ring-white/30 transition">Request Demo</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 ring-1 ring-white/30 transition">Contact Sales</a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-white/70">
            <div className="backdrop-blur-md bg-white/5 ring-1 ring-white/10 rounded-lg px-3 py-2">Multi-Provider GPS</div>
            <div className="backdrop-blur-md bg-white/5 ring-1 ring-white/10 rounded-lg px-3 py-2">AI Automation</div>
            <div className="backdrop-blur-md bg-white/5 ring-1 ring-white/10 rounded-lg px-3 py-2">Eco Driving</div>
            <div className="backdrop-blur-md bg-white/5 ring-1 ring-white/10 rounded-lg px-3 py-2">Compliance</div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Hero from './components/Hero'
import Features from './components/Features'
import WhyChoose from './components/WhyChoose'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <Features />
      <WhyChoose />
      <CTA />
      <footer className="py-10 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <p>© {new Date().getFullYear()} TAFI — The Complete Fleet Management & Logistics Platform</p>
          <div className="mt-2 flex items-center justify-center gap-6">
            <a className="hover:text-gray-700" href="#features">Features</a>
            <a className="hover:text-gray-700" href="#why">Why TAFI</a>
            <a className="hover:text-gray-700" href="/test">System Test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

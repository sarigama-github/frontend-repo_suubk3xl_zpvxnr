import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#why', label: 'Why TAFI' },
    { href: '#get-started', label: 'Get Started' },
    { href: '/test', label: 'System Test' },
  ]

  return (
    <div className="sticky top-0 z-50">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-3 mt-3 rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm border border-black/5"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-inner" />
            <span className="font-extrabold tracking-tight text-gray-900">TAFI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#get-started" className="inline-flex items-center rounded-lg bg-emerald-600 text-white text-sm font-semibold px-4 py-2 shadow hover:bg-emerald-700 transition-colors">
              Start Free
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10 hover:bg-black/5 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-black/5"
            >
              <div className="px-6 py-4 grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-black/5"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a href="#get-started" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white text-sm font-semibold px-4 py-2 shadow hover:bg-emerald-700">
                  Start Free
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {eyebrow && (
            <div className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-emerald-700 bg-emerald-100 ring-1 ring-emerald-200 px-3 py-1 rounded-full mb-6">
              {eyebrow}
            </div>
          )}
          {title && <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">{title}</h2>}
          {subtitle && <p className="mt-4 text-gray-600 max-w-3xl">{subtitle}</p>}
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}

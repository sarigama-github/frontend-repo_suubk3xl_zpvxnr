import { motion } from 'framer-motion'

const logos = [
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/volvo.svg',
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/scania.svg',
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mercedes.svg',
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/renault.svg',
  'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/iveco.svg',
]

export default function Logos() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="flex items-center gap-12 opacity-60"
      >
        {[...logos, ...logos].map((src, i) => (
          <img key={i} src={src} alt="logo" className="h-8 w-auto" />
        ))}
      </motion.div>
    </div>
  )
}

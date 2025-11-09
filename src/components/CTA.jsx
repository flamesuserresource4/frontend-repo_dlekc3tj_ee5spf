import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_40%,rgba(255,215,0,0.12),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.04)_0deg,transparent_120deg,rgba(255,255,255,0.04)_240deg,transparent_360deg)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Ready to take off?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-white/75"
        >
          Speak with our flight team and get instant availability, transparent pricing, and aircraft options curated to your route.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-medium text-black shadow-lg shadow-amber-400/10 transition-transform hover:scale-[1.02]"
        >
          Get a quote
        </motion.a>
      </div>
    </section>
  )
}

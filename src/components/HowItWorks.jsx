import { motion } from 'framer-motion'
import { MapPin, Plane, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    title: 'Choose destination',
    desc: 'Tell us where and when — we handle the rest with real-time availability.',
  },
  {
    icon: Plane,
    title: 'Select aircraft',
    desc: 'From light jets to long-range — choose the cabin and range that fit your trip.',
  },
  {
    icon: CheckCircle2,
    title: 'Take off',
    desc: 'Seamless check-in, private terminals, and white-glove service door-to-door.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#0a0c10] py-24 text-white">
      <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]">
        <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          How it works
        </motion.h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

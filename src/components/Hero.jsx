import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Plane, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlays for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-sm text-white/80">On-Demand & Empty Leg Jets</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Your Private Jet, On Demand
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Fly anywhere, anytime — book a full charter or claim an empty leg. Effortless, secure, and tailored to your schedule.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black shadow/50 shadow-black/30 transition-transform hover:scale-[1.02] focus:outline-none"
              >
                <Plane className="h-5 w-5" />
                Book Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#empty-legs"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <Calendar className="h-5 w-5" />
                Explore Empty Legs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

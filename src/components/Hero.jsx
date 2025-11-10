import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Plane, Calendar, Sparkles } from 'lucide-react'

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    console.error('Spline failed to load:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default function Hero() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <SplineErrorBoundary
          fallback={
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0e14] to-black" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
            </div>
          }
        >
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </SplineErrorBoundary>
      </div>

      {/* Cinematic gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span className="text-sm text-white/80">Futuristic charter • Interactive 3D</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl"
            >
              Charter in a New Dimension
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-4 max-w-2xl text-lg text-white/80"
            >
              Private flights reimagined with cinematic visuals, instant availability, and concierge-level care from door to sky.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#book"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileHover={{ y: -2 }}
                className="group relative inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black shadow/50 shadow-black/30 transition-transform focus:outline-none"
              >
                <Plane className="h-5 w-5" />
                Book Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <motion.span
                  aria-hidden
                  className="absolute"
                  initial={false}
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#empty-legs"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <Calendar className="h-5 w-5" />
                Explore Empty Legs
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating shimmer accents for extra motion */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-24 w-24 -translate-x-1/2 rounded-full bg-amber-300/20 blur-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.9, 1, 0.95], y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-10 bottom-24 h-20 w-20 rounded-full bg-fuchsia-400/10 blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.9, 1.02, 0.96], y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
    </section>
  )
}

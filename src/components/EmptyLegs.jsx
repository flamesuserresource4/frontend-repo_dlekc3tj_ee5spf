import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const routes = [
  { from: 'Teterboro (TEB)', to: 'Miami (OPF)', date: 'Nov 26', price: '$8,900' },
  { from: 'Van Nuys (VNY)', to: 'Aspen (ASE)', date: 'Nov 28', price: '$7,400' },
  { from: 'Dallas (DAL)', to: 'Nassau (NAS)', date: 'Dec 2', price: '$9,100' },
  { from: 'London (LTN)', to: 'Nice (NCE)', date: 'Dec 4', price: '€6,800' },
]

export default function EmptyLegs() {
  return (
    <section id="empty-legs" className="relative bg-[#0a0c10] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_0%,rgba(255,215,0,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Empty legs</h2>
            <p className="mt-2 text-white/70">Claim repositioning flights at exceptional rates.</p>
          </div>
          <a href="#book" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm backdrop-blur hover:bg-white/20">
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r, i) => (
            <motion.div
              key={r.from + r.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">From</p>
                  <p className="mt-1 font-medium">{r.from}</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-white/50">To</p>
                  <p className="mt-1 font-medium">{r.to}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                <span>{r.date}</span>
                <span className="font-medium text-amber-300">{r.price}</span>
              </div>
              <a
                href="#book"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/90 px-4 py-2 font-medium text-black transition-colors hover:bg-white"
              >
                Book flight
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-300/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

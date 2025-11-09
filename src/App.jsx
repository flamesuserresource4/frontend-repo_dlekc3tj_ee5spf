import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import EmptyLegs from './components/EmptyLegs'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <HowItWorks />
      <EmptyLegs />
      <CTA />
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight">LUX JET</a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a className="hover:text-white" href="#empty-legs">Empty Legs</a>
          <a className="hover:text-white" href="#fleet">Fleet</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <a href="#book" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black">Book</a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-10 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} LUX JET. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}

function ScrollProgress() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60]">
      <div className="h-0.5 bg-gradient-to-r from-amber-300 via-white to-amber-300 [animation:shimmer_6s_linear_infinite]" />
      <style>{`
        @keyframes shimmer {0% {background-position: -200% 0;} 100% {background-position: 200% 0;}}
        .bg-gradient-to-r { background-size: 200% 100%; }
      `}</style>
    </div>
  )
}

export default App

import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-40 w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 shadow-lg"></div>
          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-tight">Cleer</span>
            <span className="text-xs text-blue-200/80">by Solnetex</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-blue-200/90 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-blue-200/90 hover:text-white transition-colors">About</a>
          <a href="#demo" className="text-blue-200/90 hover:text-white transition-colors">Demo</a>
        </div>

        <div className="hidden md:block">
          <a href="#cta" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/10 transition-colors">
            Request Early Access
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 focus:outline-none" aria-label="Toggle menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-xl bg-slate-800/70 backdrop-blur border border-white/10 p-4 space-y-3">
          <a onClick={() => setOpen(false)} href="#features" className="block text-blue-100">Features</a>
          <a onClick={() => setOpen(false)} href="#about" className="block text-blue-100">About</a>
          <a onClick={() => setOpen(false)} href="#demo" className="block text-blue-100">Demo</a>
          <a onClick={() => setOpen(false)} href="#cta" className="block text-white font-medium">Request Early Access</a>
        </div>
      )}
    </header>
  )
}

export default Navbar

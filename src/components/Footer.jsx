function Footer() {
  return (
    <footer className="relative py-10 mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Solnetex — Cleer</p>
        <div className="flex items-center gap-5 text-sm">
          <a href="#about" className="text-blue-200/80 hover:text-white">About</a>
          <a href="#cta" className="text-blue-200/80 hover:text-white">Contact</a>
          <a href="#" className="text-blue-200/80 hover:text-white">Privacy</a>
          <a href="#" className="text-blue-200/80 hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

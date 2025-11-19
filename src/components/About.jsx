function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">From Solnetex</h2>
          <p className="mt-4 text-blue-100/90 leading-relaxed">
            Solnetex builds intelligent tools that act as extensions of yourself. Our vision is simple: create software that understands context, adapts to your style, and helps you execute faster — safely and reliably.
          </p>

          <div className="mt-8">
            <h3 className="text-white font-semibold">How Cleer Works</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl p-4 bg-white/[0.04] border border-white/10">
                <p className="text-sm text-blue-100">Observe</p>
                <p className="mt-1 text-xs text-blue-200/80">Understands what you’re doing across apps.</p>
              </div>
              <div className="rounded-xl p-4 bg-white/[0.04] border border-white/10">
                <p className="text-sm text-blue-100">Analyze</p>
                <p className="mt-1 text-xs text-blue-200/80">Interprets context to plan actions.</p>
              </div>
              <div className="rounded-xl p-4 bg-white/[0.04] border border-white/10">
                <p className="text-sm text-blue-100">Perform</p>
                <p className="mt-1 text-xs text-blue-200/80">Executes tasks with your permission.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden bg-slate-900/40 ring-1 ring-white/10 p-4">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-100 text-center px-6">
              <p className="text-sm">Short 5–10s clip or illustration can live here to showcase Cleer automating tasks. This placeholder is optimized and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

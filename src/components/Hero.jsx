import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.15),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Cleer – Your Personal AI Co-Pilot
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-100/90 leading-relaxed">
            Seamlessly interacts with your digital environment, automates tasks, and learns your workflow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:opacity-95 transition">
              Request Early Access
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 px-5 py-3 text-white border border-white/10 transition">
              See Cleer in Action
            </a>
          </div>

          <p className="mt-4 text-sm text-blue-200/70">Controlled, logged, and permission-based actions. Privacy first.</p>
        </div>

        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero

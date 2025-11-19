import { Sparkles, Workflow, ShieldCheck, GaugeCircle, ClipboardCheck, Settings2 } from 'lucide-react'

const features = [
  {
    title: 'Context Awareness',
    description:
      'Detects open apps, documents, and your workflow context to provide intelligent suggestions and actions.',
    icon: GaugeCircle,
  },
  {
    title: 'Task Automation',
    description:
      'Performs repetitive or complex tasks automatically — from filling forms to navigating software.',
    icon: ClipboardCheck,
  },
  {
    title: 'Adaptive Learning',
    description:
      'Learns your preferences and patterns to become more effective over time.',
    icon: Sparkles,
  },
  {
    title: 'Personalization',
    description:
      'Offers tailored recommendations, shortcuts, and task optimization for you.',
    icon: Settings2,
  },
  {
    title: 'Safe & Secure',
    description:
      'All actions are controlled, logged, and permission-based. Your privacy is respected.',
    icon: ShieldCheck,
  },
  {
    title: 'Workflow Native',
    description:
      'Seamlessly integrates with your daily tools to orchestrate end-to-end tasks.',
    icon: Workflow,
  },
]

function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for real work</h2>
          <p className="mt-3 text-blue-100/90">The capabilities you need to go from idea to action.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 hover:bg-white/[0.06] transition shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 flex items-center justify-center ring-1 ring-white/10">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

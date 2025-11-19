import { useEffect, useState } from 'react'

function Demo() {
  const [autoFill, setAutoFill] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', task: '' })

  useEffect(() => {
    if (autoFill) {
      const timer = setTimeout(() => {
        setForm({ name: 'Alex Rivera', company: 'Solnetex', task: 'Generate Q3 summary and schedule follow-ups' })
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [autoFill])

  return (
    <section id="demo" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Try the workflow preview</h2>
          <p className="mt-4 text-blue-100/90">A lightweight simulation showing Cleer filling a form and preparing a task plan.</p>

          <div className="mt-6 flex items-center gap-3">
            <button onClick={() => setAutoFill(true)} className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-white/10 transition">Play</button>
            <button onClick={() => { setAutoFill(false); setForm({ name: '', company: '', task: '' }) }} className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-white/10 transition">Reset</button>
          </div>
        </div>

        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur">
          <div className="grid gap-4">
            <label className="block">
              <span className="text-sm text-blue-100">Name</span>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm text-blue-100">Company</span>
              <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50" placeholder="Company name" />
            </label>
            <label className="block">
              <span className="text-sm text-blue-100">Task</span>
              <textarea value={form.task} onChange={e => setForm({ ...form, task: e.target.value })} rows={3} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50" placeholder="Describe what Cleer should do" />
            </label>
            <div className="text-right text-xs text-blue-200/70">Simulated only — no actions performed.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo

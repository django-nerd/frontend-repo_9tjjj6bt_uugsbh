import { useState } from 'react'

function CTA() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backend}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600/20 via-blue-600/20 to-purple-600/20 border border-white/10 p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Join the beta</h2>
              <p className="mt-3 text-blue-100/90">Get early access or request a live demo.</p>
              {status === 'success' && (
                <p className="mt-4 text-green-300">Thanks! We\'ll be in touch shortly.</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-300">Something went wrong. Please try again.</p>
              )}
            </div>

            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50" placeholder="Name" />
                <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50" type="email" placeholder="Email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50" placeholder="Company" />
                <input value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50" placeholder="What do you want to achieve with Cleer?" />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button disabled={status==='loading'} className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-blue-50 transition disabled:opacity-60">
                  {status==='loading' ? 'Submitting…' : 'Request Early Access'}
                </button>
                <p className="text-xs text-blue-200/70">By submitting, you agree to our Privacy Policy.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

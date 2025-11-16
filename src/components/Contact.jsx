import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        setStatus({ type: 'success', msg: "Thanks! I'll get back to you soon." })
        e.currentTarget.reset()
      } else {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || 'Failed to send')
      }
    } catch (e) {
      setStatus({ type: 'error', msg: 'Could not send right now. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Let’s talk</h2>
          <p className="text-gray-600 mt-2">Have a project in mind or just want to say hello? Drop a note.</p>
        </div>
        <form onSubmit={onSubmit} className="bg-white border rounded-xl shadow-sm p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Name</label>
              <input name="name" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Email</label>
              <input name="email" type="email" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-gray-700">Subject</label>
            <input name="subject" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-gray-700">Message</label>
            <textarea name="message" rows="5" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
          {status && (
            <div className={status.type === 'success' ? 'text-green-600' : 'text-red-600'}>
              {status.msg}
            </div>
          )}
          <button disabled={loading} className="px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition disabled:opacity-60">
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

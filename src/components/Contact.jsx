import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '36782469-03b0-44ab-a334-5a0830f4c992',
          ...formData,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setErrorMessage('Something went wrong. Please try again.')
      }
    } catch {
      setErrorMessage('Network error. Failed to send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto scroll-mt-16">
      <div className="w-full bg-surface border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col mb-8">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-2">
            Get In Touch
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Let's Collaborate
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Have a project in mind or want to talk about frontend opportunities?
            Drop me a message!
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-emerald-400 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {' '}
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs font-mono text-accent hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-canvas border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-accent/40 focus:ring-1 focus:ring-accent/40 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="shova@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-canvas border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-accent/40 focus:ring-1 focus:ring-accent/40 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project ideas..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-canvas border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-accent/40 focus:ring-1 focus:ring-accent/40 transition-all duration-200 resize-none"
              />
            </div>

            {errorMessage && (
              <p className="text-xs font-medium text-rose-400 mt-1">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto self-start mt-2 px-6 py-3 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm rounded-lg shadow-lg shadow-accent/5 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:transform-none cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact

import { Mail, Github, Linkedin } from 'lucide-react'
import Reveal from './ui/Reveal'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shovap33@gmail.com',
    href: 'mailto:shovap33@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shova-pandey',
    href: 'https://linkedin.com/in/shova-pandey',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/shova10',
    href: 'https://github.com/shova10',
  },
]

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-3xl mx-auto scroll-mt-16">
      <Reveal className="w-full glass-panel rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blush/10 rounded-full blur-3xl pointer-events-none animate-glow" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-lavender/10 rounded-full blur-3xl pointer-events-none animate-glow" />

        <span className="font-script text-2xl text-gold mb-2 inline-block">
          say hello
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-medium text-(--color-text-warm) tracking-tight mb-3">
          Let's Connect
        </h2>
        <p className="text-(--color-text-muted) text-sm max-w-md mx-auto mb-10">
          Have a project in mind or want to talk about frontend opportunities?
          Reach out through any of these. I'd love to hear from you.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex flex-col items-center gap-3 rounded-2xl px-5 py-6 bg-(--color-canvas-soft) border border-(--color-border-soft) hover:-translate-y-1 hover:border-blush/40 hover:shadow-[0_12px_30px_-14px_rgba(232,143,163,0.35)] transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-full glass-panel flex items-center justify-center group-hover:text-blush transition-colors">
                <link.icon className="w-5 h-5 text-blush" strokeWidth={1.8} />
              </span>
              <span className="text-xs uppercase tracking-wider font-medium text-(--color-text-muted)">
                {link.label}
              </span>
              <span className="text-sm font-medium text-(--color-text-warm) break-all">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Contact

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown } from 'lucide-react'
import MoodPill from './ui/MoodPill'

const moods = [
  '☕ coffee-coded',
  '🌙 night owl',
  '🎨 detail-obsessed',
  '🚀 curious by default',
]

function Hero() {
  return (
    <section
      id="hero"
      className="px-6 flex flex-col items-center justify-center text-center min-h-[90vh] relative max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl flex flex-col items-center"
      >
        <span className="font-script text-2xl text-gold mb-3">
          welcome to my corner of the internet
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-(--color-text-warm) mb-4">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blush via-gold to-lavender">
            Shova Pandey
          </span>
        </h1>

        <p className="font-display italic text-xl md:text-2xl font-medium text-blush mb-6">
          a frontend developer who builds things she'd want to use
        </p>

        <p className="font-sans text-(--color-text-muted) text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          Final-year BIT student in Kathmandu, Nepal. I've been curious about
          computers since I was a kid these days that curiosity shows up as
          React interfaces I obsess over pixel by pixel, and a growing pull
          toward fullstack and data science.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {moods.map((m) => (
            <MoodPill key={m}>{m}</MoodPill>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <a
            href="#project"
            className="w-full sm:w-auto text-center px-7 py-3 bg-blush hover:bg-blush-hover text-(--color-canvas) text-sm font-semibold rounded-full shadow-lg shadow-blush/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-7 py-3 glass-panel text-(--color-text-warm) hover:text-blush text-sm font-medium rounded-full transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 border-t border-(--color-border-soft) pt-8 w-full">
          <a
            href="https://github.com/shova10"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-(--color-text-muted) hover:text-blush transition-colors"
          >
            <Github className="w-4.5 h-4.5" strokeWidth={1.8} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shova-pandey"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-(--color-text-muted) hover:text-blush transition-colors"
          >
            <Linkedin className="w-4.5 h-4.5" strokeWidth={1.8} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 text-(--color-text-muted) hover:text-blush transition-colors"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  )
}

export default Hero

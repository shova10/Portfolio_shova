import { Github, Linkedin, Sparkle } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-(--color-border-soft) py-6 px-6 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--color-text-muted)">
        <p className="flex items-center gap-1.5 text-center sm:text-left">
          &copy; {currentYear} &middot; Designed & built with
          <Sparkle className="w-3 h-3 text-gold" />
          by{' '}
          <span className="font-display text-(--color-text-warm) font-medium">
            Shova Pandey
          </span>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/shova10"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-blush transition-colors duration-200"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/shova-pandey"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-blush transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

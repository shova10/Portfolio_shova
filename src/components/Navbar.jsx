import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react'

const navlinks = [
  { label: 'About', href: '#about' },
  { label: 'Currently', href: '#currently' },
  { label: 'Projects', href: '#project' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  function toggleTheme() {
    setIsLight((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      const elements = navlinks.map((link) => document.querySelector(link.href))
      const scrollPosition = window.scrollY + 100

      elements.forEach((el) => {
        if (!el) return
        const top = el.offsetTop
        const bottom = top + el.offsetHeight

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection('#' + el.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-[color-mix(in_srgb,var(--color-canvas)_80%,transparent)] backdrop-blur-md border-b border-(--color-border-soft)"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-1.5 text-lg font-display font-semibold tracking-tight text-(--color-text-warm) hover:text-blush transition-colors"
        >
          Shova Pandey
          <Sparkles className="w-4 h-4 text-gold" strokeWidth={2} />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navlinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 font-medium ${
                  activeSection === link.href
                    ? 'text-blush glass-panel'
                    : 'text-(--color-text-muted) hover:text-(--color-text-warm) hover:bg-(--color-border-soft)'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={
              isLight ? 'Switch to dark mode' : 'Switch to light mode'
            }
            className="p-2 rounded-full text-(--color-text-muted) hover:text-blush hover:bg-(--color-border-soft) transition-colors"
          >
            {isLight ? (
              <Moon className="w-4.5 h-4.5" />
            ) : (
              <Sun className="w-4.5 h-4.5" />
            )}
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-full text-(--color-text-muted) hover:text-blush hover:bg-(--color-border-soft) transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-(--color-border-soft) bg-[color-mix(in_srgb,var(--color-canvas)_95%,transparent)] backdrop-blur-lg"
        >
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navlinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-sm transition-colors ${
                    activeSection === link.href
                      ? 'text-blush glass-panel font-semibold'
                      : 'text-(--color-text-muted) hover:text-(--color-text-warm) hover:bg-(--color-border-soft)'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

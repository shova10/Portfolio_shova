import { useState, useEffect } from 'react'

const navlinks = [
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#project' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

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
      className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-heading font-bold tracking-tight text-white hover:text-accent transition-colors"
        >
          Shova<span className="text-accent">.dev</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-2">
          {navlinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 font-medium ${
                  activeSection === link.href
                    ? 'text-accent bg-surface border border-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile*/}
        <button
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-surface border border-transparent hover:border-white/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/5 bg-canvas/95 backdrop-blur-lg"
        >
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navlinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-sm transition-colors ${
                    activeSection === link.href
                      ? 'text-accent bg-surface font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
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

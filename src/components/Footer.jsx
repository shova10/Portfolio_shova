function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-canvas border-t border-white/5 py-2 px-6 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <p className="text-center sm:text-left">
          &copy; {currentYear} &middot; Designed & built by{' '}
          <span className="text-gray-300 font-sans font-medium hover:text-accent transition-colors">
            Shova Pandey
          </span>
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/shova10"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shova-pandey"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

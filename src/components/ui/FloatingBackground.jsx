function FloatingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-24 -left-20 h-72 w-72 rounded-full opacity-40 blur-3xl animate-float-slow"
        style={{
          background:
            'radial-gradient(circle, var(--color-blush), transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/3 -right-24 h-96 w-96 rounded-full opacity-30 blur-3xl animate-float-slower"
        style={{
          background:
            'radial-gradient(circle, var(--color-lavender), transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{
          background:
            'radial-gradient(circle, var(--color-gold), transparent 70%)',
        }}
      />

      {[
        { top: '12%', left: '8%', size: 6, delay: '0s' },
        { top: '22%', left: '82%', size: 4, delay: '0.6s' },
        { top: '48%', left: '18%', size: 5, delay: '1.2s' },
        { top: '65%', left: '90%', size: 6, delay: '0.3s' },
        { top: '78%', left: '12%', size: 4, delay: '1.6s' },
        { top: '88%', left: '60%', size: 5, delay: '0.9s' },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute animate-sparkle"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <svg
            width={s.size * 4}
            height={s.size * 4}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
              fill="var(--color-gold)"
            />
          </svg>
        </span>
      ))}
    </div>
  )
}

export default FloatingBackground

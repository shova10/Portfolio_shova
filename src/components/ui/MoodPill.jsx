function MoodPill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium
        glass-panel text-(--color-text-warm) shadow-[0_2px_12px_-4px_rgba(232,143,163,0.25)]
        hover:-translate-y-0.5 hover:shadow-[0_6px_16px_-4px_rgba(232,143,163,0.4)]
        transition-all duration-300 ${className}`}
    >
      {children}
    </span>
  )
}

export default MoodPill

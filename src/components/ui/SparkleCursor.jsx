import { useEffect, useRef, useState } from 'react'
function SparkleCursor() {
  const [sparkles, setSparkles] = useState([])
  const lastSpawn = useRef(0)
  const idRef = useRef(0)

  useEffect(() => {
    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (!canHover || reduceMotion) return

    function handleMove(e) {
      const now = Date.now()
      if (now - lastSpawn.current < 90) return
      lastSpawn.current = now

      const id = idRef.current++
      setSparkles((prev) => [
        ...prev.slice(-12),
        { id, x: e.clientX, y: e.clientY },
      ])

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id))
      }, 650)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999"
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute block h-1.5 w-1.5 rounded-full"
          style={{
            left: s.x - 3,
            top: s.y - 3,
            background: 'var(--color-blush)',
            boxShadow: '0 0 8px 2px var(--color-gold)',
            animation: 'sparkle-fade 0.65s ease-out forwards',
          }}
        />
      ))}
      <style>{`
        @keyframes sparkle-fade {
          0% { opacity: 0.9; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.2) translateY(-10px); }
        }
      `}</style>
    </div>
  )
}

export default SparkleCursor

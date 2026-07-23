import {
  Rocket,
  BookOpen,
  Users,
  Sparkle,
  Code2,
  BrainCircuit,
} from 'lucide-react'
import Reveal from './ui/Reveal'

const facts = [
  { icon: Code2, label: 'Currently learning', value: 'Next.js & TypeScript' },
  {
    icon: Rocket,
    label: 'Heading toward',
    value: 'Fullstack, then maybe Data Science',
  },
  { icon: Sparkle, label: 'Into lately', value: 'Space & astronomy' },
  { icon: BookOpen, label: 'Slow mornings', value: 'Listening to poetry' },
  { icon: Users, label: 'Root for', value: 'Women in Tech' },
  { icon: BrainCircuit, label: 'Rabbit holes', value: 'AI & Data Science' },
]

function Currently() {
  return (
    <section
      id="currently"
      className="py-16 px-6 max-w-5xl mx-auto scroll-mt-16"
    >
      <Reveal>
        <span className="inline-block font-script text-2xl text-gold mb-2">
          right now
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-(--color-text-warm) mb-3">
          Currently
        </h2>
        <p className="font-sans text-(--color-text-muted) max-w-xl mb-10">
          A few things occupying my brain lately — some of it is code, some of
          it isn't, all of it is genuinely me.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facts.map((f, i) => (
          <Reveal delay={i * 0.06} key={f.label}>
            <div className="glass-panel rounded-3xl p-6 h-full hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(232,143,163,0.35)] transition-all duration-300">
              <f.icon className="w-6 h-6 text-blush mb-4" strokeWidth={1.8} />
              <p className="text-xs uppercase tracking-wider font-medium text-(--color-text-muted) mb-1.5">
                {f.label}
              </p>
              <p className="font-display text-lg text-(--color-text-warm)">
                {f.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-6">
        <p className="text-center font-sans text-sm text-(--color-text-muted) italic">
          I like learning new things and anything that genuinely challenges my
          brain.
        </p>
      </Reveal>
    </section>
  )
}

export default Currently

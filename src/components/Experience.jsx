import { GraduationCap, Code2 } from 'lucide-react'
import Reveal from './ui/Reveal'

const timeline = [
  {
    icon: GraduationCap,
    period: 'Expected 2026',
    title: 'Bachelor of Information Technology (BIT)',
    place: 'Bhairahawa Multiple Campus, Tribhuvan University',
    description:
      'Final-year coursework covering web development, databases, and software engineering fundamentals.',
  },
  {
    icon: Code2,
    period: 'Ongoing',
    title: 'Independent & Academic Projects',
    place: 'Self-directed',
    description:
      'Hands-on practice building and shipping real React applications including CivicAid, a live civic issue reporting platform while self-teaching Next.js, TypeScript, and the fundamentals of data science.',
  },
]

function Experience() {
  return (
    <section id="journey" className="py-16 px-6 max-w-5xl mx-auto scroll-mt-16">
      <Reveal>
        <span className="inline-block font-script text-2xl text-gold mb-2">
          the path so far
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-(--color-text-warm)]mb-10">
          Experience & Education
        </h2>
      </Reveal>
      <div className="relative pl-8 sm:pl-10">
        <div
          aria-hidden="true"
          className="absolute left-2.5 sm:left-3 top-2 bottom-2 w-px bg-linear-to-b from-blush via-lavender to-transparent"
        />

        <ul className="space-y-10">
          {timeline.map((item, i) => (
            <Reveal delay={i * 0.1} key={item.title}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 sm:-left-10 top-1 w-5 h-5 rounded-full glass-panel flex items-center justify-center"
                >
                  <item.icon className="w-3 h-3 text-blush" strokeWidth={2.2} />
                </span>

                <p className="text-xs uppercase tracking-wider font-medium text-gold mb-1.5">
                  {item.period}
                </p>
                <h3 className="font-display text-lg text-(--color-text-warm) mb-0.5">
                  {item.title}
                </h3>
                <p className="text-sm text-blush mb-2">{item.place}</p>
                <p className="font-sans text-sm text-(--color-text-muted) leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience

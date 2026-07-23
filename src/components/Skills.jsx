import skillsData from '../data/skills'
import Reveal from './ui/Reveal'

function SkillsGroup({ group, delay }) {
  const isLearning = group.category === 'Currently Learning'
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`rounded-3xl p-6 h-full transition-all duration-300 glass-panel hover:-translate-y-1 hover:shadow-[0_12px_30px_-14px_rgba(232,143,163,0.35)] ${
          isLearning ? 'ring-1 ring-gold/40' : ''
        }`}
      >
        <h3 className="font-display text-lg font-medium text-(--color-text-warm) mb-4 flex items-center gap-2">
          {group.category}
          {isLearning && (
            <span className="font-script text-base text-gold">in progress</span>
          )}
        </h3>

        <ul
          className="grid grid-cols-2 gap-2.5"
          aria-label={`Skills in ${group.category}`}
        >
          {group.items.map((skill) => (
            <li
              key={skill}
              className="font-sans text-xs text-(--color-text-muted) bg-(--color-canvas-soft) border border-(--color-border-soft) px-3 py-2.5 rounded-xl flex items-center gap-2 hover:text-(--color-text-warm) transition-colors"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-blush"
                aria-hidden="true"
              />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto scroll-mt-16">
      <Reveal>
        <span className="inline-block font-script text-2xl text-gold mb-2">
          what I work with
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-(--color-text-warm) mb-10">
          Skills & Tools
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsData.map((group, i) => (
          <SkillsGroup key={group.category} group={group} delay={i * 0.06} />
        ))}
      </div>
    </section>
  )
}

export default Skills

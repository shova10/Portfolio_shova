import skillsData from '../data/skills'

function SkillsGroup({ group }) {
  return (
    <div className="bg-surface border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-accent/15 group">
      <h3 className="font-heading text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors duration-200">
        {group.category}
      </h3>

      <ul
        className="grid grid-cols-2 gap-3"
        aria-label={`Skills in ${group.category}`}
      >
        {group.items.map((skill) => (
          <li
            key={skill}
            className="font-sans text-xs text-gray-400 bg-canvas border border-white/5 px-3 py-2.5 rounded-lg flex items-center gap-2 hover:text-white hover:border-white/10 transition-colors"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent/40"
              aria-hidden="true"
            />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
      <div className="w-full">
        <div className="flex flex-col mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Technical Skillset
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <SkillsGroup key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

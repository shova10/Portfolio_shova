// src/components/Skills.jsx
import skillsData from '../data/skills'

// 1. Reusable Child Group Category Component
function SkillsGroup({ group }) {
  return (
    <div className="bg-surface border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-accent/15 group">
      
      {/* Category Header */}
      <h3 className="font-heading text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors duration-200">
        {group.category}
      </h3>
      
      {/* Grid of Inner Skill Items */}
      <ul className="grid grid-cols-2 gap-3" aria-label={`Skills in ${group.category}`}>
        {group.items.map((skill) => (
          <li 
            key={skill}
            className="font-sans text-xs text-gray-400 bg-canvas border border-white/5 px-3 py-2.5 rounded-lg flex items-center gap-2 hover:text-white hover:border-white/10 transition-colors"
          >
            {/* Visual Indicator Bullet */}
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>

    </div>
  )
}

// 2. Main Skills Section Orchestrator
function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
      <div className="w-full">
        
        {/* Section Heading Badge Layout */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-2">
            Ecosystem
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Technical Skillset
          </h2>
        </div>

        {/* Responsive Layout Grid Blueprint */}
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
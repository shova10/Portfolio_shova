import projectsData from '../data/projects'
import { Github, ExternalLink } from 'lucide-react'
import Reveal from './ui/Reveal'

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group glass-panel rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-16px_rgba(232,143,163,0.35)]">
        <div className="h-44 bg-(--color-canvas-soft) border-b border-(--color-border-soft) flex items-center justify-center relative overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="font-display text-5xl font-medium text-blush/15 group-hover:text-blush/25 group-hover:scale-110 transition-all duration-300 select-none">
              {project.id}
            </span>
          )}
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-(--color-surface)/60 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-xl font-medium text-(--color-text-warm) mb-2 group-hover:text-blush transition-colors duration-200">
            {project.title}
          </h3>

          <p className="font-sans text-sm text-(--color-text-muted) leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          <ul
            className="flex flex-wrap gap-2 mb-6"
            aria-label="Technologies used"
          >
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="font-sans text-[11px] font-medium text-(--color-text-muted) bg-(--color-canvas-soft) px-2.5 py-1 rounded-full border border-(--color-border-soft)"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pt-4 border-t border-(--color-border-soft) mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-(--color-text-muted) hover:text-blush transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blush hover:text-gold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Project() {
  return (
    <section id="project" className="py-16 px-6 max-w-5xl mx-auto scroll-mt-16">
      <Reveal>
        <span className="inline-block font-script text-2xl text-gold mb-2">
          what I've built
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-(--color-text-warm) mb-10">
          Featured Projects
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {projectsData.map((item, i) => (
          <ProjectCard key={item.id} project={item} delay={i * 0.08} />
        ))}
      </div>

      <Reveal
        delay={0.2}
        className="flex items-center justify-center w-full sm:w-auto mt-10"
      >
        <a
          href="https://github.com/shova10"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto text-center px-6 py-3 bg-blush hover:bg-blush-hover text-(--color-canvas) text-sm font-semibold rounded-full shadow-lg shadow-blush/20 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          More Projects
        </a>
      </Reveal>
    </section>
  )
}

export default Project

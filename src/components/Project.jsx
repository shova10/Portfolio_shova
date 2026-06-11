import projectsData from '../data/projects'
function ProjectCard({ project }) {
  return (
    <div className="group bg-surface border border-white/5 rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5">
      <div className="h-44 bg-canvas/40 border-b border-white/5 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="font-mono text-5xl font-bold text-white/10 group-hover:text-accent/20 group-hover:scale-110 transition-all duration-300 select-none">
            {project.id}
          </span>
        )}

        <div className="absolute inset-0 bg-linear-to-b from-transparent to-surface/60 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <ul
          className="flex flex-wrap gap-2 mb-6"
          aria-label="Technologies used"
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-[11px] font-medium text-gray-300 bg-canvas px-2.5 py-1 rounded border border-white/5"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            GitHub Code &rarr;
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors"
            >
              Live Demo &middot;
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Project() {
  return (
    <section id="project" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
      <div className="w-full">
        <div className="flex flex-col mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projectsData.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-full sm:w-auto mt-8">
        <a
          href="https://github.com/shova10"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto text-center px-6 py-3 bg-accent hover:bg-accent-hover text-canvas text-sm font-semibold rounded-lg shadow-lg shadow-accent/10 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          More Projects
        </a>
      </div>
    </section>
  )
}

export default Project

import image from '../assets/shovaaa.jpeg'
import shova_resume from '../assets/Shova_resume.pdf'

const SKILLS = [
  'React.js',
  'Tailwind CSS',
  'Git & GitHub',
  'REST API Integration',
  'JavaScript (ES6+)',
]

function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
      <div className="w-full">
        <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full mb-6">
          About me
        </span>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1 text-center md:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              Frontend Developer & Final Year BIT Student
            </h2>
            <p className="font-sans text-gray-400 leading-relaxed mb-6">
              I'm a frontend developer focused on building clean, functional,
              and accessible React applications. I recently shipped CivicAid - a
              live civic issue reporting platform featuring role-based
              dashboards, a Leaflet.js heatmap, and JWT authentication flows,
              integrated with a Django REST API. I'm completing my BIT degree at
              Bhairahawa Multiple Campus, Tribhuvan University, and actively
              seeking junior frontend opportunities.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs text-accent border border-accent/10 bg-surface px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={shova_resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-canvas bg-accent hover:bg-accent-hover px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Download CV
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>

          <div className="order-1 md:order-2 flex-1 flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-300 scale-110" />
              <img
                src={image}
                alt="Shova Pandey"
                className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover ring-4 ring-surface shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

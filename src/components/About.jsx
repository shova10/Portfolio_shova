import image from '../assets/shovaaa.jpeg'
import shova_resume from '../assets/Shova_Pandey_Resumee.pdf'
import { Download } from 'lucide-react'
import Reveal from './ui/Reveal'
import MoodPill from './ui/MoodPill'

function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto scroll-mt-16">
      <Reveal>
        <span className="inline-block font-script text-2xl text-gold mb-2">
          a little about me
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-(--color-text-warm) mb-10">
          My Story
        </h2>
      </Reveal>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <Reveal
          delay={0.1}
          className="flex-1 order-2 md:order-1 text-center md:text-left"
        >
          <p className="font-sans text-(--color-text-muted) leading-relaxed mb-5">
            I've been interested in computers since I was a kid there was always
            something satisfying about building a thing and then actually
            getting to see it work. That's still what pulls me back to the
            screen every day.
          </p>
          <p className="font-sans text-(--color-text-muted) leading-relaxed mb-6">
            I recently shipped{' '}
            <span className="text-blush font-medium">CivicAid</span> a live
            civic issue reporting platform with role-based dashboards, a
            Leaflet.js heatmap, and JWT authentication, integrated with a Django
            REST API. I'm completing my BIT degree at Bhairahawa Multiple
            Campus, Tribhuvan University, and actively looking for junior
            frontend opportunities with an eye on growing into fullstack and,
            eventually, data science.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            <MoodPill>React.js</MoodPill>
            <MoodPill>Tailwind CSS</MoodPill>
            <MoodPill>Git & GitHub</MoodPill>
            <MoodPill>REST APIs</MoodPill>
            <MoodPill>JavaScript (ES6+)</MoodPill>
          </div>

          <a
            href={shova_resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-canvas) bg-blush hover:bg-blush-hover px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blush/20"
          >
            Download CV
            <Download className="w-4 h-4" strokeWidth={2} />
          </a>
        </Reveal>

        <Reveal
          delay={0.2}
          className="order-1 md:order-2 flex-1 flex items-center justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-blush/30 via-gold/20 to-lavender/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 scale-110 animate-glow" />
            <img
              src={image}
              alt="Shova Pandey"
              className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-115 md:h-115 rounded-full object-cover ring-4 ring-(--color-surface) shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About

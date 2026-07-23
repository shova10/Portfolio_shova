import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Currently from './components/Currently'
import Projects from './components/Project'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBackground from './components/ui/FloatingBackground'
import SparkleCursor from './components/ui/SparkleCursor'

export default function App() {
  return (
    <div className="bg-canvas min-h-screen text-(--color-text-muted) font-sans selection:bg-blush selection:text-canvas relative">
      <FloatingBackground />
      <SparkleCursor />
      <Navbar />

      <main className="space-y-16 md:space-y-24 pb-20 overflow-x-hidden">
        <Hero />
        <About />
        <Currently />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

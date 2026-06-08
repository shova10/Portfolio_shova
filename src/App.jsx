import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-canvas min-h-screen text-gray-300 font-sans selection:bg-accent selection:text-canvas ">
      <Navbar />

      <main className="space-y-20 md:space-y-32 pb-20 overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

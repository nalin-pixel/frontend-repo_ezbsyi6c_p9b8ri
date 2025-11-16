import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold">AK</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#projects" className="hover:text-gray-700">Work</a>
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Adley Kinsman</p>
          <div className="flex gap-4">
            <a href="mailto:hello@adleykinsman.com" className="hover:text-gray-800">Email</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">LinkedIn</a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">X</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

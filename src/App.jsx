import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Demo from './components/Demo'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(124,58,237,.25),transparent_60%)]" />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <About />
          <Demo />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

// TEMPORARY: stands in for sections we haven't built yet, so the
// navbar links have somewhere to scroll to. Each one gets replaced in later stages.
function Placeholder({ id, title }) {
  return (
    <section id={id} className="placeholder">
      <div className="container">
        <h2>{title}</h2>
        <p>Coming in a later stage.</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Placeholder id="skills" title="Skills" />
        <Placeholder id="projects" title="Projects" />
        <Placeholder id="contact" title="Contact" />
      </main>
    </>
  )
}

export default App

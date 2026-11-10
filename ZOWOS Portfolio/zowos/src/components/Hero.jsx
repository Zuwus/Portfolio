import HeroVisual from './HeroVisual.jsx'
import './Hero.css'

// Hero = the first thing a visitor sees. Editorial split: text left, artwork right.
function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__greeting">Hello, World.</p>

          <h1 id="hero-title" className="hero__title">
            <span>Zeus Angelo</span>
            <span>Gavira</span>
          </h1>

          <p className="hero__role">Aspiring Cloud Engineer</p>

          <p className="hero__intro">
            I'm an IT student curious about what technology makes possible. I build
            small projects to explore cloud computing, software development, and
            automation, and I learn the most by making things.
          </p>

          <a className="btn" href="#projects">Explore My Work</a>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero

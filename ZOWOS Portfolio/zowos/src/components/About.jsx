import Wordmark from './Wordmark.jsx'
import './About.css'

// Profile facts live in an array (data), separate from the markup (layout).
// To change a fact later, edit this array. The JSX below does not need to change.
// A detail has either `value` (plain text) or `items` (a list shown as tags).
const PROFILE_DETAILS = [
  { label: 'Current role', value: 'IT Student' },
  { label: 'Career direction', value: 'Cloud Engineer' },
  {
    label: 'Interests',
    items: ['Cloud Computing', 'Software Development', 'AI & Automation'],
  },
  { label: 'Creator personality', value: 'Curious and experimental' },
]

// About = who I am. Left column: heading. Right column: story + quick facts.
function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__inner container">
        <header className="about__header">
          <h2 id="about-title" className="about__title">
            The Person Behind <Wordmark />
          </h2>
          <p className="about__tagline">Curiosity is where it begins.</p>
        </header>

        <div className="about__body">
          <p className="about__lead">
            I'm Zeus Angelo Gavira, an IT student fascinated by the possibilities
            of technology.
          </p>

          <p>
            I enjoy exploring ideas, experimenting with new tools, and turning
            curiosity into projects. I'm especially interested in cloud computing,
            software development, and AI automation.
          </p>

          <p>
            My goal is to keep learning and growing toward a career in Cloud
            Engineering.
          </p>

          {/* <dl> = description list: the correct HTML for label/value pairs */}
          <dl className="about__details">
            {PROFILE_DETAILS.map((detail) => (
              <div className="about__detail" key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>
                  {/* Conditional rendering: show tags if `items` exists, otherwise text */}
                  {detail.items ? (
                    <ul className="about__tags">
                      {detail.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
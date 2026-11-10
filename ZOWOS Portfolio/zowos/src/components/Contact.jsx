import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import './Contact.css'

/* ==========================================================================
   DATA: contact details live here, separate from the layout below.
   To change a detail later, edit this array only.

   LINKEDIN: no profile URL exists yet, so it is shown as "Coming Soon".
   When you have one, replace `href: null` with the full URL and set
   `external: true`. The row then becomes a real link automatically.
   ========================================================================== */
const EMAIL = 'zeusangelo.gavira@hcdc.edu.ph'

const CHANNELS = [
  {
    id: 'email',
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    Icon: Mail,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Zuwus',
    href: 'https://github.com/Zuwus',
    external: true,
    Icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Coming Soon',
    href: null,
    external: false,
    Icon: Linkedin,
  },
]

// On narrow screens a long email may need to wrap. <wbr /> offers one clean
// break point right after the "@", so it never splits in the middle of a word.
function breakableValue(value) {
  const at = value.indexOf('@')
  if (at === -1) return value
  return (
    <>
      {value.slice(0, at + 1)}
      <wbr />
      {value.slice(at + 1)}
    </>
  )
}

// One row in the channel list. A row with an `href` is a link;
// a row without one (LinkedIn for now) is plain text, not a dead link.
function Channel({ channel }) {
  const { label, value, href, external, Icon } = channel

  const content = (
    <>
      <span className="contact__icon" aria-hidden="true">
        <Icon size={20} />
      </span>
      <span className="contact__channel-text">
        <span className="contact__channel-label">{label}</span>
        <span className="contact__channel-value">{breakableValue(value)}</span>
      </span>
      {href && <ArrowUpRight className="contact__arrow" size={20} aria-hidden="true" />}
    </>
  )

  if (!href) {
    return <li className="contact__channel contact__channel--soon">{content}</li>
  }

  return (
    <li>
      <a
        className="contact__channel"
        href={href}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        aria-label={
          external
            ? `${label}: ${value}, opens in a new tab`
            : `${label}: ${value}`
        }
      >
        {content}
      </a>
    </li>
  )
}

// Contact = the natural end of the page: an invitation, then the ways to reach me.
function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner container">
        <div className="contact__panel">
          <div className="contact__intro">
            <p className="contact__label">Contact</p>

            <h2 id="contact-title" className="contact__title">
              Have an idea? <span className="contact__accent">Let's make something happen.</span>
            </h2>

            <p className="contact__text">
              I'm always happy to talk about projects, cloud, and automation, or to hear
              about an opportunity to learn something new.
            </p>

            <a className="btn" href={`mailto:${EMAIL}`}>
              <Mail size={18} aria-hidden="true" />
              Send an Email
            </a>
          </div>

          <ul className="contact__channels" aria-label="Ways to get in touch">
            {CHANNELS.map((channel) => (
              <Channel key={channel.id} channel={channel} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact

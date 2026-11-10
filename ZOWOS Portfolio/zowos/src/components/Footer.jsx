import { Github } from 'lucide-react'
import Wordmark from './Wordmark.jsx'
import './Footer.css'

// Footer = the quiet end of the page: brand, owner, year, one link.
function Footer() {
  // Read at render time, so the year updates itself every January.
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Wordmark />
          <p className="footer__copy">
            &copy; {year} Zeus Angelo Gavira
          </p>
        </div>

        <a
          className="footer__link"
          href="https://github.com/Zuwus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zeus Angelo Gavira on GitHub, opens in a new tab"
        >
          <Github size={18} aria-hidden="true" />
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer

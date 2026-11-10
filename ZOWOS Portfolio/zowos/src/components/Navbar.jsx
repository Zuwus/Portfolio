import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Wordmark from './Wordmark.jsx'
import './Navbar.css'

// Data lives in an array so the JSX below can loop over it with .map().
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  // State = values React remembers; changing them re-renders the component.
  const [isOpen, setIsOpen] = useState(false)       // is the mobile menu open?
  const [isScrolled, setIsScrolled] = useState(false) // has the page scrolled down?

  // Effect 1: watch scrolling so the bar gains a glass background.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll) // cleanup
  }, [])

  // Effect 2: while the menu is open, Escape closes it (keyboard accessibility).
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main">
        <a href="#home" className="navbar__brand" onClick={closeMenu} aria-label="zoWos, back to top">
          <Wordmark />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <ul id="primary-menu" className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

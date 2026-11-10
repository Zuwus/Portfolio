import { ExternalLink } from 'lucide-react'
import './Projects.css'

/* ==========================================================================
   DATA: all project information lives here, separate from the layout below.
   To change a description, link, or tag, edit these objects only.

   SCREENSHOTS: while `src` is null, a labeled placeholder is shown.
   When you have a real screenshot:
     1. Put the image file in the `public/screenshots/` folder
     2. Set  src: '/screenshots/your-file.png'
     3. Write a real description in `alt` (what the screenshot shows)
   ========================================================================== */
const FEATURED_PROJECT = {
  id: 'nexus',
  name: 'NEXUS',
  description:
    'A personal software platform designed to bring devices, files, and digital tools together into one cohesive environment.',
  technologies: ['React 19', 'TypeScript', 'Vite', 'Tauri 2', 'Tailwind CSS 4'],
  status: { label: 'In Development', tone: 'building' },
  links: [{ label: 'GitHub', href: 'https://github.com/Zuwus/NEXUS' }],
  screenshots: [
    { label: 'NEXUS: main application screen', src: null, alt: '' },
    { label: 'NEXUS: supporting view', src: null, alt: '' },
    { label: 'NEXUS: supporting view', src: null, alt: '' },
  ],
}

const SUPPORTING_PROJECTS = [
  {
    id: 'miko',
    name: 'Miko',
    description:
      'A local-first AI companion built with Python, featuring a terminal interface and Streamlit interface, SQLite-based storage, sessions, and workspace functionality.',
    note: 'Its AI features depend on a local Ollama installation and model.',
    technologies: ['Python', 'Streamlit', 'SQLite', 'Ollama', 'PyYAML'],
    status: { label: 'Prototype / In Development', tone: 'building' },
    links: [{ label: 'GitHub', href: 'https://github.com/Zuwus/Miko.Ai' }],
    screenshots: [{ label: 'Miko: application screenshot', src: null, alt: '' }],
  },
  {
    id: 'student-dashboard',
    name: 'Student Dashboard',
    description:
      'A React-based course management application that lets students add, search, complete, and delete courses while tracking dashboard statistics.',
    technologies: ['React', 'JavaScript', 'Vite', 'CSS', 'localStorage'],
    status: { label: 'Completed', tone: 'completed' },
    links: [
      {
        label: 'Live Demo',
        href: 'https://student-dashboard-zoxos.vercel.app/',
        primary: true,
      },
      { label: 'GitHub', href: 'https://github.com/Zuwus/ADV101-React-Activity' },
    ],
    screenshots: [{ label: 'Student Dashboard: application screenshot', src: null, alt: '' }],
  },
]

/* ==========================================================================
   SMALL COMPONENTS: each does one job and is reused by the featured project
   and the cards. Data comes in through props.
   ========================================================================== */

// Shows a real image when `src` exists, otherwise a clearly marked placeholder.
function ScreenshotSlot({ shot, className = '' }) {
  if (shot.src) {
    return (
      <img
        className={`project__shot ${className}`}
        src={shot.src}
        alt={shot.alt}
        loading="lazy"
      />
    )
  }

  return (
    <div className={`project__shot project__shot--placeholder ${className}`}>
      <span className="project__placeholder-tag">Screenshot placeholder</span>
      <span>{shot.label}</span>
    </div>
  )
}

// The status is always written out as text, so it never relies on color alone.
function StatusBadge({ status }) {
  return (
    <span className="project__status" data-tone={status.tone}>
      {status.label}
    </span>
  )
}

function TechTags({ technologies }) {
  return (
    <ul className="project__tags" aria-label="Technologies">
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  )
}

// External links open in a new tab. rel="noopener noreferrer" is a security best practice.
// The aria-label gives screen-reader users the full context for each link.
function ProjectLinks({ name, links }) {
  return (
    <div className="project__links">
      {links.map((link) => (
        <a
          key={link.href}
          className={`project__link ${link.primary ? 'project__link--primary' : ''}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.label} for ${name}, opens in a new tab`}
        >
          {link.label}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

// The text side of a project: status, name, description, tags, links.
function ProjectDetails({ project, featured = false }) {
  return (
    <div className="project__details">
      <div className="project__meta">
        {/* `featured && ...` renders the label only when featured is true */}
        {featured && <span className="project__label">Featured project</span>}
        <StatusBadge status={project.status} />
      </div>

      <h3 id={`project-${project.id}`} className="project__name">
        {project.name}
      </h3>

      <p className="project__description">{project.description}</p>

      {project.note && <p className="project__note">{project.note}</p>}

      <TechTags technologies={project.technologies} />
      <ProjectLinks name={project.name} links={project.links} />
    </div>
  )
}

/* ==========================================================================
   SECTION: heading, one large featured project, then two smaller cards.
   ========================================================================== */
function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects__inner container">
        <header className="projects__header">
          <h2 id="projects-title" className="projects__title">
            Ideas Turned Into Projects
          </h2>
          <p className="projects__subtitle">
            Work in progress and finished builds, each shown honestly at the stage it's in.
          </p>
        </header>

        <div className="projects__list">
          {/* Featured project: large layout with a screenshot composition */}
          <article
            className="project project--featured"
            aria-labelledby={`project-${FEATURED_PROJECT.id}`}
          >
            <ProjectDetails project={FEATURED_PROJECT} featured />

            <div className="project__shots">
              {/* The list never reorders, so using the index as the key is safe here */}
              {FEATURED_PROJECT.screenshots.map((shot, index) => (
                <ScreenshotSlot
                  key={index}
                  shot={shot}
                  className={index === 0 ? 'project__shot--main' : ''}
                />
              ))}
            </div>
          </article>

          {/* Supporting projects: two smaller cards */}
          <div className="projects__secondary">
            {SUPPORTING_PROJECTS.map((project) => (
              <article
                className="project project--card"
                key={project.id}
                aria-labelledby={`project-${project.id}`}
              >
                <ScreenshotSlot shot={project.screenshots[0]} />
                <ProjectDetails project={project} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
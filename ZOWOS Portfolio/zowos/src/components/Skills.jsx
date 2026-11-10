import './Skills.css'

// All skill data lives here, separate from the layout below.
// To add or change a skill, edit this array. The JSX does not need to change.
// `level` is an honest self-description: Exploring, Familiar, or Hands-on.
const SKILL_CATEGORIES = [
  {
    id: 'programming',
    title: 'Programming',
    skills: [
      { name: 'Java', level: 'Exploring' },
      { name: 'C++', level: 'Exploring' },
      { name: 'JavaScript', level: 'Hands-on' },
      { name: 'Python', level: 'Hands-on' },
      { name: 'Lua', level: 'Familiar' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    skills: [
      { name: 'HTML', level: 'Hands-on' },
      { name: 'CSS', level: 'Hands-on' },
      { name: 'React', level: 'Hands-on' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', level: 'Hands-on' },
      { name: 'GitHub', level: 'Hands-on' },
      { name: 'VS Code', level: 'Familiar' },
    ],
  },
  {
    id: 'technologies',
    title: 'Technologies',
    skills: [
      { name: 'SQLite', level: 'Hands-on' },
      { name: 'Streamlit', level: 'Familiar' },
      { name: 'Vite', level: 'Familiar' },
      { name: 'TypeScript', level: 'Exploring' },
      { name: 'Tauri', level: 'Exploring' },
      { name: 'Tailwind CSS', level: 'Exploring' },
    ],
  },
]

// Skills = what I work with. A heading, then one panel per category.
function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="skills__inner container">
        <header className="skills__header">
          <h2 id="skills-title" className="skills__title">
            The Tools Behind the Ideas
          </h2>
          <p className="skills__subtitle">
            A growing toolkit, built through curiosity and hands-on experience.
          </p>
        </header>

        <div className="skills__grid">
          {/* One <article> per category, built by looping over the data */}
          {SKILL_CATEGORIES.map((category) => (
            <article
              className="skills__panel"
              key={category.id}
              aria-labelledby={`skills-${category.id}`}
            >
              <h3 id={`skills-${category.id}`} className="skills__category">
                {category.title}
              </h3>

              <ul className="skills__tags">
                {category.skills.map((skill) => (
                  <li className="skills__tag" key={skill.name} data-level={skill.level}>
                    <span className="skills__name">{skill.name}</span>
                    <span className="skills__level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
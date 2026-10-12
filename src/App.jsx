import { biotechTopics, marketTopics, profile, resources } from './profile.js'
import DnaHelix from './DnaHelix.jsx'
import './App.css'

const navItems = [
  { id: 'about', label: 'About Me' },
  { id: 'market', label: 'Stock Market' },
  { id: 'biotech', label: 'Biotech Innovations' },
  { id: 'resources', label: 'News & Resources' },
]

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}

function TopicGrid({ topics }) {
  return (
    <ul className="card-grid">
      {topics.map((topic) => (
        <li key={topic.title} className="card">
          <h3>{topic.title}</h3>
          <p>{topic.text}</p>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={`${profile.siteName} home`}>
            <span className="brand-mark" aria-hidden="true">
              ↗
            </span>
            {profile.siteName}
          </a>
          <nav aria-label="Main">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex="-1">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <DnaHelix />
          <div className="container">
            <p className="eyebrow">{profile.interests.join(' · ')}</p>
            <h1 id="hero-title">
              Hi, I’m <span className="accent">{profile.preferredName}</span>.
            </h1>
            <p className="lead">{profile.tagline}</p>
            <a className="button" href="#about">
              Learn more about me
            </a>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container">
            <h2 id="about-title">About Me</h2>
            <div className="about-grid">
              <div>
                {profile.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <aside className="card" aria-labelledby="interests-title">
                <h3 id="interests-title">Interests</h3>
                <ul className="tag-list">
                  {profile.interests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
                {profile.links.github && (
                  <p className="card-link">
                    <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
                  </p>
                )}
              </aside>
            </div>
          </div>
        </section>

        <section id="market" className="section alt" aria-labelledby="market-title">
          <div className="container">
            <h2 id="market-title">Stock Market</h2>
            <p className="section-intro">
              Topics covering how markets value healthcare and biotech
              companies.
            </p>
            <TopicGrid topics={marketTopics} />
            <p className="notice" role="note">
              This site does not show live or real-time stock prices, and
              nothing here is financial advice.
            </p>
          </div>
        </section>

        <section id="biotech" className="section" aria-labelledby="biotech-title">
          <div className="container">
            <h2 id="biotech-title">Biotech Innovations</h2>
            <p className="section-intro">
              Areas of biotechnology and healthcare that are changing how
              disease is found and treated.
            </p>
            <TopicGrid topics={biotechTopics} />
          </div>
        </section>

        <section
          id="resources"
          className="section alt"
          aria-labelledby="resources-title"
        >
          <div className="container">
            <h2 id="resources-title">News & Resources</h2>
            <p className="section-intro">
              For current news and data, go to the original sources directly.
            </p>
            <div className="resource-grid">
              {resources.map((group) => (
                <div key={group.category} className="card">
                  <h3>{group.category}</h3>
                  <ul className="resource-list">
                    {group.items.map((item) => (
                      <li key={item.url}>
                        <ExternalLink href={item.url}>{item.name}</ExternalLink>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © {year} {profile.preferredName} · {profile.siteName}
          </p>
          <p className="footer-note">For educational purposes only. Not financial or medical advice.</p>
        </div>
      </footer>
    </>
  )
}

export default App

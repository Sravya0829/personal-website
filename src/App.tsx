import { useEffect, useState } from 'react'

const navLinks = ['about', 'experience', 'research', 'projects', 'education'] as const

const experience = [
  {
    company: 'Axon',
    role: 'Firmware Engineering Intern · Platform Firmware',
    period: 'May 2026 — Present',
    location: 'Boston, MA',
    description: 'Developing C/C++ firmware to enable LTE-based offloading and transmission of embedded-device sensor data. Building Python automation scripts to analyze IMU data streams and extract key metrics.',
  },
  {
    company: 'Carnegie Mellon University',
    role: 'Teaching Assistant · 15-151',
    period: 'Aug 2026 — Incoming',
    location: 'Pittsburgh, PA',
    description: 'Will lead recitations and office hours, assist in developing and grading assignments and exams, and support review sessions for Mathematical Foundations for Computer Science, a proof-based discrete mathematics course.',
  },
]

const research = [
  {
    title: 'Gamebot Interaction Manager',
    venue: 'CMU Computer Science Department · Jan—May 2026',
    description: 'Led the migration and redesign of Gamebot’s C++ Interaction Manager to Python for an autonomous Scrabble-playing robot used in HCI research under Professor Reid Simmons.',
    tags: ['Python', 'C++', 'HCI Robotics'],
    link: 'https://github.com/CMU-RASL/gamebot/tree/main',
  },
  {
    title: 'Global Carbon Flux Forecasting',
    venue: 'University of Minnesota · Jun—Aug 2025',
    description: 'Selected for the AI for Earth Summer School and developed LSTM models to forecast NEE, GPP, and Reco across global environmental datasets, achieving a GPP RMSE of 0.53—about 5% of its daily flux range.',
    tags: ['PyTorch', 'LSTM', 'Climate AI'],
    link: 'https://github.com/Sravya0829/CarbonFlux',
  },
  {
    title: 'Quadruped Collision Checker',
    venue: 'SBPL Research Lab, CMU Robotics Institute · Feb—Apr 2025',
    description: 'Built a 2D occupancy-grid collision checker for quadrupedal motion planning, using NumPy vectorization, batched geometric transformations, and linear interpolation for efficient path validation.',
    tags: ['Python', 'NumPy', 'Robotics'],
    link: 'https://github.com/Sravya0829/Collision-Checker',
  },
]

const projects = [
  { name: 'SustainaTree', date: 'Feb 2026', description: 'Built a real-time sustainability app with tree-growth visualization driven by eco-actions, AI-assisted event autofill, and Firebase user-data synchronization at TartanHacks 2026.', tags: ['React Native', 'Firebase', 'TypeScript'], link: 'https://github.com/vixu8/tartanhacks-26' },
  { name: 'Systems Projects', date: 'Dec 2025', description: 'A public overview of systems programming work, including a Unix shell, dynamic memory allocator, proxy server, and cache simulator; source remains private under course policy.', tags: ['C', 'Systems', 'Linux'], link: 'https://github.com/Sravya0829/Systems-Projects' },
  { name: 'Astro Sandbox', date: 'Aug—Nov 2025', description: 'Developed an orbital-mechanics simulator with interactive Three.js visualization, Web Worker physics computation, and Prisma/PostgreSQL APIs.', tags: ['Next.js', 'Three.js', 'PostgreSQL'], link: 'https://github.com/Sravya0829/astro-sandbox' },
  { name: 'Exoplanet Finder', date: 'Sep 2024', description: 'Trained and evaluated machine-learning models on NASA Kepler light-curve data to classify whether observed stars host exoplanets.', tags: ['Python', 'Machine Learning', 'NASA Kepler'], link: 'https://github.com/Sravya0829/ExoplanetFinder' },
]

const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'C++', 'C', 'TypeScript', 'JavaScript', 'SML', 'HTML/CSS'] },
  { category: 'Libraries', items: ['NumPy', 'PyTorch', 'Pandas', 'scikit-learn', 'React', 'Next.js'] },
  { category: 'Tools & Data', items: ['Git', 'PostgreSQL', 'Prisma', 'Tailwind CSS'] },
]

const courses = ['15-213 Computer Systems', '15-210 Parallel Data Structures & Algorithms', '15-122 Imperative Computation', '15-150 Functional Programming', '15-151/251 Discrete Mathematics', '10-301 Machine Learning', '15-259 Probability & Computing', '21-241 Linear Algebra', '21-266 Vector Calculus']

function SectionLabel({ number, title }: { number: string; title: string }) {
  return <div className="section-label"><span>{number}</span><h2>{title}</h2></div>
}

function Tags({ items }: { items: string[] }) {
  return <div className="tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
}

export default function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id))
    }, { threshold: 0.2, rootMargin: '-70px 0px -40% 0px' })
    navLinks.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return <>
    <nav className="site-nav" aria-label="Main navigation">
      <button className="wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Sravya Aravapalli</button>
      <div className="nav-links">
        {navLinks.map((link) => <button className={activeSection === link ? 'active' : ''} key={link} onClick={() => goTo(link)}><span className="full-label">{link}</span><span className="short-label">{link.slice(0, 3)}</span></button>)}
      </div>
    </nav>

    <main>
      <section id="about" className="hero pattern-dots">
        <div className="hero-accent" />
        <div className="hero-name">
          <p className="overline">00 — Portfolio &nbsp;/&nbsp; Pittsburgh, PA</p>
          <h1>Sravya<br/><span>Aravapalli<i /></span></h1>
        </div>
        <div className="hero-intro">
          <h2>Computer Science Student<br/>&amp; Software Engineer</h2>
          <p>I’m a Carnegie Mellon computer science student pursuing a minor in machine learning. I build across firmware, robotics, systems, full-stack development, and applied machine learning.</p>
          <div className="social-links">
            <a href="mailto:saravapa@andrew.cmu.edu">Email</a><a href="/Sravya-Aravapalli-Resume.pdf" target="_blank" rel="noreferrer">Resume</a><a href="https://github.com/Sravya0829" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sravyaaravapalli" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <section id="experience" className="content-section pattern-cross">
        <SectionLabel number="02" title="Experience" />
        <div className="experience-list">
          {experience.map((item, index) => <article className="experience-item" key={item.company}>
            <div className="experience-meta"><i /><p>{item.period}</p><p>{item.location}</p><b>0{index + 1}</b></div>
            <div><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.description}</p></div>
          </article>)}
        </div>
      </section>

      <section id="research" className="content-section pattern-diag">
        <SectionLabel number="03" title="Research" />
        <div className="research-list">
          {research.map((item, index) => <a className="research-item" href={item.link} target="_blank" rel="noreferrer" key={item.title}>
            <b>0{index + 1}</b><div><h3>{item.title} <span>↗</span></h3><h4>{item.venue}</h4><p>{item.description}</p></div><Tags items={item.tags} />
          </a>)}
        </div>
      </section>

      <section id="projects" className="content-section pattern-grid">
        <SectionLabel number="04" title="Projects" />
        <div className="projects-grid">
          {projects.map((item) => {
            const content = <><div className="project-heading"><h3>{item.name}<span>{item.link ? '↗' : '—'}</span></h3><time>{item.date}</time></div><p>{item.description}</p><Tags items={item.tags} /></>
            return item.link ? <a className="project-card" href={item.link} target="_blank" rel="noreferrer" key={item.name}>{content}</a> : <article className="project-card" key={item.name}>{content}</article>
          })}
        </div>
      </section>

      <section id="education" className="content-section education">
        <SectionLabel number="05" title="Education" />
        <header className="school"><h3>Carnegie Mellon University</h3><p>B.S. Computer Science · Minor in Machine Learning</p></header>
        <div className="education-grid">
          <div><h4>Coursework</h4><Tags items={courses} /></div>
          <div><h4>Organizations</h4><article className="organization"><i/><div><h3>Carnegie Mellon Racing</h3><p>Software Engineer</p></div></article><article className="organization"><i/><div><h3>Society of Women Engineers</h3></div></article><article className="organization"><i/><div><h3>Alpha Chi Omega</h3><p>Kappa Nu chapter</p></div></article></div>
          <div><h4>Technical Skills</h4>{skills.map((group) => <div className="skill-group" key={group.category}><h5>{group.category}</h5><Tags items={group.items}/></div>)}</div>
        </div>
      </section>
    </main>

    <footer id="contact"><p>Sravya Aravapalli — {new Date().getFullYear()}</p><div><a href="https://github.com/Sravya0829" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sravyaaravapalli" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:saravapa@andrew.cmu.edu">Email</a></div><p>Built with React + Vite</p></footer>
  </>
}

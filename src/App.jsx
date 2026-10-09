import './index.css';
import useReveal from './useReveal';
import { useEffect, useState } from 'react';

function App() {

  useReveal();

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
      const sections = document.querySelectorAll(
        '#home, #about, #projects, #skills, #contact'
      );

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                b.intersectionRatio - a.intersectionRatio
            );

          if (visibleSections.length > 0) {
            setActiveSection(visibleSections[0].target.id);
          }
        },
        {
          rootMargin: '-15% 0px -60% 0px',
          threshold: [0, 0.1, 0.25, 0.5],
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, []);

return (
<div className="portfolio">

<nav className="navbar">
  <a
    href="#home"
    className="logo"
    onClick={() => setMenuOpen(false)}
  >
    Kaushal<span>.</span>
  </a>

  <button
    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
    aria-expanded={menuOpen}
    aria-controls="primary-navigation"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <ul
    id="primary-navigation"
    className={`nav-links ${menuOpen ? 'nav-open' : ''}`}
  >
    {[
      ['home', 'Home'],
      ['about', 'About'],
      ['projects', 'Projects'],
      ['skills', 'Skills'],
      ['contact', 'Contact'],
    ].map(([id, label]) => (
      <li key={id}>
        <a
          href={`#${id}`}
          className={activeSection === id ? 'active' : ''}
          aria-current={activeSection === id ? 'location' : undefined}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </a>
      </li>
    ))}
  </ul>

  <a href="#contact" className="contact-btn nav-contact">
    Let's Talk <span>↗</span>
  </a>
</nav>


  <main id="home" className="hero">
    <p className="eyebrow">
      <span className="status-dot"></span>
      COMPUTER ENGINEERING STUDENT
    </p>

    <h1>
      Building digital
      <br />
      experiences with
      <br />
      <span>purpose.</span>
    </h1>

    <p className="hero-description">
      Hi, I'm Kaushal — a developer passionate about building
      useful applications and solving real-world problems
      through technology.
    </p>

    <div className="hero-actions">
      <a href="#projects" className="primary-btn">
        Explore My Work <span>↗</span>
      </a>

      <a href="#about" className="secondary-btn">
        More About Me
      </a>
    </div>

    <div className="hero-footer">
      <span>JAVA · ANDROID · WEB DEVELOPMENT</span>
      <span>BASED IN INDIA ↘</span>
    </div>
  </main>

  <section id="about" className="about-section reveal">
  <div className="section-heading">
    <p className="section-label">GET TO KNOW ME</p>
    <h2>A little about <span>me.</span></h2>
  </div>

  <div className="about-grid">
    <div className="about-content">
      <p className="about-intro">
        I'm Kaushal, a Computer Engineering student
        who enjoys turning ideas into practical digital products.
      </p>

      <p className="about-description">
        My journey in technology started with programming
        and web development. Today, I'm exploring Java,
        Android development, backend engineering and AI
        while building projects that solve real problems.
      </p>

      <p className="about-description">
        I believe in learning by building. Every project
        helps me understand technology better and become
        a more capable developer.
      </p>

      <a href="#projects" className="primary-btn">
        Explore My Projects <span>↗</span>
      </a>
    </div>

    <div className="about-details">
      <div className="detail-card">
        <span className="detail-number">01</span>
        <div>
          <h3>Education</h3>
          <p>B.Tech in Computer Engineering</p>
          <span>SSIT, Nagpur · Pursuing</span>
        </div>
      </div>

      <div className="detail-card">
        <span className="detail-number">02</span>
        <div>
          <h3>Experience</h3>
          <p>Web Development Intern</p>
          <span>Anishree Technologies · 2024</span>
        </div>
      </div>

      <div className="detail-card">
        <span className="detail-number">03</span>
        <div>
          <h3>Currently Exploring</h3>
          <p>Java & Backend Development</p>
          <span>Spring Boot · Android · AI</span>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="projects" className="projects-section reveal">
  <div className="section-heading">
    <p className="section-label">WHAT I'VE BUILT</p>
    <h2>Projects that <span>speak.</span></h2>
    <p className="projects-subtitle">
      A selection of things I've built while learning,
      experimenting and solving real-world problems.
    </p>
  </div>

  <div className="projects-grid">
    <article className="project-card">
      <div className="project-visual resume-visual">
        <span className="project-index">01 / WEB APPLICATION</span>
        <div className="mock-window">
          <div className="mock-top">
            <span></span><span></span><span></span>
          </div>
          <div className="mock-resume">
            <div className="mock-avatar"></div>
            <div className="mock-line long"></div>
            <div className="mock-line short"></div>
            <div className="mock-divider"></div>
            <div className="mock-line medium"></div>
            <div className="mock-line long"></div>
            <div className="mock-line short"></div>
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="project-title-row">
          <h3>Resume-X</h3>
          <span className="project-number">01</span>
        </div>
        <p>
          A resume builder with multiple templates, resume
          previews, PDF export and ATS analysis features.
        </p>
        <div className="tech-stack">
          <span>React</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
        </div>
        <div className="project-links">
          <a
            href="https://resume-x-frontend-pi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>
          <a
            href="https://github.com/KaushalChoudhari?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>

    <article className="project-card">
      <div className="project-visual ride-visual">
        <span className="project-index">02 / ANDROID APPLICATION</span>
        <div className="phone-mock">
          <div className="phone-notch"></div>
          <div className="phone-content">
            <span className="phone-brand">Ride<span>ARKKS</span></span>
            <div className="map-placeholder">
              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-pin">●</div>
            </div>
            <div className="ride-option"></div>
            <div className="ride-option small-option"></div>
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="project-title-row">
          <h3>RideARKKS</h3>
          <span className="project-number">02</span>
        </div>
        <p>
          An Android ride-sharing application concept for
          auto drivers and passengers, designed with
          semi-urban and rural mobility in mind.
        </p>
        <div className="tech-stack">
          <span>Java</span>
          <span>Android</span>
          <span>Firebase</span>
        </div>
        <div className="project-links">
          <a href="mailto:your-email@example.com">
            Request Details ↗
          </a>
        </div>
      </div>
    </article>
  </div>
</section>

<section id="skills" className="skills-section reveal">
  <div className="section-heading">
    <p className="section-label">MY TECH STACK</p>
    <h2>Tools of my <span>trade.</span></h2>
    <p className="projects-subtitle">
      Technologies I use to build applications and
      tools I'm exploring to grow as a developer.
    </p>
  </div>

  <div className="skills-grid">
    <div className="skill-card">
      <span className="skill-symbol">J</span>
      <div>
        <h3>Java</h3>
        <p>Core Java · OOP · Collections</p>
      </div>
      <span className="skill-arrow">↗</span>
    </div>

    <div className="skill-card">
      <span className="skill-symbol">A</span>
      <div>
        <h3>Android Development</h3>
        <p>Java · XML · Android Studio</p>
      </div>
      <span className="skill-arrow">↗</span>
    </div>

    <div className="skill-card">
      <span className="skill-symbol">R</span>
      <div>
        <h3>React</h3>
        <p>Practical Knowledge · Components · Hooks</p>
      </div>
      <span className="skill-arrow">↗</span>
    </div>

    <div className="skill-card">
      <span className="skill-symbol">S</span>
      <div>
        <h3>Spring Boot</h3>
        <p>Practical Knowledge · REST APIs · Spring Security</p>
      </div>
      <span className="skill-arrow">↗</span>
    </div>

    <div className="skill-card">
      <span className="skill-symbol">M</span>
      <div>
        <h3>MySQL</h3>
        <p>SQL · Database Design</p>
      </div>
      <span className="skill-arrow">↗</span>
    </div>

    <div className="skill-card">
      <span className="skill-symbol">F</span>
      <div>
        <h3>Firebase</h3>
        <p>Authentication · Database</p>
      </div>
      <span className="skill-arrow">↗</span>
    </div>

    <div className="skill-card">
      <span className="skill-symbol">H</span>
      <div>
        <h3>HTML & CSS</h3>
        <p>Responsive UI · Web Layouts</p>
      </div>
      <span className="skill-arrow">↗</span>
    </div>

    <div className="skill-card">
      <span className="skill-symbol">G</span>
      <div>
        <h3>Git & GitHub</h3>
        <p>Version Control · Repositories</p>
      </div>
      <span className="skill-arrow">↗</span>
    </div>
  </div>

  <p className="skills-note">
    ALWAYS LEARNING. ALWAYS BUILDING.
  </p>
</section>


<section id="contact" className="contact-section reveal">
  <div className="contact-card">
    <p className="section-label">HAVE A PROJECT IN MIND?</p>

    <h2>
      Let's build something
      <br />
      <span>meaningful.</span>
    </h2>

    <p className="contact-description">
      I'm open to internship opportunities, collaborative
      projects and connecting with fellow developers.
      Have an idea? Let's talk.
    </p>

    <a
      href="mailto:kaushalchoudhari1968@gmail.com"
      className="primary-btn"
    >
      Get In Touch <span>↗</span>
    </a>

    <div className="contact-divider"></div>

    <div className="social-links">
      <a
        href="https://github.com/KaushalChoudhari"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/kaushal-choudhari-758b1a2bb"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>

      <a href="mailto:kaushalchoudhari1968@gmail.com">
        Email ↗
      </a>
    </div>
  </div>
</section>

<footer className="site-footer">
  <a href="#home" className="logo">
    Kaushal<span>.</span>
  </a>

  <p>Designed & built with care.</p>

  <a href="#home" className="back-to-top">
    BACK TO TOP ↑
  </a>

  <span className="copyright">
    © {new Date().getFullYear()} Kaushal Choudhari
  </span>
</footer>


</div>

);
}

export default App;
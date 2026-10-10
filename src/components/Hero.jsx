const RESUME = `${import.meta.env.BASE_URL}resume.pdf`

// Lines for the profile panel. All values come from the existing site content.
const kw = "tok-kw", key = "tok-key", str = "tok-str", pun = "tok-pun"
const profile = [
  { i: 0, parts: [[kw, "const "], [key, "manish"], [pun, " = {"]] },
  { i: 1, parts: [[key, "role"], [pun, ": "], [str, '"Computer Engineering Student & Developer"'], [pun, ","]] },
  { i: 1, parts: [[key, "degree"], [pun, ": "], [str, '"B.Tech CSE, 2023 - 2027"'], [pun, ","]] },
  { i: 1, parts: [[key, "specialization"], [pun, ": "], [str, '"Cloud Computing & Automation"'], [pun, ","]] },
  { i: 1, parts: [[key, "university"], [pun, ": "], [str, '"Vellore Institute of Technology"'], [pun, ","]] },
  { i: 1, parts: [[key, "interests"], [pun, ": ["]] },
  { i: 2, parts: [[str, '"Cloud Computing"'], [pun, ","]] },
  { i: 2, parts: [[str, '"Machine Learning"'], [pun, ","]] },
  { i: 2, parts: [[str, '"Computer Vision"'], [pun, ","]] },
  { i: 1, parts: [[pun, "],"]] },
  { i: 1, parts: [[key, "openTo"], [pun, ": "], [str, '"Internships & entry-level roles"'], [pun, ","]] },
  { i: 0, parts: [[pun, "}"]] },
]

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-hello">Hello, I'm</p>

          <h1>
            <span>Manish</span> <span>Sehrawat</span>
          </h1>

          <h2 className="hero-role">Computer Engineering Student & Developer</h2>

          <p className="hero-description">
            I am a Computer Engineering student interested in software development, cloud
            computing, and machine learning. I enjoy building practical projects and solving
            real-world problems.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Projects
            </a>
            <a
              className="btn btn-secondary"
              href={RESUME}
              target="_blank"
              rel="noreferrer"
              download="Manish_Sehrawat_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="panel" aria-hidden="true">
          <div className="panel-bar">
            <span>profile.js</span>
            <span className="panel-status">Open to internships</span>
          </div>
          <div className="panel-body">
            {profile.map((line, n) => (
              <div className="code-line" style={{ "--i": line.i }} key={n}>
                {line.parts.map(([cls, text], j) => (
                  <span className={cls} key={j}>
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

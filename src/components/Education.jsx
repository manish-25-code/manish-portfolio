import Section from "./Section"
import Reveal from "./Reveal"

function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic journey">
      <Reveal className="timeline">
        <span className="tl-when">2023 - 2027</span>

        <div className="tl-card">
          <h3>B.Tech in Computer Science and Engineering</h3>
          <p className="tl-sub">Specialization: Cloud Computing and Automation</p>

          <div className="tl-meta">
            <p>Vellore Institute of Technology</p>
          </div>

          <p className="tl-desc">
            Currently pursuing my undergraduate degree with a focus on software development,
            cloud computing, machine learning, and computer science fundamentals.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}

export default Education

import Section from "./Section"
import Reveal from "./Reveal"

const facts = [
  ["Education", "B.Tech CSE"],
  ["Specialization", "Cloud Computing & Automation"],
  ["University", "Vellore Institute of Technology"],
  ["CGPA", "7.40"],
]

function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me">
      <Reveal className="prose">
        <p>
          I'm Manish Sehrawat, a B.Tech Computer Science and Engineering student at Vellore
          Institute of Technology, specializing in Cloud Computing and Automation.
        </p>
        <p>
          I enjoy building practical software projects using programming, machine learning,
          computer vision, and cloud technologies.
        </p>
        <p>
          My projects include a cloud-based face recognition attendance system, a forest fire
          prediction system, and a carbon emission analysis and forecasting system.
        </p>
      </Reveal>

      <Reveal as="dl" className="facts" delay={100}>
        {facts.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}

export default About

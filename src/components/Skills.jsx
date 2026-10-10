import Section from "./Section"
import Reveal from "./Reveal"

const groups = [
  ["Programming", ["C++", "Python"]],
  ["Libraries & Frameworks", ["Pandas", "NumPy", "OpenCV", "Matplotlib"]],
  ["Databases", ["MongoDB", "MySQL", "Firebase"]],
  ["Tools & Platforms", ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Linux"]],
  ["Core Subjects", ["OOPS", "DBMS", "Computer Networks", "Operating Systems"]],
  ["Areas of Interest", ["Cloud Computing", "Machine Learning", "Computer Vision", "Software Development"]],
]

function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with">
      <dl className="skill-rows">
        {groups.map(([label, items], i) => (
          <Reveal className="skill-row" delay={i * 50} key={label}>
            <dt>{label}</dt>
            <dd>
              <ul className="chips">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}

export default Skills

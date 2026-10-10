import Section from "./Section"
import Reveal from "./Reveal"

const certificates = [
  { name: "Google IT Support", provider: "Google" },
  { name: "Bits and Bytes of Computer Networking", provider: "Google" },
  { name: "Cloud Computing", provider: "NPTEL" },
  { name: "Internet of Things", provider: "NPTEL" },
  { name: "Full Stack Development - MERN", provider: "Full Stack Development" },
]

function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Learning and achievements">
      <ul className="cert-grid">
        {certificates.map((certificate, i) => (
          <Reveal as="li" delay={i * 50} key={certificate.name}>
            <div className="cert">
              <span className="cert-provider">{certificate.provider}</span>
              <h3>{certificate.name}</h3>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

export default Certifications

import Section from "./Section"
import Reveal from "./Reveal"

const contacts = [
  {
    label: "Email",
    value: "manishsherawat639@gmail.com",
    href: "mailto:manishsherawat639@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "View LinkedIn Profile",
    href: "https://www.linkedin.com/in/manish-sehrawat-703975289/?isSelfProfile=true",
    external: true,
  },
  {
    label: "GitHub",
    value: "View GitHub Profile",
    href: "https://github.com/manish-25-code",
    external: true,
  },
]

function Contact() {
  return (
    <Section id="contact" title="Contact Me" subtitle="Let's connect">
      <Reveal className="contact-copy">
        <h3>Have a project or opportunity?</h3>
        <p>
          I'm currently open to internship opportunities, entry-level roles, and interesting
          projects.
        </p>
        <p>Feel free to reach out if you'd like to connect.</p>
      </Reveal>

      <ul className="contact-links">
        {contacts.map((item, i) => (
          <Reveal as="li" delay={i * 60} key={item.label}>
            <a
              className="contact-link"
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="cl-label">{item.label}</span>
              <span className="cl-value">{item.value}</span>
              <span className="cl-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

export default Contact

import Reveal from "./Reveal"

// Shared section layout: sticky heading on the left, content on the right.
// Keeps every section's id so the navbar anchors keep working.
// The heading fades in on scroll like the rest of the content.
function Section({ id, title, subtitle, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container section-grid">
        <Reveal as="header" className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </Reveal>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}

export default Section
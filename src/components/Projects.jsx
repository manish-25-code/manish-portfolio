import Section from "./Section"
import Reveal from "./Reveal"
import ProjectVisual from "./ProjectVisual"

// TODO: replace the empty strings with your real URLs.
// - Empty `github` shows a muted "GitHub link coming soon" placeholder.
// - Empty `demo` hides the live demo button (no demo exists yet).
const projects = [
  {
    title: "FaceAttend – Attendance System",
    visual: "face",
    tone: "#38bdf8",
    description:
      "Developed a face recognition-based attendance system using Python, OpenCV, and DeepFace. The system supports user registration, automated attendance marking, and cloud-based attendance storage.",
    points: [
      "Automated attendance marking with face recognition",
      "Firebase for cloud data storage",
      "Flask web dashboard to view and manage attendance records",
    ],
    tech: ["Python", "OpenCV", "DeepFace", "Flask", "Firebase"],
    github: "",
    demo: "",
  },
  {
    title: "Forest Fire Prediction System",
    visual: "tree",
    tone: "#60a5fa",
    description:
      "Developed a machine learning model to predict forest fire occurrence using environmental data. The project involved data preprocessing, feature engineering, model training, and evaluation.",
    points: [
      "Preprocessing, training and evaluation on environmental datasets",
      "Improved prediction accuracy by 20% through feature engineering",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost"],
    github: "",
    demo: "",
  },
  {
    title: "Carbon Emission Analysis & Forecasting",
    visual: "forecast",
    tone: "#2dd4bf",
    description:
      "Built a deep learning-based forecasting system for analyzing and predicting carbon emission trends. The project uses sequential neural network architectures for time-series forecasting.",
    points: [
      "LSTM, GRU and SimpleRNN models for emission forecasting",
      "Approximately 98% test accuracy through model tuning",
      "Multi-year emission trends analyzed with data visualization",
    ],
    tech: ["Python", "TensorFlow", "Keras", "LSTM", "GRU", "Matplotlib"],
    github: "",
    demo: "",
  },
]

function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="What I've built">
      <div className="projects">
        {projects.map((project, i) => (
          <Reveal delay={i * 60} key={project.title}>
            <article className="project" style={{ "--tone": project.tone }}>
              <div className="project-visual">
                <ProjectVisual kind={project.visual} />
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="chips" aria-label="Technologies used">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.github ? (
                    <a
                      className="link-btn"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="link-btn is-disabled" aria-disabled="true">
                      GitHub link coming soon
                    </span>
                  )}
                  {project.demo && (
                    <a
                      className="link-btn"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Projects

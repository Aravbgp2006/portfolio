export default function Projects() {
  const projects = [
    {
      title: "Student Mitra App",
      tech: "Flutter • Firebase",
      desc: "Scholarship alerts, exam notifications and AI career guidance platform for students.",
    },
    {
      title: "Amazon Clone",
      tech: "HTML • CSS • JavaScript",
      desc: "Responsive e-commerce website inspired by Amazon with modern UI and product sections.",
    },
    {
      title: "Weather Dashboard",
      tech: "React • API",
      desc: "Real-time weather forecasting dashboard using external weather APIs.",
    },
    {
      title: "Advanced Calculator",
      tech: "JavaScript",
      desc: "Smart calculator with advanced mathematical operations and responsive design.",
    },
    {
      title: "Todo App",
      tech: "React",
      desc: "Task management application with add, update, delete and completion tracking.",
    },
    {
      title: "Student Management System",
      tech: "JavaScript",
      desc: "Student record management system with CRUD functionality and clean UI.",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "120px 10%",
        background: "#081229",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "4rem",
          marginBottom: "20px",
        }}
      >
        Featured Projects
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          maxWidth: "700px",
          margin: "0 auto 60px",
        }}
      >
        Some of my best projects showcasing frontend development,
        mobile app development and problem-solving skills.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background:
                "linear-gradient(145deg,#0f172a,#111c35)",
              borderRadius: "24px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "0.3s",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "15px",
                background:
                  "linear-gradient(135deg,#38bdf8,#8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              🚀
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "#38bdf8",
                marginBottom: "15px",
                fontWeight: "600",
              }}
            >
              {project.tech}
            </p>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
              }}
            >
              {project.desc}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "25px",
              }}
            >
              <button
                style={{
                  background: "#38bdf8",
                  color: "#000",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Live Demo
              </button>

              <button
                style={{
                  background: "transparent",
                  color: "#38bdf8",
                  border: "1px solid #38bdf8",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
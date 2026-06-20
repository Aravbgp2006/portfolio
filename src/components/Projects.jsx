import amazon from "../assets/amazon.png";
import studentmitra from "../assets/studentmitra.jpeg";
import weather from "../assets/weather.jpeg";
import calculator from "../assets/calculator.jpeg";
import todo from "../assets/todo.jpeg";

export default function Projects() {
  const projects = [
    {
      title: "Student Mitra",
      image: studentmitra,
      tech: "Flutter • Firebase",
    },
    {
      title: "Amazon Clone",
      image: amazon,
      tech: "React • JavaScript",
    },
    {
      title: "Weather Dashboard",
      image: weather,
      tech: "React • API",
    },
    {
      title: "Calculator",
      image: calculator,
      tech: "JavaScript",
    },
    {
      title: "Todo App",
      image: todo,
      tech: "React",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 10%",
        background: "#081229",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Featured Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#0f172a",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{project.title}</h3>

              <p style={{ color: "#38bdf8" }}>
                {project.tech}
              </p>

              <button
                style={{
                  marginTop: "10px",
                  background: "#38bdf8",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "Firebase", level: 82 },
    { name: "Git", level: 85 },
    { name: "GitHub", level: 88 },
    { name: "C", level: 80 },
    { name: "C++", level: 85 },
    { name: "Java", level: 75 },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "120px 10%",
        background: "#020617",
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
        Skills & Technologies
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          maxWidth: "700px",
          margin: "0 auto 60px",
          lineHeight: "1.8",
        }}
      >
        Technologies and tools that I use to build modern web
        applications, mobile apps and software solutions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              background:
                "linear-gradient(145deg,#0f172a,#111c35)",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {skill.name}
              </span>

              <span
                style={{
                  color: "#38bdf8",
                  fontWeight: "bold",
                }}
              >
                {skill.level}%
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#1e293b",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${skill.level}%`,
                  height: "100%",
                  background:
                    "linear-gradient(90deg,#38bdf8,#8b5cf6)",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
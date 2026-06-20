export default function Certificates() {
  const certificates = [
    "Data Analytics for Beginners",
    "Python Internship Program",
    "Financial Literacy",
    "Project Management & Innovation",
    "Self Presentation",
  ];

  return (
    <section
      style={{
        padding: "100px 10%",
        background: "#020617",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "40px",
        }}
      >
        Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {certificates.map((item) => (
          <div
            key={item}
            style={{
              background: "#0f172a",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
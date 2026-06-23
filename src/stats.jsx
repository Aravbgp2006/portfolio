export default function Stats() {
  const stats = [
    { number: "6+", label: "Projects" },
    { number: "10+", label: "Certificates" },
    { number: "100+", label: "DSA Problems" },
    { number: "3rd Year", label: "B.Tech CSE" },
  ];

  return (
    <section
      style={{
        padding: "80px 10%",
        background: "#081229",
        color: "white",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              background: "#0f172a",
              padding: "30px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#38bdf8" }}>
              {item.number}
            </h2>

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
}
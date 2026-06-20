import { FaGithub } from "react-icons/fa";

export default function Github() {
  return (
    <section
      style={{
        padding: "100px 10%",
        background: "#081229",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        GitHub Profile
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h1>5+</h1>
          <p>Projects Built</p>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h1>20+</h1>
          <p>Certificates</p>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h1>10+</h1>
          <p>Technologies</p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <a
          href="https://github.com/Aravbgp2006"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#38bdf8",
            color: "#000",
            padding: "15px 30px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          <FaGithub style={{ marginRight: "10px" }} />
          Visit GitHub
        </a>
      </div>
    </section>
  );
}
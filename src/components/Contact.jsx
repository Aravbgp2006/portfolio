import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
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
        Contact Me
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
        Feel free to connect with me for internships,
        collaborations, projects or professional opportunities.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <FaEnvelope
            size={35}
            color="#38bdf8"
            style={{ marginBottom: "15px" }}
          />

          <h3>Email</h3>

          <p style={{ color: "#cbd5e1" }}>
            arav111bgp11@gmail.com
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <FaPhone
            size={35}
            color="#38bdf8"
            style={{ marginBottom: "15px" }}
          />

          <h3>Phone</h3>

          <p style={{ color: "#cbd5e1" }}>
            +91 9006696047
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <FaMapMarkerAlt
            size={35}
            color="#38bdf8"
            style={{ marginBottom: "15px" }}
          />

          <h3>Location</h3>

          <p style={{ color: "#cbd5e1" }}>
            Bihar, India
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "50px",
          fontSize: "35px",
        }}
      >
        <a
          href="https://github.com/Aravbgp2006"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/arav-raj-5b6307240"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0ea5e9" }}
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
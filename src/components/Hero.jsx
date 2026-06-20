import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#020617,#081229,#020617)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "70px",
        flexWrap: "nowrap",
        padding: "180px 30px 120px",
      }}
    >
      {/* Photo Section */}

      <div
        style={{
          padding: "8px",
          borderRadius: "30px",
          background:
            "linear-gradient(135deg,#38bdf8,#6366f1,#8b5cf6)",
          boxShadow: "0 0 60px rgba(56,189,248,.5)",
        }}
      >
        <img
          src={profile}
          alt="Arav Raj"
          style={{
            width: "320px",
            height: "420px",
            objectFit: "cover",
            borderRadius: "25px",
            display: "block",
          }}
        />
      </div>

      {/* Content Section */}

      <div
        style={{
          maxWidth: "650px",
          textAlign: "left",
        }}
      >
        <p
          style={{
            color: "#38bdf8",
            letterSpacing: "3px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          HELLO, I'M
        </p>

        <h1
          style={{
            fontSize: "4.5rem",
            margin: "0",
            lineHeight: "1",
          }}
        >
          Arav Raj
        </h1>

        <div
          style={{
            fontSize: "1.8rem",
            color: "#38bdf8",
            fontWeight: "600",
            minHeight: "60px",
            marginTop: "15px",
          }}
        >
          <TypeAnimation
            sequence={[
              "B.Tech CSE Student",
              2000,
              "React Developer",
              2000,
              "Flutter Developer",
              2000,
              "Frontend Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginTop: "20px",
          }}
        >
          Motivated and detail-oriented B.Tech Computer Science &
          Engineering student passionate about software development,
          web technologies, mobile applications and data analytics.
          Seeking internship opportunities to build impactful
          solutions and grow as a developer.
        </p>

        {/* Buttons */}

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              background: "#38bdf8",
              color: "#000",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              border: "1px solid #38bdf8",
              color: "#38bdf8",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            Contact Me
          </a>

          <a
            href="#"
            style={{
              background: "#8b5cf6",
              color: "white",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "35px",
            fontSize: "30px",
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

          <a
            href="https://leetcode.com/u/aravbgp2006"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#f59e0b" }}
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.hackerrank.com/profile/aravbgp2006"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#22c55e" }}
          >
            <FaHackerrank />
          </a>
        </div>
      </div>
    </section>
  );
}
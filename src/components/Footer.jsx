import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        color: "white",
        padding: "60px 10%",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#38bdf8",
              marginBottom: "10px",
            }}
          >
            Arav Raj
          </h2>

          <p
            style={{
              color: "#94a3b8",
              maxWidth: "400px",
              lineHeight: "1.8",
            }}
          >
            B.Tech CSE Student passionate about Web
            Development, Flutter, React, Firebase and
            building impactful digital products.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <a href="#home" style={{ color: "#94a3b8" }}>
              Home
            </a>

            <a href="#skills" style={{ color: "#94a3b8" }}>
              Skills
            </a>

            <a href="#projects" style={{ color: "#94a3b8" }}>
              Projects
            </a>

            <a href="#contact" style={{ color: "#94a3b8" }}>
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3>Connect</h3>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "15px",
              fontSize: "28px",
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
      </div>

      <hr
        style={{
          margin: "40px 0 20px",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 Arav Raj. All Rights Reserved.
      </p>
    </footer>
  );
}
export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "rgba(15,23,42,0.7)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        zIndex: "1000",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
        }}
      >
        Arav Raj
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <a href="#" style={linkStyle}>Home</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: "500",
};
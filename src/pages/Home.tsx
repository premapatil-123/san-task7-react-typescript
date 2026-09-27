import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "70px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(34px, 6vw, 52px)",
          marginBottom: "18px",
          color: "#0f172a",
        }}
      >
        Welcome to Course Explorer
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "#64748b",
          fontSize: "18px",
          lineHeight: 1.6,
        }}
      >
        Explore courses using a modern React and TypeScript
        application connected to an Express REST API.
      </p>

      <Link
        to="/courses"
        style={{
          display: "inline-block",
          marginTop: "25px",
          background: "#2563eb",
          color: "white",
          padding: "13px 22px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Explore Courses
      </Link>
    </section>
  );
}

export default Home;
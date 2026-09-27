import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          fontFamily: "Arial, sans-serif",
          color: "#0f172a",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            background: "#1e293b",
            padding: "18px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Course Explorer
          </Link>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/" style={navLinkStyle}>
              Home
            </Link>

            <Link to="/courses" style={navLinkStyle}>
              Courses
            </Link>

            <Link to="/about" style={navLinkStyle}>
              About
            </Link>
          </div>
        </nav>

        {/* Page Area */}
        <main
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/courses"
              element={<Courses />}
            />

            <Route
              path="/courses/:id"
              element={<CourseDetails />}
            />

            <Route
              path="/about"
              element={
                <section
                  style={{
                    maxWidth: "750px",
                    margin: "0 auto",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "36px",
                      marginBottom: "15px",
                    }}
                  >
                    About This Project
                  </h1>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "17px",
                      lineHeight: 1.7,
                    }}
                  >
                    This Level 3 project demonstrates React,
                    TypeScript, reusable components, typed API
                    data, client-side routing and connection
                    to an Express REST API.
                  </p>

                  <div
                    style={{
                      background: "white",
                      marginTop: "25px",
                      padding: "25px",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <h2 style={{ marginBottom: "15px" }}>
                      Technology Stack
                    </h2>

                    <p>React</p>
                    <p>TypeScript</p>
                    <p>Vite</p>
                    <p>Express</p>
                    <p>PostgreSQL</p>
                  </div>
                </section>
              }
            />

            <Route
              path="*"
              element={
                <section
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                  }}
                >
                  <h1>404 - Page Not Found</h1>

                  <p
                    style={{
                      color: "#64748b",
                      marginTop: "10px",
                    }}
                  >
                    The page you are looking for does not exist.
                  </p>

                  <Link
                    to="/"
                    style={{
                      display: "inline-block",
                      marginTop: "20px",
                      background: "#2563eb",
                      color: "white",
                      padding: "12px 18px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Go Home
                  </Link>
                </section>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const navLinkStyle = {
  background: "#334155",
  color: "white",
  textDecoration: "none",
  padding: "10px 16px",
  borderRadius: "7px",
  fontWeight: "bold",
};

export default App;
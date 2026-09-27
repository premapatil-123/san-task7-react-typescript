import { useEffect, useMemo, useState } from "react";
import type { Course } from "../types";
import { getCourses } from "../api";
import CourseCard from "../CourseCard";

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  async function loadCourses() {
    try {
      setLoading(true);
      setError("");

      const data = await getCourses();
      setCourses(data);
    } catch (error) {
      setError("Unable to load courses. Please check the server.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(courses.map((course) => course.category))
    );

    return ["All", ...uniqueCategories];
  }, [courses]);

  // Search + category filtering
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [courses, search, category]);

  return (
    <section>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "34px",
              marginBottom: "8px",
              color: "#0f172a",
            }}
          >
            Available Courses
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Browse and filter courses loaded from the Express REST API.
          </p>
        </div>

        <button
          onClick={loadCourses}
          style={{
            background: "#0f766e",
            color: "white",
            border: "none",
            padding: "11px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Refresh
        </button>
      </div>

      {/* Search and Filter */}
      {!loading && !error && courses.length > 0 && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            marginBottom: "25px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            style={{
              flex: "1 1 250px",
              padding: "12px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              fontSize: "15px",
            }}
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            style={{
              flex: "0 1 220px",
              padding: "12px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              fontSize: "15px",
              background: "white",
            }}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3>Loading courses...</h3>

          <p>Please wait.</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div
          style={{
            background: "#fef2f2",
            border: "1px solid #fecaca",
            padding: "35px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3>Something went wrong</h3>

          <p>{error}</p>

          <button
            onClick={loadCourses}
            style={{
              marginTop: "15px",
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "11px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty database */}
      {!loading && !error && courses.length === 0 && (
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3>No courses available</h3>

          <p>The API did not return any course records.</p>
        </div>
      )}

      {/* No filter results */}
      {!loading &&
        !error &&
        courses.length > 0 &&
        filteredCourses.length === 0 && (
          <div
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h3>No matching courses</h3>

            <p>
              Try a different search word or category.
            </p>
          </div>
        )}

      {/* Course cards */}
      {!loading &&
        !error &&
        filteredCourses.length > 0 && (
          <>
            <p
              style={{
                color: "#64748b",
                marginBottom: "18px",
              }}
            >
              Showing {filteredCourses.length} course
              {filteredCourses.length !== 1 ? "s" : ""}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "22px",
              }}
            >
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          </>
        )}
    </section>
  );
}

export default Courses;
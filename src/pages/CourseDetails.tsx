import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourses } from "../api";
import type { Course } from "../types";

function CourseDetails() {
  const { id } = useParams<{ id: string }>();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCourse() {
      try {
        setLoading(true);
        setError("");

        const courses = await getCourses();

        const selectedCourse = courses.find(
          (item) => item.id === Number(id)
        );

        if (!selectedCourse) {
          setError("Course not found.");
          return;
        }

        setCourse(selectedCourse);
      } catch (err) {
        setError("Unable to load course details.");
      } finally {
        setLoading(false);
      }
    }

    loadCourse();
  }, [id]);

  if (loading) {
    return (
      <section
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "14px",
          textAlign: "center",
        }}
      >
        <h2>Loading course...</h2>
        <p>Please wait while we load the details.</p>
      </section>
    );
  }

  if (error) {
    return (
      <section
        style={{
          background: "#fef2f2",
          border: "1px solid #fecaca",
          padding: "40px",
          borderRadius: "14px",
          textAlign: "center",
        }}
      >
        <h2>Something went wrong</h2>
        <p>{error}</p>

        <Link
          to="/courses"
          style={{
            display: "inline-block",
            marginTop: "18px",
            background: "#2563eb",
            color: "white",
            padding: "11px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Back to Courses
        </Link>
      </section>
    );
  }

  if (!course) {
    return null;
  }

  return (
    <section
      style={{
        maxWidth: "750px",
        margin: "0 auto",
      }}
    >
      <Link
        to="/courses"
        style={{
          textDecoration: "none",
          color: "#2563eb",
          fontWeight: "bold",
        }}
      >
        ← Back to Courses
      </Link>

      <div
        style={{
          background: "white",
          marginTop: "20px",
          padding: "35px",
          borderRadius: "14px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 5px 18px rgba(15, 23, 42, 0.06)",
        }}
      >
        <p
          style={{
            color: "#64748b",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          Course #{course.id}
        </p>

        <h1
          style={{
            fontSize: "36px",
            marginBottom: "15px",
            color: "#0f172a",
          }}
        >
          {course.name}
        </h1>

        <div
          style={{
            display: "inline-block",
            background: "#dbeafe",
            color: "#1d4ed8",
            padding: "7px 12px",
            borderRadius: "20px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {course.category}
        </div>

        <h2
          style={{
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          Description
        </h2>

        <p
          style={{
            color: "#475569",
            lineHeight: 1.8,
            fontSize: "17px",
          }}
        >
          {course.description}
        </p>
      </div>
    </section>
  );
}

export default CourseDetails;
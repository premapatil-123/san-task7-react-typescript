import { Link } from "react-router-dom";
import type { Course } from "./types";

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      style={{
        background: "white",
        border: "1px solid #e2e8f0",
        borderRadius: "14px",
        padding: "22px",
        boxShadow: "0 5px 18px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "13px",
          marginBottom: "10px",
        }}
      >
        Course #{course.id}
      </div>

      <h2
        style={{
          fontSize: "22px",
          marginBottom: "12px",
        }}
      >
        {course.name}
      </h2>

      <div
        style={{
          display: "inline-block",
          background: "#dbeafe",
          color: "#1d4ed8",
          padding: "6px 10px",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: "bold",
          marginBottom: "14px",
        }}
      >
        {course.category}
      </div>

      <p
        style={{
          color: "#475569",
          lineHeight: 1.6,
          minHeight: "70px",
        }}
      >
        {course.description}
      </p>

      <Link
        to={`/courses/${course.id}`}
        style={{
          display: "block",
          width: "100%",
          marginTop: "15px",
          background: "#2563eb",
          color: "white",
          padding: "11px",
          borderRadius: "8px",
          textAlign: "center",
          textDecoration: "none",
          fontWeight: "bold",
          boxSizing: "border-box",
        }}
      >
        View Details
      </Link>
    </article>
  );
}

export default CourseCard;
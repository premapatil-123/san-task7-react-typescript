import type { Course } from "./types";

export async function getCourses(): Promise<Course[]> {
  const response = await fetch("/api/courses");

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  const data: Course[] = await response.json();

  return data;
}
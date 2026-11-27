import { Link } from "react-router-dom";
import type { Course } from "../Course";

interface Props {
  courses: Course[];
  onDelete: (id: number) => void;
}

export default function CourseIndex({ courses, onDelete }: Props) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="page-title">All Courses</h1>
        <Link to="/courses/new" className="btn btn-accent">
          + Add Course
        </Link>
      </div>

      {courses.length === 0 && <p>No courses yet. Add one.</p>}

      <div className="course-grid">
        {courses.map((c) => (
          <div className="card shadow-sm course-box" key={c.id}>
            <div className="card-body">
              <span className="badge badge-subject mb-2">{c.subject}</span>
              <h5 className="card-title">{c.name}</h5>
              <h6 className="text-muted">{c.number}</h6>
              <p className="card-text">{c.description}</p>
              <p className="mb-0">
                <strong>{c.credits}</strong> credits
              </p>
            </div>
            <div className="card-footer d-flex gap-2">
              <Link
                to={`/courses/${c.id}`}
                className="btn btn-sm btn-outline-primary"
              >
                View
              </Link>
              <Link
                to={`/courses/${c.id}/edit`}
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </Link>
              <button
                className="btn btn-sm btn-outline-danger ms-auto"
                onClick={() => onDelete(c.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

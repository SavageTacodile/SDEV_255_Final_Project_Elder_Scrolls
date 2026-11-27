import { useParams, Link, useNavigate } from "react-router-dom";
import type { Course } from "../Course";

interface Props {
  courses: Course[];
  onDelete: (id: number) => void;
}

export default function CourseDetail({ courses, onDelete }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <p>
        Course not found. <Link to="/">Back</Link>
      </p>
    );
  }

  return (
    <div className="card card-body shadow-sm">
      <span className="badge badge-subject align-self-start mb-2">
        {course.subject}
      </span>
      <h1 className="page-title">{course.name}</h1>
      <h5 className="text-muted">{course.number}</h5>
      <p className="lead">{course.description}</p>
      <p>
        <strong>Credits:</strong> {course.credits}
      </p>
      <div className="d-flex gap-2">
        <Link to={`/courses/${course.id}/edit`} className="btn btn-accent">
          Edit
        </Link>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            onDelete(course.id);
            navigate("/");
          }}
        >
          Delete
        </button>
        <Link to="/" className="btn btn-outline-secondary ms-auto">
          Back to courses
        </Link>
      </div>
    </div>
  );
}

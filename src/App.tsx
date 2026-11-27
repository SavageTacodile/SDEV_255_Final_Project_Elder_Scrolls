import { useState } from "react";
import NavBar from "./components/NavBar";
import type { Course } from "./Course";
import { Routes, Route } from 'react-router-dom'
import CourseIndex from './pages/CourseIndex'
import CourseForm from './pages/CourseForm'
import CourseDetail from './pages/CourseDetail'

const starterCourses: Course[] = [
  {
    id: 1,
    number: "CS 101",
    name: "Intro to Web Development",
    description: "Build websites with HTML, CSS, and JavaScript.",
    subject: "Computer Science",
    credits: 3,
  },
  {
    id: 2,
    number: "MATH 110",
    name: "College Algebra",
    description: "Equations, functions, inequalities, and graphing.",
    subject: "Mathematics",
    credits: 4,
  },
  {
    id: 3,
    number: "ENG 101",
    name: "English Composition",
    description: "Writing, research, and reading skills",
    subject: "English",
    credits: 3,
  },
  {
    id: 4,
    number: "BIO 120",
    name: "Principles of Biology",
    description: "Genetics, cells, evolution, and the diversity of life.",
    subject: "Biology",
    credits: 4,
  },
  {
    id: 5,
    number: "HIST 150",
    name: "U.S. History Since 1877",
    description:
      "History of the U.S from the end of reconstruction through the modern era.",
    subject: "History",
    credits: 3,
  },
];

export default function App() {
  const [courses, setCourses] = useState<Course[]>(starterCourses);

  const saveCourse= (data: Omit<Course, 'id'>, id?: number) => {
    if (id === undefined) {
      setCourses([...courses, { ...data, id: Date.now() }])
    } else {
      setCourses(courses.map((c) => (c.id === id ? { ...c, ...data } : c)))
    }
  }


  const deleteCourse = (id: number) => {
    setCourses(courses.filter((c) => c.id !== id))
  }

  return (
    <>
      <NavBar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<CourseIndex courses={courses} onDelete={deleteCourse} />} />
          <Route path="/courses/new" element={<CourseForm courses={courses} onSave={saveCourse} />} />
          <Route path="/courses/:id" element={<CourseDetail courses={courses} onDelete={deleteCourse} />} />
          <Route path="/courses/:id/edit" element={<CourseForm courses={courses} onSave={saveCourse} />} />
          
        </Routes>
      </div>
    </>
  );
}

import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand navbar-dark app-navbar">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">CourseHub</Link>
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/" end>Courses</NavLink>
                    <NavLink className="nav-link" to="/courses/new">Add Course</NavLink>
                </div>
            </div>
        </nav>
    )
}
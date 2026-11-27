import { useState } from 'react'
import type { ChangeEvent, SubmitEvent } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import type { Course } from '../Course'


interface Props {
    courses: Course[]
    onSave: (data: Omit<Course, 'id'>, id?: number) => void

}

export default function CourseForm({ courses, onSave }: Props) {
    const { id } = useParams()
    const navigate = useNavigate()
    const existing = id ? courses.find((c) => c.id === Number(id)) : undefined
    const [form, setForm] = useState({
        number: existing?.number ?? '',
        name: existing?.name ?? '',
        description: existing?.description ?? '',
        subject: existing?.subject ?? '',
        credits: existing ? String(existing.credits) : '',
    })


    if (id && !existing) {
        return <p>Course not found. <Link to="/">Back</Link></p>
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        onSave({ ...form, credits: Number(form.credits) }, existing?.id)
        navigate('/')
    }




    return(
        <>
            <h1 className="page-title mb-4">{existing ? 'Edit Course' : 'Add Course'}</h1>
            <form onSubmit={handleSubmit} className="card card-body shadow-sm">
                <div className="row">
                 <div className="col-md-4 mb-3">
                        <label className="form-label">Course Number</label>
                        <input className="form-control" name="number" value={form.number} onChange={handleChange} required />
                    </div>
                    <div className="col-md-8 mb-3">
                        <label className="form-label">Course Name</label>
                        <input className="form-control" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" rows={3} value={form.description} onChange={handleChange} required />   
                </div>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <label className="form-label">Subject Area</label>
                        <input className="form-control" name="subject" value={form.subject} onChange={handleChange} required />    
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Credits</label>
                        <input className="form-control" type="number" min="1" max="12" name="credits" value={form.credits} onChange={handleChange} required />
                    </div>    
                </div>

                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-accent">Save</button>
                    <Link to="/" className="btn btn-outline-secondary">Cancel</Link>
                </div>
            </form>
        </>
    )

}

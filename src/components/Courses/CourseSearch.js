import React, { useState, useEffect } from 'react'
import axios from 'axios'


import '../../assets/css/CoursesSearch.css'

const CourseSearch = ({ handleChange, handleSelectChange }) => {

    const [courseNames, updateCourseNames] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/courses")
            .then(res => {
                res.data.map(elem => {
                    updateCourseNames(courseNames => [...courseNames, elem.course])
                })
            })
            .catch(e => console.log(e))
        
    }, [])

    return (
        <div className="courses-search">
            <form className="d-flex align-items-center justify-content-around flex-row">
                <input className="courses-search-input" onKeyUp={handleChange} type="text" placeholder="Search Courses" />
                <select 
                    className="courses-search-select courses-search-input"
                    onChange={handleSelectChange}>
                    <option value="all">All Categories</option>
                    {courseNames.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}

export default CourseSearch

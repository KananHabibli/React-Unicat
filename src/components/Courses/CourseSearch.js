import React, { useState, useEffect } from 'react'
import axios from 'axios'


import '../../assets/css/CoursesSearch.css'

const CourseSearch = () => {

    const [courses, updateCourses] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/courses?_start=0&_end=6")
            .then(res => {
                res.data.map(elem => {
                    updateCourses(courseNames => [...courseNames, elem.course])
                })
            })
            .catch(e => console.log(e))
        
    }, [])

    return (
        <div className="courses-search">
            <form className="d-flex align-items-center justify-content-start flex-row" action="">
                <input className="courses-search-input" type="text" placeholder="Search Courses" />
                <select className="courses-search-select courses-search-input">
                    <option>All Categories</option>
                    {courses.map((course, index) => (
                        <option key={index}>{course}</option>
                    ))}
                </select>
                <button className="courses-search-button ml-auto">Search Now</button>
            </form>
        </div>
    )
}

export default CourseSearch

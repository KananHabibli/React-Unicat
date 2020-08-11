import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


import '../../assets/css/Courses.css'
import CourseCard from '../Courses/CourseCard'



const Courses = props => {

    const [courses, updateCourses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/courses?_start=0&_end=3')
        .then(res => {
            res.data.map(elem => {
                updateCourses(courses => [...courses, elem])
            })
        })
        .catch(e => console.log(e))
    }, [])

    return (
        <div className="courses">
            <div className="container">
                <h1 className="text-center courses-title">Popular Online Courses</h1>
                <br />
                <p className="text-center  mx-auto courses-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem
                </p>
                <div className="row courses-cards">
                    {courses.map((course, index) => {
                        console.log(course)
                        return(
                        <div key={index} className="col-lg-4">
                            <CourseCard
                                src={course.src} 
                                title={course.course} 
                                tutor={course.tutor} 
                                price={course.price} 
                                discount
                                students={course.students}
                                rating={course.rating}/>
                        </div>
                    )})}
                </div>
                <div className="courses-button">
                    <NavLink to="/courses" className="btn mx-auto text-white">View All Courses</NavLink>
                </div>
            </div>            
        </div>
    )
}

export default Courses
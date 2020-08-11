import React, { useState, useEffect } from 'react'
import axios from 'axios'


import '../../assets/css/CardContainer.css'
import CourseCard from './CourseCard'

const CardContainer = props => {

    const [courses, updateCourses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/courses?_start=0&_end=6')
        .then(res => {
            updateCourses(res.data)
        })
        .catch(e => console.log(e))
    }, [])


    return (
        <div className="courses-cards">
            <div className="row">
                {courses.map((course, index) => {
                    return (
                        <div key={index} className="col-lg-6">
                            <CourseCard
                                src={course.src} 
                                title={course.course} 
                                tutor={course.tutor} 
                                price={course.price} 
                                discount
                                students={course.students}
                                rating={course.rating}/>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}

export default CardContainer

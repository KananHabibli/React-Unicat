import React, { useState, useEffect } from 'react'

import '../../assets/css/CardContainer.css'
import CourseCard from './CourseCard'

import fetchData from '../../utils/fetchData'

const CardContainer = () => {

    const [courses, updateCourses] = useState([])

    

    useEffect(() => {
        (async function() {
            const data = await fetchData('courses?_start=0&_end=6')
            console.log(data)
            data.map(elem => {
                updateCourses(courses => [...courses, elem])
            })
        })()
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

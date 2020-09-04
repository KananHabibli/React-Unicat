import React, { Fragment, useState, useEffect } from 'react'

import '../../assets/css/CardContainer.css'

import CourseCard from './CourseCard'
import Pagination    from './Pagination'

import fetchData from '../../utils/fetchData'

const interval = [
    {
        start: 0,
        end: 6
    },
    {
        start: 6,
        end: 12
    },
    {
        start: 12,
        end: 18
    },
    {
        start: 18,
        end: 24
    }
]

const CardContainer = () => {

    const [courses, updateCourses] = useState([])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(6)

    const fetchCourses = page => {
        setStart(interval[page - 1].start)
        setEnd(interval[page - 1].end)
    }

    useEffect(() => {
        (async function() {
            updateCourses([])
            const data = await fetchData(`courses?_start=${start}&_end=${end}`)
            data.map(elem => {
                updateCourses(courses => [...courses, elem])
            })
        })()
    }, [start, end])


    return (
        <Fragment>
            <div className="courses-cards">
                <div className="row">
                    {courses.map((course, index) => (
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
                    ))}
                </div>
            </div>
            <Pagination fetch={fetchCourses}/>
        </Fragment>
        
    )
}

export default CardContainer

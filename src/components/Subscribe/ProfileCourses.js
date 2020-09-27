import React, { Fragment, useState, useEffect } from 'react'
import '../../assets/css/ProfileCourse.css'

import CourseStatus from './CourseStatus'
import MyCourse from './MyCourse'

import fetchData from '../../utils/fetchData'
const ProfileCourses = () => {

    const [myCourses, setMyCourses] = useState([])

    useEffect(() => {
        (async function() {
            const data = await fetchData('courses?_start=12&_end=18')
            console.log(data)
            data.map(elem => {
                setMyCourses(myCourses => [...myCourses, elem])
            })
        })()
    }, [])


    return(
        <Fragment>
            <CourseStatus />
            <h2 className="profile-title text-center">My Courses</h2>
            <ul className="list-unstyled">
                {myCourses.map((course, index) => (
                    <MyCourse
                        key={course.id}
                        id={course.id}
                        src={course.src} 
                        title={course.course} 
                        tutor={course.tutor} 
                        price={course.price} 
                        discount
                        students={course.students}
                        rating={course.rating} />
                ))}
            </ul>
        </Fragment>
    )
}

export default ProfileCourses
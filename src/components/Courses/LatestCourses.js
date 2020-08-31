import React, { useState, useEffect } from 'react'

import "../../assets/css/LatestCourses.css"
import MediaCard from './MediaCard'

import fetchData from '../../utils/fetchData'

const LatestCourses = () => {

    const [courses, updateCourses] = useState([])

    useEffect(() => {
        (async function() {
            const data = await fetchData('latestCourses')
            updateCourses(data)
        })()
    }, [])

    return (
        <div className="latest-courses">
            <div className="latest-title">Latest Courses</div>
            <ul className="list-unstyled">
                {courses.map((course, index) => (
                    <MediaCard
                        key={index}
                        src={course.src}
                        alt={course.alt}
                        title={course.title}
                        price={course.price}
                    />
                ))}
            </ul>
        </div>
    )
}

export default LatestCourses

import React from 'react'

import "../../assets/css/LatestCourses.css"
import MediaCard from './MediaCard'

const LatestCoourses = props => {
    return (
        <div className="latest-courses">
            <div className="latest-title">Latest Courses</div>
            <ul className="list-unstyled">
                <MediaCard
                    src="images/latest_1.jpg"
                    alt="Latest Course 1"
                    title="How to Design a Logo a Beginners Course"
                    price="Free"
                />
                <MediaCard
                    src="images/latest_2.jpg"
                    alt="Latest Course 2"
                    title="Photography for Beginners MasterclassName"
                    price="170"
                />
                <MediaCard
                    src="images/latest_3.jpg"
                    alt="Latest Course 3"
                    title="The Secrets of Body Language"
                    price="220"
                />
            </ul>
        </div>
    )
}

export default LatestCoourses

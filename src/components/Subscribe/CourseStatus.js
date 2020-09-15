import React, { Fragment } from 'react'

const CourseSearch = () => (
    <Fragment>
        <ul className="profile-records d-flex align-items-center justify-content-around w-50 my-4 mx-auto">
            <li className="record-item">
                <span> 6 </span>
                <span> Courses</span> 
            </li>
            <li className="record-item">
                <span> 3 </span>
                <span> Completed </span>
            </li>
            <li className="record-item">
                <span> 1 </span>
                <span> Ongoing </span>
            </li>
        </ul>
        <hr />
    </Fragment>
)

export default CourseSearch
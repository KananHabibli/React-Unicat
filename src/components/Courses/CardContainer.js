import React, { Component } from 'react'

import '../../assets/css/CardContainer.css'

import CourseCard from './CourseCard'

const CardContainer = props => {
    return (
        <div className="courses-cards">
            <div className="row">
                <div className="col-lg-6">
                    <CourseCard title="Starting a Startup" tutor="Mr. Charles" price="$220" discount="$320" src="images/course_1.jpg"/>
                </div>
                <div className="col-lg-6">
                    <CourseCard title="Learning Basic German Fast" tutor="Mr. John Taylor" price="$130" discount src="images/course_2.jpg"/>
                </div>
                <div className="col-lg-6">
                    <CourseCard title="Business Ground Up" tutor="Ms. Lucius" price="$130" discount src="images/course_3.jpg"/>
                </div>
                <div className="col-lg-6">
                    <CourseCard title="Java Technology" tutor="Mr. Charles" price="$130" discount="$250" src="images/course_4.jpg"/>
                </div>
                <div className="col-lg-6">
                    <CourseCard title="Software Training" tutor=">Mr. John Taylor" price="FREE" discount src="images/course_5.jpg"/>
                </div>
                <div className="col-lg-6">
                    <CourseCard title="Software Training" tutor=">Mr. John Taylor" price="$130" discount src="images/course_6.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default CardContainer

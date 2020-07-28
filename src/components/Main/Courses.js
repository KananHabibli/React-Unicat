import React from 'react'

import '../../assets/css/Courses.css'
import CourseCard from '../Courses/CourseCard'
const Courses = props => {
    return (
        <div className="courses">
            <div className="container">
                <h1 className="text-center courses-title">Popular Online Courses</h1>
                <br />
                <p className="text-center  mx-auto courses-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem
                </p>
                <div className="row courses-cards">
                    <div className="col-lg-4">
                        <CourseCard src="/images/course_1.jpg" title="Software Training" tutor="Mr. John Taylor" price="$130" discount/>
                    </div>
                    <div className="col-lg-4">
                        <CourseCard src="/images/course_2.jpg" title="Developing Mobile Apps" tutor="Ms. Lucius" price="FREE" discount/>
                    </div>
                    <div className="col-lg-4">
                        <CourseCard src="/images/course_3.jpg" title="Starting a Startup" tutor="Mr. Charles" price="$220" discount/>
                    </div>
                </div>
                <div className="courses-button">
                    <a href="#" className="btn mx-auto text-white">View All Courses</a>
                </div>
            </div>            
        </div>
    )
}

export default Courses
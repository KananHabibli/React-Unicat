import React, { Component } from 'react'

import "../../assets/css/LatestCourses.css"

export class LatestCoourses extends Component {
    render() {
        return (
            <div className="latest-courses">
                <div className="latest-title">Latest Courses</div>
                <ul className="list-unstyled">
                    <li className="media">
                    <img src="images/latest_1.jpg" className="mr-3" alt="Latest Course" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">
                            <a href="#">How to Design a Logo a Beginners Course</a>
                        </h5>
                        <span>Free</span>
                    </div>
                    </li>
                    <li className="media my-4">
                    <img src="images/latest_2.jpg" className="mr-3" alt="Latest Course" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">
                            <a href="#">Photography for Beginners MasterclassName</a>
                        </h5>
                        <span>$170</span>
                    </div>
                    </li>
                    <li className="media">
                    <img src="images/latest_3.jpg" className="mr-3" alt="Latest Course" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">
                            <a href="#">The Secrets of Body Language</a>
                        </h5>
                        <span>$220</span>
                    </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LatestCoourses

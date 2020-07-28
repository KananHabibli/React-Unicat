import React from 'react'

const CourseCard = props => {
    return (
        <div className="card">
            <img src="images/course_1.jpg" className="card-img-top" alt="Course 1" />
            <div className="card-body">
            <h5 className="card-title"><a href="#">{props.title}</a></h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.tutor}</h6>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
            <hr />
            <div className="courses-card-footer">
                <div className="d-flex align-items-center justify-content-start flex-row">
                    <div className="card-footer-info">
                        <i className="fas fa-graduation-cap"></i> 20 student
                    </div>
                    <div className="card-footer-info">
                        <i className="fas fa-star"></i>5 Ratings
                    </div>
                    <div className="card-footer-price ml-auto">
                        <span>{props.discount}</span> {props.price}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CourseCard

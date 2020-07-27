import React from 'react'

import '../../assets/css/Courses.css'

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
                        <div className="card">
                            <img src="/images/course_1.jpg" className="card-img-top" alt="Course 1" />
                            <div className="card-body">
                            <h5 className="card-title"><a href="#">Software Training</a></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Mr. John Taylor</h6>
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
                                        $130
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="/images/course_2.jpg" className="card-img-top" alt="Course 1" />
                            <div className="card-body">
                            <h5 className="card-title"><a href="#">Developing Mobile Apps</a></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Ms. Lucius</h6>
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
                                        Free
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="/images/course_3.jpg" className="card-img-top" alt="Course 1" />
                            <div className="card-body">
                            <h5 className="card-title"><a href="#">Starting a Startup</a></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Mr. Charles</h6>
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
                                        <span>$320</span> $220
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
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
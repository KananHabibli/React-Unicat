import React from 'react'

import '../../assets/css/Events.css'

const Events = props => {
    return (
        <div className="events">
            <div className="container">
                <div className="events-title">
                    <h2 className="text-center">Upcoming Events
                    </h2>
                    <div className="events-text text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p>
                    </div>
                </div>
                <div className="events-cards">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <img src="/images/event_1.jpg" className="card-img-top" alt="Event 1" />
                                <div className="card-body">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                        <div className="event-date">
                                            <div className="event-day">21</div>
                                            <div className="event-month">Aug</div>
                                        </div>
                                        <div className="event-content">
                                            <div className="event-content-title">
                                                <a href="#">Which Country Handles Student Debt?</a>
                                            </div>
                                            <div className="event-content-date d-flex flex-row align-items-center justify-content-start">
                                                <ul>
                                                    <li>
                                                        <i className="far fa-clock"></i>15:00 - 19:00
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-map-marker-alt"></i>25 New York City
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="event-content-text">
                                                <p>Policy analysts generally agree on a need for reform, but not on which path...</p>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src="/images/event_2.jpg" className="card-img-top" alt="Event 1" />
                                <div className="card-body">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                        <div className="event-date">
                                            <div className="event-day">27</div>
                                            <div className="event-month">Aug</div>
                                        </div>
                                        <div className="event-content">
                                            <div className="event-content-title">
                                                <a href="#">Repaying your student loans (Winter 2017-2018)</a>
                                            </div>
                                            <div className="event-content-date">
                                                <ul>
                                                    <li>
                                                        <i className="far fa-clock"></i>09.00 - 17.30
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-map-marker-alt"></i>25 Brooklyn City
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="event-content-text">
                                                <p>This Consumer Action News issue covers topics now being debated before...</p>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img src="/images/event_3.jpg" className="card-img-top" alt="Event 1" />
                                <div className="card-body">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                        <div className="event-date">
                                            <div className="event-day">01</div>
                                            <div className="event-month">Sep</div>
                                        </div>
                                        <div className="event-content">
                                            <div className="event-content-title">
                                                <a href="#">Which Country Handles Student Debt?</a>
                                            </div>
                                            <div className="event-content-date">
                                                <ul>
                                                    <li>
                                                        <i className="far fa-clock"></i>15:00 - 19:00
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-map-marker-alt"></i>25 Brooklyn City
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="event-content-text">
                                                <p>Policy analysts generally agree on a need for reform, but not on which path...</p>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
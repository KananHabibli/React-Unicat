import React from 'react'


const EventCard = props => {
    return (
        <div className="card">
            <img src={props.src} className="card-img-top" alt={props.alt} />
            <div className="card-body">
            <div className="d-flex flex-row align-items-center justify-content-center">
                    <div className="event-date">
                        <div className="event-day">{props.day}</div>
                        <div className="event-month">{props.month}</div>
                    </div>
                    <div className="event-content">
                        <div className="event-content-title">
                            <a href="#">{props.title}</a>
                        </div>
                        <div className="event-content-date d-flex flex-row align-items-center justify-content-start">
                            <ul>
                                <li>
                                    <i className="far fa-clock"></i>{props.hours}
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>{props.address}
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
    )
}

export default EventCard

import React from 'react'
import PropTypes from 'prop-types';

const EventCard = ({src, alt, day, month, title, hours, address}) => {
    return (
        <div className="card">
            <img src={src} className="card-img-top" alt={alt} />
            <div className="card-body">
            <div className="d-flex flex-row align-items-center justify-content-center">
                    <div className="event-date">
                        <div className="event-day">{day}</div>
                        <div className="event-month">{month}</div>
                    </div>
                    <div className="event-content">
                        <div className="event-content-title">
                            <a href="#">{title}</a>
                        </div>
                        <div className="event-content-date d-flex flex-row align-items-center justify-content-start">
                            <ul>
                                <li>
                                    <i className="far fa-clock"></i>{hours}
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>{address}
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

export default React.memo(EventCard)

EventCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    day: PropTypes.string,
    month: PropTypes.string,
    title: PropTypes.string,
    hours: PropTypes.string,
    address: PropTypes.string,
}

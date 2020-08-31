import React from 'react'
import PropTypes from 'prop-types';


const TutorCard = ({src, alt, tutor, position}) => {
    return (
        <div className="tutor-card">
            <div className="tutor-image">
                <img src={src} alt={alt} />
            </div>
            <div className="tutor-body">
                <div className="tutor-name">
                    <a href="#">
                        {tutor}
                    </a>
                </div>
                <div className="tutor-position">{position}</div>
                <div className="tutor-social">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TutorCard

TutorCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    tutor: PropTypes.string,
    position: PropTypes.string
}

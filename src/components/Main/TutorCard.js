import React, { Component } from 'react'

const TutorCard = props => {
    return (
        <div className="tutor-card">
            <div className="tutor-image">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="tutor-body">
                <div className="tutor-name">
                    <a href="#">
                        {props.tutor}
                    </a>
                </div>
                <div className="tutor-position">{props.psoition}</div>
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

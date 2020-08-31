import React from 'react'
import PropTypes from 'prop-types';


const WelcomeCard = ({ src, alt, title, text}) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={src} className="card-img-top" alt={alt} />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <a href="#">{title}</a>
                </h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

export default WelcomeCard

WelcomeCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

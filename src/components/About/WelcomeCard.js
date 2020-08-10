import React from 'react'

const WelcomeCard = (props) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.src} className="card-img-top" alt={props.alt} />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <a href="#">{props.title}</a>
                </h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default WelcomeCard

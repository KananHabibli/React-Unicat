import React from 'react'
import PropTypes from 'prop-types';


const CourseCard = ({src, title, tutor, students, rating, price, discount, profileClass}) =>  (
    <div className= "card">
        <img src={src} className="card-img-top" alt={src}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{tutor}</h6>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
            <hr />
            <div className="courses-card-footer">
                <div className="d-flex align-items-center justify-content-start flex-row">
                    <div className="card-footer-info">
                        <i className="fas fa-graduation-cap"></i> {students}
                    </div>
                    <div className="card-footer-info">
                        <i className="fas fa-star"></i>{rating}
                    </div>
                    <div className="card-footer-price ml-auto">
                       {price}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default CourseCard

CourseCard.propTypes = {
    src:      PropTypes.string,
    tutor:    PropTypes.string,
    title:    PropTypes.string,
    students: PropTypes.number,
    rating:   PropTypes.number,
    price:    PropTypes.string
}

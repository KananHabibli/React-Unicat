import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/MyCourse.css'

import encodeURL from '../../utils/encodeURL'

const MyCourse = ({id, src, title, tutor, price, students, rating }) => {
    return (
        <Link to={{pathname: `/${id}/${encodeURL(title)}`}}>
            <li className="media my-4 py-3">
                <img src={src} className="align-self-center mr-3" alt={title} />
                <div className="media-body">
                    <h5 className="mt-0 mb-1 course-title">{title}</h5>
                    <span className="course-tutor">{tutor}</span>
                    <span className="course-detail"><i className="fas fa-graduation-cap mr-1"></i> {students} / <i className="fas fa-star ml-1"></i>{rating}</span>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
                <span className="course-detail float-right">{price}</span>
            </li>
            <hr />
        </Link>
    )
}


export default MyCourse
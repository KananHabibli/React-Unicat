import React from 'react'

import '../../assets/css/MediaCard.css'

export default function MediaCard(props) {
    return (
        <li className="media">
            <img src={props.src} className="mr-3" alt={props.alt} />
            <div className="media-body">
                <h5 className="mt-0 mb-1">
                    <a href="#">{props.title}</a>
                </h5>
                <span>{props.price}</span>
            </div>
        </li>
    )
}

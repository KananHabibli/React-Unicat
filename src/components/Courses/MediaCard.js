import React from 'react'

import '../../assets/css/MediaCard.css'

const MediaCard = ({src, alt, title, price}) => {
    return (
        <li className="media">
            <img src={src} className="mr-3" alt={alt} />
            <div className="media-body">
                <h5 className="mt-0 mb-1">
                    <a href="#">{title}</a>
                </h5>
                <span>{price}</span>
            </div>
        </li>
    )
}

export default MediaCard

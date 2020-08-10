import React from 'react'

import "../../assets/css/Instagram.css"

const Instagram = props => {
    return (
        <div className="instagram">
            <div className="instagram-title">INSTAGRAM</div>
            <div className="row instagram-list d-flex flex-row justify-content-start align-items-center flex-wrap">
                <div className="mb-3 col-4 instagram-item">
                    <img src="images/gallery_1.jpg" width="100" alt='Gallery Picture' />
                </div>
                <div className="mb-3 col-4 instagram-item">
                    <img src="images/gallery_2.jpg" width="100" alt='Gallery Picture' />
                </div>
                <div className="mb-3 col-4 instagram-item">
                    <img src="images/gallery_3.jpg" width="100" alt='Gallery Picture' />
                </div>
                <div className="mb-3 col-4 instagram-item">
                    <img src="images/gallery_4.jpg" width="100" alt='Gallery Picture' />
                </div>
                <div className="mb-3 col-4 instagram-item">
                    <img src="images/gallery_5.jpg" width="100" alt='Gallery Picture' />
                </div>
                <div className="mb-3 col-4 instagram-item">
                    <img src="images/gallery_6.jpg" width="100" alt='Gallery Picture' />
                </div>
            </div>
        </div>
    )
}

export default Instagram

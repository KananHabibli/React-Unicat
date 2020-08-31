import React from 'react'

import '../../assets/css/Banner.css'

const Banner = () => {
    return (
        <div className="sidebar-banner d-flex flex-column align-items-center justify-content-center text-center">
            <div className="sidebar-banner-background"></div>
            <div className="sidebar-banner-overlay"></div>
            <div className="sidebar-banner-content">
                <div className="banner-title">Free Book</div>
                <div className="banner-button"><a href="#">Download now</a></div>
            </div>
        </div>
    )
}

export default Banner

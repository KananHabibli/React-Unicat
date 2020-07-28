import React, { Component } from 'react'

import '../../assets/css/Banner.css'

export class Banner extends Component {
    render() {
        return (
            <div className="sidebar-banner d-flex flex-column align-items-center justify-content-center text-center">
                <div className="sidebar-banner-background"></div>
                <div className="sidebar-banner-overlay"></div>
                <div className="sidebar-banner-content">
                    <div className="banner-title">Free Book</div>
                    <div className="banner-button"><a href="#">download now</a></div>
                </div>
            </div>
        )
    }
}

export default Banner

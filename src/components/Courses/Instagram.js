import React, { Component } from 'react'

import "../../assets/css/Instagram.css"
import "jquery-colorbox"
// import $ from 'jquery'

export class Instagram extends Component {

    componentDidMount() {
        // $(document).ready(function() {
        //     $('.group1').colorbox(
        //         {
        //             rel:'colorbox',
        //             photo: true,
        //             maxWidth: '90%'
        //         });
        // })
    }


    render() {
        return (
            <div className="instagram">
                <div className="instagram-title">INSTAGRAM</div>
                <div className="row instagram-list d-flex flex-row justify-content-start align-items-center flex-wrap">
                    <div className="mb-3 col-4 instagram-item">
                        <div className="instagram-overlay d-flex align-items-center justify-content-center">+</div>
                        <a className="group1" href="images/gallery_1_large.jpg"><img src="images/gallery_1.jpg" width="100" alt /></a>
                    </div>
                    <div className="mb-3 col-4 instagram-item">
                        <div className="instagram-overlay d-flex align-items-center justify-content-center">+</div>
                        <a className="group1" href="images/gallery_2_large.jpg"><img src="images/gallery_2.jpg" width="100" alt /></a>
                    </div>
                    <div className="mb-3 col-4 instagram-item">
                        <div className="instagram-overlay d-flex align-items-center justify-content-center">+</div>
                        <a className="group1" href="images/gallery_3_large.jpg"><img src="images/gallery_3.jpg" width="100" alt /></a>
                    </div>
                    <div className="mb-3 col-4 instagram-item">
                        <div className="instagram-overlay d-flex align-items-center justify-content-center">+</div>
                        <a className="group1" href="images/gallery_4_large.jpg"><img src="images/gallery_4.jpg" width="100" alt /></a>
                    </div>
                    <div className="mb-3 col-4 instagram-item">
                        <div className="instagram-overlay d-flex align-items-center justify-content-center">+</div>
                        <a className="group1" href="images/gallery_5_large.jpg"><img src="images/gallery_5.jpg" width="100" alt /></a>
                    </div>
                    <div className="mb-3 col-4 instagram-item">
                        <div className="instagram-overlay d-flex align-items-center justify-content-center">+</div>
                        <a className="group1" href="images/gallery_6_large.jpg"><img src="images/gallery_6.jpg" width="100" alt /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Instagram

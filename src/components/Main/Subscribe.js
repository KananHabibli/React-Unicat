import React from 'react'

import '../../assets/css/Subscribe.css'

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="container">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-start">
                    <div className="subscribe-info text-lg-left text-center">
                        <div className="subscribe-info-title">
                            sign up for news and offers
                        </div>
                        <div className="subscribe-info-content">
                            Subcribe to lastest smartphones news & great deals we offer
                        </div>
                    </div>
                    <div className="subscribe-form ml-lg-auto">
                        <form action="">
                            <input type="text" placeholder="Your Email" /><button id="subscribe">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Subscribe
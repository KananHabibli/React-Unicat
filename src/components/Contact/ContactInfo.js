import React from 'react'

import '../../assets/css/ContactInfo.css'

const ContactInfo = props => {
    return (
        <div className="contact-info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <div className="contact-form-title">
                                Contact Form
                            </div>
                            <form action="">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input className="contact-form-input" type="text" />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input className="contact-form-input" type="email" />
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea className="contact-form-input contact-form-textarea" name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <button className="contact-button">Submit Now</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-detail">
                            <div className="detail-title">
                                Contact Info
                            </div>
                            <p className="detail-text">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a distribution of letters.
                            </p>
                            <div className="detail-address-1">
                                New York Office
                            </div>
                            <ul className="address-list-1">
                                <li>T8/480 Collins St, Melbourne VIC 3000, New York</li>
                                <li>1-234-567-89011</li>
                                <li>info.deercreative@gmail.com</li>
                            </ul>
                            <div className="detail-address-2">
                                Australia Office
                            </div>
                            <ul className="address-list-2">
                                <li>Forrest Ray, 191-103 Integer Rd, Corona Australia</li>
                                <li>1-234-567-89011</li>
                                <li>info.deercreative@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo

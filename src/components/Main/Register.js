import React from 'react'

import '../../assets/css/Register.css'


const Register = props => {
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="counter">
                            <h2 className="counter-title">Register Now
                            </h2>
                            <div className="counter-text">
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dumy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">
                                <div className="milestone">
                                    <span className="count" counter-lim="15"></span>
                                    <p className="text-white">YEARS</p>
                                </div>
                                <div className="milestone">
                                    <span className="count" counter-lim="120"></span>K
                                    <p className="text-white">YEARS</p>
                                </div>
                                <div className="milestone">
                                    <span className="count" counter-lim="670"></span>+
                                    <p className="text-white">YEARS</p>
                                </div>
                                <div className="milestone">
                                    <span className="count" counter-lim="320"></span>
                                    <p className="text-white">YEARS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="counter-form bg-white">
                            <div className="form d-flex align-items-center justify-content-center flex-column">
                                <div className="counter-form-title">
                                    Courses Now
                                </div>
                                <input type="text" placeholder="Your Name:" className="counter-input" />
                                <input type="text" placeholder="Phone:" className="counter-input" />
                                <select name="counter-select" id="counter-select" className="counter-input counter-options">
                                    <option>Choose Subject</option>
                                    <option>Subject</option>
                                    <option>Subject</option>
                                    <option>Subject</option>
                                </select>
                                <textarea className="counter-input counter-textarea" placeholder="Message:"></textarea>
                                <button className="btn text-white counter-submit">Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
import React, { Component } from 'react'
import '../../assets/css/Welcome.css'


class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="container">
                    <div className="welcome-title text-center">
                        <h1>Welcome To Univat E-Learning</h1>
                        <div className="welcome-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu Vestibulum</p>
                        </div>
                    </div>
                    <div className="welcome-cards">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="img-container">
                                        <img src="images/about_1.jpg" className="card-img-top" alt="About 1" />
                                    </div>
                                    <div className="card-body">
                                      <h5 className="card-title">
                                          <a href="#">Our Stories</a>
                                      </h5>
                                      <p className="card-text">Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="img-container">
                                        <img src="images/about_2.jpg" className="card-img-top" alt="About 2" />
                                    </div>
                                    <div className="card-body">
                                      <h5 className="card-title">
                                          <a href="#">Our Mission</a>
                                      </h5>
                                      <p className="card-text">Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="img-container">
                                        <img src="images/about_3.jpg" className="card-img-top" alt="About 3" />
                                    </div>
                                    <div className="card-body">
                                      <h5 className="card-title">
                                          <a href="#">Our Vision</a>
                                      </h5>
                                      <p className="card-text">Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome

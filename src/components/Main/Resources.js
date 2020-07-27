import React from 'react'

import '../../assets/css/Resources.css'

const Resources = props => {
    return (
        <div className="resources">
            <div className="container">
                <h1 className="text-center resources-title">Welcome To Unicat E-Learning</h1>
                <br />
                <p className="text-center  mx-auto resources-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem
                </p>
                <div className="row resource-cards">
                    <div className="col-lg-3">
                        <div className="resource-card mx-auto">
                            <div className="resource-img d-flex align-items-center justify-content-center">
                                <img src="/images/icon_1.png" alt="Experts" />
                            </div>
                            <h3 className="resource-card-title text-center">
                                The Experts
                            </h3>
                            <p className="resource-card-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resource-card mx-auto">
                            <div className="resource-img d-flex align-items-center justify-content-center">
                                <img src="/images/icon_2.png" alt="Experts" />
                            </div>
                            <h3 className="resource-card-title text-center">
                                Book & Library
                            </h3>
                            <p className="resource-card-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resource-card mx-auto">
                            <div className="resource-img d-flex align-items-center justify-content-center">
                                <img src="/images/icon_3.png" alt="Experts" />
                            </div>
                            <h3 className="resource-card-title">
                                Best Courses
                            </h3>
                            <p className="resource-card-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="resource-card mx-auto">
                            <div className="resource-img d-flex align-items-center justify-content-center">
                                <img src="/images/icon_4.png" alt="Experts" />
                            </div>
                            <h3 className="resource-card-title text-center">
                                Award & Reward
                            </h3>
                            <p className="resource-card-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources
import React from 'react'

import '../../assets/css/Resources.css'
import ResourceCard from './ResourceCard'
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
                        <ResourceCard 
                            src="/images/icon_1.png" 
                            alt="Experts" 
                            title="The Experts"/>
                    </div>
                    <div className="col-lg-3">
                        <ResourceCard 
                        src="/images/icon_2.png" 
                        alt="Experts" 
                        title="Book & Library"/>
                    </div>
                    <div className="col-lg-3">
                        <ResourceCard 
                        src="/images/icon_3.png" 
                        alt="Experts" 
                        title="Best Courses"/>
                    </div>
                    <div className="col-lg-3">
                        <ResourceCard 
                        src="/images/icon_4.png" 
                        alt="Experts" 
                        title="Award & Reward"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources
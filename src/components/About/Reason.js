import React, { Component } from 'react'

import '../../assets/css/Reason.css'
import '../../assets/css/Reason-responsive.css'
import AccordionItem from './AccordionItem'
import { accordionData } from '../../utils/accordionData'

const Reason = props => {

    return (
        <div className="reason">
            <div className="container">
                <div className="reason-title text-center">
                    <h1>Why Choose Us</h1>
                    <div className="reason-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem
                        </p>
                    </div>
                </div>
                <div className="reason-accordion">
                    <div className="row">
                        <div className="col-lg-6">
                            <div {...{ className: 'wrapper' }}>
                                <ul {...{ className: 'accordion-list' }}>
                                    {accordionData.map((data, key) => {
                                        return (
                                        <li {...{ className: 'accordion-list__item', key }}>
                                            <AccordionItem {...data} />
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <video
                                id="my-video"
                                className="video-js"
                                controls
                                poster="images/course_1.jpg"
                                data-setup="{}">
                                <source src="/images/mov_bbb.mp4" type="video/mp4" />
                                <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a
                                web browser that
                                <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                                </p>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reason

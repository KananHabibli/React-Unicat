import React, { Component } from 'react'

import '../../assets/css/Reason.css'
import CarouselItem from './CarouselItem'
const data = [
    {
      title: 'Award for Best School 2017',
      paragraph: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: 'You are learning from the best',
      paragraph: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: 'Our degrees are recognized worldwide',
      paragraph: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: 'We encourage out students to go global',
      paragraph: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ]

class Reason extends Component {
    render() {
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
                                        {data.map((data, key) => {
                                            return (
                                            <li {...{ className: 'accordion-list__item', key }}>
                                                <CarouselItem {...data} />
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
                                    width="600px"
                                    height="350px"
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
}

export default Reason

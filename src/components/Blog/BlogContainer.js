import React, { Component } from 'react'

import '../../assets/css/BlogContainer.css'
// import $ from 'jquery'
export class BlogContainer extends Component {

    // componentDidMount() {
    //     $('.blog-container').masonry(
	// 		{
	// 			itemSelector:'.blog-post',
	// 			columnWidth:'.blog-post',
	// 			gutter:30
	// 		});
    // }

    render() {
        return (
            <div className="blog-container">
                <div className="blog-post" style={{position: 'absolute',top: '0',left: '0'}}>
                    <div className="card">
                        <img src="images/blog_1.jpg" className="card-img-top" alt="Blog 1" />
                        <div className="card-body">
                        <h5 className="card-title">
                            <a href="#">Here's What You Need to Know About Online Testing</a>
                        </h5>
                        <ul>
                            <li>
                                <a href="#">Admin</a>
                            </li>
                            <li>
                                <a href="#">Noverber 11, 2017</a>
                            </li>
                        </ul>
                        <p className="card-text">Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                        </div>
                    </div>
                </div>
                <div className="blog-post" style={{position: 'absolute',top: '0',left: '390px'}}>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            <a href="#">With Changing Students and Times</a>
                        </h5>
                        <ul>
                            <li>
                                <a href="#">Admin</a>
                            </li>
                            <li>
                                <a href="#">Noverber 11, 2017</a>
                            </li>
                        </ul>
                        <p className="card-text">Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                        </div>
                    </div>
                </div>
                <div className="blog-post" style={{position: 'absolute',top: '0',left: '780px'}}>
                    <div className="card">
                        <video
                                id="my-video"
                                className="video-js"
                                controls
                                width="100%"
                                poster="images/blog_2.jpg"
                                data-setup="{}"
                            >
                                <source src="images/mov_bbb.mp4" type="video/mp4" />
                                <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a
                                web browser that
                                <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                                </p>
                        </video>
                        <div className="card-body">
                        <h5 className="card-title">
                            <a href="#">Building Skills Outside the classNameroom With New Ways</a>
                        </h5>
                        <ul>
                            <li>
                                <a href="#">Admin</a>
                            </li>
                            <li>
                                <a href="#">Noverber 11, 2017</a>
                            </li>
                        </ul>
                        <p className="card-text">Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                        </div>
                    </div>
                </div>
                <div className="blog-post" style={{position: 'absolute',top: '450px',left: '0'}}>
                    <div className="card">
                        <img src="images/blog_2.jpg" className="card-img-top" alt="Blog 2" />
                        <div className="card-body">
                        <h5 className="card-title">
                            <a href="#">Here's What You Need to Know About Online Testing</a>
                        </h5>
                        <ul>
                            <li>
                                <a href="#">Admin</a>
                            </li>
                            <li>
                                <a href="#">Noverber 11, 2017</a>
                            </li>
                        </ul>
                        <p className="card-text">Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                        </div>
                    </div>
                </div>
                <div className="blog-post" style={{position: 'absolute',top: '230px',left: '390px'}}>
                    <div className="card">
                        <img src="images/blog_3.jpg" className="card-img-top" alt="Blog 3" />
                        <div className="card-body">
                        <h5 className="card-title">
                            <a href="#">Here's What You Need to Know About Online Testing</a>
                        </h5>
                        <ul>
                            <li>
                                <a href="#">Admin</a>
                            </li>
                            <li>
                                <a href="#">Noverber 11, 2017</a>
                            </li>
                        </ul>
                        <p className="card-text">Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                        </div>
                    </div>
                </div>
                <div className="blog-post" style={{position: 'absolute',top: '450px',left: '780px'}}>
                    <div className="card">
                        <img src="images/blog_4.jpg" className="card-img-top" alt="Blog 4" />
                        <div className="card-body">
                        <h5 className="card-title">
                            <a href="#">Here's What You Need to Know About Online Testing</a>
                        </h5>
                        <ul>
                            <li>
                                <a href="#">Admin</a>
                            </li>
                            <li>
                                <a href="#">Noverber 11, 2017</a>
                            </li>
                        </ul>
                        <p className="card-text">Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                        </div>
                    </div>
                </div>
                <div className="blog-post" style={{position: 'absolute',top: '720px',left: '390px'}}>
                    <div className="card">
                        <img src="images/blog_3.jpg" className="card-img-top" alt="Blog 5" />
                        <div className="card-body">
                        <h5 className="card-title">
                            <a href="#">Here's What You Need to Know About Online Testing</a>
                        </h5>
                        <ul>
                            <li>
                                <a href="#">Admin</a>
                            </li>
                            <li>
                                <a href="#">Noverber 11, 2017</a>
                            </li>
                        </ul>
                        <p className="card-text">Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogContainer

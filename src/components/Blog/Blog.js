import React, { Component } from 'react'

import '../../assets/css/Blog.css'
import PageTail from '../Main/PageTail'
import BlogContainer from './BlogContainer'
export class Blog extends Component {
    render() {
        return (
            <main>
            {/* PAGE TAIL */}
            <PageTail title="Blog" />

            {/* BLOG */}
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <BlogContainer />
                        </div>
                    </div>
                    <div className="loadMore text-center">
                        <a href="#">Load More</a>
                    </div>
                </div>
            </div>


            {/* SUBSCRIBE */}
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
                                <input type="text" placeholder="Your Email" /><button >Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default Blog

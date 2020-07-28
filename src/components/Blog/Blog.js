import React, { Component } from 'react'

import '../../assets/css/Blog.css'
import PageTail from '../Main/PageTail'
import BlogContainer from './BlogContainer'
import Subscribe from '../Main/Subscribe'
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
            <Subscribe />
        </main>
        )
    }
}

export default Blog

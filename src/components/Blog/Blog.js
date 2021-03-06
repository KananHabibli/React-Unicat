import React from 'react'

import '../../assets/css/Blog.css'
import PageTail from '../Main/PageTail'
import BlogContainer from './BlogContainer'
import Subscribe from '../Main/Subscribe'

const Blog = () => {
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
                </div>
            </div>


            {/* SUBSCRIBE */}
            <Subscribe />
    </main>
    )
}

export default Blog

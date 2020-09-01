import React, { useState, useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


import '../../assets/css/BlogContainer.css'
import SingleBlog from './SingleBlog'


import fetchData from '../../utils/fetchData'


const BlogContainer = () => {


    const [blogs, updateBlogs] = useState([])

    useEffect(() => {
        (async function() {
            const data = await fetchData('blogs')
            console.log(data)
            updateBlogs(data)
        })()
    }, [])

    return (
        <div className="blog-container">
            <ResponsiveMasonry
             columnsCountBreakPoints={{200: 1, 750: 2, 900: 3}}>
                <Masonry>
                    {blogs.map((blog, index) => (
                        <SingleBlog
                            key={index}
                            src={blog.src}
                            alt={blog.alt}
                            title={blog.title}
                            video={blog.video}
                            poster={blog.poster}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>            
        </div>
    )
}

export default BlogContainer

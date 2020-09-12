import React, { useState, useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import InfiniteScroll from 'react-infinite-scroller'

import '../../assets/css/BlogContainer.css'
import SingleBlog from './SingleBlog'
import Loading from '../Main/Loading'

import fetchData from '../../utils/fetchData'


const BlogContainer = () => {


    const [blogs, updateBlogs] = useState([])
    const [fetchMore, setFetchMore] = useState(true)


    useEffect(() => {
        (async function() {
            console.log('BlogContainer rendered')
            const data = await fetchData('blogs?_start=0&_end=7')
            updateBlogs(data)
        })()
    }, [])

    const loadMore = async () => {
        const data = await fetchData('blogs?_start=7&_end=14')
        updateBlogs(blogs => [...blogs, ...data])
        if(blogs.length >= 21){
            setFetchMore(false)
        }
    }

    return (
        <div className="blog-container">
            <InfiniteScroll
                pageStart={1}
                loadMore={loadMore}
                hasMore={fetchMore}
                loader={<Loading key={0} />}
                threshold={100}
            >
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
            </InfiniteScroll> 
        </div>
            
            
    )
}

export default BlogContainer

import React from 'react'

const SingleBlog = ({src, alt, title, video, poster}) => {

    let display = null;

    if(src){
        display = <img src={src} className="card-img-top" alt={alt} />
    } 
    else if(video){
        display = <video
                    id="my-video"
                    className="video-js"
                    controls
                    width="100%"
                    poster={poster}
                    data-setup="{}"
                >
                    <source src={video} type="video/mp4" />
                    <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
            </video>
    }

    return (
        <div className="blog-post">
            <div className="card">
                {display}
                <div className="card-body">
                <h5 className="card-title">
                    <a href="#">{title}</a>
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
    )
}

export default SingleBlog
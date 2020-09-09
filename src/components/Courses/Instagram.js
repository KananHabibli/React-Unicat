import React from 'react'
import ImageGallery from 'react-image-gallery'


import "../../assets/css/Instagram.css"
import "../../assets/css/image-gallery.css"
const images = [
    {
        original:  "images/gallery_1_large.jpg",
        thumbnail: "images/gallery_1.jpg"
    },
    {
        original:  "images/gallery_2_large.jpg",
        thumbnail: "images/gallery_2.jpg"
    },
    {
        original:  "images/gallery_3_large.jpg",
        thumbnail: "images/gallery_3.jpg"
    },
    {
        original:  "images/gallery_4_large.jpg",
        thumbnail: "images/gallery_4.jpg"
    },
    {
        original:  "images/gallery_5_large.jpg",
        thumbnail: "images/gallery_5.jpg"
    },
    {
        original:  "images/gallery_6_large.jpg",
        thumbnail: "images/gallery_6.jpg"
    },
]

const Instagram = () => {
    return (
        <div className="instagram">
            <div className="instagram-title">INSTAGRAM</div>
            <div className="instagram-list">
                <ImageGallery
                     items={images}
                     showNav={false}
                     showFullscreenButton={false}
                     useBrowserFullscreen={false}
                     showPlayButton={false}
                     showBullets={false}
                     autoPlay={true}
                     slideDuration={300}
                     slideInterval={2000} />
            </div>
        </div>
    )
}

export default Instagram

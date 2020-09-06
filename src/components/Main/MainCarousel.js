import React, { useState, useEffect } from 'react'
import axios from 'axios'


import '../../assets/css/MainCarousel.css'
import MainCarouselItem from './MainCarouselItem'
const MainCarousel = () => {

    const [courseNames, updateCourseNames] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/courses")
            .then(res => {
                res.data.map(elem => {
                    updateCourseNames(courseNames => [...courseNames, elem.course])
                })
            })
            .catch(e => console.log(e))
        
    }, [])

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <MainCarouselItem
                        courseNames={courseNames}
                    />
                </div>
                <div className="carousel-item">
                    <MainCarouselItem
                        courseNames={courseNames}
                    />
                </div>
                <div className="carousel-item">
                    <MainCarouselItem
                        courseNames={courseNames}
                    />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
        </div>
    )
}


export default MainCarousel

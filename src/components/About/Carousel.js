import React, { Component } from 'react'
import '../../assets/css/Carousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { partnerList } from '../../utils/partnerList'
import CarouselItem from './CarouselItem'

const Carousel = () => {

    const options = {
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            },
        },
    }

    return (
        <div className="carousel">
            <div className="container">
                <OwlCarousel
                    className="owl-theme"
                    {...options}
                >
                {partnerList.map((partner, index) => (
                    <CarouselItem key={index} src={partner.src} alt={partner.alt} />
                ))}
                
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Carousel

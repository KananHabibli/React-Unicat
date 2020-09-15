import React, { useState, useEffect } from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import '../../assets/css/Carousel.css'
import CarouselItem from './CarouselItem'

import fetchData from '../../utils/fetchData'

const Carousel = () => {

    const [partners, updatePartners] = useState([])

    useEffect(() => {
        (async function() {
            const data = await fetchData('partnerList')
            updatePartners(data)
            data.map(elem => {
                updatePartners(partners => [...partners, elem])
            })
        })()
    }, [])

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
                    {...options}>
                    {partners.map((partner, index) => (
                        <CarouselItem key={index} src={partner.src} alt={partner.alt} />
                    ))}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Carousel

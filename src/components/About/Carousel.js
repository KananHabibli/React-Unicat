import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import '../../assets/css/Carousel.css'
import CarouselItem from './CarouselItem'

const Carousel = () => {

    const [partners, updatePartners] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/partnerList")
            .then(res => {
                updatePartners(res.data)
                console.log(res.data)
            })
            .catch(e => console.log(e))
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
                    {...options}
                >
                {partners.map((partner, index) => {
                    console.log(partner)
                    return(
                    <CarouselItem key={index} src={partner.src} alt={partner.alt} />
                )})}
                
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Carousel

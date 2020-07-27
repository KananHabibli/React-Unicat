import React, { Component } from 'react'
import '../../assets/css/Carousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Carousel extends Component {
    render() {
        return (
            <div className="carousel">
                <div className="container">
                    <OwlCarousel
                        items={5}
                        autoplayTimeout={2000}
                        autoplayHoverPause
                        className="owl-theme"
                        loop
                        margin={5}
                        autoplay
                    >
                        <div > 
                            <img src="images/partner_1.png"  alt="" />
                        </div>
                        <div >  
                            <img src="images/partner_2.png"  alt="" />
                        </div>
                        <div >  
                            <img src="images/partner_3.png" alt="" />
                        </div>
                        <div >  
                            <img src="images/partner_4.png" alt="" />
                        </div>
                        <div >  
                            <img src="images/partner_5.png"  alt="" />
                        </div>
                        <div >  
                            <img src="images/partner_6.png" alt="" />
                        </div>
                    
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default Carousel

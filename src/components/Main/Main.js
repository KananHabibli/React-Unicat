import React from 'react'

import '../../assets/css/Main.css'

import $ from 'jquery'

import MainCarousel from './MainCarousel'
import Resources from './Resources'
import Courses from './Courses'
import Register from './Register'
import Events from './Events'
import Tutors from './Tutors'
import News from './News'
import Subscribe from './Subscribe'

class Main extends React.Component{


    // componentDidMount() {
    //     this.checkOnScreen()

    //     // MILESTONES
    //     $(window).scroll(function() {
    //         console.log('lmao')
    //         this.checkOnScreen()
            
    //     });
    // }

    // checkOnScreen () {
    //     $(".count").each(() => {
    //         if ($(this).isOnScreen()) {
    //             this.startCounter($(this));
    //         }
    //     });
    //   }

    // isOnScreen(element) {
  
    //     var win = $(window);
      
    //     var viewport = {
    //       top: win.scrollTop(),
    //       left: win.scrollLeft()
    //     };
      
    //     viewport.right = viewport.left + win.width();
    //     viewport.bottom = viewport.top + win.height();
      
    //     var bounds = element.offset();
    //     bounds.right = bounds.left + element.outerWidth();
    //     bounds.bottom = bounds.top + element.outerHeight();
      
    //     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
      
      
    //   }



    // startCounter(counterElement) {
    //     console.log('start counting')
    //     counterElement.prop('Counter', 0).animate({
    //         Counter: counterElement.attr("counter-lim")
    //     }, {
    //         duration: 2000,
    //         step: function(now) {
    //             counterElement.text(Math.ceil(now).toLocaleString());
    //         }
    //     });
    // }

    render() {
        return (
            <main>

                {/* MAIN CAROUSEL */}
                <MainCarousel />

                {/* RESOURCES */}
                <Resources />

                { /* COURSES */ }
                <Courses />

                {/* REGISTER */}
                <Register />

                { /* EVENTS */} 
                <Events />

                {/* TUTORS */}
                <Tutors />

                {/* News */} 
                <News />

                {/* SUBSCRIBE */}
                <Subscribe />
                
            </main>

        )
    }
}


export default Main
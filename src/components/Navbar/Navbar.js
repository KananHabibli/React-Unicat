import React, { Component } from 'react'
import $ from 'jquery'

import '../../assets/css/Navbar.css'

import NavInfo from './NavInfo'
import NavMenu from './NavMenu'
import NavSearch from './NavSearch'
import NavSidebar from './NavSidebar'

class Navbar extends Component {

    state = {
        headerClass: ''
    }

    componentDidMount() {
        $('.search-box').hide()

        $('#subscribe').click(function(e){
            e.preventDefault()
            window.location.href="/register.html";
        });

        const searchButton = $('.search-button')
        searchButton.click(function(){
            $('.search-box').slideToggle( "fast" )
        })

        $('.sidebar-open').click(function(){
            $('.sidebar-menu').css('right', '0')
        })

        $('.sidebar-close').click(function(){
            $('.sidebar-menu').css('right', '-400px')
        })

        $(window).on('resize', () =>
        {
            this.scrollHeader();
        });

        $(document).on('scroll', () =>
        {
            this.scrollHeader();
        });
    }
    

    scrollHeader = () => {
        if($(window).scrollTop() > 100){
            this.setState({headerClass: 'scrolled'})
        } else {
            this.setState({headerClass: ''})
        }
    }


    render() {
        return (
            <header className={this.state.headerClass}>
            
                {/* HEADER / INFO */}
                <NavInfo />
    
                {/* HEADER MAIN NAVBAR */}
                <NavMenu />
                
                {/* HEADER SEARCH BAR */}
                <NavSearch />
                
                {/* HEADER SIDEBAR */}
                <NavSidebar />

            </header>
        )
    }
}

export default Navbar
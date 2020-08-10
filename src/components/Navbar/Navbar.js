import React, { useEffect, useState } from 'react'
import $ from 'jquery'

import '../../assets/css/Navbar.css'

import NavInfo from './NavInfo'
import NavMenu from './NavMenu'
import NavSearch from './NavSearch'
import NavSidebar from './NavSidebar'

const Navbar = props => {

    const [headerClass, changeClass] = useState('')

    useEffect(() => {
        $('.search-box').hide()

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
            scrollHeader();
        });

        $(document).on('scroll', () =>
        {
            scrollHeader();
        })
    })
    

    const scrollHeader = () => {
        if($(window).scrollTop() > 100){
            changeClass('scrolled')
        } else {
            changeClass('')
        }
    }
    return (
        <header className={headerClass}>
        
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

export default Navbar
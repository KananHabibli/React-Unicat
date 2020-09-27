import React, { useEffect, useState } from 'react'
import $ from 'jquery'

import '../../assets/css/Navbar.css'

import NavInfo from './NavInfo'
import NavMenu from './NavMenu'
import NavSearch from './NavSearch'
import NavSidebar from './NavSidebar'

const Navbar = () => {

    const [headerClass, changeClass] = useState('')
    const [searchDisplay, setSearchDisplay] = useState('hide')

    const toggleDisplay = () => {
        console.log('clicked')
        if( searchDisplay === 'hide' ){
            setSearchDisplay('show')
        } else {
            setSearchDisplay('hide')
        }
    }

    useEffect(() => {

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
            <NavMenu toggleDisplay={toggleDisplay} />
            
            {/* HEADER SEARCH BAR */}
            <NavSearch displayStyle={searchDisplay} />
            
            {/* HEADER SIDEBAR */}
            <NavSidebar />

        </header>
    )
}

export default Navbar
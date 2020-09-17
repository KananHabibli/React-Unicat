import React, { useState, useEffect } from 'react'
import {  withRouter } from 'react-router-dom'
import "../../assets/css/Pagination.css"

const pages = [1, 2, 3, 4]
const interval = ['1-6', '6-12', '12-18', '18-24']

const Pagination = ({ fetch, location }) => {

    const [currentPage, setCurrentPage] = useState( localStorage.getItem('currentPage') || 1)
    const [nextDisplay, setNext] = useState('inline-block')
    const [prevDisplay, setPrev] = useState('none')

    const handlePaginationLink = (event, numb) => {
        event.preventDefault()
        localStorage.setItem('currentPage', numb)
        setCurrentPage(numb)
    }

    const handleNextLink = (event) => {
        event.preventDefault()
        localStorage.setItem('currentPage', currentPage + 1)
        setCurrentPage(currentPage + 1)
    }

    const handlePrevLink = (event) => {
        event.preventDefault()
        localStorage.setItem('currentPage', currentPage - 1)
        setCurrentPage(currentPage - 1)
    }

    const checkButtons = () => {
        if(currentPage === 1) {
            setPrev('none')
            setNext('inline-block')
        }

        if(currentPage > 1 && currentPage <= pages.length){
            setPrev('inline-block')
            setNext('inline-block')
        }

        if(currentPage === pages.length) {
            setPrev('inline-block')
            setNext('none')
        }
    }

    useEffect(() => {
        checkButtons()
        fetch(currentPage)
        if(location.query){
            location.state.query = null
        }
        return function cleanup() {
            localStorage.setItem('currentPage', 1)
        }
    }, [currentPage])


    return (
        <div className="courses-pagination d-flex align-items-center justify-content-start flex-row">
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item" style={{display: `${prevDisplay}`}}>
                        <a className="page-link" href="#" aria-label="Previous" onClick={event => handlePrevLink(event)}>
                        <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages.map((page, index) => {
                        if(page === parseInt(currentPage)){
                            return (
                                <li key={index} className="page-item active" aria-current="page" >
                                    <a className="page-link" href="#" onClick={event => handlePaginationLink(event, page)}>{page}<span className="sr-only">(current)</span>
                                    </a>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index} className="page-item" onClick={event => handlePaginationLink(event, page)}>
                                    <a className="page-link" href="#">{page}</a>
                                </li>
                            )
                        }
                    })}
                    <li className="page-item" style={{display: `${nextDisplay}`}}>
                        <a className="page-link" href="#" aria-label="Next" onClick={event => handleNextLink(event)}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="pagination-dropdown ml-auto">
                <div className="pagination-result">Showing {interval[currentPage - 1]} of 24 results</div>                
            </div>
        </div>
    )
}

export default withRouter(Pagination)

import React from 'react'

import "../../assets/css/Pagination.css"

const Pagination = () => {
    return (
        <div className="courses-pagination d-flex align-items-center justify-content-start flex-row">
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item active">
                        <a className="page-link" href="#">1<span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="page-item " aria-current="page">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#"><i className="fas fa-chevron-right"></i></a>
                    </li>
                </ul>
            </nav>
            <div className="pagination-dropdown ml-auto">
                <div className="pagination-result">Showing 1-6 of 26 results: </div>
                <div className="dropdown-select">
                    <span>Show: </span>
                    <select>
                        <option>6</option>
                        <option>12</option>
                        <option>24</option>
                        <option>36</option>
                    </select>
                </div>
                
            </div>
        </div>
    )
}

export default Pagination

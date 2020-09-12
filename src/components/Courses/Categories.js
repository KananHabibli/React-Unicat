import React from 'react'

import '../../assets/css/Categories.css'

const Categories = () => (
        <div className="categories">
            <div className="categories-title">
                Categories
            </div>
            <ul className="categories-list">
                <li>
                    <a href="#">Web Design</a>
                </li>
                <li>
                    <a href="#">Business and Finance</a>
                </li>
                <li>
                    <a href="#">IT & Software</a>
                </li>
                <li>
                    <a href="#">Languages</a>
                </li>
                <li>
                    <a href="#">Data Structure and Algorithms</a>
                </li>
            </ul>
        </div>
    )

export default Categories

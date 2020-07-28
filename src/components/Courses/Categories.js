import React, { Component } from 'react'

import '../../assets/css/Categories.css'

export class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <div className="categories-title">
                    Categories
                </div>
                <ul className="categories-list">
                    <li>
                        <a href="#">Art & Design</a>
                    </li>
                    <li>
                        <a href="#">Business</a>
                    </li>
                    <li>
                        <a href="#">IT & Software</a>
                    </li>
                    <li>
                        <a href="#">Languages</a>
                    </li>
                    <li>
                        <a href="#">Programming</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Categories

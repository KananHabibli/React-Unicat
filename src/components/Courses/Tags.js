import React, { Component } from 'react'

import "../../assets/css/Tags.css"

export class Tags extends Component {
    render() {
        return (
            <div className="tags">
                <div className="tags-title">
                    Tags
                </div>
                <ul className="tags-list">
                    <li>
                        <a href="#">Creative</a>
                    </li>
                    <li>
                        <a href="#">Unique</a>
                    </li>
                    <li>
                        <a href="#">Photography</a>
                    </li>
                    <li>
                        <a href="#">Ideas</a>
                    </li>
                    <li>
                        <a href="#">Wordpress</a>
                    </li>
                    <li>
                        <a href="#">Startup</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Tags

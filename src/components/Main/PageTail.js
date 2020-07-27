import React, { Component } from 'react'

import '../../assets/css/PageTail.css'

class PageTail extends Component {
    render() {
        return (
            <div className="page-tail">
                <nav aria-label="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </div>
                </nav>
            </div>
        )
    }
}

export default PageTail

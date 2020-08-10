import React from 'react'

import '../../assets/css/PageTail.css'

const PageTail = props => {
    return (
        <div className="page-tail">
            <nav aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                    </ol>
                </div>
            </nav>
        </div>
    )
}

export default PageTail

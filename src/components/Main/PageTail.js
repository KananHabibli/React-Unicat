import React from 'react'
import PropTypes from 'prop-types';


import '../../assets/css/PageTail.css'

const PageTail = ({ title }) => {
    return (
        <div className="page-tail">
            <nav aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{title}</li>
                    </ol>
                </div>
            </nav>
        </div>
    )
}

export default PageTail  

PageTail.propTypes = {
    title: PropTypes.string
}

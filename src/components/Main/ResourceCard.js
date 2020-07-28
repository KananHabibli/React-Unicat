import React, { Component } from 'react'

const ResourceCard = props => {
    return (
        <div className="resource-card mx-auto">
            <div className="resource-img d-flex align-items-center justify-content-center">
                <img src={props.src} alt={props.alt} />
            </div>
            <h3 className="resource-card-title text-center">
                {props.title}
            </h3>
            <p className="resource-card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>
    )
}

export default ResourceCard

import React from 'react'
import PropTypes from 'prop-types';


const ResourceCard = ({src, alt, title}) => {
    return (
        <div className="resource-card mx-auto">
            <div className="resource-img d-flex align-items-center justify-content-center">
                <img src={src} alt={alt} />
            </div>
            <h3 className="resource-card-title text-center">
                {title}
            </h3>
            <p className="resource-card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>
    )
}

export default React.memo(ResourceCard)

ResourceCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
}

import React from 'react'
import PropTypes from 'prop-types';

const CarouselItem = ({ src, alt}) => (
    <div>
        <img src={src}  alt={alt} />
    </div>
)

export default CarouselItem

CarouselItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}
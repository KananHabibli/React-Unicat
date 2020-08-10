import React from 'react'

const CarouselItem = (props) => {
    return (
        <div>
            <img src={props.src}  alt={props.alt} />
        </div>
    )
}

export default CarouselItem

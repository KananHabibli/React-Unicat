import React, { Component } from 'react'

import '../../assets/css/Reason.css'

class CarouselItem extends Component {
    state = {
      opened: false
    }
    
    render () {
      const {
        props: {
          paragraph,
          title
        },
        state: {
          opened
        }
      } = this
      
      return (
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <p {...{ className: 'accordion-item__icon' }}> <i className="fas fa-chevron-right"></i> </p>
            <h3 {...{ className: 'accordion-item__title' }}>
              {title}
            </h3>
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <p {...{ className: 'accordion-item__paragraph' }}>
                  {paragraph}
                </p>
              </div>
            </div>
        </div>
      )
    }
  }

  export default CarouselItem
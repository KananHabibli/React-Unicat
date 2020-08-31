import React, { useState } from 'react'
import PropTypes from 'prop-types';


import '../../assets/css/Reason.css'

const AccordionItem = ({ title, paragraph}) => {

    const [opened, changeAccordion] = useState(false)
      
      return (
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { changeAccordion( !opened ) }
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

  export default AccordionItem

AccordionItem.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
}
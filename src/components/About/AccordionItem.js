import React, { useState } from 'react'

import '../../assets/css/Reason.css'

const AccordionItem = (props) => {

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
              {props.title}
            </h3>
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <p {...{ className: 'accordion-item__paragraph' }}>
                  {props.paragraph}
                </p>
              </div>
            </div>
        </div>
      )
    }

  export default AccordionItem
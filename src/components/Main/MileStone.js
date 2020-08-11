import React, { useState } from 'react'
import CountUp from 'react-countup'
import VizSensor from 'react-visibility-sensor';


const MileStone = props => {

    const [visible, changeState] = useState(false)

    return (
        <VizSensor
            onChange={(isVisible) => {
                if(!visible && isVisible ){
                    changeState(isVisible)
                }
            }}>
                <CountUp
                start={0}
                end={visible ? props.end : 0}
                suffix={props.suffix}
                duration={2} />
        </VizSensor>
    )
}

export default MileStone

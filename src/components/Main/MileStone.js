import React, { useState } from 'react'
import CountUp from 'react-countup'
import VizSensor from 'react-visibility-sensor';


const MileStone = ({end, suffix}) => {

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
                end={visible ? end : 0}
                suffix={suffix}
                duration={2} />
        </VizSensor>
    )
}

export default MileStone

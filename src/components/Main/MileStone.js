import React, { Component } from 'react'
import CountUp from 'react-countup'
import VizSensor from 'react-visibility-sensor';


export class MileStone extends Component {

    state = {
        visible: false
    }

    render() {
        return (
            <VizSensor
                onChange={(isVisible) => {
                    this.setState({visible: isVisible})
                    console.log(this.state.visible)
                }}
            >
                <CountUp
                    start={0}
                    end={this.props.end}
                    suffix={this.props.suffix}
                    duration={2}
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                />
            </VizSensor>
        )
    }
}

export default MileStone

import React from 'react';

import CounterContainer from './counterContainer';

class HomePage extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            test:'hi'
        };
        this.setVolumeValue = this.setVolumeValue.bind(this);
    }

    setVolumeValue(val) {
        debugger;
        console.log(val);
    }

    render() {
        return (
            <div>
                <CounterContainer  customProp={this.state} changeVolume={this.setVolumeValue}></CounterContainer>
                <CounterContainer></CounterContainer>
            </div>
        )
    }
}

export default HomePage;
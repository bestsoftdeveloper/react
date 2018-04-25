import React from 'react';

import CounterContainer from './counterContainer';

class HomePage extends React.Component {
    constructor(props) {
        debugger;
        super(props);

    }

    increment = () => {
        this.props.inc();
    }

    decrement = () => {
        this.props.dec();
    }

    render() {
        return (
            <div>
                <CounterContainer></CounterContainer>
                <CounterContainer></CounterContainer>
            </div>
        )
    }
}

export default HomePage;
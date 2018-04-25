import React from 'react';

class Counter extends React.Component {
    constructor(props) {
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
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter;
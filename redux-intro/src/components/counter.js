import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        }
        this.increase = this.increase.bind(this);
    }

    increment = () => {
        this.props.inc();
    }

    decrement = () => {
        this.props.dec();
        if(this.props.changeVolume) {
            this.props.changeVolume(this.props.count);
        }
    }

    increase(){
        const newState = { ...this.state };
        newState.count ++;

        this.setState(newState);
    }

    render() {
        return (
            <div>
                {this.props.count % 2 === 0 &&
                    <h2>Counter</h2>
                }
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>

                    <button onClick={this.increase}>increase</button>
                    <span>{this.state.count}</span>

                </div>
            </div>
        )
    }
}

export default Counter;
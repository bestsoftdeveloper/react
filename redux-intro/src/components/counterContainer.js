import { connect } from 'react-redux';

import Counter from './counter';

const mapStateToProps = state => ({
    count: state.count,
    a: function () {
        return 'xxx'
    }
});

const mapDispatchToProps = dispatch => ({
    inc: () => dispatch({type: 'INCREMENT'}),
    dec: () => dispatch({type: 'DECREMENT'})
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;

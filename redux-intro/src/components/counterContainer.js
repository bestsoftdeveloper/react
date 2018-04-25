import { connect } from 'react-redux';

import Counter from './counter';

const mapStateToProps = state => ({
    data: state.count
});

const mapDispatchToProps = dispatch => ({
    // resetIsButtonPressed: () => dispatch(AccessMethodsActions.physicalButtonPressed(false, false))
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;

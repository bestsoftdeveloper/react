import { connect } from 'react-redux';

import HomePage from './homepage';

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

const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export default HomePageContainer;

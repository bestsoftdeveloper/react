import React from 'react';
import PropTypes from 'prop-types';
import  UserActions   from './userActions';

class Users extends React.Component {

    constructor(props) {
        super(props);
        debugger;
        this.getUsers = this.getUsers.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    state = {count: 0}

    getUsers = () => {
        // this.userActions.getTestUsers();
        // UserActions.getTestUsers();
        this.props.getUsersFromContainer();
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div>
                    <button onClick={this.getUsers}>get Users</button>
                </div>
            </div>
        )
    }
}

// Users.propTypes = {
//     getUsersFromContainer: PropTypes.func.isRequired
// };

export default Users;
import React from 'react';
import PropTypes from 'prop-types';
import  UserActions   from './userActions';
import UserItem from './userItem';

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

    createItem = (item) => {
        return <li key={item.id}>{item.text}</li>;
    };

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div>
                    <button onClick={this.getUsers}>get Users</button>
                </div>

                {this.props.users &&
                    <ul>
                        {

                            this.props.users.map((item, index) => (
                                <UserItem
                                    key={index}
                                    user={item}
                                />
                            ))
                        }
                    </ul>
                }
            </div>


        )
    }
}

// Users.propTypes = {
//     getUsersFromContainer: PropTypes.func.isRequired
// };

export default Users;
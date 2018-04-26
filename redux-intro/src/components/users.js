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
        this.setState(
            {
                ...this.state,
                users: nextProps.users
            }
        );
    }

    state = {count: 0}

    getUsers = () => {
        // this.userActions.getTestUsers();
        // UserActions.getTestUsers();
        this.props.getUsersFromContainer();
    }

    getUsersPromise = () => {
        // this.userActions.getTestUsers();
        // UserActions.getTestUsers();
        UserActions.getUsersPromise()
            .then((response)=>{
                console.log(response);
                const data = response.data;
                data.push({id:1, text :'John'});
                this.setState({
                    ...this.state,
                    users: data
                });
            })
            .catch((err)=>{
                console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
            });
    }

    createItem = (item) => {
        return <li key={item.id}>{item.text}</li>;
    };

    render() {
        const list = this.state.users;
        return (
            <div>
                <h2>Users</h2>
                <div>
                    <button onClick={this.getUsers}>get Users</button>
                    <button onClick={this.getUsersPromise}>get Users getUsersPromise</button>
                </div>

                {list &&
                    <ul>
                        {

                            list.map((item, index) => (
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
const initialState = {
  users: [],
  loggedUser: null
};

function userReducer(state = initialState, action) {
  switch(action.type) {
      case 'USERS_RECEIVED':
      return {
        ...state,
        users: action.users
      };

    default:
        return state;
  }
}

export default userReducer;
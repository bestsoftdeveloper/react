import axios from "axios";
import thunk from "redux-thunk";

export  class UserActions {

  constructor () {

  }

  getTestUsers()
  {
    return [{a:1}];
  }
  getUsers = () => async (dispatch, getState) => {
    axios.get("http://rest.learncode.academy/api/wstern/users")
        .then((response)=>{
          console.log(response);
            const data = response.data;
            data.push({id:1, name :'John'});
          dispatch({type:"USERS_RECEIVED", data: response.data});
        })
        .catch((err)=>{
          console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
          dispatch({type:"GET_USERS_ERROR", action: err});
        });
  };
}

export default new UserActions();;
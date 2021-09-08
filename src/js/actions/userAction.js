import axios from "axios";

export function LoginUser(username, password) {
  return function(dispatch) {
    dispatch({type: "LOGIN_USER_START"});
    const config = {
      headers:{
        'Content-Type': "application/json"
      }
    };
    const data = {
      username: username,
      password: password
    };

    axios.post("https://nlab-image-dev.herokuapp.com/api/login/", data, config)
    .then((response) => {
        dispatch({type: "LOGIN_USER_FULFILLED", username: username, token: response.data})
        console.log(response)
      })
      .catch((err) => {
        dispatch({type: "LOGIN_USER_REJECTED", payload: err})
      	console.log("miss");
      });
  };
}

export function CreateUser(username, password){
  return function(dispatch) {
    dispatch({type: "CREATE_START"});
  
    const config = {
      headers:{
        'Content-Type': "application/json"
      }
    };
    const data = {
      username: username,
      password: password
    };
  
    axios.post("https://nlab-image-dev.herokuapp.com/api/signup/", data, config)
    .then((response) => {
      dispatch({type: "CREATE_USER_FULFILLED", username: username,})
    })
    .catch((err) => {
      dispatch({type: "LOGIN_USER_REJECTED", payload: err})
    });
  };
}

export function LogoutUser() {
  return function(dispatch) {
    dispatch({type: "LOGOUT"});
  };
}
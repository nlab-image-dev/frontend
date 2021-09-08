import axios from "axios";

export function LoginUser(username, password, history) {
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
        history.push('/');
      })
      .catch((err) => {
        dispatch({type: "LOGIN_USER_REJECTED", payload: err})
        history.push('login');
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
    }
    axios.post("https://nlab-image-dev.herokuapp.com/api/signup/", data, config)
    .then((response) => {
      dispatch({type: "CREATE_USER_FULFILLED", username: username,})
      dispatch(LoginUser(username, password));
    })
    .catch((err) => {
      dispatch({type: "CREATE_USER_REJECTED", payload: err})
    });
  };
}

export function LogoutUser() {
  return function(dispatch) {
    dispatch({type: "LOGOUT"});
  };
}
export default function reducer(state={
    user: {
      username: 'test_user',
      token: 'test_token'
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "LOGIN_USER_START": {
        return {...state, fetching: true};
      }
      case "LOGIN_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "LOGIN_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: {
            username: action.username,
            token: action.token
          }
        };
      }
      case "CREATE_USER_START": {
        return {...state, fetching: true};
      }
      case "CREATE_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "CREATE_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: false,
          user: {
            username: action.username,
          }
        };
      }
      case "LOGOUT": {
        return {
          ...state,
          fetching: false,
          fetched: false,
          user: {
            username: "",
            token: ""
          }
        };
      }
    }

    return state;
}
import {
    SIGNUP_NEW_USER,
    FETCH_TOKEN,
    FETCH_TOKEN_FAILED,
    TOKEN_REMOVE,
    GET_USERINFO,
    UPDATE_PROFILE,
    UPDATE_PASSWORD,
    UPDATE_USERNAME,
    UPDATE_EMAIL,
    UPDATE_PROFILEPIC,
    UPDATE_BGPIC,
    DELETE_USER
  } from "../constants";
  
  let initialState = {
    success: false,
    data: {
      user: window.localStorage.getItem("user") || null,
      token: window.localStorage.getItem("token") || null 
    },
    isAuthenticated: false,
  };
  
  const usersReducer = (state = initialState, action) => {
    const { success, messages, data } = action?.payload || {};
    switch (action.type) {
      case FETCH_TOKEN:
        window.localStorage.setItem("token", data?.token);
        window.localStorage.setItem("user", JSON.stringify(data?.user));
        return {
          success,
          messages,
          data,
          isAuthenticated: true,
        };
      case SIGNUP_NEW_USER:
        return {
          ...state,
          signupSuccess: true,
        };
      case FETCH_TOKEN_FAILED:
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false,
        };
      case GET_USERINFO:
        return {
          ...state,
          isAuthenticated: true,
          userInfo: action?.payload
        };
      case UPDATE_PROFILEPIC:
        return {
          ...state,
          userInfo: [ ...state.userInfo]
        };
      case TOKEN_REMOVE:
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  
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
    data: {},
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
          success,
          data,
          messages, 
        };
      case FETCH_TOKEN_FAILED:
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        return {
          data,
          success: false,
          isAuthenticated: false,
        };
      case GET_USERINFO:
        return {
          ...state,
          success: true,
          isAuthenticated: true,
          data : {
            ...data,
            user:JSON.stringify(action?.payload)
          }
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
  
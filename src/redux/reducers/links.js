import {
    GET_USERLINKS
  } from "../constants";
  
  let initialState = {
    links: []
  };
  
  const linksReducer = (state = initialState, action) => {
    let newState= {};
    switch (action.type) {
      case GET_USERLINKS:
        return {
            ...state,
            links: action.payload.data
        };
      
      default:
        return state;
    }
  };
  
  export default linksReducer;
  
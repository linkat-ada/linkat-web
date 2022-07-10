import {
  GET_USERLINKS,
  REORDER_LINKS,
  EDIT_LINK,
  DELETE_LINK,
} from "../constants";

let initialState = {
  links: [],
};

const linksReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_USERLINKS:
      return {
        ...state,
        links: action.payload.data,
      };
    case REORDER_LINKS:
      return {
        ...state,
        links: action?.payload?.data,
      };

    case EDIT_LINK:
      return {
        ...state,
        links: action?.payload?.data,
      };
    case DELETE_LINK:
      return {
        ...state,
        links: action?.payload?.data,
      };
    default:
      return state;
  }
};

export default linksReducer;

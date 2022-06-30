import {
    GET_USERLINKS
} from "../constants"
import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const getUserLinksAction = () => async (dispatch) => {
    let data = {
      url: API_URLS().LINKS.GET_USERLINKS,
    };
    await requestApi(data)
      .then((res) => {
        dispatch({ type: GET_USERLINKS, payload: res?.data });
      })
  };
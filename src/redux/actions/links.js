import {
  GET_USERLINKS,
  REORDER_LINKS,
  EDIT_LINK,
  DELETE_LINK,
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const getUserLinksAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.GET_USERLINKS,
  };
  await requestApi(data).then((res) => {
    dispatch({ type: GET_USERLINKS, payload: res?.data });
  });
};

export const reoderLinksAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.REORDER_LINKS,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data).then((res) => {
    dispatch({ type: REORDER_LINKS, payload: res?.data });
  });
};

export const editLinkAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.EDIT_LINK + userData?.id,
    method: "PUT",
    body: {
      ...userData,
    },
  };
  await requestApi(data).then((res) => {
    dispatch({ type: EDIT_LINK, payload: res?.data });
  });
};

export const deleteLinkAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.DELETE_LINK + userData?.id,
    method: "DELETE",
    body: {

    },
  };
  await requestApi(data).then((res) => {
    dispatch({ type: DELETE_LINK, payload: res?.data });
  });
};

import { CREATE_QR_CODE, CREATE_QR_FOR_LINKS } from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const createQRAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().QRCODE.CREATE_QR_CODE,
    method: "POST",
    body: {
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: CREATE_QR_CODE, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
    });
};


export const createQRForLinksAction = (userData) => async (dispatch ) => {
  let data = {
    url: API_URLS().QRCODE.CREATE_QR_FOR_LINKS,
    method: "POST",
    body:{
      ...userData
    }
  }
  await requestApi(data)
    .then((res) => {
      dispatch({ type: CREATE_QR_FOR_LINKS, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
    });
} 

import { CREATE_QR_CODE, CREATE_QR_FOR_LINKS } from "../constants";

const initialState = {
    QR: {},
    QRLinks: {}
}

const qrcodesReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_QR_CODE:
            return {
                ...state,
                QR:  action?.payload?.data?.QR
            }
        case CREATE_QR_FOR_LINKS:
            return {
                ...state,
                QRLinks: action?.payload?.data?.QR
            }     
        default:
            return state;
    }
}

export default qrcodesReducer;
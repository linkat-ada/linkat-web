import { combineReducers } from "redux";
import usersReducer from "./users";
import subscribersReducer from "./subscribers";
import notificationsReducer from "./notifications";
import linksReducer from "./links";

const allReducers = combineReducers({
    auth: usersReducer,
    links: linksReducer,
    //qrcodes: qrcodesReducer,
    subscribers: subscribersReducer,
    notifications: notificationsReducer
})

export default allReducers
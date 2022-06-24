import { combineReducers } from "redux";
import usersReducer from "./users";
import subscribersReducer from "./subscribers";
import notificationsReducer from "./notifications"

const allReducers = combineReducers({
    auth: usersReducer,
    //links: linksReducer,
    //qrcodes: qrcodesReducer,
    //superadmins: superadminsReducer,
    //admins: adminsReducer,
    subscribers: subscribersReducer,
    notifications: notificationsReducer
})

export default allReducers
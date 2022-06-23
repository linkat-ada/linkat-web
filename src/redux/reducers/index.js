import { combineReducers } from "redux";

const allReducers = combineReducers({
    auth: usersReducer,
    links: linksReducer,
    qrcodes: qrcodesReducer,
    superadmins: superadminsReducer,
    admins: adminsReducer,
    subscribers: subscribersReducer,
    notifications: notificationsReducer
})

export default allReducers
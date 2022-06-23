const API_ROOT = process.env.PUBLIC_URL;

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    SIGNIN: API_ROOT + "/users/signin/",
    SIGNUP: API_ROOT + "/users/signup/",
    LOGOUT: API_ROOT + "/users/logout/",
    UPDATE_PASSWORD: API_ROOT + "/users/updatepassword/",
    UPDATE_USERNAME: API_ROOT + "/users/updateusername/",
    UPDATE_EMAIL: API_ROOT + "/users/updatemail/",
    UPDATE_PROFILE: API_ROOT + "/users/updateprofile/",
    GET_USERINFO: API_ROOT + "/users/",
    UPDATE_BGPIC: API_ROOT + "/users/updatebgpic/",
    UPDATE_PROFILEPIC: API_ROOT + "/users/updateprofilepic/",
    DELETE_USER: API_ROOT + "/users/",
  },
  SUPER_ADMIN: {},
  TODO: {
    ROOT: API_ROOT + "/todos/", // can make GET & POST  todo with this endpoint, difference being the http verb
    BY_ID: API_ROOT + "/todos/" + extraData, // can make GET, POST, PATCH, PUT, and DELETE with this endpoint, difference being the http verb
  },
});

export default API_URLS;

const API_ROOT = process.env.REACT_APP_API_URL;
console.log("TEST API", API_ROOT)

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
  SUBSCRIBERS : {
    GET_NEW_SUBSCRIBERS : API_ROOT + "/subscribers"
  }
});

export default API_URLS;

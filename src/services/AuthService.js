import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class AuthService {

    saveUser(user) {
        // register user
        return axios.post(AUTH_API_BASE_URL + "/signup", user);
    }

    loginUser(user) {
        return axios.post(AUTH_API_BASE_URL + "/signin", user);
    }

    logOutUser(user) {
        return axios.post(AUTH_API_BASE_URL + "/signout" + user);
    }
}

export default new AuthService();

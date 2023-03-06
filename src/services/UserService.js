import axios from "axios";
import {useNavigate} from "react-router-dom";
const API_URL = "http://localhost:3013/api/auth/";


const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username: username,
            password: password,
        })
        .then((response) => {
            if (response.data.username) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};
const logout = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "logout").then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    login,
    logout,
    getCurrentUser,
}

export default AuthService;
import axios from "axios";
import {useNavigate} from "react-router-dom";

const API_URL = "http://localhost:3013/api/auth/";
const coeficiente = -9.60175056;
const intercepto = 0.18139954;
const login = (username, password, tiempo2) => {
    console.log("tiempo" + tiempo2);
    return axios
        .post(API_URL + "login", {
            username: username,
            password: password,
        })
        .then((response) => {
            let x = 1 / (1 + (Math.exp(-(coeficiente + (intercepto * tiempo2)))));
            if (!(x > 0.5)) {
                if (response.data.username) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            } else {
                alert("el usuario es impostor");
                useNavigate("/");
            }
        });
};

const register = (username, email, password, authority) => {
    return axios.post(API_URL + "signup", {
        username: username,
        email: email,
        password: password
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
    register,
}

export default AuthService;
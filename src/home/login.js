import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const API_URL = "http://localhost:8080/api/auth/";
    const handleInputUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    };
    const verify = () => {
        console.log(username);
        console.log(password);
        axios.post(API_URL + "login",
            {username: username, password: password})
            .then((response) => {
                    console.log(response.data)
                    alert("se ingreso correctamente")
                    navigate("/principal")
                    window.location.reload();
                }
            )
            .catch(error => console.log(error));
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-danger text-white">
                            <h3 className="text-center">Login</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="username">Usuario</label>
                                <br/>
                                <input type="text"
                                       className="form-control"
                                       id="username"
                                       placeholder="Ingrese aquí"
                                       value={username}
                                       onChange={handleInputUsername}/>
                            </div>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <br/>
                                <input type="password"
                                       className="form-control"
                                       id="password"
                                       maxLength={8}
                                       value={password}
                                       placeholder="Ingrese dni"
                                       onChange={handleInputPassword}/>
                            </div>
                            <br/>
                            <button onClick={verify}
                                    className="btn btn-outline-danger btn-block">Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Login;






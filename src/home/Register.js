import React, {useState} from "react";
import "styles/styles.css";
import AuthService from "../services/UserService";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleInputUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    }
    const handleInputEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleInputRol = (event) => {
        setRol(event.target.value);
    }
    const create = () => {
        AuthService.register(username, email, password)
            .then(() => {
                alert("se registro correctamente");
                navigate("/");
            }, (error) => {
                alert("error inesperado");
                console.log(error.message);
            })
    };

    return (
        <div className="container">
            <br/><br/>
            <div className="card boxSombra">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="h-100 d-flex justify-content-center align-items-center">
                            <div className="py-4 px-3">
                                <div className="row g-2 mt-1">
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <input className="form-control"
                                                   id="username"
                                                   required
                                                   value={username}
                                                   onChange={handleInputUsername}
                                            />
                                            <label htmlFor="username">Usuario</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <input className="form-control"
                                                   id="rol"
                                                   required
                                                   value={rol}
                                                   onChange={handleInputRol}
                                            />
                                            <label htmlFor="rol">Rol</label></div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <div className="input-field">
                                            <input className="form-control"
                                                   id="email"
                                                   required
                                                   value={email}
                                                   onChange={handleInputEmail}
                                                   type={"email"}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row mt-2 mb-2">
                                    <div className="col-md-12">
                                        <div className="input-field">
                                            <input className="form-control"
                                                   id="password"
                                                   required
                                                   value={password}
                                                   onChange={handleInputPassword}
                                                   maxLength={8}
                                                   minLength={8}
                                                   type={"password"}
                                            />
                                            <label htmlFor={"input4"}>Contraseña</label>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <button
                                            className="btn text-white gradient-custom-2 w-100 signup-button"
                                            onClick={create}
                                            type={"button"}>Registrar
                                        </button>
                                    </div>
                                </div>
                                <div className="member mt-1"><span>ya tienes una cuenta?</span> <a
                                    className="text-decoration-none text-muted" href="/">Iniciar Sesión</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right-side-content gradient-custom-2">
                            <div className="content d-flex flex-column"><h2>Registre nuevo Usuario</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parallelogram"><span></span> <span></span> <span></span></div>
        </div>
    )
}
export default Register;
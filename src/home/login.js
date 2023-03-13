import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../services/UserService";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [pulsaciones, setpulsaciones] = useState([]);
    const [timeBeats, setTimeBeats] = useState([]);

    const process = () => {
        const tiempoActual = Date.now() / 10; // convertir a milisegundos
        const tiempoUltimaPulsacion = pulsaciones.length > 0 ? pulsaciones[pulsaciones.length - 1] : tiempoActual;
        const tiempoEntrePulsacion = tiempoActual - tiempoUltimaPulsacion;
        console.log(tiempoEntrePulsacion);
        setpulsaciones([...pulsaciones, tiempoActual]);
        setTimeBeats([...timeBeats, tiempoEntrePulsacion]);
    };
    const handleInputUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    };
    const verify = () => {
        console.log(username);
        console.log(password);
        console.log(timeBeats[1]);
        AuthService.login(username, password, timeBeats[2])
            .then(() => {
                console.log(AuthService.getCurrentUser())
                navigate("/principal");
                window.location.reload();
            }, (error) => {
                console.log(error.message);
                window.location.reload();
            })
    };
    return (
        <section className="h-100 bg-gradient">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black  boxSombra">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <h2 className="fw-bold text-uppercase text-danger txtSombra">Patrones de
                                                Tipeo</h2>
                                            <br/>
                                        </div>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label text-muted"
                                                       htmlFor="username">Username</label>
                                                <input type="text"
                                                       id="username"
                                                       className="form-control"
                                                       placeholder="ingrese nombre de usuario"
                                                       value={username}
                                                       onChange={handleInputUsername}/>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label text-muted"
                                                       htmlFor="password">Password</label>
                                                <input type="password"
                                                       id="password"
                                                       className="form-control"
                                                       onKeyDown={process}
                                                       value={password}
                                                       onChange={handleInputPassword}
                                                       maxLength={8}
                                                       minLength={8}
                                                       placeholder={"ingrese dni"}/>
                                            </div>
                                            <div class="text-center pt-1 mb-5 pb-1">
                                                <button class="btn text-white gradient-custom-2 w-100"
                                                        type="button"
                                                        onClick={verify}
                                                >Login
                                                </button>
                                            </div>
                                        </form>
                                        <a className={"d-flex text-muted a"} href="/Register"><h6>Crear Cuenta Usuario</h6></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">Login form Spring boot 3.0,Spring Security,
                                            PostgreSQL,JwToken adn React JS</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;






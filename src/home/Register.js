import React from "react";
import "styles/styles.css";

const Register = () => {
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
                                                   required/>
                                            <label htmlFor="username">Usuario</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-field">
                                            <input className="form-control"
                                                   id="rol"
                                                   required/>
                                            <label htmlFor="rol">Rol</label></div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <div className="input-field">
                                            <input className="form-control"
                                                   id="email"
                                                   required/>
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
                                                   required/>
                                            <label htmlFor={"input4"}>Contraseña</label>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <button
                                            className="btn text-white gradient-custom-2 w-100 signup-button">Registrar
                                        </button>
                                    </div>
                                </div>
                                <div className="member mt-1"><span>ya tienes una cuenta?</span> <a
                                    className="text-decoration-none" href="/">Iniciar Sesión</a></div>
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
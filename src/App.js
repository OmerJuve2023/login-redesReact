import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./home/login";
import Home from "./home/Home";
import React from "react";
import Register from "./home/Register";

function App() {
    return (
        <div className="App">
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Login/>} />
                        <Route path={"/home"} element={<Home/>}/>
                        <Route path={"/register"} element={<Register/>}/>
                    </Routes>
                </BrowserRouter>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;

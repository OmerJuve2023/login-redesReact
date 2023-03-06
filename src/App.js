import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./home/login";
import Inicio from "./home/Inicio";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={"/principal"} element={<Inicio/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

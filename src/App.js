import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./cativate/login/index"
import Home from "./cativate/home";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login/>}/>
                    <Route path="home" exact={true} element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

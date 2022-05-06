import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./Cativate/Log-in/index"

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Login/>}/>
                        <Route path="login" exact={true} element={<Login/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
);
}

export default App;

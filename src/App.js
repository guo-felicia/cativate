import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./Cativate/Log-in/index"

function App() {
    return (
        <Login/>
        // <BrowserRouter>
        //   <div className="container">
        //     <Routes>
        //       <Route path="/">
        //         <Route index element={<Login/>}/>
        //         <Route path="login" exact={true} element={<Login/>}/>
        //     </Routes>
        //   </div>
        // </BrowserRouter>
    );
}

export default App;

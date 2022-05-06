import React from "react";
import '../style/login.css';

import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login-block">
            {/* <!--Left part: Introduction--> */}
            <div className="intro">
                <h1 className="ft-48px">Hi, I am "CAT"</h1>
                <h2 className="ft-28px">I will be your Facebook ADs Manager!</h2>
            </div>
            
            {/* <!--Right part: Sign-up Panel--> */}
            <div className="container">
                <div className="card_bg rounded-50px border-thin border-green border-solid pd-50px">
                    <p className="header1"> Sign in to Cactivate</p>
                    {/* <!--Username--> */}
                    <div>
                        <p className="header2">Username or Email Address</p>
                        <p className="rounded-10px border-thin border-green border-solid pd-30px opacity"></p>
                    </div>
                    {/* <!--Password--> */}
                    <div>
                        <p className="header2">Password</p>
                        <p className="rounded-10px border-thin border-green border-solid pd-30px opacity">
                            8+ Characters
                        </p>
                    </div>
                    {/* <!--Button--> */}
                    <Link to="/home">
                        <button
                            className="button rounded-10px border-thin border-green border-solid pd-10px bg-green mg-20px button_text">
                            Sign in
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default Login;
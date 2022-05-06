import React from "react";
import '../Style/login.css';

import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            {/* <!--Left part: Introduction--> */}
            <div class="intro">
                <h1 class="ft-48px">Hi, I am "CAT"</h1>
                <h2 class="ft-28px">I will be your Facebook ADs Manager!</h2>
            </div>
            
            {/* <!--Right part: Sign-up Panel--> */}
            <div class="container">
                <div class="card_bg rounded-50px border-thin border-green border-solid pd-50px">
                    <p class="Header1"> Sign in to Cactivate</p>
                    {/* <!--Username--> */}
                    <div>
                        <p class="Header2">Username or Email Address</p>
                        <p class="rounded-10px border-thin border-green border-solid pd-30px opacity"></p>
                    </div>
                    {/* <!--Password--> */}
                    <div>
                        <p class="Header2">Password</p>
                        <p class="rounded-10px border-thin border-green border-solid pd-30px opacity">
                            8+ Characters
                        </p>
                    </div>
                    {/* <!--Button--> */}
                    <button
                        class="button rounded-10px border-thin border-green border-solid pd-10px bg-green mg-20px button_text">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
        // <div>
        //     <h1>Tuiter</h1>
        //     <h2>Home Screen</h2>
        //     <Link to="/tuiter">
        //         Tuiter Home
        //     </Link>
        //     <h2>Explore Screen</h2>
        //     <Link to="/tuiter/explore">
        //         Tuiter Explore Screen
        //     </Link>
        // </div>
    )
};
export default Login;
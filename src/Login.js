/* eslint-disable jsx-a11y/anchor-is-valid */
import './Login.css';
import { useState } from "react";
import React from 'react'


function Login() {

    const [username, setUsername] = useState('');
    const [UsernameErr, setUsernameErr] = useState(false);

    const [password, setPassword] = useState('');
    const [PasswordErr, setPasswordErr] = useState(false);

    // Username validation start

    const UsernameHandle = (e) => {
        let item = e.target.value;
        if (item.length >= 3 && item.length <= 7 || item.length == 0) {
            setUsernameErr(false)
        }
        else {
            setUsernameErr(true)
        }
        setUsername(item)
    }

    // Username validation End

    // Password validation start

    const PasswordHandle = (e) => {
        let item = e.target.value;
        if (item.length >= 5 && item.length <= 100 || item.length == 0) {
            setPasswordErr(false)
        }
        else {
            setPasswordErr(true)
        }
        setPassword(item)
    }

    // password validation End

    // valuesHandle function start

    const valuesHandle = (e) => {
        e.preventDefault();
        if (UsernameErr == true || username.length == 0) {
            alert("Your FIRST NAME is invalid");
        }

        e.preventDefault();
        if (PasswordErr == true || password.length == 0) {
            alert("Your Password is invalid");
        }
    }
    // valuesHandle function end

    return (
        <div>
            <body>

                <div className="container">
                    <form class="sign-in-form" onSubmit={valuesHandle}>
                        <h2>Login</h2>
                        <div className='space'>
                            <div>
                                <label>Username</label>
                                <input type="text" name="username" placeholder='Enter your username' id="fname" onChange={UsernameHandle} /> {UsernameErr ? <span className='ErrMessage'>Username is invalid</span> : ""}
                            </div>

                            <div >
                                <label>password</label>
                                <input type="password" name="password"  placeholder="Enter your password" id="password" onChange={PasswordHandle} /> {PasswordErr ? <span className='ErrMessage'>Password is invalid</span> : ""}
                            </div>

                            Don't have an account?<a href=""> Signup</a>
                            <button className="login-button" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </body>

        </div>
    );
}

export default Login;
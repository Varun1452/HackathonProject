/* eslint-disable jsx-a11y/anchor-is-valid */
import './Login.css';

function Login() {
    return (
        <div>
            <body>

                <div className="container">
                    <form class="sign-in-form">
                        <h2>Login</h2>
                        <div className="input-container">
                            <label>Username or Email id</label>
                            <input type="text" id="usernameoremail" placeholder="Enter a valid E-Mail address"></input>
                        </div>

                        <div className="input-container">
                            <label>password</label>
                            <input type="password" id="password" placeholder="Enter your password" ></input>
                        </div>

                        Don't have an account?<a href=""> Signup</a>
                        <button className="login-button" type="submit">Login</button>
                    </form>
                </div>
            </body>

        </div>
    );
}

export default Login;
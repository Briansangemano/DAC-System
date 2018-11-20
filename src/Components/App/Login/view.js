import React, {Component} from 'react';

import './style.css';

class Login extends Component {
    render() {
        return (
                <div className="login">
                    <div className="login-box">
                        <h1 className="tittle-login">Login</h1>
                        <form>
                            <div className="username">
                                <label>Username</label>
                                <input type="text" id="username" name="username" placeholder="Username"/>
                            </div>
                            <div className="password">
                                <label>Password</label>
                                <input type="password" id="password" name="password" placeholder="Password"/>
                            </div>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Login;

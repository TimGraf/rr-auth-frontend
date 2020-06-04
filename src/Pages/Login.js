import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

export const Login = props => {
    // Initializing dispatch
    const dispatch = useDispatch();
    // Setting up local state using the useState hook
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });

    // Controled form functions
    const handleSubmit = e => {
        e.preventDefault();
        const { history } = props;
        dispatch(userActions.loginUser(loginForm));
        history.push('/');
    };

    const handleChange = e => setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

    // Destructuring keys from our local state to use in the form
    const { username, password } = loginForm;

    // Component code
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <input 
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input 
                type="password"
                name="passwrod"
                value={password}
                placeholder="Password"
            />
            <input type="submit" />
        </form>
    );
};

export default Login;

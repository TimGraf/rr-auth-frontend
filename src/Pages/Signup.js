import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

export const Signup = props => {
    // Initializing dispatch
    const dispatch = useDispatch();

    // Setting up local state using the useState hook
    const [signupForm, setSignupForm] = useState({
        username: '',
        password: ''
    });

    // Controled form functions
    const handleChange = e => setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        const { history } = props;
        dispatch(userActions.newUser(signupForm));
        history.push('/');
    };

    // Destruturing kets from our local state to use in the form
    const { username, password } = signupForm;

    return (
        <form onSubmit={handleSubmit}>
            <h1>Signup Page</h1>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input 
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input type="submit" />
        </form>
    );
};

export default Signup;

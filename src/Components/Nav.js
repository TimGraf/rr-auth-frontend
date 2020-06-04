import React from 'react';
import { Link } from 'react-router-dom';
import useDispatch from 'react-redux';
import userActions from '../redux/actions';

export const Nav = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(userActions.logoutUser());
    };
    return (
        <nav style={{ displat: 'flex', justifyContent: 'spaceevenly' }}>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/" onClick={handleLogout}>Logout</Link>
        </nav>
    );
};

import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
    const username = useSelector(state => state.username);
    const text = username ? (
        <h1>{username} is currently logged in.</h1>
    ) : (
        <h1>No one is logged in.</h1>
    );

    return <div>{text}</div>;
};

export default Home;

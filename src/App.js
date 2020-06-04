import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Nav from './Components/Nav';
import { Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;

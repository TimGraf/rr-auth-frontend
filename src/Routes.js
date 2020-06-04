import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/signup" component={Pages.Signup}/>
            <Route path="login" component={Pages.Login}/>
            <Route path="home" component={Pages.Home} />
        </Switch>
    );
};

export default Routes;